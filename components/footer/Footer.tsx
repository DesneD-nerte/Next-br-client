import React from "react";
import FooterColumn from "./components/footerColumn";
import styles from "./Footer.module.scss";

const Footer = () => {
    const firstLinksColumn = [
        { name: "FAQs", href: "/faqs" },
        { name: "Sitemap", href: "/sitemap" },
    ];
    const secondLinksColumn = [
        { name: "BR", href: "/about" },
        { name: "Privacy & Cookies", href: "/cookies" },
    ];
    const thirdLinksColumn = [
        { name: "Instagram", href: "/" },
        { name: "Facebook", href: "/" },
    ];

    return (
        <footer className={styles.footerContainer}>
            <FooterColumn links={firstLinksColumn} title="NEED HELP?"></FooterColumn>
            <FooterColumn links={secondLinksColumn} title="COMPANY"></FooterColumn>
            <FooterColumn links={thirdLinksColumn} title="CONTACT US"></FooterColumn>
        </footer>
    );
};

export default React.memo(Footer);
