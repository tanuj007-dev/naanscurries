"use client";

import { motion } from "framer-motion";
import MenuHero from "@/components/menu/Hero";
import MenuList from "@/components/menu/MenuList";

export default function MenuPage() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#FCF9F3]"
        >
            <MenuHero />
            <MenuList />
        </motion.main>
    );
}
