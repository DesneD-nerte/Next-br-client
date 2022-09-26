import { useTranslation } from "next-i18next";
import React from "react";
import FooterColumn from "./components/FooterColumn";
import styles from "./Footer.module.scss";

const Footer = () => {
    const firstLinksColumn = [
        { name: "footerHelpColumn-FAQs", href: "/faqs" },
        { name: "footerHelpColumn-siteMap", href: "/sitemap" },
    ];
    const secondLinksColumn = [
        { name: "footerCompanyColumn-BR", href: "/about" },
        { name: "footerCompanyColumn-PrivacyAndCookies", href: "/cookies" },
    ];
    const thirdLinksColumn = [
        { name: "footerContantsColumn-Instagram", href: "/instagram" },
        { name: "footerContantsColumn-Facebook", href: "/facebook" },
    ];

    const { t } = useTranslation("footer");

    return (
        <footer className={styles.footerContainer}>
            <FooterColumn
                links={firstLinksColumn}
                title={t("footerHelpColumn")}
                key={1}
            ></FooterColumn>
            <FooterColumn
                links={secondLinksColumn}
                title={t("footerCompanyColumn")}
                key={2}
            ></FooterColumn>
            <FooterColumn
                links={thirdLinksColumn}
                title={t("footerContantsColumn")}
                key={3}
            ></FooterColumn>
        </footer>
    );
};

export default React.memo(Footer);
