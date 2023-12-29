import { ComponentProps, PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import Modal from '../components/common/Modal';

type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;

type ModalContextValue = {
	onOpen: (options: ModalOptions) => void;
	onClose: () => void;
};

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

const initialModalState: ModalProps = {
	body: '',
	isOpen: false,
	leftButton: {},
	rightButton: {},
	title: ''
};

export default function ModalProvider({ children }: PropsWithChildren) {
	const [modalState, setModalState] = useState<ModalProps>(initialModalState);

	const onOpen = useCallback((options: ModalOptions) => {
		setModalState({ ...options, isOpen: true });
	}, []);

	const onClose = useCallback(() => {
		setModalState(initialModalState);
	}, []);

	const value = useMemo(() => ({ onClose, onOpen }), [onClose, onOpen]);

	return (
		<ModalContext.Provider value={value}>
			{children}
			{createPortal(<Modal {...modalState} />, document.body)}
		</ModalContext.Provider>
	);
}

export const useModalContext = () => {
	const context = useContext(ModalContext);

	if (context === undefined) {
		throw new Error('useModalContext must be used within a <ModalProvider />');
	}

	return context;
};
