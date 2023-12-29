import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';

import { useModalContext } from '../../../contexts/ModalContext';
import { Wedding } from '../../../models/wedding';
import styles from './AttendCountModal.module.scss';

const cx = classNames.bind(styles);

const haveSeenModal = localStorage.getItem('@have-seen-modal');

type AttendCountModalProps = {
	wedding: Wedding;
};

export default function AttendCountModal({ wedding }: AttendCountModalProps) {
	const { onOpen, onClose } = useModalContext();

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (haveSeenModal === 'true') {
			return;
		}

		onOpen({
			body: (
				<div>
					<input ref={inputRef} className={cx('input')} type="number" placeholder="참석 가능 인원을 추가해주세요." />
				</div>
			),
			title: `현재 참석자 ${wedding.attendCount} 명`,
			leftButton: {
				onClick: () => {
					localStorage.setItem('@have-seen-modal', 'true');
					onClose();
				}
			},
			rightButton: {
				onClick: () => {
					console.log(inputRef.current);
					onClose();
				}
			}
		});
	}, []);

	return null;
}
