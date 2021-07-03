import styles from "./RegisterPage.module.css";
import { TextField } from "@material-ui/core";

const RegisterPage = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Hey, bear with me 🔨</h1>
        <h1 className={styles.title}>
          I'm still working on how class sign ups should work
        </h1>
        Feel free to connect at{" "}
        <a href="mailto: genevieve@hey.com.">
          <span className={styles.link}>genevieve@hey.com</span>
        </a>{" "}
        💫
      </div>
    </>
  );
};

export default RegisterPage;
