import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Header from '../components/header';
import ParticlesWrapper from '../components/particles';
import Footer from '../components/footer';
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
	return (
		<ParticlesWrapper>
			<Seo seo={homepage.attributes.seo} />
			<div className='relative z-10 text-white flex flex-col min-h-100vh justify-between'>
				<div className='custom-container'>
					<Header />
					<Articles articles={articles} />
				</div>
				<Footer />
			</div>
		</ParticlesWrapper>
	);
};

export async function getStaticProps() {
	// Run API calls in parallel
	const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
		fetchAPI("/articles", { populate: ["image", "category"] }),
		fetchAPI("/categories", { populate: "*" }),
		fetchAPI("/homepage", {
			populate: {
				hero: "*",
				seo: { populate: "*" },
			},
		}),
	]);

	return {
		props: {
			articles: articlesRes.data,
			categories: categoriesRes.data,
			homepage: homepageRes.data,
		},
		revalidate: 1,
	};
}

export default Home;