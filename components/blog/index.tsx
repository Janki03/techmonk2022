/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import React, { useState } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';
import { Data } from './data';
import ScrollAnimation from "../../animation/scroll";
import OnhoverEffect from '../../animation/onhover';
import style from './blog.module.scss';
import Input from '../input';
import Search from './images/search.svg';

export const options = {
	includeScore: true,
	includeMatches: true,
	threshold: 0.3,
	maxPatternLength: 32,
	findAllMatches: true,
	keys: ['title']
};
const Blog: React.FC<any> = (props: any) => {
	const [query, updateQuery] = useState('');

	function onSearch({ currentTarget }) {
		updateQuery(currentTarget.value);
	}
	return (
		<>
			<div className="custom-container">
				<div className={style['blog-section']} />
				<ScrollAnimation
					wrapperElement="div"
					className={cn(style['gradient-circle'], 'op-0')}
					toggleClass="fade"
				/>
				<ScrollAnimation
					wrapperElement="div"
					className={cn(style['gradient-circle'], style['gradient-circle-2'], 'op-0')}
					toggleClass="fade"
				/>
				<div className={style['blog-container']}>
					<Input
						type="text"
						name="search"
						placeholder="Search for blogs"
						lefticon={Search}
						onChange={onSearch}
						value={query}
					/>
					<div>
						{Data.map((data, key) => {
							let { bloglist }: any = data;
							const fuse = new Fuse(data.bloglist, options);
							bloglist = fuse.search(query);
							bloglist = query ? bloglist.map((data) => data.item) : data.bloglist;
							return (
								<div key={key}>
									{
										bloglist.length !== 0 &&
										bloglist.map((d, idx) => (
											<ScrollAnimation
												wrapperElement="div"
												toggleClass="fade"
												start='top 700px'
												end='+=100%'
												pin='.section3'
												key={d.id}
												id={`${d.title}${key}${idx}`}
												className="op-0 section3 blog-item"
											>
												<OnhoverEffect>
													<Link href="/single-blog/">
														<a className={style.list}>
															<img
																src={d.img}
																className={style.image}
																alt="Techmonk"
															/>
															<p className={style.date}>
																<span>{d.date}</span>
																<span>- {d.author}</span>
															</p>
															<h2 className={style.title}>
																{d.title}
															</h2>
														</a>
													</Link>
												</OnhoverEffect>
											</ScrollAnimation>
										))
									}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
export default Blog;