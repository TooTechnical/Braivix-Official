"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background layers (static, no animation) */}
      <div className={styles.gradientBase} />
      <div className={styles.vignette} />

      {/* Animated content */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1], // exact "ease-out" curve used in premium UI
        }}
      >
        <h1>New challenges — new finance</h1>

        <p>
          We create financial products for the modern economy and turn technology
          into financial solutions for people and companies.
        </p>

        <div className={styles.ctaRow}>
          <span>Ready to get new opportunities?</span>
          <button>Sign Up</button>
        </div>
      </motion.div>
    </section>
  );
}
