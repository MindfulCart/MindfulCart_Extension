import React from "react";

interface Props {
	name: string;
	description: string;
	link: string;
}

export default function WikiTerm(props: Props) {
	const handleClick = () => {
		window.location.href = props.link;
	};

	return (
		// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className="purple-color text-dark p-3 rounded mb-4"
			onClick={handleClick}
		>
			<h3 className="libre-baskerville-font green-color mb-3">{props.name}</h3>
			<p className="mb-5">{props.description}</p>
			<a className="" href={props.link}>
				source
			</a>
		</div>
	);
}
