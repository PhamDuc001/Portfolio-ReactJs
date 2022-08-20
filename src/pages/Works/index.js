import classNames from "classnames/bind";
import { useRef, useState } from "react";
import styles from "./Works.module.scss";

const cx = classNames.bind(styles);
function Works() {
  const [isDark, setIsDark] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const itemRef = useRef();
  const img1 = useRef();
  const titleItemRef = useRef();
  const handleShowModal = () => {
    setIsDark(true);
  };
  const handleCloseModal = () => {
    setIsDark(false);
  };
  console.log(titleItemRef.current);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h2 className={cx("header")}>Recent works</h2>
        <ul ref={titleItemRef} className={cx("title-list")}>
          <li className={cx("title-item", { active: false })}>Everyting</li>
          <li className={cx("title-item")}>Creative</li>
          <li className={cx("title-item")}>Art</li>
          <li className={cx("title-item")}>Design</li>
          <li className={cx("title-item")}>Branding</li>
        </ul>
        <div className={cx("content")}>
          {/* Modal */}
          <div className={cx("modal", { dark: isDark })} ref={itemRef}>
            <button onClick={handleCloseModal} className={cx("close")}>
              x
            </button>

            <div
              ref={img1}
              className={cx("img-modal", { imgModalShow: isDark })}>
              <img src="images/works/1.png" alt="" />
            </div>
          </div>
          {/* Hàng 1 */}
          <div className={cx("row")}>
            <div className={cx("img-item")}>
              <img className={cx("img")} src="images/works/1.png" alt="" />

              <div className={cx("info")}>
                <span className={cx("term")}>Art</span>
                <h4 className={cx("title")}> Project Managment Illustration</h4>
                <button onClick={handleShowModal} className={cx("more-btn")}>
                  +
                </button>
              </div>
            </div>

            <div className={cx("img-item")}>
              <img className={cx("img")} src="images/works/2.png" alt="" />
            </div>
            <div className={cx("img-item")}>
              <img className={cx("img")} src="images/works/6.png" alt="" />
            </div>
          </div>
          {/* Hàng 2 */}
          <div className={cx("row")}>
            <div className={cx("img-item")}>
              <img className={cx("img")} src="images/works/3.png" alt="" />
            </div>
            <div className={cx("img-item")}>
              <img className={cx("img")} src="images/works/5.png" alt="" />
            </div>
            <div className={cx("img-item")}>
              <img className={cx("img")} src="images/works/2.png" alt="" />
            </div>
          </div>
          {/* Hàng 3 */}
          <div className={cx("row")}>
            <div className={cx("img-item")}>
              <img className={cx("img")} src="images/works/4.png" alt="" />
            </div>
            <div className={cx("img-item")}>
              <img className={cx("img")} src="images/works/1.png" alt="" />
            </div>
            <div className={cx("img-item")}>
              <img className={cx("img")} src="images/works/6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
