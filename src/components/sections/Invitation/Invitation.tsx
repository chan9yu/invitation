import classNames from 'classnames/bind';

import Section from '../../common/Section';
import LetterIcon from '../../icons/LetterIcon';
import styles from './Invitation.module.scss';

const cx = classNames.bind(styles);

type InvitationProps = {
	message: string;
};

export default function Invitation({ message }: InvitationProps) {
	return (
		<Section className={cx('container')}>
			<LetterIcon className={cx('icon__letter')} />
			<p className={cx('text')}>{message}</p>
		</Section>
	);
}
