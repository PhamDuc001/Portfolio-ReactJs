import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import Button from "~/components/Button/Button";
import styles from "./About.module.scss";

const cx = classNames.bind(styles);
function About() {
  const [q1, setQ1] = useState(1);
  const [q2, setQ2] = useState(1);
  const [q3, setQ3] = useState(1);
  const [q4, setQ4] = useState(1);
  useEffect(() => {
    q1 < 199 &&
      setTimeout(() => {
        setQ1(q1 + 1);
        return q1;
      }, 2);
  }, [q1]);

  useEffect(() => {
    q2 < 5260 &&
      setTimeout(() => {
        setQ2(q2 + 10);
      }, 0.1);
  }, [q2]);

  useEffect(() => {
    q3 < 428 &&
      setTimeout(() => {
        setQ3(q3 + 1);
      }, 1);
  }, [q3]);

  useEffect(() => {
    q4 < 36 &&
      setTimeout(() => {
        setQ4(q4 + 1);
      }, 10);
  }, [q4]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h2 className={cx("header")}>About me</h2>
        <div className={cx("row")}>
          <div className={cx("col-1-4")}>
            <img
              style={{ width: 150, height: 150 }}
              src="images/about/avatar-2.png"
              alt=""
            />
          </div>
          <div className={cx("col-3-4")}>
            <div className={cx("row")}>
              <div className={cx("col-1-2")}>
                <p>
                  I am Bolby Doe, web developer from London, United Kingdom. I
                  have rich experience in web site design and building and
                  customization, also I am good at WordPress.
                </p>
                <Button title="Download CV" className={cx("btn-down")} />
              </div>
              <div className={cx("col-1-2")}>
                <div className={cx("skill")}>
                  <div className={cx("skill-title")}>
                    Development<span>85%</span>
                  </div>
                  <div className={cx("progress1")}></div>
                </div>

                <div className={cx("skill")}>
                  <div className={cx("skill-title")}>
                    UI/UX Design<span>95%</span>
                  </div>
                  <div className={cx("progress2")}></div>
                </div>

                <div className={cx("skill")}>
                  <div className={cx("skill-title")}>
                    Photography<span>70%</span>
                  </div>
                  <div className={cx("progress3")}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("quanlity-item")}>
            <p>{q1}</p>
            <span>Projects completed</span>
          </div>
          <div className={cx("quanlity-item")}>
            <p>{q2}</p>
            <span>Cup of coffee</span>
          </div>
          <div className={cx("quanlity-item")}>
            <p>{q3}</p>
            <span>Satisfied clients</span>
          </div>
          <div className={cx("quanlity-item")}>
            <p>{q4}</p>
            <span>Nominees winner</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
