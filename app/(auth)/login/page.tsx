import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <main className="h-screen flex items-center justify-center">
      <h1 className="text-black text-2xl">Login</h1>
    </main>
  );
};

export default Page;
