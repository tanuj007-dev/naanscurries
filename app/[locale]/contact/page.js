"use client";

import ContactHero from "@/app/components/ContactHero";
import ContactForm from "@/app/components/ContactForm";
import ContactLocations from "@/app/components/ContactLocations";
import ContactGallery from "@/app/components/ContactGallery";
import { LazyMotion, domMax, m } from "framer-motion";

export default function ContactPage() {
    return (
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
    );
}
