import { useEffect, useState } from 'react';

import FullScreenMessage from './components/common/FullScreenMessage';
import Calender from './components/sections/Calender';
import Contact from './components/sections/Contact';
import Heading from './components/sections/Heading';
import ImageGallery from './components/sections/ImageGallery';
import Intro from './components/sections/Intro';
import Invitation from './components/sections/Invitation';
import Map from './components/sections/Map';
import Video from './components/sections/Video';
import type { Wedding } from './models/wedding';

export default function App() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [wedding, setWedding] = useState<Wedding | null>(null);

	useEffect(() => {
		setLoading(true);
		fetch('http://localhost:3080/wedding')
			.then(res => {
				if (!res.ok) {
					throw new Error('청접장 정보를 불러오지 못했습니다.');
				}
				return res.json();
			})
			.then(res => setWedding(res))
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <FullScreenMessage type="loading" />;
	}

	if (error) {
		return <FullScreenMessage type="error" />;
	}

	if (!wedding) {
		return null;
	}

	const {
		bride, //
		date,
		galleryImages,
		groom,
		location,
		message
	} = wedding;

	return (
		<div>
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
		</div>
	);
}
