import classNames from "classnames/bind";
import styles from "./Service.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Service() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h2 className={cx("header")}>Services</h2>
        <div className={cx("row")}>
          <div className={cx("col-31")}>
            <div className={cx("item")}>
              <img src="images/service/service-1.png" alt="" />
              <h3 className={cx("title")}>UI/UX Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                commodo ligula eget.
              </p>
            </div>
          </div>
          <div className={cx("col-32")}>
            <div className={cx("item")}>
              <img src="images/service/service-2.png" alt="" />
              <h3 className={cx("title")}>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                commodo ligula eget.
              </p>
            </div>
          </div>
          <div className={cx("col-33")}>
            <div className={cx("item")}>
              <img src="images/service/service-3.png" alt="" />
              <h3 className={cx("title")}>Photography</h3>
              <p>
                Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean
                commodo ligula eget.
              </p>
            </div>
          </div>
        </div>
        <div className={cx("footer")}>
          <p>
            Looking for a custom job? Click
            <Link to="/contact"> here </Link>
            to contact me! 👋
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
