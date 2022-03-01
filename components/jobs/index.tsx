/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import React, { useState } from 'react';
import Image from 'next/image';
import Fuse from 'fuse.js';
import { JobData } from './data';
import ScrollAnimation from "../../animation/scroll";
import style from './job.module.scss';
import Input from '../input';
import Card from './job-card';
import Search from '../blog/images/search.svg';
import JobImg from './images/1.png';

export const options = {
	includeScore: true,
	includeMatches: true,
	threshold: 0.3,
	maxPatternLength: 32,
	findAllMatches: true,
	keys: ['title']
};
const Jobs: React.FC<any> = (props: any) => {
	const [query, updateQuery] = useState('');

	function onSearch({ currentTarget }) {
		updateQuery(currentTarget.value);
	}
	return (
		<>
			<div className="custom-container relative">
				<ScrollAnimation
					wrapperElement="div"
					className={cn(style['gradient-circle'], 'op-0')}
					toggleClass="fade"
				/>
				<div className={cn(style['job-container'], 'job-section flex flex-wrap pt-20')}>
					<div className={cn(style.left, 'w-full md:w-2/3')}>
						<ScrollAnimation
							wrapperElement="h1"
							toggleClass="fade"
							start='top 700px'
							end='+=100%'
							pin='.job-section'
							className='font-normal mb-6 op-0'
						>
							Join us at Techmonk
						</ScrollAnimation>
						<ScrollAnimation
							wrapperElement="p"
							toggleClass="fade"
							start='top 700px'
							end='+=100%'
							pin='.job-section'
							className={cn(style['max-w-526'], 'font-2 mb-8 op-0')}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique lacus non lorem pharetra fermentum.
						</ScrollAnimation>
						<ScrollAnimation
							wrapperElement="div"
							toggleClass="fade"
							start='top 700px'
							end='+=100%'
							pin='.job-section'
							className="op-0"
						>
							<Input
								type="text"
								name="search"
								placeholder="Search for blogs"
								lefticon={Search}
								onChange={onSearch}
								value={query}
								className="bg-transparent"
							/>
						</ScrollAnimation>
						<div>
							{JobData.map((data, key) => {
								let { jobList }: any = data;
								const fuse = new Fuse(data.jobList, options);
								jobList = fuse.search(query);
								jobList = query ? jobList.map((data) => data.item) : data.jobList;
								return (
									<div key={key}>
										{
											jobList.length !== 0 &&
											jobList.map((d, idx) => (
												<ScrollAnimation
													wrapperElement="div"
													toggleClass="fade"
													start='top 700px'
													end='+=100%'
													pin='.job-section'
													key={d.id}
													id={`${d.title}${key}${idx}`}
													className="op-0"
												>
													<div key={d.Id} className="py-4">
														<Card
															title={d.title}
															desc={d.desc}
															link={d.link}
														/>
													</div>
												</ScrollAnimation>
											))
										}
									</div>
								);
							})}
						</div>
					</div>
					<div className={cn(style.right, 'w-full md:w-1/3 pl-4 text-right')}>
						<ScrollAnimation
							wrapperElement="div"
							toggleClass="fade"
							start='top 700px'
							end='+=100%'
							pin='.job-section'
							className="op-0"
						>
							<Image
								src={JobImg}
								alt="Techmonk"
								className={style.image}
							/>
						</ScrollAnimation>

					</div>
				</div>
			</div>
		</>
	);
};
export default Jobs;