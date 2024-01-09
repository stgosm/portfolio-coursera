import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I'm stgosm!";
const bio1 = "A Frontend Engineer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2c3d55"
  >
    <Avatar name="stgosm avatar" size='xl' src="https://github.com/stgosm.png?size=460"/>
    <VStack>
      <Heading as='h2' size='sm' mb={4}>{greeting}</Heading>
      <Heading size='xl'>{bio1}</Heading>
      <Heading size='xl'>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
