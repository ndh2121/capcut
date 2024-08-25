import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="vlsls">
                <div className="menu-trigger">
                    <a className="logo" href="#" target="_self"></a>
                </div>
                <div className="action-bar">
                    <div className="lv_feedback">
                        <svg
                            width="2.5rem"
                            height="2.5rem"
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            fill="none"
                            role="presentation"
                            xmlns="http://www.w3.org/2000/svg"
                            className="lv_feedback-icon"
                        >
                            <g>
                                <path
                                    data-follow-fill="currentColor"
                                    d="M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM12 6a4 4 0 0 0-3.969 3.501c-.034.274.193.499.469.499h1c.276 0 .494-.227.562-.495A2.001 2.001 0 0 1 14 10c0 .566-.135.847-.269 1.025-.162.216-.39.379-.786.643l-.04.026c-.352.235-.85.567-1.236 1.081-.35.466-.573 1.029-.645 1.726-.027.274.2.499.476.499h1c.276 0 .49-.227.544-.497.05-.253.138-.412.225-.528.162-.216.39-.379.786-.643l.04-.026c.352-.235.85-.567 1.236-1.081.43-.572.669-1.29.669-2.225a4 4 0 0 0-4-4Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    data-follow-fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                                    fill="currentColor"
                                ></path>
                            </g>
                        </svg>
                    </div>
                    <div className="DJYsflDuETkO8ue_iVc4">
                        <a
                            target="_self"
                            href="https://lf16-capcut.faceulv.com/obj/capcutpc-packages-us/installer/capcut_capcutpc_0_1.2.6_installer.exe"
                            className="lv-btn lv-btn-size-default lv-btn-shape-square lv-btn-link black-text"
                        >
                            <span>
                                <font>
                                    <font>Download</font>
                                </font>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
