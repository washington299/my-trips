import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import LinkWrapper from "components/LinkWrapper";

import * as S from "./styles";

const AboutTemplate = () => (
	<S.Content>
		<LinkWrapper href="/">
			<CloseOutline size={32} aria-label="Home" />
		</LinkWrapper>

		<S.Heading>My Trips</S.Heading>

		<S.Body>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
				took a galley of type and scrambled it to make a type specimen book. It has survived not
				only five centuries, but also the leap into electronic typesetting, remaining essentially
				unchanged.
			</p>
		</S.Body>
	</S.Content>
);

export default AboutTemplate;
