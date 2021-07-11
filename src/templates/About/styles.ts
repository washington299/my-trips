import styled from "styled-components";

export const Content = styled.section`
	max-width: var(--container);
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin: auto;
	text-align: center;
`;

export const Heading = styled.h1`
	margin-bottom: var(--large);
	font-size: var(--large);
`;

export const Body = styled.div`
	p {
		font-size: var(--medium);
		line-height: var(--medium);
	}
`;
