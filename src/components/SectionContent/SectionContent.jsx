import React from "react";
import "./SectionContent.css";

const SectionContent = () => {
    return (
        <section className="willCreate">
            <div className="section_pro">
                <div className="section-title">
                    <div className="hsklssl">
                        <div className="text">
                            <div className="willCreate--header">
                                <p className="willCreate--preTitle">
                                    <span>
                                        So I guess it’s time to pop the
                                        question..
                                    </span>
                                </p>
                                <h2 className="willCreate--title">
                                    <span>What will you Create?</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gallery-list">
                    {[
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/youtube.102fd28d.png",
                            title: "YouTube",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/youtube.102fd28d.png",
                            text: "YouTube",
                        },
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/ina.png",
                            title: "Scroll Stoppers",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/ina.png",
                            text: "Scroll Stoppers",
                        },
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/logo.3bcf386a.png",
                            title: "Logo Sting",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/logo.3bcf386a.png",
                            text: "Logo Sting",
                        },
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/lower-third.0daa17fc.png",
                            title: "Lower Thirds",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/lower-third.0daa17fc.png",
                            text: "Lower Thirds",
                        },
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/a.png",
                            title: "Explainers",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/a.png",
                            text: "Explainers",
                        },
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/doa.png",
                            title: "Doodle",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/doa.png",
                            text: "Doodle",
                        },
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/video_as.4f67f4c2.png",
                            title: "Doodle",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/video_as.4f67f4c2.png",
                            text: "Doodle",
                        },
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/promotional.32703ba0.png",
                            title: "Promotional Videos",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/promotional.32703ba0.png",
                            text: "Promotional Videos",
                        },
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/stomp.7f68f556.png",
                            title: "Stomp Teasers",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/stomp.7f68f556.png",
                            text: "Stomp Teasers",
                        },
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/l.png",
                            title: "Social Posts",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/l.png",
                            text: "Social Posts",
                        },
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/slideshow.ccee011a.png",
                            title: "Slideshows",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/slideshow.ccee011a.png",
                            text: "Slideshows",
                        },
                        {
                            href: "https://createsstudioo.com/wp-content/uploads/2023/09/video_meme.f09bdd1a.png",
                            title: "Memes",
                            imgSrc: "https://createsstudioo.com/wp-content/uploads/2023/09/video_meme.f09bdd1a.png",
                            text: "Memes",
                        },
                    ].map((item, index) => (
                        <div className="gallery-item" key={index}>
                            <div className="col-item">
                                <a
                                    className="image-lightbox"
                                    href={item.href}
                                    title={item.title}
                                >
                                    <div className="box">
                                        <div className="box-image">
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                width="350"
                                                height="204"
                                                src={item.imgSrc}
                                                className="attachment"
                                                alt="Photo"
                                            />
                                            <div className="overlay fill"></div>
                                        </div>
                                        <div className="box-text text-center">
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lscjsl3223">
                    <div className="ksdjjdscs0">
                        <div className="img908492">
                            <div className="imgdlsdcls">
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    width="1984"
                                    height="1336"
                                    src="https://createsstudioo.com/wp-content/uploads/2023/09/willCreate-laptop.27ad7ffe.png"
                                    className="attachment3832"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionContent;
