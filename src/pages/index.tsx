// import React, { useEffect } from "react"
import * as React from "react";
import AboutMeView from "../components/about_me/AboutMe";
import LandingPageView from "../components/landing_page/LandingPage";
import NavBarView from "../components/NavBar";
import ProjectsView from "../components/projects/Projects";
import ContactsPageView from "../components/contacts/contacts";
import Seo from "../components/seo/SeoComponent";

const IndexPage = () => {
  const [scroll_value, setScroll] = React.useState(0);

  const [view, setView] = React.useState("home");

  React.useEffect(() => {
    window.addEventListener("scroll", (event: any) => {
      console.log(window.scrollY);
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div className="">
      <Seo
        title="Samrawit Tesfahun"
        description="Hello, I am Samrawit Tesfahun, Full-stack developer based in Ethiopia."
        
      />

      <NavBarView setView={setView} />

      <LandingPageView
        scroll_value={scroll_value}
        view={view}
        setView={setView}
      />

      <AboutMeView scroll_value={scroll_value} view={view} />

  

      <ProjectsView scroll_value={scroll_value} view={view} />

      <ContactsPageView scroll_value={scroll_value} view={view} />
    </div>
  );
};

export default IndexPage;
