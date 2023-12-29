import classNames from 'classnames/bind';
import { useCallback, useEffect } from 'react';

import CustomSwiper from '../../common/CustomSwiper';
import Dimmed from '../../common/Dimmed';
import CloseIcon from '../../icons/CloseIcon';
import styles from './ImageViewer.module.scss';

const cx = classNames.bind(styles);

type ImageViewerProps = {
	images: string[];
	onClose: () => void;
	open: boolean;
	selectedIdx: number;
};

export default function ImageViewer({ images, onClose, open, selectedIdx }: ImageViewerProps) {
	const hadnleKeydown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key !== 'Escape') return;
			onClose();
		},
		[onClose]
	);

	useEffect(() => {
		window.addEventListener('keydown', hadnleKeydown);

		return () => window.removeEventListener('keydown', hadnleKeydown);
	}, [hadnleKeydown]);

	if (!open) {
		return null;
	}

	return (
		<Dimmed>
			<CloseIcon className={cx('icon__close')} color="#fff" onClick={onClose} />
			<CustomSwiper images={images} spaceBetween={20} slidesPerView={1} loop initialSlide={selectedIdx} />
		</Dimmed>
	);
}
