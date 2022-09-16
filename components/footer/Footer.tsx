import React from "react";
import FooterColumn from "./components/FooterColumn";
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
        { name: "Instagram", href: "/instagram" },
        { name: "Facebook", href: "/facebook" },
    ];

    return (
        <footer className={styles.footerContainer}>
            <FooterColumn
                links={firstLinksColumn}
                title="NEED HELP?"
                key={1}
            ></FooterColumn>
            <FooterColumn
                links={secondLinksColumn}
                title="COMPANY"
                key={2}
            ></FooterColumn>
            <FooterColumn
                links={thirdLinksColumn}
                title="CONTACT US"
                key={3}
            ></FooterColumn>
        </footer>
    );
};

export default React.memo(Footer);
