import { useEffect } from 'react';
export default function App() {
  useEffect(() => { window.location.replace('/site/index.html'); }, []);
  return <main className="gateway"><strong>TAMP by Kryonara</strong><p>Opening TAMP…</p><a href="/site/index.html">Student site</a> · <a href="/admin/index.html">Admin panel</a></main>;
}
