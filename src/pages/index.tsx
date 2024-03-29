import client from "graphql/client";
import { GET_PLACES } from "graphql/queries";
import { GetPlacesQuery } from "graphql/generated/graphql";

import { MapProps } from "components/Map";

import HomeTemplate from "templates/Home";

const Home = ({ places }: MapProps) => {
	return <HomeTemplate places={places} />;
};

export const getStaticProps = async () => {
	const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

	return {
		props: { places },
	};
};

export default Home;
