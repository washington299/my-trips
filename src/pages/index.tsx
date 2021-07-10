import dynamic from "next/dynamic";

const Map = dynamic(() => import("components/Map"), { ssr: false });

const Home = () => {
	const secondPlace = {
		id: "2",
		name: "São Bernardo do Campo",
		slug: "sao-bernardo-do-campo",
		location: {
			latitude: 50,
			longitude: 50,
		},
	};

	return <Map places={[secondPlace]} />;
};

export default Home;
