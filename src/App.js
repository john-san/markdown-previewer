import React, { useState, useEffect } from 'react';
import Wrapper from './components/Wrapper';
import marked from 'marked';
import DOMPurify from 'dompurify';
import mdFilePath from './defaultText.md';
import './App.css';

// necessary for line breaks to insert <br>
marked.setOptions({
  breaks: true
})

function App() {
  const [value, setValue] = useState("");
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

  // return markdown in sanitized html
  const provideMarkdown = (string) => {
    const markdown = marked(string);
    const cleanedMarkdown = DOMPurify.sanitize(markdown);
    return cleanedMarkdown;
  }

  // import markdown and set as default text on initial load
  // https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component/51003410
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(mdFilePath);
      const defaultText = await res.text();
      setValue(defaultText);
    }

    fetchData();
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
        <div 
          id="preview" 
          dangerouslySetInnerHTML={{__html: provideMarkdown(value)}} />
      </Wrapper>
    </div>
  );
}

export default App;
