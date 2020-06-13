import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Markdown({children, ...props}) {
  return (
    <ReactMarkdown {...props}>
      {children}
    </ReactMarkdown>
  )
}