import React, { useEffect, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import { SocialIcon } from "react-social-icons";
import Typewriter from "typewriter-effect";

const ContactsPageView = ({ view }: any) => {
  const [display, setDisplay] = useState(true);

  const [springs, apis] = useSprings(5, (index) => ({
    from: {
      opacity: 0,
      y: -100,
    },
  }));

  useEffect(() => {
    if (view === "contacts") {
      setTimeout(() => {
        setDisplay(true);
        apis.start((index) => ({
          to: {
            y: 0,
            opacity: 1,
          },
          delay: index * 200,
        }));
      }, 800);
    } else {
      apis.start((index) => ({
        to: {
          y: -100,
          opacity: 0,
        },
        delay: index * 200,
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
          className=" first-screen pb-36 w-screen main-bg sm:mt-24 fixed "
          id="contactspage"
        >

          <div className=" flex flex-wrap justify-center mt-24 ">
            <animated.div
              style={{ ...springs[1] }}
              className="flex flex-col justify-center w-full sm:w-1/4  mx-12 mb-10 "
            >
              <div className="text-white text-xl  "> Addis Ababa, Ethiopia </div>
              <div className="text-white text-xl  "> +251946207915 </div>
             
              <a
                href="mailto:hope.miky1074@gmail.com"
                className="  text-teal-400 text-md font-mono hover:underline hover:font-bold hover:cursor-pointer"
              >
                {" "}
                samrawittesfahun19@gmail.com{" "}
              </a>
            </animated.div>

            <div className="flex flex-col justify-center sm:w-1/3 mx-5 ">
              <animated.div
                style={{ ...springs[2] }}
                className=" text-center mb-5 text-xl text-gray-400 font-thin "
              >
                {" "}
                Lets chat :){" "}
              </animated.div>

              <animated.div
                style={{ ...springs[3] }}
                className="flex justify-center"
              >
                <SocialIcon
                  className="mx-3 hover:-translate-y-1 "
                  url="https://www.linkedin.com/in/samrawit-tesfahun-bb330a292/"
                  fgColor="white"
                />
                <SocialIcon
                  className="mx-3 hover:-translate-y-1 "
                  url="https://github.com/samritas"
                  bgColor="white"
                />
               
               
              </animated.div>
            </div>
          </div>

          {/* Desktop view */}
          <animated.div
            className=" hidden md:block text-bold text-white font-sans font-bold uppercase text-4xl sm:text-5xl md:mt-48 ml-12"
            style={{ ...springs[0] }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #66b2b2; font-size: 45px;">100.<br /></span> <span style="font-size: 85px;">Contacts</span>'
                  )
                  .start();
              }}
            />
          </animated.div>

          {/* Mobile view */}
          <animated.div
            className=" md:hidden  text-bold text-white font-sans font-bold uppercase text-4xl sm:text-5xl mt-12 md:mt-48 ml-12"
            style={{ ...springs[0] }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #66b2b2; font-size: 25px;">100.<br /></span> <span style="font-size: 50px;">Contacts</span>'
                  )
                  .start();
              }}
            />
          </animated.div>
        </div>
      )}
    </>
  );
};

export default ContactsPageView;
