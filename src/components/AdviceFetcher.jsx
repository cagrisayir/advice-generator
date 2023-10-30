import { useQuery } from '@tanstack/react-query';

const fetchAdvice = () => {
	return fetch('https://api.adviceslip.com/advice').then(res => res.json());
};

const AdviceFetcher = () => {
	const adviceQuery = useQuery({
		queryKey: ['advice'],
		queryFn: fetchAdvice,
	});
	console.log(adviceQuery.data);
	return <div>AdviceFetcher</div>;
};

export default AdviceFetcher;
