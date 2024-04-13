import React from 'react';
import Image from 'next/image';

//internal imoport 
import Style from './Service.module.css';
import { Button } from '../componentsIndex';
import images from '../../img';

const HeroSection = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter and Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span> Step 1</span>
          </p>
          <h3>Filter  Discover</h3>
          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
          </p>

        </div>

        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter and Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span> Step 2</span>
          </p>
          <h3>Filter & Discover</h3>

          <p>
            Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
          </p>

        </div>

        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Filter and Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span> Step 3</span>
          </p>
          <h3>Connect Wallet</h3>

          <p>
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money

          </p>
        </div>


        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="Filter and Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span> Step 4</span>
          </p>
          <h3> Start trading</h3>
          <p>
          Connect with wallet, discover, buy NTFs, sell your NFTs and earn money
          </p>

        </div>


      </div>
    </div>
  )
};

export default HeroSection