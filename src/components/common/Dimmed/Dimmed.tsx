import classNames from 'classnames/bind';
import { PropsWithChildren } from 'react';

import styles from './Dimmed.module.scss';

const cx = classNames.bind(styles);

type DimmedProps = PropsWithChildren<{}>;

export default function Dimmed({ children }: DimmedProps) {
	return <div className={cx('container')}>{children}</div>;
}
