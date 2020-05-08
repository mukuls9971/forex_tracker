import React from "react";
import styled from "styled-components";

type Props = {
	description: String,
};

const StyledComponent = styled.div`
	margin-bottom: 30px;
`;

const Description = ({ description }: Props) => (
	<StyledComponent>{description}</StyledComponent>
);

export default Description;
