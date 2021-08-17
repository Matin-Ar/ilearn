import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="main-footer-container">
      <ul className="main-footer__links">
        <Link to="#">
          <li className="main-footer__link">درباره ما</li>
        </Link>
        <Link to="#">
          <li className="main-footer__link">وبلاگ</li>
        </Link>
        <Link to="#">
          <li className="main-footer__link">اساس علمی</li>
        </Link>
        <Link to="#">
          <li className="main-footer__link">فرصت شغلی</li>
        </Link>
        <Link to="#">
          <li className="main-footer__link">تماس با ما</li>
        </Link>
        <Link to="#">
          <li className="main-footer__link">قوانین</li>
        </Link>
        <Link to="#">
          <li className="main-footer__link">حریم خصوصی</li>
        </Link>
      </ul>
    </footer>
  );
}

export default Footer;
