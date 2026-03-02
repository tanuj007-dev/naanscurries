"use client";

import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import MenuHero from "@/src/components/menu/Hero";
import MenuList from "@/src/components/menu/MenuList";

export default function MenuPage() {
    return (
        <>
            <Helmet>
                <title>Our Menu | Naans & Curries</title>
                <meta name="description" content="The food at Naans & Curries best describes itself in one word: diversity. Explore our authentic traditional recipes and contemporary twists." />
            </Helmet>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[#FCF9F3]"
            >
                <MenuHero />
                <MenuList />
            </motion.main>
        </>
    );
}
