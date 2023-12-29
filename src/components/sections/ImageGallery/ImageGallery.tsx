import classNames from 'classnames/bind';
import { useState } from 'react';

import Section from '../../common/Section';
import ImageViewer from '../ImageViewer';
import styles from './ImageGallery.module.scss';
import { generateAssetURL } from '../../../utils';

const cx = classNames.bind(styles);

type ImageGalleryProps = {
	images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
	const [selectedIdx, setSelectedIdx] = useState(-1);

	const open = selectedIdx > -1;

	const handleSelectedImage = (id: number) => () => {
		setSelectedIdx(id);
	};

	const handleClose = () => {
		setSelectedIdx(-1);
	};

	return (
		<>
			<Section title="사진첩">
				<ul className={cx('image__group')}>
					{images.map((image, idx) => (
						<li key={idx} className={cx('image__item')} onClick={handleSelectedImage(idx)}>
							<picture>
								<source srcSet={generateAssetURL('images', image, '.webp')} type="image/webp" />
								<img src={generateAssetURL('images', image, '.png')} alt="사진첩 이미지" />
							</picture>
						</li>
					))}
				</ul>
			</Section>
			<ImageViewer images={images} onClose={handleClose} open={open} selectedIdx={selectedIdx} />
		</>
	);
}
