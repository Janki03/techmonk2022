import cn from 'classnames';
import style from './job.module.scss';
import Link from 'next/link';

const JobCard: React.FC<any> = ({
	desc,
	title,
	link,
}: any) => {
	return (
		<>
			<div className={cn(style.card, 'text-black')}>
				<h3 className='font-semibold h5 mb-4'>{title}</h3>
				<p className={cn(style.desc, 'mb-6 font-2 line-clamp-2')}>{desc}</p>
				<Link href={link}>
					<a className="bg-black hover:bg-black-700 text-white font-medium py-3 px-4 rounded">
						Apply now
					</a>
				</Link>
			</div>
		</>
	);
};
export default JobCard;