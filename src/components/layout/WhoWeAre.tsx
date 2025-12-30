"use client";

import { motion } from "framer-motion";
import styles from "./WhoWeAre.module.css";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className={styles.section}>
      {/* Angled light plane (static) */}
      <div className={styles.lightPlane} />

      {/* Animated content */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h2>Who We Are</h2>

        <p>
          BrAlvix is a financial company designing intentional financial services —
          solutions tailored to help modern companies work across borders,
          reduce friction, and connect faster.
        </p>

        <p>
          We build tools that help businesses grow without borders and without
          unnecessary complexity.
        </p>
      </motion.div>
    </section>
  );
}
