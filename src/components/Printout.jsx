export default function Printout ({ evidenceText = '', editorText = '', reference = '' }) {
  const evidenceWords = evidenceText.trim().split(/\s+/).filter(Boolean);
  const editorWords = editorText.trim().split(/\s+/).filter(Boolean);

  const correctWordCount = editorWords.filter((word, index) => word === evidenceWords[index]).length;
  const verseComplete = (evidenceText === editorText) && evidenceText.length > 0;

  // Detective case status calculations
  const investigationProgress = evidenceWords.length > 0 ? Math.round((correctWordCount / evidenceWords.length) * 100) : 0;
  const caseStatus = verseComplete ? 'SOLVED' : investigationProgress > 70 ? 'BREAKTHROUGH' : investigationProgress > 40 ? 'PROGRESS' : 'INVESTIGATING';
  
  // Get current date for case file
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  let caseReport = '';
  if (verseComplete) {
    caseReport = `🎯 CASE SOLVED: "${evidenceText}" - Reference: ${reference}`;
  } else {
    caseReport = `🔍 Investigation Progress: ${correctWordCount}/${evidenceWords.length} evidence pieces verified (${investigationProgress}%)`;
  }

  return (
    <div className="Printout detective-case-report">
      <div className="case-header">
        <div className="case-number">CASE #BIB-{Date.now().toString().slice(-6)}</div>
        <div className="case-status">
          <span className={`status-badge status-${caseStatus.toLowerCase()}`}>
            {caseStatus}
          </span>
        </div>
      </div>
      
      <div className="case-details">
        <div className="detail-row">
          <span className="label">📅 Date:</span>
          <span className="value">{currentDate}</span>
        </div>
        <div className="detail-row">
          <span className="label">⏰ Time:</span>
          <span className="value">{currentTime}</span>
        </div>
        <div className="detail-row">
          <span className="label">🕵️ Investigator:</span>
          <span className="value">Detective Biblical</span>
        </div>
        <div className="detail-row">
          <span className="label">📋 Case Type:</span>
          <span className="value">Biblical Mystery Investigation</span>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-label">INVESTIGATION PROGRESS</div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${investigationProgress}%` }}
          ></div>
        </div>
        <div className="progress-text">{investigationProgress}% Complete</div>
      </div>

      <div className="case-summary">
        <div className="summary-label">📝 CASE SUMMARY:</div>
        <div className="summary-text">{caseReport}</div>
      </div>

      {verseComplete && (
        <div className="case-closure">
          <div className="closure-stamp">CASE CLOSED ✅</div>
          <div className="closure-text">Mystery successfully solved. All evidence verified and case documented.</div>
        </div>
      )}

      <div className="evidence-count">
        <div className="count-item">
          <span className="count-number">{editorWords.length}</span>
          <span className="count-label">Evidence Collected</span>
        </div>
        <div className="count-item">
          <span className="count-number">{correctWordCount}</span>
          <span className="count-label">Verified Clues</span>
        </div>
        <div className="count-item">
          <span className="count-number">{evidenceWords.length - correctWordCount}</span>
          <span className="count-label">Pending Review</span>
        </div>
      </div>
    </div>
  );
};