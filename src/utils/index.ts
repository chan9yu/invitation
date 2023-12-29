import { BASE_URL } from '../api';

type AssetsPath = 'images' | 'video';

type ImageExtension = '.jpg' | '.png' | '.webp';
type VideoExtension = '.mp4' | '.webm';
type FileExtension = ImageExtension | VideoExtension;

export const generateAssetURL = (path: AssetsPath, filename: string, extension: FileExtension) => {
	return `${BASE_URL}/assets/${path}/${filename}${extension}`;
};
