import classNames from 'classnames/bind';

import { generateAssetURL } from '../../../utils';
import Section from '../../common/Section';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

export default function Video() {
	const poster = generateAssetURL('video', 'poster', '.jpg');
	const webmSrc = generateAssetURL('video', 'main', '.webm');
	const mp4Src = generateAssetURL('video', 'main', '.mp4');

	return (
		<Section>
			<video className={cx('video')} autoPlay muted loop playsInline poster={poster}>
				<source src={webmSrc} type="video/webm" />
				<source src={mp4Src} type="video/mp4" />
			</video>
		</Section>
	);
}
