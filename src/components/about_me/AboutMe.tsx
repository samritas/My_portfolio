import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import CircularImagesComponent from "./CircularImages";
import { BrowserView, MobileView } from "react-device-detect";
import Typewriter from "typewriter-effect";

const AboutMeView = ({ view }: any) => {
  const [display, setDisplay] = useState(false);

  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
      y: -100,
    },
  }));

  useEffect(() => {
    if (view === "about") {
      setTimeout(() => {
        setDisplay(true);
        api.start(() => ({
          to: {
            y: 0,
            opacity: 1,
          },
        }));
      }, 1000);
    } else {
      api.start(() => ({
        to: {
          y: -100,
          opacity: 0,
        },
      }));
      setTimeout(() => {
        setDisplay(false);
      }, 800);
    }
  }, [view]);

  return (
    <>
      {display && (
        <div
          className=" main-bg sm:py-32 md:py-0 w-screen flex flex-col justify-start "
          id="aboutmepage"
        >
          <animated.div
            style={{
              ...springs,
            }}
            className=" hidden md:inline text-bold text-white font-sans font-bold uppercase text-4xl sm:text-5xl ml-12 mt-12"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #66b2b2; font-size: 45px;">001.<br /></span> <span style="font-size: 85px;">About me</span>'
                  )
                  .start();
              }}
            />
          </animated.div>

          {/* Mobile view */}
          <animated.div
            style={{
              ...springs,
            }}
            className="md:hidden text-bold text-white font-sans font-bold uppercase text-4xl sm:text-5xl ml-12 mt-12"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #66b2b2; font-size: 25px;">001.<br /></span> <span style="font-size: 50px;">About me</span>'
                  )
                  .start();
              }}
            />
          </animated.div>

          <animated.div
            style={{
              ...springs,
            }}
          >
            <div className="flex flex-row w-screen mx-auto pb-24">
              <div className=" flex-1">
                <div className=" flex-col px-12 sm:px-40 min-w-min ">
                  <p className=" font-sans text-gray-200 my-4 text-justify ">
                    I am Samrawit Tesfahun, Software Developer based in Ethiopia.
                   I started my
                    developer journey since highschool studying HTML and CSS and
                    continued my BSc degree in Computer Scince at Unity Univerty.
                  </p>
                  <p className=" font-sans text-gray-200 my-4  text-justify ">
                  I'm a passionate developer specializing in front-end development, with a strong focus on building responsive and visually appealing user interfaces. With experience across various projects, I bring a versatile skill set in technologies like React, React Native, and Next.js, always eager to explore new tools and techniques to enhance my work.
                  </p>
                 
                </div>
              </div>
              <div className=" flex-1 md:flex justify-center hidden md:visible ">
                <div className="flex-1 flex flex-col justify-center ">
                  <div className=" fixed">
                    <CircularImagesComponent />
                  </div>
                  <StaticImage
                    className="ml-24 mt-24 w-64 border-2 rounded-full border-teal-500 p-5  "
                    src="../../assets/images/profile.jpeg"
                    alt="A dinosaur"
                  />
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
};

export default AboutMeView;
