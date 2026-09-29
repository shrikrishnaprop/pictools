import Link from "next/link";

const tools = [
  ["🗜️", "Image Compressor", "Reduce image size without complicated software.", "/tools/compressor"],
  ["📐", "Image Resizer", "Change image width and height in seconds.", "/tools/resizer"],
  ["🔄", "JPG to PNG", "Convert JPG images to PNG in your browser.", "/tools/jpg-to-png"],
  ["🔄", "PNG to JPG", "Convert PNG images to JPG quickly.", "/tools/png-to-jpg"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <Link href="/" className="logo">Pic<span>Tools</span></Link>
        <div className="navlinks">
          <Link href="/tools/compressor">Compressor</Link>
          <Link href="/tools/resizer">Resizer</Link>
          <Link href="/tools/jpg-to-png">JPG → PNG</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="badge">⚡ Fast • Free • Browser based</div>
        <h1>Simple image tools.<br/><span>Made for everyone.</span></h1>
        <p>Compress, resize and convert your images online. No complicated software. Your files are processed right in your browser.</p>
        <Link className="primary" href="/tools/compressor">Try Image Compressor →</Link>
      </section>

      <section className="tools">
        <div className="sectionTitle">
          <p>OUR TOOLS</p>
          <h2>Everything you need for everyday images</h2>
        </div>
        <div className="grid">
          {tools.map(([icon, title, desc, href]) => (
            <Link className="card" href={href} key={title}>
              <div className="icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <b>Open tool →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="why">
        <div><strong>100%</strong><span>Browser based</span></div>
        <div><strong>Free</strong><span>To get started</span></div>
        <div><strong>Simple</strong><span>No signup needed</span></div>
      </section>

      <footer>© 2026 PicTools · Free online image utilities</footer>
    </main>
  );
}