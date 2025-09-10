import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { useState } from "react";

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleClick(selectedButton) {
		setSelectedTopic(selectedButton)
	}

	return (
		<Section title="Examples" id="examples" >
			<Tabs
				ButtonsContainer="menu"
				buttons={Object.entries(EXAMPLES).map(([key, value]) =>
					<TabButton {...value}
						key={key}
						onClick={() => handleClick(key)}
						isSelected={selectedTopic === key} />
				)}>
				{selectedTopic ? (
					<div id="tab-content">
						<h3>{EXAMPLES[selectedTopic].title}</h3>
						<p>{EXAMPLES[selectedTopic].description}</p>
						<pre>
							<code>{EXAMPLES[selectedTopic].code}</code>
						</pre>
					</div>
				) : (
					<p>Please select a topic</p>
				)}
			</Tabs>
		</Section>
	);
}