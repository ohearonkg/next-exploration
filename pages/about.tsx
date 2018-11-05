import Link from "next/link";
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton/CustomButton";

export default () => (
  <Layout title="About | Next.js + TypeScript Example">
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <CustomButton text="Hello" />
  </Layout>
);
