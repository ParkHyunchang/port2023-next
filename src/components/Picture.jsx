import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { pictureText } from "@/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Picture = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="picture" ref={horizontalRef}>
            <div className="picture__inner">
                <h2 className="picture__title">
                    picture <em>사진</em>
                </h2>
                <div className="picture__wrap">
                    {pictureText.map((picture, key) => (
                        <article 
                            className={`picture__item p${key+1}`} 
                            key={key}
                            ref={(el) => (sectionRef.current[key]=el)}
                        >
                            <span className="num">{picture.num}.</span>
                            <a href={picture.code} target="_blank" className="img">
                                <Image src={picture.img} alt={picture.name} width={420} height={262} />
                            </a>
                            <h3 className="title">{picture.title}</h3>
                            <p className="desc">{picture.desc}</p>
                            {/* <a href={picture.view} target="_blank" className="site">사이트 보기</a> */}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Picture;