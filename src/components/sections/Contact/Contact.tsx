import type { Wedding } from '../../../models/wedding';
import Accordion from '../../common/Accordion';
import Section from '../../common/Section';
import ContactInfo from '../ContactInfo';

type ContactProps = {
	bride: Wedding['bride'];
	groom: Wedding['groom'];
};

export default function Contact({ bride, groom }: ContactProps) {
	return (
		<Section title="연락처 및 마음 전하실 곳">
			<Accordion label="신랑측">
				<ContactInfo account={groom.account} name={groom.name} phoneNumber={groom.phoneNumber} />
				{groom.parents?.map((parent, idx) => (
					<ContactInfo key={idx} account={parent.account} name={parent.name} phoneNumber={parent.phoneNumber} />
				))}
			</Accordion>
			<Accordion label="신부측">
				<ContactInfo account={bride.account} name={bride.name} phoneNumber={bride.phoneNumber} />
				{bride.parents?.map((parent, idx) => (
					<ContactInfo key={idx} account={parent.account} name={parent.name} phoneNumber={parent.phoneNumber} />
				))}
			</Accordion>
		</Section>
	);
}
