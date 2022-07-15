import "./Footer.css";
import React from "react";
import FootItem from "./FootItem";

function Footer() {
  const subTitles1 = [
    { id: 1, text: "linkedin", link: "https://www.linkedin.com/" },
    { id: 2, text: "github", link: "https://github.com" },
    {
      id: 3,
      text: "Resume",
      link: "https://drive.google.com/file/d/1ij_EBu0T3zpbAI3RAlroaRsqlyyS5Fx5/view?usp=sharing",
    },
  ];
  const subTitles2 = [
    { id: 1, text: "tarikdorhmi@yahoo.fr" },
    { id: 2, text: "0639709193" },
  ];
  return (
    <div className="Footer">
      <FootItem title="Social Media" subs={subTitles1} isLinked={true} />
      <FootItem title="Contact" subs={subTitles2} isLinked={false} />
    </div>
  );
}

export default Footer;
