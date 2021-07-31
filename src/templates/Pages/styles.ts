import styled from "styled-components";

export const Content = styled.section`
	max-width: var(--container);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: var(--large);
	margin: auto;
`;

export const Heading = styled.h1`
	margin-bottom: var(--large);
	font-size: var(--large);
	text-align: center;
`;

export const Body = styled.div`
	p {
		line-height: var(--medium);
	}
`;
