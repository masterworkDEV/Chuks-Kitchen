import { NextPage } from "next";

interface Props {}
import styles from "@/app/loader.module.css";

const Loading: NextPage<Props> = ({}) => {
  return (
    <main className="h-screen flex items-center justify-center">
      {/* <!-- From Uiverse.io by timlmit -->  */}
      <div className={styles["lds-spinner"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>{" "}
    </main>
  );
};

export default Loading;
