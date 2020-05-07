import React from "react";

type Props = {
	description: String,
};

const Description = ({ description }: Props) => (
	<div style={{ marginBottom: "30px" }}>{description}</div>
);

export default Description;
