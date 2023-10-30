import { useQuery } from '@tanstack/react-query';

const fetchAdvice = () => {
	return fetch('https://api.adviceslip.com/advice').then(res => res.json());
};

const AdviceFetcher = () => {
	const adviceQuery = useQuery({
		queryKey: ['advice'],
		queryFn: fetchAdvice,
	});

	if (adviceQuery.isLoading) {
		return <div>Loading...</div>;
	}

	if (adviceQuery.isError) {
		return <div>{adviceQuery.error.message}</div>;
	}

	const data = adviceQuery.data;
	return <div>{data.slip.advice}</div>;
};

export default AdviceFetcher;
