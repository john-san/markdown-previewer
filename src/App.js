import React, { useState, useEffect } from 'react';
import Wrapper from './components/Wrapper';
import Markdown from './components/Markdown';
import mdFilePath from './defaultText.md';
import './App.css';

function App() {
  const [value, setValue] = useState();
  const [editorMaximized, setEditorMaximized] = useState(false);
  const [previewMaximized, setPreviewMaximized] = useState(false);


  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleEditorMaximize = () => {
    setEditorMaximized(!editorMaximized);
  }

  const handlePreviewMaximize = () => {
    setPreviewMaximized(!previewMaximized);
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
      <Wrapper 
        title="editor"
        handleMaximize={handleEditorMaximize}
        maximized={editorMaximized}
        hidden={previewMaximized ? true : false}>
        <textarea 
          id="editor" 
          value={value} 
          onChange={handleChange} />
      </Wrapper>
      
      <Wrapper 
        title="preview"
        handleMaximize={handlePreviewMaximize}
        maximized={previewMaximized}
        hidden={editorMaximized ? true : false}>
        <div id="preview">
          <Markdown>
            {value}
          </Markdown>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
