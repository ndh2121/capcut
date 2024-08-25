import React from "react";
import "./TrustedBy.css";

const TrustedBy = () => {
    return (
        <section className="pc_landing_trust_by">
            <h2 className="pc_landing_trust_by-title">Trusted by</h2>
            <div className="pc_landing_trust_by-flex-row">
                <div
                    style={{
                        display: "inline-block",
                        height: "36px",
                        width: "156px",
                        backgroundSize: "cover",
                        backgroundImage: "none",
                    }}
                    className="pc_landing_trust_by-img"
                >
                    <img
                        style={{ display: "inherit" }}
                        src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/a6fc23685f025ef6-205.png"
                        srcSet="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/a6fc23685f025ef6-205.png 205w"
                        width="156"
                        height="36"
                        alt="tiktok"
                        loading="lazy"
                    />
                </div>
                <div
                    style={{
                        display: "inline-block",
                        height: "36px",
                        width: "186px",
                        backgroundSize: "cover",
                        backgroundImage: "none",
                    }}
                    className="pc_landing_trust_by-img"
                >
                    <img
                        style={{ display: "inherit" }}
                        src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/2cc5027960b306c9-246.png"
                        srcSet="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/2cc5027960b306c9-246.png 246w"
                        width="186"
                        height="36"
                        alt="nvidia"
                        loading="lazy"
                    />
                </div>
                <div
                    style={{
                        display: "inline-block",
                        height: "36px",
                        width: "116px",
                        backgroundSize: "cover",
                        backgroundImage: "none",
                    }}
                    className="pc_landing_trust_by-img"
                >
                    <img
                        style={{ display: "inherit" }}
                        src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/a5a35b8894d688f5-153.png"
                        srcSet="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/a5a35b8894d688f5-153.png 153w"
                        width="116"
                        height="36"
                        alt="mlbb"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
