import cssText from "data-text:~/style.css";
import { useEffect, useState } from "react";
import Chemical from "~Chemical";
import logo from "data-base64:~/assets/mindfulcart_small.png";

import type { WikiMessage, WikiTldr } from "~background";

export const getStyle = () => {
	const style = document.createElement("style");
	style.textContent = cssText;
	return style;
};

function IndexPopup() {
	const [harmfulFound, setHarmfulFound] = useState<String[]>(null);
	const [wikiTldr, setWikiTldr] = useState<WikiTldr>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const alertBtnClick = () => {
		setIsModalOpen(true);
	};

	useEffect(() => {
		chrome.runtime.onMessage.addListener(function ({
			type,
			text,
		}: WikiMessage) {
			setWikiTldr(text);
			return true;
		});

		const chemicalNames = data.chemicals.map((chemical) => chemical.name);
		// const chemicalComponents = data.chemicals.map((chemical) => (
		// 	<Chemical
		// 		name={chemical.name}
		// 		index={chemical.id}
		// 		category={chemical.category}
		// 	/>
		// ));
		// const known_chemicals: string[] = ["Octisalate", "Octocrylene"];

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
			if (chemicalNames.includes(element)) {
				chemicals_found.push(element);
			}
		});
		setHarmfulFound(chemicals_found);
	}, []);

	return (
		<div>
			<div className="block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<button
					onClick={alertBtnClick}
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
					style={{
						position: "fixed",
						left: 0,
						top: "50%",
						transform: "translateY(-50%)",
					}}
				>
					<svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M10.05 18c.28.29.67.45 1.06.45s.78-.16 1.06-.45l6.49-6.49c.58-.58.58-1.54 0-2.12l-6.49-6.49c-.58-.58-1.54-.58-2.12 0s-.58 1.54 0 2.12l4.96 4.96H3c-.82 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5h11.99l-4.95 4.96c-.29.28-.45.67-.45 1.06s.16.78.45 1.06z"
						/>
					</svg>
					View Alerts
				</button>

				{isModalOpen && (
					<div className="fixed z-10 inset-0 overflow-y-auto">
						<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
							<div
								className="fixed inset-0 transition-opacity"
								aria-hidden="true"
							>
								<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
							</div>

							<span
								className="hidden sm:inline-block sm:align-middle sm:h-screen"
								aria-hidden="true"
							></span>

							<div
								className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
								role="dialog"
								aria-modal="true"
								aria-labelledby="modal-headline"
							>
								<div style={{ backgroundColor: "#8c77b9", height: "60px" }}>
									<img
										src={logo}
										alt="logo"
										style={{
											height: "55px",
											width: "55px",
										}}
									/>
								</div>

								<div className="bg-white px-4 pt-2 pb-1 sm:pb-3">
									<h3
										className="text-lg leading-6 font-medium text-gray-900"
										id="modal-headline"
										style={{ fontSize: "30px" }}
									>
										Harmful Chemicals
									</h3>
									<hr className="mt-1" />
									<div className="mt-2">
										<ul>
											{harmfulFound?.map((item, index) => (
												<li
													style={{ color: "red", fontSize: "25px" }}
													className="mt-1"
													key={index}
												>
													<b>{item}</b> | Carcinogen
												</li>
											))}

											<p className="font-normal text-gray-700 dark:text-gray-400">
												{wikiTldr && wikiTldr["extract"]}
											</p>
										</ul>
									</div>
								</div>
								<div className="text-center bg-gray-50">
									<button
										type="button"
										style={{ fontSize: "20px" }}
										className="text-center w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm mb-2 mt-2"
										onClick={() => setIsModalOpen(false)}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

const data = {
	chemicals: [
		{
			id: 1,
			name: "Aflatoxins",
			description:
				"are a group of highly toxic and carcinogenic substances produced by certain species of Aspergillus fungi that commonly contaminate food crops such as peanuts, corn, and other grains. They are potent liver carcinogens and can cause DNA damage, oxidative stress, and immune suppression.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/aflatoxins.pdf",
		},
		{
			id: 2,
			name: "Alcohol",
			description:
				"is a well-established risk factor for several types of cancer, including breast, liver, colorectal, and esophageal cancer. The carcinogenic effect of alcohol is thought to be mediated through its metabolic byproduct acetaldehyde, which can cause DNA damage and impair DNA repair mechanisms.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/alcoholbev.pdf",
		},
		{
			id: 3,
			name: "4-Aminobiphenyl",
			description:
				"is an aromatic amine and a known human carcinogen that has been linked to bladder cancer. It is found in tobacco smoke, hair dyes, rubber products, and other industrial chemicals. It can cause DNA damage, induce oxidative stress, and interfere with DNA repair mechanisms.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/4aminobiphenyl.pdf",
		},
		{
			id: 4,
			name: "Analgesic Mixtures Containing Phenacetin",
			description:
				"is a pain reliever that was once widely used in over-the-counter and prescription analgesic formulations. It has been shown to cause kidney cancer and bladder cancer in humans, and is no longer used in many countries due to its carcinogenicity. Other ingredients in analgesic mixtures may also contribute to their carcinogenicity.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/phenacetinandanalgesicmixtures.pdf",
		},
		{
			id: 5,
			name: "Aristolochic Acids",
			description:
				"are a family of naturally occurring compounds found in some plants of the Aristolochia genus. They are potent carcinogens and nephrotoxins that have been linked to urinary tract cancers, particularly in populations consuming herbal remedies or traditional medicines containing Aristolochia. Aristolochic acids can cause DNA damage, induce oxidative stress, and interfere with DNA repair mechanisms.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/aristolochicacids.pdf",
		},
		{
			id: 6,
			name: "Arsenic and Inorganic Arsenic Compounds",
			description:
				"Arsenic is a naturally occurring element that is found in the environment, and exposure to high levels of arsenic can occur through contaminated drinking water or occupational exposure in industries such as mining and smelting. Arsenic is known to cause several types of cancer, including lung, skin, bladder, kidney, and liver cancer.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/arsenic.pdf",
		},
		{
			id: 7,
			name: "Asbestos",
			description:
				"is a group of naturally occurring minerals that are composed of thin, needle-like fibers. Exposure to asbestos can occur in occupational settings such as construction, shipbuilding, and manufacturing of asbestos products. Asbestos is known to cause several types of cancer, including lung cancer, mesothelioma, and cancers of the larynx and ovary.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/asbestos.pdf",
		},
		{
			id: 8,
			name: "Azathioprine",
			description:
				"is an immunosuppressive drug that is used to prevent organ rejection in transplant recipients and to treat autoimmune diseases. Azathioprine is known to cause several types of cancer, including lymphoma and skin cancer.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/azathioprine.pdf",
		},
		{
			id: 9,
			name: "Benzene",
			description:
				"is a colorless, flammable liquid that is used as a solvent in many industrial processes. Exposure to benzene can occur through inhalation, ingestion, or skin contact. Benzene is known to cause several types of cancer, including leukemia, lymphoma, and cancers of the lung, liver, and bladder.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/benzene.pdf",
		},
		{
			id: 10,
			name: "Benzidine and Dyes Metabolized to Benzidine",
			description:
				"are a group of chemicals that are used to produce dyes for textiles, leather, and paper. Exposure to these chemicals can occur in occupational settings such as dye factories. Benzidine and dyes metabolized to benzidine are known to cause bladder cancer.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/benzidineanddyesmetabolized.pdf",
		},
		{
			id: 11,
			name: "Beryllium and Beryllium Compounds",
			description:
				"are used in several industries, including aerospace, electronics, and nuclear power. Exposure to beryllium can occur through inhalation of dust or fumes. Beryllium and beryllium compounds are known to cause lung cancer.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/berylliumandberylliumcompounds.pdf",
		},
		{
			id: 12,
			name: "Bis(chloromethyl) Ether and Technical-Grade Chloromethyl Methyl Ether",
			description:
				"are carcinogens that have been used in the past as industrial chemicals and as intermediates in the manufacture of other chemicals. They are capable of causing DNA damage, mutations, and chromosomal aberrations, which can lead to cancer development.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/bischloromethylether.pdf",
		},
		{
			id: 13,
			name: "Bisphenol A",
			description:
				"is a chemical that is widely used in the production of polycarbonate plastics and epoxy resins. It is a known endocrine disruptor and can cause cancer through multiple mechanisms, including oxidative stress, DNA damage, and epigenetic alterations.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/bisphenola.pdf",
		},
		{
			id: 14,
			name: "Bromodichloromethane",
			description:
				"is a disinfection byproduct that is formed during the treatment of drinking water. It is a genotoxic carcinogen that can cause DNA damage, mutations, and chromosomal aberrations.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/bromodichloromethane.pdf",
		},
		{
			id: 15,
			name: "1,3-Butadiene",
			description:
				"is a chemical that is used in the production of synthetic rubber, plastics, and other chemicals. It is a genotoxic carcinogen that can cause DNA damage and mutations, and it also disrupts cellular processes that are necessary for DNA repair and replication.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/butadiene.pdf",
		},
		{
			id: 16,
			name: "Cadmium and Cadmium Compounds",
			description:
				"are carcinogens that are released into the environment through industrial processes and tobacco smoke. They are capable of causing DNA damage and disrupting cellular processes that are necessary for DNA repair and replication.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/cadmium.pdf",
		},
		{
			id: 17,
			name: "Carbon Tetrachloride",
			description:
				"is a chemical that was formerly used as a solvent and as a refrigerant. It is a genotoxic carcinogen that can cause DNA damage, mutations, and chromosomal aberrations.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/carbontetrachloride.pdf",
		},
		{
			id: 18,
			name: "Chlorambucil",
			description:
				"is a chemotherapy drug that is used to treat leukemia, lymphoma, and other types of cancer. It is a genotoxic carcinogen that can cause DNA damage, mutations, and chromosomal aberrations.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/chlorambucil.pdf",
		},
		{
			id: 19,
			name: "1-(2-Chloroethyl)-3-(4-methylcyclohexyl)-1-nitrosourea",
			description:
				"is a nitrosourea chemotherapeutic agent used to treat certain types of brain tumors. It is also a known human carcinogen, with evidence suggesting that it may cause DNA damage and induce mutations.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/nitrosoureaschemotherapeuticagents.pdf",
		},
		{
			id: 20,
			name: "Chromium Hexavalent Compounds",
			description:
				"are a type of metal that can cause lung cancer and other types of cancer when inhaled or ingested over a long period of time.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/chromiumhexavalentcompounds.pdf",
		},
		{
			id: 21,
			name: "Coal Tars and Coal-Tar Pitches",
			description:
				"are byproducts of the coal distillation process and contain a complex mixture of chemicals, many of which are known carcinogens. They are commonly used in the production of asphalt and other industrial products.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/coaltars.pdf",
		},
		{
			id: 22,
			name: "Coke-Oven Emissions",
			description:
				"are a byproduct of the production of coke, which is used in steel production. They contain a complex mixture of chemicals, many of which are known carcinogens, and can cause cancer of the lung, bladder, and other organs.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/cokeovenemissions.pdf",
		},
		{
			id: 23,
			name: "Cyclophosphamide",
			description:
				"is a chemotherapy drug that has been linked to an increased risk of bladder cancer, as well as other types of cancer.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/cyclophosphamide.pdf",
		},
		{
			id: 24,
			name: "Cyclosporin A",
			description:
				"is an immunosuppressive drug that has been linked to an increased risk of cancer, particularly of the skin and lymphatic system.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/cyclosporina.pdf",
		},
		{
			id: 25,
			name: "Diethylstilbestrol",
			description:
				"is a synthetic estrogen that was once commonly used to prevent miscarriages. It has been linked to an increased risk of vaginal and cervical cancer in women who were exposed to it in utero.",
			category: "Carcinogen",
			url: "https://https://ntp.niehs.nih.gov/ntp/roc/content/profiles/diethylstilbestrol.pdf",
		},
		{
			id: 26,
			name: "Dyes Metabolized to Benzidine (Benzidine Dye Class)",
			description:
				"The Benzidine Dye Class includes dyes that are metabolized to benzidine, which is a known human carcinogen. Exposure to these dyes can occur through industrial processes or use of consumer products, such as textiles, leather, and paper products.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/benzidine-dye-class.pdf",
		},
		{
			id: 27,
			name: "Erionite",
			description:
				"is a naturally occurring mineral that is structurally similar to asbestos. Exposure to erionite fibers has been linked to the development of mesothelioma, a rare and deadly form of cancer.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/erionite.pdf",
		},
		{
			id: 28,
			name: "Estrogens, Steroidal",
			description:
				"Steroidal estrogens, including natural estrogens and synthetic derivatives, have been associated with an increased risk of certain cancers, including breast, endometrial, and ovarian cancer. The mechanism by which estrogens promote cancer development is not fully understood.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/estrogens-steroidal.pdf",
		},
		{
			id: 29,
			name: "Ethylene Oxide",
			description:
				"is a highly reactive gas that is used in the production of various chemicals and as a sterilizing agent for medical equipment. It has been classified as a known human carcinogen based on evidence of an increased risk of lymphoid and breast cancer in workers exposed to high levels of ethylene oxide.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/ethyleneoxide.pdf",
		},
		{
			id: 30,
			name: "Formaldehyde",
			description:
				"is a colorless gas with a strong odor that is commonly used in the production of various household and industrial products, including building materials, adhesives, and resins. It has been classified as a known human carcinogen based on evidence of an increased risk of nasopharyngeal cancer and leukemia in workers exposed to high levels of formaldehyde.",
			category: "Carcinogen",
			url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/formaldehyde.pdf",
		},
		{
			id: 31,
			name: "Milk",
			description:
				"is a colorless gas with a strong odor that is commonly used in the production of various household and industrial products, including building materials, adhesives, and resins. It has been classified as a known human carcinogen based on evidence of an increased risk of nasopharyngeal cancer and leukemia in workers exposed to high levels of formaldehyde.",
			category: "Allergens",
			url: "",
		},
		{
			id: 32,
			name: "Eggs",
			description: "",
			category: "Allergens",
			url: "",
		},
		{
			id: 33,
			name: "Fish (e.g., bass, flounder, cod)",
			description: "",
			category: "Allergens",
			url: "",
		},
		{
			id: 34,
			name: "Crustacean shellfish (e.g., crab, lobster, shrimp)",
			description: "",
			category: "Allergens",
			url: "",
		},
		{
			id: 35,
			name: "Tree nuts (e.g., almonds, walnuts, pecans)",
			description: "",
			category: "Allergens",
			url: "",
		},
		{
			id: 36,
			name: "Peanuts",
			description: "",
			category: "Allergens",
			url: "",
		},
		{
			id: 37,
			name: "Wheat",
			description: "",
			category: "Allergens",
			url: "",
		},
		{
			id: 38,
			name: "Octocrylene",
			description: "",
			category: "Carcinogen",
			url: "",
		},
		{
			id: 39,
			name: "Octisalate",
			description: "",
			category: "Carcinogen",
			url: "",
		},
	],
};

export default IndexPopup;
