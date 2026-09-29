 "use client";
import { useState } from "react";
import Link from "next/link";

export default function Compressor() {
  const [file, setFile] = useState(null);
  const [quality, setQuality] = useState(0.7);
  const [result, setResult] = useState(null);
  const [saving, setSaving] = useState(false);

  function compress() {
    if (!file) return;
    setSaving(true);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext("2d").drawImage(img, 0, 0);
      canvas.toBlob(blob => {
        setResult(URL.createObjectURL(blob));
        setSaving(false);
      }, "image/jpeg", Number(quality));
    };
    img.src = URL.createObjectURL(file);
  }

  return <ToolShell title="Image Compressor" subtitle="Reduce JPG file size directly in your browser.">
    <label className="drop">
      <input type="file" accept="image/*" onChange={e => {setFile(e.target.files?.[0] || null); setResult(null)}} />
      <span>📤</span><b>{file ? file.name : "Choose an image"}</b>
      <small>JPG, PNG, WebP and other common image formats</small>
    </label>
    <div className="controls">
      <label>Quality: <b>{Math.round(quality*100)}%</b></label>
      <input type="range" min="0.2" max="1" step="0.05" value={quality} onChange={e=>setQuality(e.target.value)} />
    </div>
    <button className="primary wide" disabled={!file || saving} onClick={compress}>{saving ? "Processing..." : "Compress Image"}</button>
    {result && <a className="download" href={result} download={`compressed-${file.name.replace(/\.[^.]+$/, "")}.jpg`}>⬇ Download compressed image</a>}
  </ToolShell>
}

function ToolShell({title, subtitle, children}) {
  return <main><nav className="nav"><Link href="/" className="logo">Pic<span>Tools</span></Link><Link href="/">← Home</Link></nav>
    <section className="toolPage"><p className="eyebrow">FREE IMAGE TOOL</p><h1>{title}</h1><p>{subtitle}</p><div className="toolBox">{children}</div></section></main>
}