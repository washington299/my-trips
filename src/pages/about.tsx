import client from "graphql/client";
import { GET_PAGES } from "graphql/queries";

import AboutTemplate from "templates/About";

const AboutPage = () => <AboutTemplate />;

export const getStaticProps = async () => {
	await client.request(GET_PAGES);

	return {
		props: {},
	};
};

export default AboutPage;
