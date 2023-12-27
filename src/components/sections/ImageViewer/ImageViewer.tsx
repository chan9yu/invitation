import classNames from 'classnames/bind';

import CustomSwiper from '../../CustomSwiper';
import styles from './ImageViewer.module.scss';
import CloseIcon from '../../icons/CloseIcon';

const cx = classNames.bind(styles);

type ImageViewerProps = {
	images: string[];
	onClose: () => void;
	open: boolean;
	selectedIdx: number;
};

export default function ImageViewer({ images, onClose, open, selectedIdx }: ImageViewerProps) {
	if (!open) {
		return null;
	}

	return (
		<div className={cx('dimmed')}>
			<CloseIcon className={cx('icon--close')} color="#fff" onClick={onClose} />
			<CustomSwiper images={images} spaceBetween={20} slidesPerView={1} loop initialSlide={selectedIdx} />
		</div>
	);
}
