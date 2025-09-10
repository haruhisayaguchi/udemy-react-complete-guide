import { useState } from "react"

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  let tabContent = selectedTopic ?
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div> :
    <p>Please select a topic</p>;

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map(item => <CoreConcept {...item} key={item.title} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.entries(EXAMPLES).map(([k, v]) =>
              <TabButton {...v}
                key={k}
                handleClick={() => handleClick(k)}
                isSelected={selectedTopic === k} />
            )}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
