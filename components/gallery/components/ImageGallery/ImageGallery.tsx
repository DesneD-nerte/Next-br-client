import React from "react";
import { IDataGallery } from "@root/models/IDataGallery";
import OneImageGallery from "./OneImageGallery/OneImageGallery";

interface imageGalleryProps {
    data: IDataGallery[];
    currentIndex: number;
}

function ImageGallery({ data, currentIndex }: imageGalleryProps) {
    return (
        <>
            {data.map((oneData, index) => {
                return (
                    <OneImageGallery
                        urlImage={oneData.urlImage}
                        url={oneData.url}
                        name={oneData.name}
                        description={oneData.description}
                        myIndex={index}
                        currentIndex={currentIndex}
                        count={data.length}
                        key={index}
                    />
                );
            })}
        </>
    );
}

export default ImageGallery;
