import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokedex",
  description: "Generated with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/pokeicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
