import classNames from 'classnames/bind';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import type { Person } from '../../../models/wedding';
import styles from './ContactInfo.module.scss';

const cx = classNames.bind(styles);

type ContactInfoProps = Person & {};

export default function ContactInfo({ account, name, phoneNumber }: ContactInfoProps) {
	const handleCopy = () => {
		alert('복사가 완료되었습니다.');
	};

	return (
		<div className={cx('container')}>
			<div className={cx('wrapper')}>
				<span>{`${account.bankName} | ${account.accountNumber}`}</span>
				<span>{name}</span>
			</div>
			<ul>
				<li>
					<a className={cx('button')} href={`tel: ${phoneNumber}`}>
						전화
					</a>
				</li>
				<li>
					<CopyToClipboard text={`${account.bankName} ${account.accountNumber}`} onCopy={handleCopy}>
						<button className={cx('button')}>복사</button>
					</CopyToClipboard>
				</li>
				{account.kakaopayLink && (
					<li>
						<a className={cx('button')} href={account.kakaopayLink} target="_blank" rel="noreferrer">
							송금
						</a>
					</li>
				)}
			</ul>
		</div>
	);
}
