import React from "react";

export default function Chemical(props) {
	return (
		<li style={{ color: "red" }} key={props.index}>
			<h4>{props.name}</h4> | <p>Carcinogen</p>
			<p>props.description</p>
		</li>
	);
}
