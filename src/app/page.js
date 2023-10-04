"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Schedule from "@/components/Schedule";
import Site from "@/components/Site";
import Picture from "@/components/Picture";
import Contact from "@/components/Contact";
import Skip from "@/components/Skip";
import lenis from "@/utils/lenis";
import link from "@/utils/link";

export default function Home() {
    useEffect(() => {
        lenis();
        link();
    }, []);

    return (
        <>
            <Skip />
            <Header />
            <main id="main" role="main">
                <Intro />
                <Schedule />
                <Site />
                <Picture />
                <Contact />
            </main>
            <Footer />
        </>
    );
}