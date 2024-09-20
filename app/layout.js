import "./globals.css";



export const metadata = {
  title: "Orrator-AI",
  description: "Powerup your speaking skills and ace thst upcoming interview with out AI powered speaking coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      //defult dark theme
        className="bg-gray-900 text-white"
      >
        {children}
      </body>
    </html>
  );
}
