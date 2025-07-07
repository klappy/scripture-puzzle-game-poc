import { UsfmEditor } from 'simple-text-editor-rcl';
import './Usfm.css';

export default function ComputerScreen({editorText, onEditorText}) {
  // const onInput = (event) => {
  //   onEditorText(event.target.innerText.replace(/&lt;/g, '<'));
  // };

  const blockComponent = (props) => (
    <div
      className="ComputerScreen detective-terminal"
      {...props}
      // onInput={onInput}
    >
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-title">🔍 DETECTIVE ANALYSIS TERMINAL</div>
        <div className="terminal-status">
          <span className="status-dot active"></span>
          <span className="status-text">ACTIVE</span>
        </div>
      </div>

      {/* Terminal Prompt */}
      <div className="terminal-prompt">
        <span className="prompt-symbol">detective@bmys:~$</span>
        <span className="prompt-command">analyze_evidence --reconstruct</span>
      </div>

      {/* Terminal Content */}
      <div className="terminal-content">
        <div className="content-label">EVIDENCE RECONSTRUCTION:</div>
        <div className="content-area">
          {props.children}
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="terminal-footer">
        <div className="footer-info">
          <span>WORDS: {editorText.trim().split(/\s+/).filter(Boolean).length}</span>
          <span>STATUS: {editorText.trim() ? 'ANALYZING...' : 'WAITING FOR INPUT'}</span>
        </div>
      </div>
    </div>
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