import "./globals.css";

export const metadata = {
  title: "PicTools — Free Online Image Tools",
  description: "Compress, resize and convert images online for free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}