type AssetsPath = 'images' | 'video';
type ImageExtension = '.jpg' | '.png' | '.webp';
type VideoExtension = '.mp4' | '.webm';
type FileExtension = ImageExtension | VideoExtension;

const baseUrl = `${window.location.origin}/wedding-invitation_app/assets`;

export const generateAssetURL = (path: AssetsPath, filename: string, extension: FileExtension) => {
	return `${baseUrl}/${path}/${filename}${extension}`;
};
