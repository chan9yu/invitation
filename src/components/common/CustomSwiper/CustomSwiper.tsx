import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';

import { generateAssetURL } from '../../../utils';
import './CustomSwiper.css';

type CustomSwiperProps = SwiperOptions & {
	images: string[];
};

export default function CustomSwiper({ images, ...rest }: CustomSwiperProps) {
	return (
		<Swiper {...rest}>
			{images.map((image, idx) => (
				<SwiperSlide key={idx}>
					<picture>
						<source srcSet={generateAssetURL('images', image, '.webp')} type="image/webp" />
						<img src={generateAssetURL('images', image, '.png')} alt="이미지 뷰어" />
					</picture>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
