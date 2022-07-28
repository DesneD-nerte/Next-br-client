import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div>
                <text>NEED HELP?</text>
                <ul className={styles.ulFooter}>
                    <li>
                        <Link href="/">
                            <a>FAQs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Sitemap</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <text>COMPANY</text>
                <ul className={styles.ulFooter}>
                    <li>
                        <Link href="/">
                            <a>About BR</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Privacy & Cookies</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <text>CONTACT US</text>
                <ul className={styles.ulFooter}>
                    <li>
                        <Link href="/">
                            <a>Instagram</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Facebook</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
