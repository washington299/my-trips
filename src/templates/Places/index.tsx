import Image from "next/image";
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
		};
		gallery: ImageProps[];
	};
};

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
	return (
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
	);
};

export default PlacesTemplate;
