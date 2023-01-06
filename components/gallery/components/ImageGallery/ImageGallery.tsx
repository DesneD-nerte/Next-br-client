import React from "react";
import { IDataGallery } from "@root/models/IDataGallery";
import OneImageGallery from "./OneImageGallery/OneImageGallery";
import ImageControlPanel from "../ImageControlPanel/ImageControlPanel";

interface imageGalleryProps {
    data: IDataGallery[];
    currentIndex: number;
    handleChangeImage: (indexImage: number) => void;
}

function ImageGallery({ data, currentIndex, handleChangeImage }: imageGalleryProps) {
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
            <ImageControlPanel
                data={data}
                currentIndex={currentIndex}
                handleChangeImage={handleChangeImage}
            />
        </>
    );
}

export default ImageGallery;
