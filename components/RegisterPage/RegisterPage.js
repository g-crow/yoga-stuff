import styles from "./RegisterPage.module.css";
import { TextField } from "@material-ui/core";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Hey, bear with me 🔨</h1>
        <h1 className={styles.title}>I'm still working on how class sign ups should work</h1>
        <p className={styles.eventTitle}>In the meantime, please share your email:</p>
        <TextField color="white"/>
        <p className={styles.eventTitle}>I'll keep you in the loop about what's happening with the [day] yoga session.</p>
    </div>
  )
};

export default RegisterPage;
