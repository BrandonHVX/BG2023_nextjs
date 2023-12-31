import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../src/layout/Layout";
import { home1SliderProps } from "../src/sliderProps";
// import Splitting from "splitting";

const Index = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Hero Main Slider */}
        <Swiper {...home1SliderProps} className="section hero-main-slider">
          <SwiperSlide className="swiper-slide" data-color="dark">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage: "url(assets/images/started-n26-1920x1080.jpg)",
               
              }}
            />
            <div className="overlay"></div>
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">Multimedia Producer</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                         NBA Digital  </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Creativity is to discover a question that has never been
                      asked. If one brings up an idiosyncratic question, the
                      answer he gives will necessarily be unique as well.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/nba-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage: "url(assets/images/started-n15-1920x1080.jpg)",
                
              }}
            />
             <div className="overlay"></div>
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">Communications Director</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                     Miami-Dade Board of <br/>
                     County Commissioners </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Creativity is to discover a question that has never been
                      asked. If one brings up an idiosyncratic question, the
                      answer he gives will necessarily be unique as well.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/bcc-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url(assets/images/started-n2_4-1920x1080.jpg)",
                backgroundPosition: 'left',
              }}
            />
             <div className="overlay"></div>
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">Creative Director</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                     Urban Film <br/>
                     Festival
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Creativity is to discover a question that has never been
                      asked. If one brings up an idiosyncratic question, the
                      answer he gives will necessarily be unique as well.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/work-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url(assets/images/started-n14_1-1000x1080.jpg)",
              }}
            />
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1"></div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
Creative <br/>
 Highlight Reel     </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Creativity is to discover a question that has never been
                      asked. If one brings up an idiosyncratic question, the
                      answer he gives will necessarily be unique as well.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/work-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* pagination */}
          <div
            className="swiper-pagination scrolla-element-anim-1 scroll-animate swiper-pagination-bullets swiper-pagination-horizontal animate__active animate__animated"
            data-animate="active"
          />
          {/* navigation */}
          <div className="swiper-buttons">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </Swiper>
      </div>
    </Layout>
  );
};
export default Index;
