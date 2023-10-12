import { dir } from "i18next";
import { i18nConstants } from "@utils/constants/i18n";
import MainLayout from "@src/layouts/MainLayout";

export async function generateStaticParams() {
    return i18nConstants.languages.map((lng) => ({ lng }));
}

interface Props {
    children: React.ReactNode;
    params: {
        lng: string;
    };
}

export default function LanguageLayout({ children, params: { lng } }: Props) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <head />
            <MainLayout>{children}</MainLayout>
        </html>
    );
}
