import classNames from 'classnames/bind';
import { ReactNode } from 'react';

import styles from './WayToCome.module.scss';

const cx = classNames.bind(styles);

type WayToComeProps = {
	label: ReactNode;
	list: string[];
};

export default function WayToCome({ label, list }: WayToComeProps) {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('text')}>{label}</div>
			<ul>
				{list.map((item, idx) => (
					<li key={idx}>{item}</li>
				))}
			</ul>
		</div>
	);
}
