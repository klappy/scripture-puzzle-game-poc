import TypewriterText from "./TypewriterText";

export default function Printout ({ evidenceText = '', editorText = '', reference = '' }) {
  const evidenceWords = evidenceText.trim().split(/\s+/).filter(Boolean);
  const editorWords = editorText.trim().split(/\s+/).filter(Boolean);

  const correctWordCount = editorWords.filter((word, index) => word === evidenceWords[index]).length;

  const verseComplete = (evidenceText === editorText) && evidenceText.length > 0;

  let printoutText = '';
  if (verseComplete) {
    printoutText = `${evidenceText} (${reference})`;
  } else {
    printoutText = `Progress: ${correctWordCount}/${evidenceWords.length} words correct`;
  }

  return (
    <div className="Printout">
      <TypewriterText text={printoutText} speed={30} />
    </div>
  );
};