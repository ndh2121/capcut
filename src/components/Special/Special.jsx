import React from "react";
import "./Special.css";

const Special = () => {
    return (
        <section className="pc_landing_special_func">
            <h2 className="pc_landing_special_func-title">
                Powerful features, easy steps
            </h2>
            <div className="ldkcmsldsoe">
                <section className="pc_landing_special_func-layout">
                    <div className="pc_landing_special_func-speech">
                        <video
                            className="pc_landing_special_func-speech-bgvideo"
                            loop
                            muted
                            preload="auto"
                            autoPlay
                            src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/media/speech_to_text.6c86d729.mp4"
                        >
                            <source
                                src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/media/speech_to_text.6c86d729.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className="pc_landing_special_func-detail">
                        <h2 className="pc_landing_special_func-detail-title">
                            Speech to text
                        </h2>
                        <p className="pc_landing_special_func-detail-descirbe">
                            Automatically recognize different languages and
                            generate high-accuracy captions to boost your
                            editing efficiency.
                        </p>
                        <a href="#" className="button_axhss">
                            <span>Try for free</span>
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 18 18"
                                preserveAspectRatio="xMidYMid meet"
                                fill="none"
                                role="presentation"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path
                                        data-follow-fill="currentColor"
                                        d="M0 0h18v18H0z"
                                        fillOpacity=".01"
                                        fill="currentColor"
                                    />
                                    <path
                                        data-follow-fill="currentColor"
                                        d="M16.72 9.35a.5.5 0 0 0 0-.701l-6.601-6.7a.5.5 0 0 0-.707-.006l-.624.614a.5.5 0 0 0-.005.707l4.727 4.798H2a.5.5 0 0 0-.5.5v.875a.5.5 0 0 0 .5.5h11.51l-4.727 4.799a.5.5 0 0 0 .005.707l.624.614a.5.5 0 0 0 .707-.005L16.72 9.35Z"
                                        fill="currentColor"
                                    />
                                </g>
                            </svg>
                        </a>
                    </div>
                </section>
            </div>

            <div className="ldkcmsldsoe">
                <section className="pc_landing_special_func-layout lkdidskso">
                    <div className="pc_landing_special_func-detail">
                        <h2 className="pc_landing_special_func-detail-title">
                            Text to speech
                        </h2>
                        <p className="pc_landing_special_func-detail-descirbe">
                            Convert any text to natural-sounding speech with one
                            click. 11 voices and 10 languages supported.
                        </p>
                        <a href="#" className="button_axhss">
                            <span>Try for free</span>
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 18 18"
                                preserveAspectRatio="xMidYMid meet"
                                fill="none"
                                role="presentation"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path
                                        data-follow-fill="currentColor"
                                        d="M0 0h18v18H0z"
                                        fillOpacity=".01"
                                        fill="currentColor"
                                    />
                                    <path
                                        data-follow-fill="currentColor"
                                        d="M16.72 9.35a.5.5 0 0 0 0-.701l-6.601-6.7a.5.5 0 0 0-.707-.006l-.624.614a.5.5 0 0 0-.005.707l4.727 4.798H2a.5.5 0 0 0-.5.5v.875a.5.5 0 0 0 .5.5h11.51l-4.727 4.799a.5.5 0 0 0 .005.707l.624.614a.5.5 0 0 0 .707-.005L16.72 9.35Z"
                                        fill="currentColor"
                                    />
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className="pc_landing_special_func-speech">
                        <video
                            className="pc_landing_special_func-speech-bgvideo"
                            loop
                            muted
                            preload="auto"
                            autoPlay
                            style={{ width: "100%" }}
                        >
                            <source
                                src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-us/common/videos/text_to_speech.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Special;
