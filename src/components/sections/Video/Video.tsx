import classNames from 'classnames/bind';

import Section from '../../common/Section';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

export default function Video() {
	return (
		<Section className={cx('container')}>
			<video autoPlay muted loop poster="/wedding-invitation_app/assets/poster.jpg">
				<source src="/wedding-invitation_app/assets/main.mp4" type="video/mp4" />
			</video>
		</Section>
	);
}
