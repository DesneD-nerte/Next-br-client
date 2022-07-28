import type { NextPage } from "next";
import MainLayout from "../../components/layout/MainLayout";
import WithoutGallery from "../../components/layout/WithoutGallery";

const Search: NextPage = () => {
    return (
        <>
            <MainLayout>
                <WithoutGallery></WithoutGallery>
            </MainLayout>
        </>
    );
};

export default Search;
