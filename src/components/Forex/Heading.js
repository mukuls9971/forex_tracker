import React from "react";

type Props = {
	heading: String,
};

const Heading = ({ heading }: Props) => (
	<div className="section-header">
		<h2>{heading}</h2>
	</div>
);

export default Heading;
