import { Box, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar2";
import Footer2 from "./Footer2";


const Player = () => (
    <Box>
        <Box>
            <Navbar />
        </Box>
        <Box 
                color="White" 
                fontSize="33px" 
                textAlign="Left" 
                fontWeight="bold" 
                border={"2px solid grey"} 
                width="81%" 
                margin="auto" 
                padding="5px"
                marginBottom="40px"
                marginTop="30px">
                    Zee Play Premiere : Pitchers Season 2 | Official Trailer 🍿🍿🍿
        </Box>
        <GridItem 
        // gridTemplateColumns="repeat(3,1fr)" 
        width="90%" 
        margin="auto" 
        gap="20px"
        >
            {/* {Video((el) => ( */}
                <GridItem 
                border={"2px solid grey"}
                width="90%" 
                    margin="auto" 
                    gap="20px">
                    <iframe
                        // src={el.video}
                        width="100%" 
                        height="580px"
                        // justifyContent="center"
                        margin="auto" 
                        margin-left="10%" 
                        src={"https://www.youtube.com/embed/K7Z47_WeT84"}
                        title="YouTube video player"
                        frameborder="2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <Text
                        color="White" 
                        fontSize="28px" 
                        textAlign="Left" 
                        fontWeight="bold" 
                        // border={"2px solid grey"} 
                        width="97%" 
                        margin="auto" 
                        padding="5px"
                        marginBottom="40px"
                        marginTop="30px">
                    {/* {el.title} */}
                    {"Pitchers Season 2 | Official Trailer | #NEW ZEE5 Original | Premieres 23rd Dec 2022 on ZEE Play"}
                    </Text>
                {/* </GridItem> */}
            {/* ))} */}
        {/* </Grid> */}
        {/*Table section for new release dates  */}
      <h1 
        style={{
            width: "78%",
            margin: "auto",
            marginTop: "40px",
            marginBottom: "10px",
            marginLeft: "20px",
            color: "rgb(216, 211, 211)",
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "left"
          }}
      >Details About Pitchers Season 2 :</h1>
      <div 
          style={{
                // width: "94%",
                color: "rgb(216, 211, 211)",
                margin: "auto",
                marginLeft: "20px",
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
            <a href="/">Total Seasons</a>
          </div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">Genres</a>
          </div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">Cast</a>
          </div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">Director</a>
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
            <a href="/">2022-12-23</a>
          </div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">2</a>
          </div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">Drama, Comedy</a>
          </div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">Riddhi, Ashish, Abhishek</a>
          </div>
          <div 
              style={{
                    border: "1px solid rgb(216, 211, 211)",
                    padding: "10px",
                    paddingRight: "378px",
                }}>
            <a href="/">Vaibhav, Arunabh </a>
          </div>
        </div>
      </div>

      </GridItem>
      </GridItem>

        <Box marginTop="100px">
            <Footer2 />
        </Box>
    </Box>
);
  
  export default Player;
  