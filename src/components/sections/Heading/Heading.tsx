import classNames from 'classnames/bind';
import { format, getDay, parseISO } from 'date-fns';

import Section from '../../common/Section';
import styles from './Heading.module.scss';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;
const cx = classNames.bind(styles);

type HeadingProps = {
	date: string;
};

export default function Heading({ date }: HeadingProps) {
	const parsedDate = parseISO(date);

	const weddingDate = format(parsedDate, 'yy.MM.dd');
	const weddingDays = DAYS[getDay(parsedDate)];

	return (
		<Section className={cx('container')}>
			<div className={cx('text__date')}>{weddingDate}</div>
			<div className={cx('text__day')}>{weddingDays}</div>
		</Section>
	);
}
