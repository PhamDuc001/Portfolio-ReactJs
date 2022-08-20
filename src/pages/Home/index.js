// import BackGround from "~/assets/backgnd/backgnd";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import logo from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBasketball, faBed, faBeer } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";
import { NavLink } from "react-router-dom";
import { P1, P10, P11, P2, P3, P4, P5, P6, P7, P8, P9 } from "~/assets/icons";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      {/* Background */}
      <div className={cx("parallax")} data-relative-input="true">
        <P1 className={cx("p1")} />
        <P2 className={cx("p2")} />
        <P3 className={cx("p3")} />
        <P4 className={cx("p4")} />
        <P5 className={cx("p5")} />
        <P6 className={cx("p6")} />
        <P7 className={cx("p7")} />
        <P8 className={cx("p8")} />
        <P9 className={cx("p9")} />
        <P10 className={cx("p10")} />
        <P11 className={cx("p11")} />
      </div>

      <div className={cx("container")}>
        <div className={cx("avatar")}>
          <img src={logo.avatar1} alt="avatar" />
        </div>
        <h1 className={cx("title")}>Bolby Doe</h1>
        <span> I'm a UI/UX designer</span>
        <ul className={cx("list-icon")}>
          <li className={cx("icon")}>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li className={cx("icon")}>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li className={cx("icon")}>
            <FontAwesomeIcon icon={faBeer} />
          </li>
          <li className={cx("icon")}>
            <FontAwesomeIcon icon={faBasketball} />
          </li>
          <li className={cx("icon")}>
            <FontAwesomeIcon icon={faPinterest} />
          </li>
        </ul>

        <Button title="Hire me" to="/contact" />
        <span className={cx("scroll-text")}>Scroll Down</span>
      </div>
    </div>
  );
}

export default Home;
