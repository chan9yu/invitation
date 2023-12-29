import classNames from 'classnames/bind';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import type { Person } from '../../../models/wedding';
import styles from './ContactInfo.module.scss';

const cx = classNames.bind(styles);

type ContactInfoProps = Person & {};

export default function ContactInfo({ account, name, phoneNumber }: ContactInfoProps) {
	return (
		<div className={cx('container')}>
			<div className={cx('wrapper__info')}>
				<span>{`${account.bankName} | ${account.accountNumber}`}</span>
				<span>{name}</span>
			</div>
			<ul>
				<li>
					<a href={`tel: ${phoneNumber}`} className={cx('button')}>
						전화
					</a>
				</li>
				<li>
					<CopyToClipboard
						text={`${account.bankName} ${account.accountNumber}`}
						onCopy={() => {
							alert('복사가 완료되었습니다.');
						}}
					>
						<button className={cx('button')}>복사</button>
					</CopyToClipboard>
				</li>
				{account.kakaopayLink && (
					<li>
						<a href={account.kakaopayLink} target="_blank" rel="noreferrer" className={cx('button')}>
							송금
						</a>
					</li>
				)}
			</ul>
		</div>
	);
}
