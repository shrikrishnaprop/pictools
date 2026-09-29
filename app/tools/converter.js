 "use client";
import {useState} from "react";
import Link from "next/link";

export default function Converter({from,to,mime}) {
  const [file,setFile]=useState(null),[result,setResult]=useState(null);
  function convert(){
    if(!file)return;
    const img=new Image();
    img.onload=()=>{
      const c=document.createElement("canvas"); c.width=img.naturalWidth;c.height=img.naturalHeight;
      const ctx=c.getContext("2d");
      if(mime==="image/jpeg"){ctx.fillStyle="#fff";ctx.fillRect(0,0,c.width,c.height)}
      ctx.drawImage(img,0,0);
      c.toBlob(b=>setResult(URL.createObjectURL(b)),mime,.92)
    };
    img.src=URL.createObjectURL(file);
  }
  return <main><nav className="nav"><Link href="/" className="logo">Pic<span>Tools</span></Link><Link href="/">← Home</Link></nav>
    <section className="toolPage"><p className="eyebrow">FREE IMAGE TOOL</p><h1>{from} → {to}</h1><p>Convert your image quickly in your browser.</p>
      <div className="toolBox"><label className="drop"><input type="file" accept="image/*" onChange={e=>{setFile(e.target.files?.[0]||null);setResult(null)}}/><span>📤</span><b>{file?file.name:`Choose ${from} image`}</b><small>Your file stays in your browser</small></label>
      <button className="primary wide" disabled={!file} onClick={convert}>Convert to {to}</button>
      {result&&<a className="download" href={result} download={`converted.${to.toLowerCase()}`}>⬇ Download {to}</a>}</div>
    </section></main>
}