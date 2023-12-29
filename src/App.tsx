import Calender from './components/sections/Calender';
import Contact from './components/sections/Contact';
import Heading from './components/sections/Heading';
import ImageGallery from './components/sections/ImageGallery';
import Intro from './components/sections/Intro';
import Invitation from './components/sections/Invitation';
import Map from './components/sections/Map';
import Share from './components/sections/Share';
import Video from './components/sections/Video';
import useWedding from './hooks/useWedding';
import type { Wedding } from './models/wedding';

export default function App() {
	const { data } = useWedding();

	const {
		bride, //
		date,
		galleryImages,
		groom,
		location,
		message
	} = data as Wedding;

	return (
		<>
			<Heading date={date} />
			<Video />
			<Intro
				brideName={bride.name}
				date={date}
				groomName={groom.name}
				locationName={location.name}
				message={message.intro}
			/>
			<Invitation message={message.invitation} />
			<ImageGallery images={galleryImages} />
			<Calender date={date} />
			<Map location={location} />
			<Contact bride={bride} groom={groom} />
			<Share brideName={bride.name} date={date} groomName={groom.name} />
		</>
	);
}
