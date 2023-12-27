import classNames from 'classnames/bind';
import { PropsWithChildren } from 'react';

import styles from './Section.module.scss';

const cx = classNames.bind(styles);

type SectionProps = PropsWithChildren & {
	className?: string;
};

export default function Section({ children, className }: SectionProps) {
	return <div className={cx(['container', className])}>{children}</div>;
}
