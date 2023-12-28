import classNames from 'classnames/bind';
import { PropsWithChildren, useState } from 'react';

import styles from './Accordion.module.scss';
import ArrowDownIcon from '../../icons/ArrowDownIcon';

const cx = classNames.bind(styles);

type AccordionProps = PropsWithChildren<{
	label: string;
}>;

export default function Accordion({ label, children }: AccordionProps) {
	const [expanded, setExpanded] = useState(false);

	const handleToggleExpanded = () => {
		setExpanded(prev => !prev);
	};

	return (
		<div className={cx('container')} onClick={handleToggleExpanded}>
			<div className={cx('wrapper__header')}>
				<span>{label}</span>
				<ArrowDownIcon className={cx(['icon__arrow-down', { 'icon__arrow-down--open': expanded }])} />
			</div>
			<div className={cx(['wrapper__content'], { 'wrapper__content--open': expanded })}>{children}</div>
		</div>
	);
}
