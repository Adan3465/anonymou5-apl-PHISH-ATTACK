import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="theme-color"
          content="#05060b"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>GCSE Master Academy | Premium Science & Careers Hub</title>
        <meta
          name="description"
          content="GCSE Master Academy offers premium GCSE and A-Level science revision, cyber security labs, and elite career pathways with quizzes, notes, and downloadable resources."
        />
      </Head>
      <div className="flex min-h-screen flex-col bg-slate-950">
        <Navbar />
        <main className="flex-1 pt-24">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
