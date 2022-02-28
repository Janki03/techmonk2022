/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import React, { useState } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';
//import { Data } from './data';
import ScrollAnimation from "../animation/scroll";
import OnhoverEffect from '../animation/onhover';
import style from '../components/blog/blog.module.scss';
import Input from '../components/input';
import Search from '../components/blog/images/search.svg';
import Card from "./card";

export const options = {
	includeScore: true,
	includeMatches: true,
	threshold: 0.3,
	maxPatternLength: 32,
	findAllMatches: true,
	keys: ['title']
};
const Articles = ({ articles }) => {
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
						{articles.map((article, i) => {
							return (
								<Card
									article={article}
									key={`article__left__${article.attributes.slug}`}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};
export default Articles;