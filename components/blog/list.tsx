import React from "react";
import Link from "next/link";
import NextImage from "../image";
import style from './blog.module.scss';

const List = ({ article }) => {
	return (
		// <Link href={`/article/${article.attributes.slug}`}>
		// 	<a className="uk-link-reset">
		// 		<div className="uk-card uk-card-muted">
		// 			<div className="uk-card-media-top">
		// 				<NextImage image={article.attributes.image} />
		// 			</div>
		// 			<div className="uk-card-body">
		// 				<p id="category" className="uk-text-uppercase">
		// 					{article.attributes.category.data.attributes.name}
		// 				</p>
		// 				<p id="title" className="uk-text-large">
		// 					{article.attributes.title}
		// 				</p>
		// 			</div>
		// 		</div>
		// 	</a>
		// </Link>
		<Link href={`/article/${article.attributes.slug}`}>
			<a className={style.list}>
				<NextImage
					image={article.attributes.image}
				/>
				{/* <p className={style.date}>
					<span>{d.date}</span>
					<span>- {d.author}</span>
				</p> */}
				<h2 className={style.title}>
					{article.attributes.title}
				</h2>
			</a>
		</Link>

	);
};

export default List;