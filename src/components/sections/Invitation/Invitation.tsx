import classNames from 'classnames/bind';

import Section from '../../common/Section';
import LetterIcon from '../../icons/LetterIcon';
import styles from './Invitation.module.scss';

const cx = classNames.bind(styles);

type InvitationProps = {
	invitationMessage: string;
};

export default function Invitation({ invitationMessage }: InvitationProps) {
	return (
		<Section className={cx('container')}>
			<LetterIcon className={cx('icon--letter')} />
			<p className={cx('text')}>{invitationMessage}</p>
		</Section>
	);
}
