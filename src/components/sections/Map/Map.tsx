import classNames from 'classnames/bind';
import { Map as KaKaoMap, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

import type { Location } from '../../../models/wedding';
import FullScreenMessage from '../../common/FullScreenMessage';
import Section from '../../common/Section';
import WayToCome from '../WayToCome';
import styles from './Map.module.scss';

const cx = classNames.bind(styles);

type MapProps = {
	location: Location;
};

export default function Map({ location }: MapProps) {
	const [loading, error] = useKakaoLoader({
		appkey: process.env.REACT_APP_KAKAO_APP_KEY
	});

	if (loading) {
		return <FullScreenMessage type="loading" />;
	}

	if (error) {
		return <FullScreenMessage type="error" />;
	}

	const position = {
		lat: location.lat,
		lng: location.lng
	};

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
				<KaKaoMap className={cx('map')} center={position} level={3}>
					<MapMarker position={position} />
				</KaKaoMap>
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
