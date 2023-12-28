import classNames from 'classnames/bind';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

import CustomDayPicker from '../../common/CustomDayPicker';
import Section from '../../common/Section';
import styles from './Calender.module.scss';

const cx = classNames.bind(styles);

type CalenderProps = {
	date: string;
};

export default function Calender({ date }: CalenderProps) {
	const parsedDate = parseISO(date);

	const weddingDate = format(parsedDate, 'yyyy.MM.dd');
	const weddingDate2 = format(parsedDate, 'aaa h시 eeee', { locale: ko });

	return (
		<Section
			title={
				<div className={cx('wrapper--header')}>
					<span className={cx('text--date')}>{weddingDate}</span>
					<span className={cx('text--time')}>{weddingDate2}</span>
				</div>
			}
		>
			<div className={cx('wrapper--day-picker')}>
				<CustomDayPicker
					locale={ko}
					month={parsedDate}
					selected={parsedDate}
					formatters={{ formatCaption: () => '' }}
				/>
			</div>
		</Section>
	);
}
