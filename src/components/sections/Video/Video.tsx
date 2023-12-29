import classNames from 'classnames/bind';

import { generateAssetURL } from '../../../utils';
import Section from '../../common/Section';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

export default function Video() {
	return (
		<Section className={cx('container')}>
			<video autoPlay muted loop playsInline poster={generateAssetURL('video', 'poster', '.jpg')}>
				<source src={generateAssetURL('video', 'main', '.webm')} type="video/webm" />
				<source src={generateAssetURL('video', 'main', '.mp4')} type="video/mp4" />
			</video>
		</Section>
	);
}
