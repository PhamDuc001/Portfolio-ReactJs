import classNames from "classnames/bind";

import styles from "./Nav.module.scss";

const cx = classNames.bind(styles);
function NavMenu({ children }) {
  return <nav className={cx("nav-menu")}>{children}</nav>;
}

export default NavMenu;
