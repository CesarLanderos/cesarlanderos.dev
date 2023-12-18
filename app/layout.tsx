import "bulma/css/bulma.css";
import { Metadata, Viewport } from "next";
import { Sono } from "next/font/google";
import Header from "../components/header";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "César Landeros",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const sono = Sono({
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
  variable: "--font-sono",
});

const RootLayout: React.FC<React.PropsWithChildren> = ({
  children = undefined,
}) => {
  return (
    <html lang="en">
      <body className={`${sono.variable} font-mono`}>
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Header />
            {children}
          </div>
        </div>
        s
      </body>
    </html>
  );
};

export default RootLayout;
