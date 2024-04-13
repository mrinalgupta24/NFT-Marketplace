import React, { useState, useEffect, useContext } from "react";
//internal import

import Style from '../styles/index.module.css'
import { Video, Brand, Slider, FollowerTab, AudioLive, Collection, NFTCard, Filter, HeroSection, Title, Service, Subscribe, BigNFTSlider, Category } from '../components/componentsIndex'

import { NFTMarketplaceContext } from '../Context/NFTMarketplaceContext';



const Home = () => {

  const {checkIfWalletConnected} =  useContext(NFTMarketplaceContext)
  useEffect(() => {

    checkIfWalletConnected()
   
  }, [])
  
  
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life." />
      <AudioLive />
      {/* <Title heading="New Collection" */}
      {/* paragraph="Discover the most outstanding NFTs in all topics of life." /> */}
      <FollowerTab />
      {/* <Title heading="Explore NFTs Video"
        paragraph="Click on play icon & enjoy Nfts Video" /> */}
      <Slider />
      <Collection />
      <Title heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life." />
      <Filter />
      <NFTCard />
      <Title heading="Browse by category"
        paragraph="Explore the NFTs in the most faetured categories." />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  )
}

export default Home