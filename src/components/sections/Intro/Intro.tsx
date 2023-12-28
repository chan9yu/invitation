import classNames from 'classnames/bind';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

import Section from '../../common/Section';
import FlowerIcon from '../../icons/FlowerIcon';
import HeartIcon from '../../icons/HeartIcon';
import styles from './Intro.module.scss';

const cx = classNames.bind(styles);

type IntroProps = {
	brideName: string;
	groomName: string;
	introMessage: string;
	locationName: string;
	weddingDate: string;
};

export default function Intro({ brideName, groomName, introMessage, locationName, weddingDate }: IntroProps) {
	const formattedWeddingDate = format(parseISO(weddingDate), 'yyyy년 M월 d일 eeee', { locale: ko });

	return (
		<Section className={cx('container')}>
			<div className={cx('wrapper--persons')}>
				<span>{groomName}</span>
				<HeartIcon className={cx('icon--heart')} />
				<span>{brideName}</span>
			</div>
			<div className={cx('wrapper--location')}>
				<span>{formattedWeddingDate}</span>
				<span>{locationName}</span>
			</div>
			<FlowerIcon className={cx('icon--flower')} />
			<div className={cx('text')}>{introMessage}</div>
		</Section>
	);
}
