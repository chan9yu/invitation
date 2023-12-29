import { useQuery } from 'react-query';
import { getWedding } from '../api';

const useWedding = () => {
	const result = useQuery(['wedding'], getWedding, {
		suspense: true,
		useErrorBoundary: true
	});

	return { ...result };
};

export default useWedding;
