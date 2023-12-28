import { useEffect, useState } from 'react';

import FullScreenMessage from './components/common/FullScreenMessage';
import Heading from './components/sections/Heading';
import ImageGallery from './components/sections/ImageGallery';
import Intro from './components/sections/Intro';
import Invitation from './components/sections/Invitation';
import Video from './components/sections/Video';
import type { Wedding } from './models/wedding';

export default function App() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [wedding, setWedding] = useState<Wedding | null>(null);

	console.log('wedding', wedding);

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
			.catch(error => {
				console.error('에러가 발생했습니다. 잠시 후 시도해주세요.', error);
				setError(true);
			})
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

	return (
		<div>
			<Heading date={wedding.date} />
			<Video />
			<Intro
				brideName={wedding.bride.name}
				groomName={wedding.groom.name}
				locationName={wedding.location.name}
				weddingDate={wedding.date}
				introMessage={wedding.message.intro}
			/>
			<Invitation invitationMessage={wedding.message.invitation} />
			<ImageGallery images={wedding.galleryImages} />
		</div>
	);
}
