import React from "react";
import { Link } from "react-router-dom";
import {
  iconFacebook,
  iconInstagram,
  iconLinkedin,
  iconTwitter,
  iconYoutube,
  logoBig,
} from "../assets";

const Footer: React.FC = () => {
  const links = [
    {
      name: "Privacy Policy",
      link: "#",
    },
    {
      name: "Partner Policy",
      link: "#",
    },
    {
      name: "Terms and Conditions",
      link: "#",
    },
    {
      name: "Article",
      link: "#",
    },
  ];

  const otherLinks = [
    {
      name: "More About Us",
      link: "#",
    },
    {
      name: "Meet The Team",
      link: "#",
    },
    {
      name: "Contact Us",
      link: "#",
    },
    {
      name: "Gallery",
      link: "#",
    },
  ];

  const socmed = [
    {
      icon: iconInstagram,
      link: "#",
    },
    {
      icon: iconTwitter,
      link: "#",
    },
    {
      icon: iconFacebook,
      link: "#",
    },
    {
      icon: iconYoutube,
      link: "#",
    },
    {
      icon: iconLinkedin,
      link: "#",
    },
  ];

  return (
    <footer className="bg-p-primary">
      <div className="flex flex-row mx-auto py-[62px] my-auto items-center justify-between max-w-[1224px]">
        <img alt="logo-big" src={logoBig} />
        <div className="flex flex-col max-w-[210px]">
          <h5 className="font-primary font-[400] text-[20px] text-white">
            LET’S DO IT WORLD HEADQUARERS
          </h5>
          <p className="font-secondary text-[16px] text-white">
            REQ CODE 80562203
          </p>
          <p className="font-secondary text-[16px] text-white">
            ROOSIRANTSI 3, 10119 TALLINN, ESTONIA
          </p>
          <p className="font-secondary font-[700] text-[14px] text-white">
            INFO@WORLDCLEANUPDAY.ORG
          </p>
        </div>

        <div className="flex flex-col">
          {links.map((link) => (
            <Link
              className="font-primary text-[16px] text-white mb-[12px]"
              to={link.link}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col">
          {otherLinks.map((link) => (
            <Link
              className="font-primary text-[16px] text-white mb-[16px]"
              to={link.link}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="font-primary text-[24px] text-white mb-[24px]">
            Follow Us
          </h3>
          <div className="flex flex-row">
            {socmed.map((item) => (
              <a
                href={item.link}
                target={"_blank"}
                className="mr-[24px] w-[32px] h-[32px]"
              >
                <img alt="socmed" src={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
