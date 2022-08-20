import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);
function NavItem({ title, icon, iconActive, to }) {
  return (
    <NavLink
      className={(nav) => cx("nav-item", { active: nav.isActive })}
      to={to}>
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("icon-active")}>{iconActive}</span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

export default NavItem;
