"use client";

import { motion } from "framer-motion";
import styles from "./ProductLegacyLoan.module.css";

export default function ProductLegacyLoan() {
  return (
    <section id="product" className={styles.section}>
      <div className={styles.inner}>
        {/* Text / Feature description */}
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className={styles.eyebrow}>Product</span>
          <h2>Legacy Loan Infrastructure</h2>

          <p>
            Legacy loans are one of the most complex financial instruments to
            manage across borders. BrAlvix modernises how legacy debt is
            structured, monitored, and optimised.
          </p>

          <p>
            Our platform gives institutions clarity, control, and predictive
            insight into loan portfolios — without introducing unnecessary risk
            or opacity.
          </p>

          <ul className={styles.points}>
            <li>Cross-border loan visibility</li>
            <li>Real-time monitoring and alerts</li>
            <li>Risk signals grounded in actual data</li>
          </ul>
        </motion.div>

        {/* Visual panel */}
        <div className={styles.visual}>
          <div className={styles.visualGlow} />
          <div className={styles.visualFrame} />
        </div>
      </div>
    </section>
  );
}
