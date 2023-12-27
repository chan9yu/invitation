import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';

import './CustomSwiper.css';

type CustomSwiperProps = SwiperOptions & {
	images: string[];
};

export default function CustomSwiper({ images, ...rest }: CustomSwiperProps) {
	return (
		<Swiper {...rest}>
			{images.map((image, idx) => (
				<SwiperSlide key={idx}>
					<img src={image} alt="이미지 뷰어" />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
