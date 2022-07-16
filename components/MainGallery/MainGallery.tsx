import Image from "next/image";
import { relative } from "path";
import React from "react";
import ImageGallery from "./components/ImageGallery";

function MainGallery() {
    return (
        <div style={{ position: "relative" }}>
            <button
                style={{ position: "absolute", top: "50%" }}
                onClick={(e) => console.log(123)}
            >
                Left
            </button>
            <ImageGallery></ImageGallery>
            <button
                style={{ position: "absolute", top: "50%", right: 0 }}
                onClick={(e) => console.log(123)}
            >
                Right
            </button>
        </div>
    );
}

export default MainGallery;
