import React, { useEffect } from "react";

export const ScrollEventTrigger = ({ incrementPage }) => {
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        incrementPage();
        console.log("hi"); // Trigger the console log
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <></>;
};
