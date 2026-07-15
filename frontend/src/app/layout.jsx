import "../styles/globals.css";

export const metadata = {
  title: "Fortunate Interiors",
  description: "App description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
      {children}
      </body>

    </html>
  );
}
