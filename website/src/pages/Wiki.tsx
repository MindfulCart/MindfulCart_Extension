import { useLoaderData, Link } from "react-router-dom";
import data from "../../data/chemicals.json" assert { type: "JSON" };
import WikiTerm from "../components/WikiTerm";

interface Substance {
	id: number;
	name: string;
	description: string;
	category: string;
	url: string;
}

export default function Home() {
	const substances: Substance[] = useLoaderData() as Substance[];
	console.log(substances);
	return (
		<div>
			<h1 className="libre-baskerville-font mt-5 mb-5">Carcinogens</h1>
			<hr />
			{substances.map((substance: Substance) => (
				<WikiTerm
					key={substance.id}
					name={substance.name}
					description={substance.description}
					link={substance.url}
				/>
			))}
		</div>
	);
}

// loader function
export const wikiLoader = async () => {
	// const res = await fetch("http://localhost:5173/data/substances.json");

	return data.chemicals;
};
