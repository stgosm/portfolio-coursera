import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: santiago.serrano.marquez@hotmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/stgosm",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/santiago-serrano-marquez/",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com/@stgosm",
  },
  {
    icon: faHackerrank,
    url: "https://www.hackerrank.com/stgosm",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headerRef])

  const handleScroll = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 200) {
      headerRef.current.style.transform = "translateY(-200px)"
    } else if (window.scrollY < 200) {
      headerRef.current.style.transform = "translateY(0)"
    }
  }
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={6}>
              {
                socials.map((item, index) => (
                <a key={index} href={item.url} target="_blank">
                  <FontAwesomeIcon 
                    icon={item.icon}
                    size="2x"
                  />
                </a>
                ))
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
