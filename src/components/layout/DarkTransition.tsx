import styles from "./DarkTransition.module.css";

export default function DarkTransition() {
  return (
    <section className={styles.section}>
      <div className={styles.fadeTop} />
      <div className={styles.fadeBottom} />
    </section>
  );
}
