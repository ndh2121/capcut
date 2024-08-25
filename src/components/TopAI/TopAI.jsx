import React from "react";
import "./TopAI.css";

const TopAI = () => {
    return (
        <section className="pc_landing_AItools">
            <h2 className="pc_landing_AItools-title">Top AI Tools</h2>
            <p className="pc_landing_AItools-subtitle">
                Get creative with CapCut's super easy-to-use tools.
            </p>
            <div className="pc_landing_AItools-content">
                <dl className="pc_landing_AItools-content-item">
                    <img
                        src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/94a2e16fe70dd039-880.jpg"
                        alt="Dreamina"
                    />
                    <div className="pc_landing_AItools-content-item-text-container">
                        <div className="pc_landing_AItools-content-item-title">
                            Dreamina
                        </div>
                        <div className="pc_landing_AItools-content-item-subtitle">
                            Generate quality images from text and image
                            suggestions.
                        </div>
                        <a
                            href="https://dreamina.capcut.com/"
                            className="pc_landing_AItools-content-item-abtn"
                        >
                            <button
                                target="_self"
                                className="lv-btn lv-btn-primary lv-btn-size-default lv-btn-shape-square pc_landing_AItools-content-item-btn"
                                type="button"
                            >
                                Try it for free
                            </button>
                        </a>
                    </div>
                </dl>
                <dl className="pc_landing_AItools-content-item">
                    <img
                        src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/cfad571112185489-880.jpg"
                        alt="InspireVid"
                    />
                    <div className="pc_landing_AItools-content-item-text-container">
                        <div className="pc_landing_AItools-content-item-title">
                            InspireVid
                        </div>
                        <div className="pc_landing_AItools-content-item-subtitle">
                            Turn text into video on social media platforms.
                        </div>
                        <a
                            href="https://inspirevid.capcut.com/ai-tools/text-to-video"
                            className="pc_landing_AItools-content-item-abtn"
                        >
                            <button
                                target="_self"
                                className="lv-btn lv-btn-primary lv-btn-size-default lv-btn-shape-square pc_landing_AItools-content-item-btn"
                                type="button"
                            >
                                Try it for free
                            </button>
                        </a>
                    </div>
                </dl>
                <dl className="pc_landing_AItools-content-item">
                    <img
                        src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/22390cd5a4edd037-880.jpg"
                        alt="PackPic"
                    />
                    <div className="pc_landing_AItools-content-item-text-container">
                        <div className="pc_landing_AItools-content-item-title">
                            PackPic
                        </div>
                        <div className="pc_landing_AItools-content-item-subtitle">
                            Remove background and resize up to 50 images.
                        </div>
                        <a
                            href="https://packpic.capcut.com/editor-batch"
                            className="pc_landing_AItools-content-item-abtn"
                        >
                            <button
                                target="_self"
                                className="lv-btn lv-btn-primary lv-btn-size-default lv-btn-shape-square pc_landing_AItools-content-item-btn"
                                type="button"
                            >
                                Try it for free
                            </button>
                        </a>
                    </div>
                </dl>
            </div>
        </section>
    );
};

export default TopAI;
