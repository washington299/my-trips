import Image from "next/image";
import { NextSeo } from "next-seo";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import LinkWrapper from "components/LinkWrapper";

import * as S from "templates/Places/styles";

type ImageProps = {
	url: string;
	width: number;
	height: number;
};

export type PlacesTemplateProps = {
	place: {
		id: number;
		name: string;
		slug: string;
		description?: {
			html: string;
			text: string;
		};
		gallery: ImageProps[];
	};
};

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
	return (
		<>
			<NextSeo
				title={`${place.name} - My Trips`}
				description={`${place.description?.text}`}
				canonical="https://my-trips-washington299.vercel.app"
				openGraph={{
					url: "https://my-trips-washington299.vercel.app",
					title: `${place.name} - My Trips`,
					description: place.description?.text,
					images: [
						{
							url: place.gallery[0].url,
							width: place.gallery[0].width,
							height: place.gallery[0].height,
							alt: place.name,
						},
					],
				}}
			/>
			<S.Wrapper>
				<LinkWrapper href="/">
					<CloseOutline size={32} aria-label="HomeGo back to map" />
				</LinkWrapper>
				<S.Container>
					<S.Heading>{place.name}</S.Heading>

					<S.Body dangerouslySetInnerHTML={{ __html: place.description?.html || "" }} />

					<S.Gallery>
						{place.gallery.map(({ url }) => (
							<Image
								key={`Photo-${url}`}
								src={url}
								alt={place.name}
								width={1000}
								height={600}
								quality={75}
							/>
						))}
					</S.Gallery>
				</S.Container>
			</S.Wrapper>
		</>
	);
};

export default PlacesTemplate;
