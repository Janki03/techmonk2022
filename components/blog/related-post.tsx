import cn from 'classnames';
import Image from 'next/image';
import Post1 from './images/2.png';
import Post2 from './images/banner.png';
import Post3 from './images/2.png';
import style from './blog.module.scss';
import ScrollAnimation from "../../animation/scroll";

const RelatedPost: React.FC<any> = (any) => {
	const posts = [
		{
			id: 1,
			name: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit.',
			href: '/single-blog/',
			imageSrc: Post1,
			date: '25 August, 2021',
		},
		{
			id: 2,
			name: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit.',
			href: '/single-blog/',
			imageSrc: Post2,
			date: '25 August, 2021',
		},
		{
			id: 3,
			name: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit.',
			href: '/single-blog/',
			imageSrc: Post3,
			date: '25 August, 2021',
		},
	]
	return (
		<>
			<div className={cn(style['related-post'], 'py-20')}>
				<div className='custom-container'>
					<ScrollAnimation
						wrapperElement="h2"
						toggleClass="fade"
						start='top 700px'
						end='+=100%'
						pin='.section4'
						className={cn(style['post-title'], 'font-normal op-0 text-center section4 mb-0')}
					>
						Related Posts
					</ScrollAnimation>
					<div className='flex flex-wrap py-10'>
						{posts.map((post) => (
							<ScrollAnimation
								wrapperElement="div"
								toggleClass="fade"
								start='top 700px'
								end='+=100%'
								pin='.section3'
								key={post.id}
								className={cn(style['on-hover'], 'op-0 section3 group relative w-full sm:w-1/3  px-2 py-4')}
							>
								<div className={cn(style['post-box'], 'relative w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75')}>
									<Image
										src={post.imageSrc}
										alt={post.name}
										className='w-full h-full object-center object-cover lg:w-full lg:h-full'
									/>
								</div>
								<div className='mt-4 flex justify-between'>
									<div className='mt-4'>
										<h4 className={cn(style.name, 'capitalize font-medium')}>
											<a href={post.href}>
												<span aria-hidden="true" className="absolute inset-0" />
												{post.name}
											</a>
										</h4>
										<p className={cn(style.post, 'mt-2')}>{post.date}</p>
									</div>
								</div>
							</ScrollAnimation>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default RelatedPost;