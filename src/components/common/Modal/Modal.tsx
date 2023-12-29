import classNames from 'classnames/bind';
import { ReactNode } from 'react';

import Dimmed from '../Dimmed';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

type ButtonDetail = {
	label?: string;
	onClick?: () => void;
};

type ModalProps = {
	body?: ReactNode;
	isOpen?: boolean;
	leftButton?: ButtonDetail;
	rightButton?: ButtonDetail;
	title?: string;
};

export default function Modal({ body, isOpen = false, leftButton, rightButton, title }: ModalProps) {
	if (!isOpen) {
		return null;
	}

	return (
		<Dimmed>
			<div className={cx('wrapper__modal')}>
				<div className={cx('wrapper__body')}>
					<div className={cx('wrapper__content')}>
						{title && <div className={cx('text__title')}>{title}</div>}
						{body}
					</div>
					<div className={cx('wrapper__buttons')}>
						<button className={cx('button')} onClick={leftButton?.onClick}>
							{leftButton?.label ?? '닫기'}
						</button>
						<button className={cx('button')} onClick={rightButton?.onClick}>
							{rightButton?.label ?? '확인'}
						</button>
					</div>
				</div>
			</div>
		</Dimmed>
	);
}
