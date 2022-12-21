import React from 'react';
import AboutFurniture from '../AboutFurniture/AboutFurniture';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import DesignQuote from '../DesignQuote/DesignQuote';
import LatestBlog from '../LatestBlog/LatestBlog';
import NewDesign from '../NewDesign/NewDesign';
import ProductCategories from '../ProductCategories/ProductCategories';
import TrendingProducts from '../TrendingProducts/TrendingProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <AboutFurniture></AboutFurniture>
            <ProductCategories></ProductCategories>
            <TrendingProducts></TrendingProducts>
            <NewDesign></NewDesign>
            <LatestBlog></LatestBlog>
            <DesignQuote></DesignQuote>
        </div>
    );
};

export default Home;