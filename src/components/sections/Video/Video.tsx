import classNames from 'classnames/bind';

import Section from '../../common/Section';
import styles from './Video.module.scss';

const BASE_URL = 'https://chan9yu.github.io/wedding-invitation_app/assets/';
const cx = classNames.bind(styles);

export default function Video() {
	return (
		<Section className={cx('container')}>
			<video autoPlay muted loop playsInline poster={`${BASE_URL}/poster.jpg`}>
				<source src={`${BASE_URL}/main.mp4`} type="video/mp4" />
			</video>
		</Section>
	);
}
