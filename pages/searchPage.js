import React, { useEffect, useState, useContext } from "react";
import Style from "../styles/searchPage.module.css";
import { Slider, Brand } from "../components/componentsIndex";
import { SearchBar } from "../SearchPage/searchBarIndex";
import { Filter } from "../components/componentsIndex";
import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";


//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";




const searchPage = () => {
  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    // try {
      fetchNFTs().then((items) => {
        setNfts(items?.reverse());
        setNftsCopy(items);
        console.log(nfts);
      })
    });
    // } catch (error) {
      // setError("Please reload the browser", error);
    // }
  // }, []);
  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar 
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
         />
      <Filter />
      <NFTCardTwo NFTData={nfts} />
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
