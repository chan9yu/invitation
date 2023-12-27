import classNames from 'classnames/bind';
import { PropsWithChildren } from 'react';

import styles from './Section.module.scss';

const cx = classNames.bind(styles);

type SectionProps = PropsWithChildren & {
	className?: string;
	title?: string;
};

export default function Section({ children, className, title }: SectionProps) {
	return (
		<div className={cx(['container', className])}>
			{title && <div className={cx('title')}>{title}</div>}
			{children}
		</div>
	);
}
