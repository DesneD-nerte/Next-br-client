import { CircularProgress } from "@mui/material";
import WithGallery from "../../components/layout/WithGallery";
import { IDataGallery } from "../../models/IDataGallery";
import styles from "../../styles/Home.module.css";

const data: IDataGallery[] = [
    {
        urlImage: "/Hero.avif",
        url: "/search",
        name: "Women lol",
        description: "Some Descr",
    },
    {
        urlImage: "/Trap.png",
        url: "/search",
        name: "New name",
        description: "Go to the shop",
    },
];

const WomenPage = () => {
    return (
        <WithGallery data={data}>
            <main className={styles.main}>
                <CircularProgress sx={{ color: "#2c2c2c" }}></CircularProgress>
            </main>
        </WithGallery>
    );
};

export default WomenPage;
