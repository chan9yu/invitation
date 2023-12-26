import classNames from 'classnames/bind';
import styles from './Test.module.scss';

const cx = classNames.bind(styles);

export default function Test() {
	return <div className={cx('test')}>Test</div>;
}
