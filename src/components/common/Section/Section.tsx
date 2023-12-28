import classNames from 'classnames/bind';
import { PropsWithChildren, ReactNode } from 'react';

import styles from './Section.module.scss';

const cx = classNames.bind(styles);

type SectionProps = PropsWithChildren & {
	className?: string;
	title?: ReactNode;
};

export default function Section({ children, className, title }: SectionProps) {
	return (
		<div className={cx(['container', className])}>
			{title && <div className={cx('title')}>{title}</div>}
			{children}
		</div>
	);
}
