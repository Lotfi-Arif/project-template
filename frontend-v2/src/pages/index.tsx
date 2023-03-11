import type { NextPage } from "next";
import { Nav } from "../components/navbar/navbar";
import { Layout } from "../components/navbar/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Nav />
      Hello
    </Layout>
  );
};

export default Home;
