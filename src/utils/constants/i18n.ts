const fallbackLng = "en";
const languages = [fallbackLng, "de"];
const defaultNS = "translation";
const cookieName = "i18next";

export const i18nConstants = {
    fallbackLng,
    languages,
    cookieName,
    getOptions: (lng: string = fallbackLng, ns: string | Array<string> = defaultNS) => ({
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    }),
};
