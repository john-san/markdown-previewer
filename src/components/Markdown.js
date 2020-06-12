import React from 'react';
import ReactMarkdown from 'react-markdown';
// https://github.com/rexxars/react-markdown/issues/233
export default function Markdown({children, ...props}) {
  return (
    <ReactMarkdown {...props}>
      {typeof children === 'string' ? children.replace(/\n/g, '  \n') : children}
    </ReactMarkdown>
  )
}