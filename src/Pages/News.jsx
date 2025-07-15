import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
const Video = [
  {
    video: "https://www.youtube.com/embed/P8qF8C8PeZ8",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/QVaLERuq19Y",
    title: "Kundali Bhagya | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/pnfjSj99dpU",
    title: "राधाकृष्ण | RadhaKrishn | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/GRspb2J-55M",
    title: "Rabb Se Hai Dua | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/xKBWN3r5JEk",
    title: "Pyar ka Pahla Naam Radha Mohan | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/7bfR_xvRV0A",
    title: "Bhagya Lakshmi | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/VchyUCVDnvE",
    title: "Sa Re Ga Ma Pa Lil Champs | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/J1Wrbuf5aTY",
    title: "Rab Se Hai Dua | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/8wMyr_jeEjY",
    title: "Highway Dreams | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/e7hhoLkZMwY",
    title: "Sa Re Ga Ma  | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/gqF_7lcxXt8",
    title: "Pyar Ka Pahla Naam Radha Mohan | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/NLQ7Xgcn19E",
    title: "Bhagya Lakshmi | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/NcrMPbmOILU",
    title: "Kanika Mann Show | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/NcrMPbmOILU",
    title: "Doosri Maa | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/APEqtqm6SN8",
    title: "Bhabi Ji Ghar Par Hai | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/21_zvZV4vtk",
    title: "BR Ambedkar Hindi | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/b3JJtG0Qzu8",
    title: "Doosri Maa | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/KpExC0RhRw8",
    title: "Maa Before & Tv | Zee TV Premiere",
  }
];

const News = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box><Box color="Grey" fontSize="33px" textAlign="Left" fontWeight="bold" width="83.5%" margin="auto" marginBottom="30px"> 
      Zee Play Premiere : News 
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
            <Text>{el.title}</Text>
          </GridItem>
        ))}
      </Grid>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default News;
