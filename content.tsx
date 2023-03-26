import cssText from "data-text:~/style.css";
import { useEffect, useState } from "react";

import type { WikiMessage, WikiTldr } from "~background";

export const getStyle = () => {
	const style = document.createElement("style");
	style.textContent = cssText;
	return style;
};

function IndexPopup() {
	const [harmfulFound, setHarmfulFound] = useState<String[]>(null);
	const [wikiTldr, setWikiTldr] = useState<WikiTldr>(null);

	useEffect(() => {
		chrome.runtime.onMessage.addListener(function ({
			type,
			text,
		}: WikiMessage) {
			setWikiTldr(text);
			return true;
		});

		const known_chemicals: string[] = ["Octisalate", "Octocrylene"];

		// Get the important-information div
		var importantInfoDiv = document.getElementById("important-information");

		// Get the first div element inside the important-information div
		var firstDiv = importantInfoDiv.querySelector("div");

		// Get all p tags inside the first div
		var pTags = firstDiv.querySelectorAll("p");

		// Calculate the index of the middle p tag
		var middleIndex = Math.floor(pTags.length / 2);

		// Get the middle p tag
		var middlePTag = pTags[middleIndex];
		console.log(middlePTag);
		var chemicals_found: string[] = [];
		var ingredients = middlePTag.innerText.split(" ");
		ingredients.forEach((element) => {
			if (known_chemicals.includes(element)) {
				chemicals_found.push(element);
			}
		});
		setHarmfulFound(chemicals_found);
	}, []);

	return (
		<div>
			<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
					Harmful Ingredients
				</h2>
				<hr />
				<h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
					<ul>
						{harmfulFound?.map((item, index) => (
							<li style={{ color: "red" }} key={index}>
								{item}
							</li>
						))}

						<p className="font-normal text-gray-700 dark:text-gray-400">
							{wikiTldr && wikiTldr["extract"]}
						</p>
					</ul>
				</h4>
			</div>
		</div>
	);
}

export default IndexPopup;
