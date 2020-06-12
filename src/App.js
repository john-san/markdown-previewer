import React, { useState, useEffect } from 'react';
import Toolbar from './components/Toolbar';
import Markdown from './components/Markdown';
import mdFilePath from './defaultText.md';
import './App.css';

function App() {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  // import markdown and set as default text
  // https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component/51003410
  useEffect(() => {
    fetch(mdFilePath)
      .then(response => response.text())
      .then(text => setValue(text))
  }, [])

  return (
    <div className="App">
      <div id="editorWrapper">
        <Toolbar title="Editor" />
        <textarea id="editor" value={value} onChange={handleChange} />
      </div>

      <div id="previewWrapper">
        <Toolbar title="Previewer" />
        <div id="preview">
          <Markdown>
            {value}
          </Markdown>
        </div>
      </div>
    </div>
  );
}

export default App;
