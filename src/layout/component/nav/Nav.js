import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

import logo from "~/assets/images";
import NavMenu from "./NavMenu";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faHourglassEmpty,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

import { HomeIcon } from "~/assets/icons";
import {
  faBlogger,
  faCodepen,
  faEarlybirds,
  faHouzz,
  faPiedPiperHat,
  faServicestack,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);
function Nav() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo-wrapper")}>
        <NavLink to="/" className={cx("logo")}>
          <img src={logo.logo} alt="logo" />
        </NavLink>

        <NavMenu>
          <NavItem
            to="/"
            icon={<FontAwesomeIcon icon={faHouzz} />}
            title="Home"
          />
          <NavItem
            to="/about"
            icon={<FontAwesomeIcon icon={faUser} />}
            title="About"
          />
          <NavItem
            to="/service"
            icon={<FontAwesomeIcon icon={faServicestack} />}
            title="Service"
          />
          <NavItem
            to="/experience"
            icon={<FontAwesomeIcon icon={faWhatsappSquare} />}
            title="Experience"
          />
          <NavItem
            to="/works"
            icon={<FontAwesomeIcon icon={faEarlybirds} />}
            title="Works"
          />
          <NavItem
            to="/blog"
            icon={<FontAwesomeIcon icon={faBlogger} />}
            title="Blog"
          />
          <NavItem
            to="/contact"
            icon={<FontAwesomeIcon icon={faCodepen} />}
            title="Contact"
          />
        </NavMenu>
        <footer className={cx("footer")}>
          <span>© 2020 Bolby Template.</span>
        </footer>
      </div>
    </div>
  );
}

export default Nav;
