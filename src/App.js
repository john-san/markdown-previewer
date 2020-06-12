import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <div id="editorWrapper">
        <Toolbar title="Editor" />
        <textarea id="editor" value={value} onChange={handleChange} />
      </div>

      <div id="previewWrapper">
        <Toolbar title="Previewer" />
        <div id="preview">
          {value}
        </div>
      </div>
    </div>
  );
}

export default App;
