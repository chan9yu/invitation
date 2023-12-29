import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';

import type { Location } from '../../../models/wedding';
import Section from '../../common/Section';
import WayToCome from '../WayToCome';
import styles from './Map.module.scss';

const cx = classNames.bind(styles);

type MapProps = {
	location: Location;
};

export default function Map({ location }: MapProps) {
	const mapContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`;
		script.async = true;

		document.head.appendChild(script);

		script.onload = () => {
			window.kakao.maps.load(() => {
				const position = new window.kakao.maps.LatLng(location.lat, location.lng);
				const options = { center: position, level: 3 };
				const map = new window.kakao.maps.Map(mapContainer.current as HTMLDivElement, options);
				const marker = new window.kakao.maps.Marker({ position });
				marker.setMap(map);
			});
		};
	}, [location.lat, location.lng]);

	return (
		<Section
			title={
				<div className={cx('wrapper__header')}>
					<span className={cx('text__title')}>오시는길</span>
					<span className={cx('text__subtitle')}>{location.name}</span>
					<span className={cx('text__subtitle')}>{location.address}</span>
				</div>
			}
		>
			<div className={cx('wrapper__map')}>
				<div ref={mapContainer} className={cx('map')} />
				<a className={cx('button')} href={location.link} target="_blank" rel="noreferrer">
					길찾기
				</a>
			</div>
			<div>
				<WayToCome label="버스" list={location.waytocome.bus} />
				<WayToCome label="지하철" list={location.waytocome.metro} />
			</div>
		</Section>
	);
}
