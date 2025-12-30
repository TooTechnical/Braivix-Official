"use client";

import { motion } from "framer-motion";
import styles from "./FeatureGrid.module.css";

const features = [
  {
    title: "Data Integrity",
    text:
      "All financial indicators are derived from source documents without smoothing, guessing, or estimation.",
  },
  {
    title: "Audit-Ready Outputs",
    text:
      "Every calculation is traceable, explainable, and suitable for institutional review.",
  },
  {
    title: "Risk Signal Clarity",
    text:
      "Risk indicators are presented with confidence bands and contextual warnings, not single scores.",
  },
  {
    title: "Cross-Border Compatibility",
    text:
      "Designed for institutions operating across jurisdictions, currencies, and reporting standards.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className={styles.section}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2>Designed for Institutional Reality</h2>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
