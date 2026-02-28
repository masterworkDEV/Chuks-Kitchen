import { NextPage } from "next";

interface Props {}

const Loading: NextPage<Props> = ({}) => {
  return (
    <main className="h-screen flex items-center justify-center">
      <h1 className="text-black text-2xl">Loading please wait </h1>
    </main>
  );
};

export default Loading;
