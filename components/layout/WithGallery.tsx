import React from "react";
import { IDataGallery } from "../../models/IDataGallery";
import MainGallery from "../MainGallery/MainGallery";

type galleryProps = {
    data: IDataGallery[];
    children: JSX.Element;
};

const WithGallery = React.memo(({ data, children }: galleryProps) => {
    return (
        <>
            <MainGallery data={data}></MainGallery>
            {children}
        </>
    );
});

export default WithGallery;
