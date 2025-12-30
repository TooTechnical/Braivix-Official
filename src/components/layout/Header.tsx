import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src="/images/logo.svg" alt="Braivix logo" />
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <button>Request access</button>
        </div>
      </div>
    </header>
  );
}
