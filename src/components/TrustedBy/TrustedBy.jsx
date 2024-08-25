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
                    <picture>
                        <source srcSet="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/345825e43f9b98b1-205.webp 205w" />
                        <img
                            style={{ display: "inherit" }}
                            src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/a6fc23685f025ef6-205.png"
                            srcSet="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/a6fc23685f025ef6-205.png 205w"
                            width="156"
                            height="36"
                            alt="tiktok"
                            loading="lazy"
                        />
                    </picture>
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
                    <picture>
                        <source srcSet="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/9bd5ab79b9f08f8d-246.webp 246w" />
                        <img
                            style={{ display: "inherit" }}
                            src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/2cc5027960b306c9-246.png"
                            srcSet="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/2cc5027960b306c9-246.png 246w"
                            width="186"
                            height="36"
                            alt="nvidia"
                            loading="lazy"
                        />
                    </picture>
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
                    <picture>
                        <source srcSet="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/6cb68cbb32323aea-153.webp 153w" />
                        <img
                            style={{ display: "inherit" }}
                            src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/a5a35b8894d688f5-153.png"
                            srcSet="//lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/a5a35b8894d688f5-153.png 153w"
                            width="116"
                            height="36"
                            alt="mlbb"
                            loading="lazy"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
