import { useEffect, useState } from 'react';
import { UsfmEditor } from 'simple-text-editor-rcl';
import './Usfm.css';

export default function ComputerScreen({editorText, onEditorText}) {
  // const onInput = (event) => {
  //   onEditorText(event.target.innerText.replace(/&lt;/g, '<'));
  // };

  const blockComponent = (props) => (
    <div
      className="ComputerScreen"
      {...props}
      // onInput={onInput}
    />
  );

  const editorProps = {
    text: editorText,
    onText: onEditorText,
    sectionable: false,
    blockable: false,
    sectionIndex: 0,
    blockComponent,
    onSectionClick: () => {},
    onBlockClick: () => {},
  }

  return (
    <UsfmEditor {...editorProps} />
  );
};