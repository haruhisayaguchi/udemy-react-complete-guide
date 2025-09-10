import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(item => <CoreConcept {...item} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect('components')}
              label="Components"
              isSelected={selectedTopic === 'components'} />
            <TabButton
              onSelect={() => handleSelect('jsx')}
              label="JSX"
              isSelected={selectedTopic === 'jsx'} />
            <TabButton
              onSelect={() => handleSelect('props')}
              label="Props"
              isSelected={selectedTopic === 'props'} />
            <TabButton
              onSelect={() => handleSelect('state')}
              label="State"
              isSelected={selectedTopic === 'state'} />
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
