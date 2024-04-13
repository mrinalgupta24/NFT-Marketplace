import React from "react";
import Style from "./Footer.module.css";
import images from "../../img";
import Image from "next/image";
import { Discover, HelpCenter } from "../NavBar/index";
import {RiSendPlaneFill} from "react-icons/ri";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialSortedDown,
  TiSocialSortedUp,
} from "react-icons/ti";

function Footer() {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image
            src={images.logo}
            alt="footer logo"
            height={100}
            width={100}
          ></Image>
          <p>
            The world's first and largest digital marketplace for crypto
            collectibles and non-fungible token (NFTS). Buy, Sell and Discover
            exclusive digital items.
          </p>
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook></TiSocialFacebook>
            </a>
            <a href="#">
              <TiSocialLinkedin></TiSocialLinkedin>
            </a>
            <a href="#">
              <TiSocialTwitter></TiSocialTwitter>
            </a>
            <a href="#">
              <TiSocialYoutube></TiSocialYoutube>
            </a>
            <a href="#">
              <TiSocialInstagram></TiSocialInstagram>
            </a>
          </div>
        </div>
        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter the email *"></input>
            <RiSendPlaneFill
              className={Style.subscribe_box_send}
            ></RiSendPlaneFill>
          </div>
          <div className={Style.subscribe_box_info}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
              repellendus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;