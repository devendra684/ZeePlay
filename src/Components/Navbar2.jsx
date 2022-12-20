import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavLoginSec from "./NavLoginSec";
import NavLogoSec from "./NavLogoSec";
import NavSearchSec from "./NavLogin";
import "../Styles/App.css"

export default function Navbar() {
  return (
    <Box className="Navbar" 
    bg="#0F0617" 
    // margin="auto"
    height= "73px"
    >
      <Flex justify="space-between">
        <NavLogoSec></NavLogoSec>
        <NavSearchSec></NavSearchSec>
        <NavLoginSec></NavLoginSec>
      </Flex>
    </Box>
  );
}
