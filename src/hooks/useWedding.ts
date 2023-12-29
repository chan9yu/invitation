import { useSuspenseQuery } from '@tanstack/react-query';
import { getWedding } from '../api';

const useWedding = () => {
	const { data, error, isError } = useSuspenseQuery({
		queryKey: ['wedding'],
		queryFn: getWedding
	});

	return { data, error, isError };
};

export default useWedding;
