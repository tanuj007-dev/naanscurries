"use client";

import ContactHero from "@/src/components/ContactHero";
import ContactForm from "@/src/components/ContactForm";
import ContactLocations from "@/src/components/ContactLocations";
import ContactGallery from "@/src/components/ContactGallery";
import { LazyMotion, domMax, m } from "framer-motion";
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <title>Contact Us | Naans & Curries</title>
                <meta name="description" content="Whether you're booking a table, planning an event, or just have a question — our team is here to help." />
            </Helmet>
            <LazyMotion features={domMax}>
                <m.main
                    className="min-h-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Contact Hero Section */}
                    <ContactHero />

                    {/* Contact Form Section */}
                    <ContactForm />

                    {/* Office Location Section */}
                    <ContactLocations />

                    {/* Gallery Section */}
                    <ContactGallery />

                    {/* Additional sections will be added in further steps */}
                    <div className="h-48 bg-[#EFEDE7]" />
                </m.main>
            </LazyMotion>
        </>
    );
}
