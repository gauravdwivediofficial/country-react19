import React from 'react'
import footerApi from '../../api/footerApi'
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { NavLink } from "react-router-dom";


function Footers() {
  const footerIcon = {
    MdOutlinePlace: <MdOutlinePlace />,
    MdOutlineWifiCalling3: <MdOutlineWifiCalling3 />,
    MdOutlineAlternateEmail: <MdOutlineAlternateEmail />,
  };
  return (
    <footer className="footer-section">
      <div className="container  grid grid-three-cols">
        {footerApi.map((currData, index) => {
          const { icon, title, details } = currData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink
                  to="https://linkedin.com/in/gauravdwivediofficial"
                  target="_blank"
                >
                  Radar Coding
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/radarcodingofficial/"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/gauravdwivediofficial/country-react19"
                    target="_blank"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers
