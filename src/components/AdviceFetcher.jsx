import { useQuery } from '@tanstack/react-query';
import { BsFillDice5Fill } from 'react-icons/bs';

const fetchAdvice = () => {
	return fetch('https://api.adviceslip.com/advice').then(res => res.json());
};

const AdviceFetcher = () => {
	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ['advice'],
		queryFn: fetchAdvice,
	});

	if (isLoading) return <div>Loading...</div>;

	if (isError) return <div>{error.message}</div>;
	return (
		<div className='bg-bgcard flex flex-col justify-center items-center h-max w-full rounded-xl sm:max-w-xl sm:max-h-80 gap-6 pt-10 pb-10 pl-6 pr-6'>
			<p className='text-base font-bold tracking-[0.21rem] text-center text-dicegreen'>
				ADVICE #{data.slip.id}
			</p>
			<p className='text-textcyan text-2xl text-center font-bold tracking-[-0.01606rem]'>
				&quot;{data.slip.advice}&quot;
			</p>
			<div className='flex w-full justify-between gap-4 items-center'>
				<div className=' border-b-[0.06rem] border-[#4F5D74] w-5/12'></div>
				<div className='w-3 h-7 bg-textcyan rounded-md'></div>
				<div className='w-3 h-7 bg-textcyan rounded-md'></div>
				<div className='border-b-[0.06rem] border-[#4F5D74] w-5/12'></div>
			</div>
			<button
				className='-mb-20 bg-dicegreen text-bgwindow rounded-full p-5 text-4xl shadow-md hover:shadow-2xl hover:shadow-dicegreen shadow-dicegreen'
				onClick={() => refetch()}
			>
				<BsFillDice5Fill />
			</button>
		</div>
	);
};

export default AdviceFetcher;
