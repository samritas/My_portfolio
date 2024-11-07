import { animated, useSpring, useSprings } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import "./sample.css";
import Typewriter from "typewriter-effect";

const LandingPageView = ({ setView, view }: any) => {
  const [display, setDisplay] = useState(true);
  const [ap_dis, setAppDis] = useState("web");
  // const _apps_display = ['web', 'mobile']

  const [first_spring, first_api] = useSprings(5, (index) => ({
    from: {
      y: -100,
      opacity: 0,
    },
  }));

  const [_display_spring, _display_api] = useSpring(() => ({
    from: {
      y: 0,
      opacity: 1,
    },
  }));

  useEffect(() => {
    if (view === "home") {
      setDisplay(true);
      first_api.start((index) => ({
        to: {
          y: 0,
          opacity: 1,
        },
        delay: index * 200,
      }));
    } else {
      first_api.start((index) => ({
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
        <div className=" first-screen h-screen pb-36 flex flex-wrap flex-col justify-center main-bg">
          <div className=" w-4/5 sm:w-3/5 mx-auto">
            <animated.div style={{ ...first_spring[0] }}>
              <div className="font-mono sm:text-xl sm:ml-5 text-teal-400 my-2 ">
                {" "}
                Hi :) I am{" "}
              </div>
            </animated.div>

            <animated.div style={{ ...first_spring[1] }}>
              <div className=" text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold font-sans text-gray-200 md:my-1">
                {" "}
                Samrawit Tesfahun{" "}
              </div>
            </animated.div>

            <animated.div style={{ ...first_spring[2] }}>
              <div className="text-2xl lg:text-7xl md:text-4xl sm:text-3xl text-gray-400 font-sans font-bold my-4 md:my-1">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1000)
                      .typeString(
                        'I build <span style="color: #FFBF00;"> web </span> apps :'
                      )
                      .start();
                  }}
                />
              </div>
            </animated.div>

            <animated.div style={{ ...first_spring[4] }}>
              <div className="">
                <a
                  onClick={() => setView("contacts")}
                  className=" hover:cursor-pointer mt-3 inline-block animate-border rounded-xl bg-white from-main-teal via-purple-500 to-main-teal bg-[length:400%_400%] p-0.5 transition hover:bg-gradient-to-r hover:shadow-lg focus:outline-none focus:ring"
                >
                  <span className="block rounded-[11px] bg-slate-900 px-10 py-2 text-l text-white">
                    {" "}
                    Lets chat :){" "}
                  </span>
                </a>
              </div>
            </animated.div>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPageView;
