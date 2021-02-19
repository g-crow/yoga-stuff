import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import SchedulePage from "../components/SchedulePage/SchedulePage";

export default function Schedule() {
  return (
    <>
      <Head>
        <title>Yoga with Genevieve - Register</title>
        <link rel="icon" href="/fox_blue.ico" />
      </Head>
      <Navigation />
      <SchedulePage />
    </>
  );
}
