import type { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/global";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>My trips</title>
				<link rel="shortcut icon" href="/img/favicon.png" />
				<link rel="apple-touch icon" href="/img/favicon.png" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
					integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
					crossOrigin=""
				/>
				<meta
					name="description"
					content="A project that shows the places i've visited in my whole life"
				/>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
};

export default App;