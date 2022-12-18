import React from "react";
import styles from "../Styles/Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

const Footer2 = () => {
  return (
    <div style={{ marginTop: "30px", backgroundColor: "#0f0617" }}>
      <hr />
      {/*Table section for new release dates  */}
      <h1 className={styles.Thead}
        style={{
            width: "78%",
            margin: "auto",
            marginTop: "40px",
            marginBottom: "10px",
            marginLeft: "165px",
            color: "rgb(216, 211, 211)",
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "left"
          }}
      >Details About Tashan e Ishq Show :</h1>
      <div className={styles.Table}
          style={{
                width: "80%",
                color: "rgb(216, 211, 211)",
                margin: "auto",
                marginLeft: "165px",
                display: "flex",
                marginBottom: "40px",
                textAlign: "left"
          }}
      >
        {/* ...Table Ist row... */}
        <div
        // style={{
        //       border: "1px solid rgb(216, 211, 211)",
        //       padding: "10px",
        //       paddingRight: "378px",
        //   }}
          >
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">Show Released Date</a>
          </div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">Total Episodes</a>
          </div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">Total Episodes</a>
          </div>
        </div>
        {/* ...Table 2nd row... */}
        <div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">2015-08-09</a>
          </div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">322</a>
          </div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">Drama, Romance</a>
          </div>
        </div>
      </div>

      {/* 2nd box for TV Shows  */}
      <div className={styles.Shows}
      style={{
            width: " 80%",
            margin: "auto",
            display: "flex",
            textAlign: "left",
            justifyContent: "space-around",
            padding: "10px",
            gap: "20px",
            marginLeft: "143px",
            color: "white",
            flexDirection: "row"
          }}>
        {/* ...TV Shows By Language... */}
        <div>
          <p>TV Shows By Language</p>
          <div>
            <a href="/">Hindi TV Shows</a>
          </div>
          <div>
            {" "}
            <a href="/">Marathi TV Shows</a>
          </div>
          <div>
            <a href="/">Tamil TV Shows</a>
          </div>
          <div>
            <a href="/">Telugu TV Shows</a>
          </div>
          <div>
            <a href="/">Malayalam TV Shows</a>
          </div>
        </div>
        {/* ...TV Shows By Genes... */}
        <div>
          <p>TV Shows By Genes</p>
          <div>
            <a href="/">Drama TV Shows</a>
          </div>
          <div>
            {" "}
            <a href="/">Romantic</a>
          </div>
          <div>
            <a href="/">Family TV Shows</a>
          </div>
          <div>
            <a href="/">Comedy Shows</a>
          </div>
          <div>
            <a href="/">Reality TV Shows</a>
          </div>
        </div>
        {/* ...TV Shows By Channel... */}
        <div>
          <p>TV Shows By Channel</p>
          <div>
            <a href="/">Zee TV Shows</a>
          </div>
          <div>
            {" "}
            <a href="/">&TV Shows</a>
          </div>
          <div>
            <a href="/">Zee Tamil Shows</a>
          </div>
          <div>
            <a href="/">Zee Marathi Shows</a>
          </div>
          <div>
            <a href="/">Zee Bangla Shows</a>
          </div>
        </div>
        {/* ...Must Watch Hindi TV Shows... */}
        <div>
          <p>Must Watch Hindi TV Shows</p>
          <div>
            <a href="/">Jodha Akbar</a>
          </div>
          <div>
            {" "}
            <a href="/">Yeh Teri Galiyan</a>
          </div>
          <div>
            <a href="/">Apna Time Bhi Ayega</a>
          </div>
          <div>
            <a href="/">Pavitra Rishta</a>
          </div>
          <div>
            <a href="/">Teri Meri Ikk Jindri</a>
          </div>
        </div>
        {/* ...Must Watch Marathi TV Shows... */}
        <div>
          <p>Must Watch Marathi TV Shows</p>
          <div>
            <a href="/">Mazhi Tuzhi</a>
          </div>
          <div>
            {" "}
            <a href="/">Yeu Kashi Tashi</a>
          </div>
          <div>
            <a href="/">Lagira Zhala Jee</a>
          </div>
          <div>
            <a href="/">Man Udu Udu Zhala</a>
          </div>
          <div>
            <a href="/">Phulpakhru</a>
          </div>
        </div>
        {/* ...Latest TV Shows... */}
        <div>
          <p>Latest TV Shows</p>
          <div>
            <a href="/">Riston ka Manjha</a>
          </div>
          <div>
            {" "}
            <a href="/">Meet</a>
          </div>
          <div>
            <a href="/">Bhagya Lakhshmi</a>
          </div>
          <div>
            <a href="/">Comedy Shows</a>
          </div>
          <div>
            <a href="/">Ghar Ek Mandir</a>
          </div>
        </div>
      </div>

      {/* 3rd box for App & SocialMedia  */}
      {/* 1rd box for App & SocialMedia  */}
      {/* <hr /> */}
      <div style={{
            width: " 80%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
            gap: "20px",
            color: "white",
            flexDirection: "row"
          }}>
        <div
          className={styles.DApp}
          style={{
            width: " 80%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
            gap: "20px",
            color: "white",
            flexDirection: "row"
          }}
        >
          <p>Download apps</p>
          <img
            width="123px"
            height="37"
            src="https://www.zee5.com/images/play_store.png?ver=2.51.65"
            alt="playstore"
          />
          <img
            width="123px"
            height="37"
            src="https://www.zee5.com/images/app_store.png?ver=2.51.65"
            alt="applestore"
          />
        </div>
        <div
          className={styles.App}
          style={{
            width: " 80%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
            gap: "20px",
            color: "white",
            flexDirection: "row"
          }}
        >
          <p>Connect with us</p>
          <FaFacebookSquare />
          <RiInstagramFill />
          <FaTwitter />
          <GrYoutube />
        </div>
      </div>
      {/* 2rd box for About & Help  */}
      <div className={styles.About}>
        <h5
          style={{
            width: "50%",
            marginLeft: "165px",
            color: "white",
            fontWeight: "lighter",
            fontSize: " 14px",
            textAlign: "left"
          }}
        >
          About us | Help Center | Privacy Policy | Terms of Use
        </h5>
        <br />
      </div>
      {/* 3rd box for Popular TV Shows & Movies */}
      <div
        className={styles.Shows}
        style={{
          width: " 80%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          textAlign: "start"
        }}
      >
        {/* ...Popular TV Shows... */}
        <div>
          <p>Popular TV Shows</p>
          <div>
            <a
              href="/"
              // _hover={{
              //   fontWeight: "bold",
              //   color: "rgba(219, 166, 247, 0.816)"
              // }}
              style={{
                fontSize: "14px",
                color: "grey",
                textAlign: "left",
                alignItems: "flex-start"
              }}
            >
              Kumkum Bhagya
            </a>
          </div>
          <div>
            {" "}
            <a href="/">Kundali Bhagya</a>
          </div>
          <div>
            <a href="/">Bhagya Lakshmi</a>
          </div>
          <div>
            <a href="/">Tujhse Hai Rabta</a>
          </div>
          <div>
            <a href="/">Kyun Riston Mein</a>
          </div>
        </div>
        {/* ...Premium Movies... */}
        <div>
          <p>Premium Movies</p>
          <div>
            <a href="/">Sonam Gupta Bewafa Hai?</a>
          </div>
          <div>
            {" "}
            <a href="/">Helmet</a>
          </div>
          <div>
            <a href="/">200 Halla Ho</a>
          </div>
          <div>
            <a href="/">14 Phere</a>
          </div>
          <div>
            <a href="/">Dial 100</a>
          </div>
        </div>
        {/* ...Popular LIVE TV Channels... */}
        <div>
          <p>Popular LIVE TV Channels</p>
          <div>
            <a href="/">Aaj Tak</a>
          </div>
          <div>
            {" "}
            <a href="/"> Zee News</a>
          </div>
          <div>
            <a href="/">Zee TV HD</a>
          </div>
          <div>
            <a href="/">&TV HD</a>
          </div>
          <div>
            <a href="/">Zee Marathi HD</a>
          </div>
        </div>
        {/* ...Popular Web Series... */}
        <div>
          <p>Popular Web Series</p>
          <div>
            <a href="/">Sunflower</a>
          </div>
          <div>
            {" "}
            <a href="/">Jeet Ki Zid</a>
          </div>
          <div>
            <a href="/">Bicchoo Ka Khel</a>
          </div>
          <div>
            <a href="/">State of Seige: 26/11</a>
          </div>
          <div>
            <a href="/">Tripling</a>
          </div>
        </div>
        {/* ...Bollywood Top Celebrities... */}
        <div>
          <p>Bollywood Top Celebrities</p>
          <div>
            <a href="/">Suuny Leone</a>
          </div>
          <div>
            {" "}
            <a href="/">Disha Patani</a>
          </div>
          <div>
            <a href="/">Deepika Padukone</a>
          </div>
          <div>
            <a href="/">Salman Khan</a>
          </div>
          <div>
            <a href="/">Nora Fatehi</a>
          </div>
        </div>
        {/* ...Games & News... */}
        <div>
          <p>Games & News</p>
          <div>
            <a href="/">Play</a>
          </div>
          <div>
            {" "}
            <a href="/">Stories</a>
          </div>
          <div>
            <a href="/">Articles</a>
          </div>
        </div>
      </div>

      {/* 4rd box bottom copyright */}
      <div
        className={styles.copyright}
        style={{
          fontWeight: "400",
          color: "grey",
          width: "75%",
          margin: "auto",
          marginTop: "50px",
          display: "flex",
          flexDirection: " column",
          justifyContent: " space-between",
          alignItems: "flex-start"
        }}
      >
        <div>
          <h6>
            Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla
            Firefox 75+, Safari 5.1.5+
          </h6>
        </div>
        <div>
          <h6>
            Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights
            reserved.
          </h6>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Footer2;
