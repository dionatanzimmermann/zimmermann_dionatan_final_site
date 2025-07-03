import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Dropdown from './components/Dropdown/Dropdown';
import HeroImage from './components/HeroImage/HeroImage';
import Img from './components/Img/Img';
import Label from './components/Label/Label';
import RadioButton from './components/RadioButton/RadioButton';
import Table from './components/Table/Table';
import Text from './components/Text/Text';

function App() {
  // Add state for RadioButton controlled value
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [dropdownValue, setDropdownValue] = useState('option1');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Edit <code>src/App.tsx</code> and save to reload.</p>

        <section>
          <h2>Button</h2>
          <Button text="Click Me" onClick={() => alert('Clicked!')} disabled={false} backgroundColor="#28a745" />
          <Button text="Disabled Button" disabled={true} />
        </section>

        <section>
          <h2>Dropdown</h2>
          <Dropdown
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            disabled={false}
          />
          <Dropdown
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            disabled={true}
          />
        </section>

        <section>
          <h2>Text</h2>
          <Text color="blue" fontSize="20px" disabled={false}>
            Enabled Text
          </Text>
          <br />
          <Text color="gray" fontSize="18px" disabled={true}>
            Disabled Text
          </Text>
        </section>

        <section>
          <h2>Card</h2>
          <Card
            title="My Card"
            description="This is a sample card."
            imageUrl="https://placehold.co/600x400/blue/white"
            disabled={false}
          />
          <Card
            title="Disabled Card"
            description="This card is disabled."
            imageUrl="https://placehold.co/600x400/blue/white"
            disabled={true}
          />
        </section>

        <section>
          <h2>HeroImage</h2>
          <HeroImage
            imageUrl="https://placehold.co/600x400/blue/white"
            headline="Welcome!"
            subheadline="This is a hero image."
            disabled={false}
          />
          <HeroImage
            imageUrl="https://placehold.co/600x400/blue/white"
            headline="Disabled Hero"
            subheadline="This hero is disabled."
            disabled={true}
          />
        </section>

        <section>
          <h2>Img</h2>
          <Img
            src="https://placehold.co/600x400/blue/white"
            alt="Sample Image"
            width="300px"
            height="200px"
            disabled={false}
          />
          <Img
            src="https://placehold.co/600x400/blue/white"
            alt="Disabled Image"
            width="300px"
            height="200px"
            disabled={true}
          />
        </section>

        <section>
          <h2>Label</h2>
          <Label text="Enabled Label" htmlFor="input1" disabled={false} />
          <Label text="Disabled Label" htmlFor="input2" disabled={true} />
        </section>

        <section>
          <h2>RadioButton</h2>
          <RadioButton
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ]}
            value={selectedRadio}
            onChange={setSelectedRadio}
            disabled={false}
          />
          <RadioButton
            options={[
              { label: 'Option 3', value: 'option3' },
              { label: 'Option 4', value: 'option4' },
            ]}
            value={selectedRadio}
            onChange={setSelectedRadio}
            disabled={true}
          />
        </section>

        <section>
          <h2>Table</h2>
          <Table
            headers={['Name', 'Age', 'Occupation']}
            data={[
              ['Alice', '30', 'Engineer'],
              ['Bob', '25', 'Designer'],
            ]}
            footer="End of Table"
            disabled={false}
          />
          <Table
            headers={['Name', 'Age', 'Occupation']}
            data={[
              ['Charlie', '40', 'Manager'],
              ['Dana', '35', 'Developer'],
            ]}
            footer="Disabled Table Footer"
            disabled={true}
          />
        </section>
      </header>
    </div>
  );
}

export default App;

/*import React from 'react';
import logo from './logo.svg';
import './App.css';
import RadioButton from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div></>
  );
}

export default App;
*/