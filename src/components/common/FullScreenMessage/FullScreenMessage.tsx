import classNames from 'classnames/bind';

import ErrorIcon from '../../icons/ErrorIcon';
import HeartIcon from '../../icons/HeartIcon';
import styles from './FullScreenMessage.module.scss';

const cx = classNames.bind(styles);

type FullScreenMessageProps = {
	type: 'loading' | 'error';
};

export default function FullScreenMessage({ type }: FullScreenMessageProps) {
	return (
		<div className={cx('container')}>
			{type === 'loading' ? (
				<HeartIcon className={cx(['icon', 'icon__heart'])} />
			) : (
				<>
					<ErrorIcon className={cx(['icon', 'icon__error'])} />
					에러가 발생했어요 잠시 후 다시 시도해주세요.
				</>
			)}
		</div>
	);
}
