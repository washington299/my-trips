import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { InfoOutline } from "@styled-icons/evaicons-outline/InfoOutline";

import LinkWrapper from "components/LinkWrapper";
import { MapProps } from "components/Map";

const Map = dynamic(() => import("components/Map"), { ssr: false });

const HomeTemplate = ({ places }: MapProps) => {
	return (
		<>
			<NextSeo
				title="My trips"
				description="A simple project to show in a map the places that i went and show more informations and photos when clicked."
				canonical="https://my-trips.washington299.com.br"
				openGraph={{
					url: "https://my-trips.washington299.com.br",
					title: "My Trips",
					description:
						"A simple project to show in a map the places that i went and show more informations and photos when clicked.",
					images: [
						{
							url: "https://my-trips.washington299.com.br/cover.png",
							width: 1280,
							height: 720,
							alt: "My Trips",
						},
					],
				}}
			/>
			<LinkWrapper href="/about">
				<InfoOutline size={32} aria-label="About" />
			</LinkWrapper>
			<Map places={places} />
		</>
	);
};

export default HomeTemplate;
