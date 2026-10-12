import { useEffect } from 'react';

/**
 * React/Vite entry point for the combined prototype.
 * The existing student and admin screens are deliberately served unchanged
 * from /site and /admin so the original CSS, HTML, scripts, and behavior stay
 * intact during this first migration step.
 */
export default function App() {
  useEffect(() => {
    window.location.replace('/site/index.html');
  }, []);

  return (
    <main className="gateway" aria-live="polite">
      <div className="gateway__mark">TAMP <span>by Kryonara</span></div>
      <p>Opening TAMP…</p>
      <nav aria-label="TAMP destinations">
        <a href="/site/index.html">Open student site</a>
        <a href="/admin/index.html">Open admin panel</a>
      </nav>
    </main>
  );
}
