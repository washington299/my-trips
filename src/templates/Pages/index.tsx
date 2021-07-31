import { NextSeo } from "next-seo";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import LinkWrapper from "components/LinkWrapper";

import * as S from "./styles";

export type PageTemplateProps = {
	heading: string;
	body: string;
};

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
	<>
		<NextSeo
			title={heading}
			description={body}
			canonical="https://my-trips-washington299.vercel.app"
			openGraph={{
				url: "https://my-trips-washington299.vercel.app",
				title: heading,
				description: body,
			}}
		/>
		<S.Content>
			<LinkWrapper href="/">
				<CloseOutline size={32} aria-label="Home" />
			</LinkWrapper>

			<S.Heading>{heading}</S.Heading>

			<S.Body>
				<div dangerouslySetInnerHTML={{ __html: body }} />
			</S.Body>
		</S.Content>
	</>
);

export default PageTemplate;
