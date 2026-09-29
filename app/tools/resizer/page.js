 "use client";
import { useState } from "react";
import Link from "next/link";

export default function Resizer() {
  const [file,setFile]=useState(null), [w,setW]=useState(""), [h,setH]=useState(""), [result,setResult]=useState(null);
  function resize() {
    if (!file || !w || !h) return;
    const img=new Image();
    img.onload=()=>{const c=document.createElement("canvas"); c.width=+w; c.height=+h; c.getContext("2d").drawImage(img,0,0,+w,+h); c.toBlob(b=>setResult(URL.createObjectURL(b)),"image/jpeg",.9)};
    img.src=URL.createObjectURL(file);
  }
  return <main><nav className="nav"><Link href="/" className="logo">Pic<span>Tools</span></Link><Link href="/">← Home</Link></nav>
    <section className="toolPage"><p className="eyebrow">FREE IMAGE TOOL</p><h1>Image Resizer</h1><p>Set the exact width and height you need.</p>
      <div className="toolBox">
        <label className="drop"><input type="file" accept="image/*" onChange={e=>setFile(e.target.files?.[0]||null)}/><span>📤</span><b>{file?file.name:"Choose an image"}</b><small>Upload an image to resize</small></label>
        <div className="two"><label>Width<input type="number" value={w} onChange={e=>setW(e.target.value)} placeholder="1200"/></label><label>Height<input type="number" value={h} onChange={e=>setH(e.target.value)} placeholder="800"/></label></div>
        <button className="primary wide" disabled={!file||!w||!h} onClick={resize}>Resize Image</button>
        {result&&<a className="download" href={result} download="resized-image.jpg">⬇ Download resized image</a>}
      </div>
    </section></main>
}