
export default function Printout ({ evidenceText, editorText, reference }) {
  const printoutText = (evidenceText === editorText) ? evidenceText : 'Keep trying...';

  return (<div className="Printout">{printoutText} {reference}</div>);
};