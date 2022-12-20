import { 
  Box, 
  Grid, 
  GridItem, 
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from "@chakra-ui/react";
import React from "react";
// import { Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
// import {useState} from "react";

const Video = [
  {
    video: "https://www.youtube.com/embed/K7Z47_WeT84",
    title: "Pitchers 2 | ZEE5 Original",
  },
  {
    video: "https://www.youtube.com/embed/ud4q6pWukpQ",
    title: "Tadka | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/-0d7TVQ-SpM",
    title: "Mithya | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/9wZ-qHE1w3o",
    title: "Mukhbir | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/jX97ow4LNSM",
    title: "Pitchers Ashneer | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/CZ_VAKOkI3s",
    title: "Forensic | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/KNjBhoxNpvw",
    title: "Blurr | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/eoIO5-O2Qvk",
    title: "SunFlower | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/JvW2cg3utis",
    title: "LalBazaar | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/QblXRGSTJlU",
    title: "Rangbaar  | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/w126lwvMXOA",
    title: "Padamati | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/9ljbq9lM5GQ",
    title: "India Lockdown | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/d7rhloDcDD4",
    title: "Poison | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/gso7gmZdvzY",
    title: "Silence | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/uvSkdTmRMx8",
    title: "Country Mafia | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/dgnhX3fyAkM",
    title: "Rangbaar Phirse | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/Mm9ZIBkMOvc",
    title: "Shadayanta| Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/5MDhvzxQ24E",
    title: "Achaar | Zee TV Premiere",
  }
];


const WebSeries = () => {

  return (

    <Box>
      <Box>
        <Navbar />
      </Box><Box color="Grey" fontSize="33px" textAlign="Left" fontWeight="bold" width="83.5%" margin="auto" marginBottom="30px"> 
      Zee Play Premiere : WebSeries 
      </Box>
      <Grid gridTemplateColumns="repeat(3,1fr)" width="90%" margin="auto" gap="20px">
        {Video.map((el) => (
          <GridItem margin="auto">
            <iframe
              src={el.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <Text 
                padding={3.5}
                fontSize={15}>
                  {el.title}
            </Text>

            <Button
                size="sm"
                padding={3.5}
                fontSize={15}
                // w={140}
                width="80%"
                colorScheme="purple"
                _hover={{ background: "#8230E9", color: "white" }}
              >
                {/* <Navigate to="/player"> 
                  Watch Full
                </Navigate>  */}
                <Breadcrumb>
                <BreadcrumbItem
              // bg="#0F0617"
              // _hover={{ background: "#0F0617", textDecoration: "underline" }}
            >
              <BreadcrumbLink href="/player">Watch</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
              </Button>

                  
          </GridItem>
        ))}
      </Grid>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default WebSeries;


