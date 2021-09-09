import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//import assets
import { ReactComponent as HeroSvg } from "../Assets/Svg/Hero-image.svg";
//component imports
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function HomePage() {
  return (
    <div className="homepage-container">
      <Header />
      <div className="homepage-hero">
        <div className="homepage-hero-right-wrapper">
          <HeroSvg className="homepage-hero__svg" />
        </div>
        <div className="homepage-hero-left-wrapper">
          <h1 className="homepage-hero__title">
            آموزش هایی بر اساس استراتژی Spaced Repetition
          </h1>
          <p className="homepage-hero__text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته،{" "}
          </p>

          <Link to="/admin">
            <button className="homepage-hero__cta">بزن بریم</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
