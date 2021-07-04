import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
	}

	body {
		background-color: var(--background);
		color: var(--white);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:root {
		--highlight: #e20e8d;
		--background: #030518;
		--white: #FFFFFF;

		--container : 100rem;

		--small: 1.5rem;
		--medium: 3rem;
		--large: 5rem;
	}

	p, a {
		font-size: 2rem;
		line-height: var(--medium);
	}

	a {
		color: var(--highlight);
	}
`;
