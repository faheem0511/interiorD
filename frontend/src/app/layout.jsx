import "../styles/globals.css";

export const metadata = {
  title: "DecorWise",
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
