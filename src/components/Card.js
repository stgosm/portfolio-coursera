import { Heading, Box, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, projectUrl }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box spacing={4} bg="#B2B3B8" rounded="xl" overflow="hidden">
      <Box roundedBottom="xl" overflow="hidden">
        <Image src={imageSrc} />
      </Box>
      <VStack spacing={4} p={4} alignItems="flex-start">
        <Heading size='md' as='h5' color="gray.900">
          {title}
        </Heading>
        <Text fontSize='sm' color="gray.900">
          {description}
        </Text>
        <Text fontSize='md' color="gray.900" _hover={{color: "gray.900"}}>
          <Link href={projectUrl} isExternal>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x"/>
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default Card;
