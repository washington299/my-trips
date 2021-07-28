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
		description: {
			html: string;
		};
		gallery: ImageProps[];
	};
};

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
	return (
		<>
			<h1>{place.name}</h1>

			<div dangerouslySetInnerHTML={{ __html: place.description.html }} />

			{place.gallery.map(({ url }) => (
				<img key={`Photo-${place.id}`} src={url} alt={place.name} />
			))}
		</>
	);
};

export default PlacesTemplate;
