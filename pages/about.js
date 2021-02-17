import Head from "next/head";
import Navigation from "../components/Navigation/Navigation"
import AboutPage from "../components/AboutPage/AboutPage"

export default function About() {
  return (
    <>
      <Head>
        <title>Yoga with Genevieve - About</title>
        <link rel="icon" href="/fox_blue.ico" />
      </Head>
      <Navigation />
      <AboutPage />
    </>
  );
}
