"use client";

import { motion } from "framer-motion";
import styles from "./LightDivider.module.css";

export default function LightDivider() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.beamWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className={styles.beam} />
        <div className={styles.glow} />
      </motion.div>
    </section>
  );
}
