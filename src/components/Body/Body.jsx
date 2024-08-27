import React from "react";
import "./Body.css";
import TopAI from "../TopAI/TopAI";
import TrustedBy from "../TrustedBy/TrustedBy";
import TemplateUse from "../TemplateUse/TemplateUse";
import SectionContent from "../SectionContent/SectionContent";
import Special from "../Special/Special";
import SmartTool from "../SmartTool/SmartTool";
import Innovate from "../Innovate/Innovate";
import Commercial from "../Commercial/Commercial";

const Body = () => {
    return (
        <div className="pc_landing_wrapper">
            <section className="pc_landing_main_screen main_screen-flex-column">
                <video
                    className="pc_landing_main_screen-bgvideo"
                    loop
                    muted
                    autoPlay
                    preload="auto"
                >
                    <source
                        src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-us/common/videos/lv_landing_v3.webm"
                        type="video/webm"
                    />
                    <source
                        src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-us/common/videos/lv_landing_v3.mp4"
                        type="video/mp4"
                    />
                </video>
            </section>
            <div className="pc_landing_main_screen-bg-mask"></div>
            <div className="pc_landing_main_screen-sec main_screen-flex-column">
                <h1 className="pc_landing_main_screen-sec-title">
                    Free all-in-one video editor for everyone to create anything
                    anywhere
                </h1>
                <h1 className="m-main-feature-wrapper-container-title">
                    One-stop platform to start your creation journey
                </h1>
                <p className="pc_landing_main_screen-sec-subtitle">
                    Flexible editing, amazing AI tools, team collaboration, and
                    built-in assets. Create videos like never before.
                </p>
                <div className="pc_landing_main_screen-v4">
                    <a
                        target="_self"
                        href="https://cap-cutdownload.com/"
                        className="lv-btn lv-btn-primary lv-btn-size-large lv-btn-shape-square lv-btn-link black-text large-button download_margin"
                    >
                        <span>Download</span>
                    </a>
                    <a
                        target="_self"
                        href="https://cap-cutdownload.com/"
                        className="lv-btn lv-btn-secondary lv-btn-size-large lv-btn-shape-square lv-btn-link pc_landing_main_screen-v4-button white_text"
                    >
                        <span>Try AI-powered generator</span>
                    </a>
                </div>
                <div className="pc_landing-scroll-indicator">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pc_landing-scroll-indicator-icon1"
                    >
                        <g>
                            <path
                                data-follow-stroke="currentColor"
                                d="m6 9 6 6 6-6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            ></path>
                        </g>
                    </svg>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pc_landing-scroll-indicator-icon2"
                    >
                        <g>
                            <path
                                data-follow-stroke="currentColor"
                                d="m6 9 6 6 6-6"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                stroke="currentColor"
                            ></path>
                        </g>
                    </svg>
                    <p className="pc_landing-scroll-indicator-tip">
                        Explore more features
                    </p>
                </div>
            </div>

            <section
                className="section dark"
                id="section_1100745057"
                style={{
                    backgroundColor: "rgb(18, 17, 31)",
                }}
            >
                <div className="bg section-bg fill bg-fill bg-loaded"></div>
                <div className="section-content relative">
                    <div className="row" id="row-261841518">
                        <div
                            id="col-1860571172"
                            className="col small-12 large-12"
                        >
                            <div className="col-inner">
                                <div id="text-432325884" className="text">
                                    <h3>
                                        <span>Pro video making.</span>
                                        <br />
                                        <span>Just, simplified.</span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div
                            id="col-714996670"
                            className="col medium-8 small-12 large-8"
                        >
                            <div className="col-inner">
                                <div
                                    className="banner has-hover border-radius-10 has-video"
                                    id="banner-155618953"
                                >
                                    <div className="banner-inner fill">
                                        <div className="banner-bg fill">
                                            <div
                                                className="bg fill bg-fill"
                                                style={{
                                                    backgroundImage:
                                                        "url(https://createsstudioo.com/wp-content/uploads/2023/09/splash.jpg)",
                                                    borderRadius: "1.5rem",
                                                }}
                                            ></div>
                                            <div className="video-overlay no-click fill visible"></div>
                                            <video
                                                className="video-bg fill visible"
                                                preload=""
                                                playsInline
                                                autoPlay
                                                muted
                                                loop
                                            >
                                                <source
                                                    src="https://createsstudioo.com/wp-content/uploads/2023/09/hvvecqsiwfqen0ya.mp4"
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </div>
                                        <div className="banner-layers container">
                                            <div className="fill banner-link"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="col-974610290"
                            className="col medium-4 small-12 large-4"
                        >
                            <div className="col-inner">
                                <div
                                    id="proVideo--controls"
                                    className="proVideo__accordion--list"
                                >
                                    <div
                                        className="proVideo__accordion--item active"
                                        data-accordion_id="carousels"
                                    >
                                        <div className="proVideo__accordion--header">
                                            <button className="proVideo__accordion--button">
                                                Presets
                                            </button>
                                        </div>
                                        <div className="proVideo__accordion--body">
                                            <p>
                                                Animate any layer with just a
                                                click using our motion presets.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="proVideo__accordion--item"
                                        data-accordion_id="presets"
                                    >
                                        <div className="proVideo__accordion--header">
                                            <button className="proVideo__accordion--button">
                                                Characters
                                            </button>
                                        </div>
                                        <div className="proVideo__accordion--body">
                                            <p>
                                                Drag & drop a character, change
                                                the actions & animate in just
                                                seconds.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="proVideo__accordion--item"
                                        data-accordion_id="characters"
                                    >
                                        <div className="proVideo__accordion--header">
                                            <button className="proVideo__accordion--button">
                                                Carousels
                                            </button>
                                        </div>
                                        <div className="proVideo__accordion--body">
                                            <p>
                                                Drag & drop your media onto our
                                                carousel component to quickly
                                                create amazing animated
                                                slideshows.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TopAI />
            <TrustedBy />
            <TemplateUse />
            <SmartTool />
            <SectionContent />
            <Special />
            <Innovate />
            <Commercial />
        </div>
    );
};

export default Body;
