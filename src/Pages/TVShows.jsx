import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
const music = [
  {
    video: "https://youtu.be/P8qF8C8PeZ8",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://youtu.be/QVaLERuq19Y",
    title: "Kundali Bhagya | Zee TV Premiere",
  },
  {
    video: "https://youtu.be/pnfjSj99dpU",
    title: "राधाकृष्ण | RadhaKrishn | Zee TV Premiere",
  },
  {
    video: "https://youtu.be/GRspb2J-55M",
    title: "Rabb Se Hai Dua | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/pnfjSj99dpU",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/GRspb2J-55M",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/H6tFxphsZQs",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/vg0ZfeszGrU",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/tpFljbJxZiw",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/D4fC4HVpP3M",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/T-ztCxK4H00",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/8Z8qobg8UdA",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/PJGVDaSaQWQ",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/uaCYeQ9FtSI",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/ReXw6TOnUOc",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/i2GC06euEDE",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/iMdH_G4N9nY",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/OulN7vTDq1I",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/bzW9fmwcmG4",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/q1wK0r51ARs",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/NrXdauEv9HY",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/Wr2NN4VQ1nI",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/TwFBtV13KQQ",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/EpJk_dSpjVM",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/-j0dlcfekqw",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/JOX09U8noOE",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/JYodEWUdIso",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/A66TYFdz8YA",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/PWaPCqeCfeY",
    title: "Mett | Zee TV Premiere",
  },
  {
    video: "https://www.youtube.com/embed/BJahIa255qc",
    title: "Mett | Zee TV Premiere",
  },
];

const TVShows = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Grid gridTemplateColumns="repeat(3,1fr)" width="90%" margin="auto" gap="20px">
        {music.map((el) => (
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

export default TVShows;
