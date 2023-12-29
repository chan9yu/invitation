import classNames from 'classnames/bind';
import { PropsWithChildren } from 'react';

import styles from './AppLayout.module.scss';

const cx = classNames.bind(styles);

type AppLayoutProps = PropsWithChildren<{}>;

export default function AppLayout({ children }: AppLayoutProps) {
	return <div className={cx('container')}>{children}</div>;
}
