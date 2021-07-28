import { useRouter } from "next/router";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type Place = {
	id: string;
	name: string;
	slug: string;
	location: {
		latitude: number;
		longitude: number;
	};
};

export type MapProps = {
	places: Place[];
};

const Map = ({ places }: MapProps) => {
	const router = useRouter();

	return (
		<MapContainer center={[51.505, -0.09]} zoom={3} style={{ width: "100%", height: "100vh" }}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{places?.map(({ id, name, slug, location }) => {
				const { latitude, longitude } = location;

				return (
					<Marker
						key={id}
						position={[latitude, longitude]}
						title={name}
						eventHandlers={{ click: () => router.push(`/place/${slug}`) }}
					>
						<Popup>{name}</Popup>
					</Marker>
				);
			})}
		</MapContainer>
	);
};

export default Map;
