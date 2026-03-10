"use client";

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const AUTO_FLIP_INTERVAL_MS = 6000;
const MOBILE_BREAKPOINT = 768;

const getBookDimensions = () => {
    if (typeof window === "undefined") return { width: 450, height: 630, usePortrait: false, isMobile: false };
    const w = window.innerWidth;
    const h = window.innerHeight;
    const isMobile = w < MOBILE_BREAKPOINT;

    // Mobile (Single Page)
    if (w < 640) {
        const targetWidth = w - 40;
        const targetHeight = Math.min(h * 0.75, targetWidth * 1.45);
        return { width: targetWidth, height: targetHeight, usePortrait: true, isMobile };
    }

    // Tablet (Single Page or Small Double)
    if (w < 1024) {
        const targetWidth = Math.min(450, w * 0.8);
        const targetHeight = targetWidth * 1.4;
        return { width: targetWidth, height: targetHeight, usePortrait: isMobile, isMobile };
    }

    // Large Desktop (Double Page) - Aiming for standard paper aspect ratio ~1:1.4
    const targetHeight = Math.min(h * 0.8, 850);
    const targetWidth = targetHeight * 0.71;
    return { width: targetWidth, height: targetHeight, usePortrait: false, isMobile };
};

const ImagePage = forwardRef(({ src, alt, width, height }, ref) => (
    <div
        ref={ref}
        className="flipbook-page bg-white overflow-hidden flex items-center justify-center"
        style={{ width, height }}
    >
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain"
            draggable={false}
        />
        {/* Subtle page gradient for realism */}
        <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-black/5 via-transparent to-black/5 opacity-50" />
    </div>
));
ImagePage.displayName = "ImagePage";


export default function ImageFlipBook({ pages = [], className = "", autoFlipIntervalMs = AUTO_FLIP_INTERVAL_MS, downloadUrl = "" }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [autoFlipPaused, setAutoFlipPaused] = useState(true);
    const [dimensions, setDimensions] = useState(getBookDimensions);
    const bookRef = useRef(null);
    const audioRef = useRef(null);
    const containerRef = useRef(null);
    const numPages = pages.length;

    useEffect(() => {
        audioRef.current = new Audio("https://www.soundjay.com/misc/sounds/page-flip-01a.mp3");
    }, []);

    const playFlipSound = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => { }); // Catch browser autoplay restrictions
        }
    }, []);

    useEffect(() => {
        setDimensions(getBookDimensions());
        const onResize = () => setDimensions(getBookDimensions());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const onFlip = useCallback((e) => {
        setCurrentPage(e.data);
        playFlipSound();
    }, [playFlipSound]);

    const { width: pageWidth, height: pageHeight, usePortrait, isMobile } = dimensions;

    useEffect(() => {
        if (numPages <= 1 || autoFlipPaused) return;
        const id = setInterval(() => {
            const flip = bookRef.current?.pageFlip?.();
            if (!flip) return;
            if (flip.getCurrentPageIndex() >= numPages - 1) {
                flip.turnToPage(0);
            } else {
                flip.flipNext();
            }
        }, autoFlipIntervalMs);
        return () => clearInterval(id);
    }, [numPages, autoFlipPaused, autoFlipIntervalMs]);

    if (!numPages) {
        return (
            <div className={`flex items-center justify-center min-h-[320px] text-[#1a1a1a]/60 ${className}`}>
                No pages to display.
            </div>
        );
    }

    const bookWidth = usePortrait ? pageWidth : pageWidth * 2;

    return (
        <div ref={containerRef} className={`relative flex flex-col items-center justify-center w-full min-h-[500px] md:min-h-[700px] py-8 overflow-hidden select-none bg-[#F4F1EA] ${className}`}>

            {/* Textured Background Cover */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }} />
            <div className="absolute inset-0 z-[-1] bg-[#F4F1EA]" />

            {/* Global Ornamental Jaali Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L45 35 L80 40 L45 45 L40 80 L35 45 L0 40 L35 35 Z' fill='%231a1a1a'/%3E%3C/svg%3E")`,
                    backgroundSize: '80px 80px'
                }}
            />











            {/* Main Flipbook Wrapper */}
            <div className="relative z-10 flex items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-12">

                {/* Left Arrow */}
                <button
                    onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
                    disabled={currentPage <= 0}
                    className="absolute left-2 md:left-6 z-20 p-3 rounded-full bg-white/40 border border-black/5 text-[#1a1a1a] shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:scale-110 disabled:opacity-0 disabled:pointer-events-none"
                    aria-label="Previous Page"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* The Book */}
                <div
                    className="relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-sm overflow-hidden bg-white"
                    style={{
                        width: bookWidth,
                        height: pageHeight,
                        transition: 'width 0.3s ease, height 0.3s ease'
                    }}
                >
                    <HTMLFlipBook
                        key={`${pageWidth}-${pageHeight}-${usePortrait}`}
                        ref={bookRef}
                        width={pageWidth}
                        height={pageHeight}
                        size="fixed"
                        minWidth={280}
                        maxWidth={bookWidth}
                        minHeight={360}
                        maxHeight={pageHeight}
                        showCover={true}
                        flippingTime={800}
                        usePortrait={usePortrait}
                        startPage={0}
                        drawShadow={true}
                        maxShadowOpacity={0.6}
                        onFlip={onFlip}
                        className="flip-book"
                    >
                        {pages.map((src, index) => (
                            <ImagePage
                                key={index}
                                src={typeof src === "string" ? src : (src?.default ?? src)}
                                alt={`Menu page ${index + 1}`}
                                width={pageWidth}
                                height={pageHeight}
                            />
                        ))}
                    </HTMLFlipBook>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => bookRef.current?.pageFlip()?.flipNext()}
                    disabled={currentPage >= numPages - 1}
                    className="absolute right-2 md:right-6 z-20 p-3 rounded-full bg-white/40 border border-black/5 text-[#1a1a1a] shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:scale-110 disabled:opacity-0 disabled:pointer-events-none"
                    aria-label="Next Page"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Bottom Toolbar */}
            <div className="relative z-20 mt-10 md:mt-14 flex items-center justify-center gap-6 px-6 py-3 rounded-full bg-white/80 border border-black/5 shadow-lg backdrop-blur-md">

                {/* Page Indicator */}
                <div className="flex items-center gap-2 px-4 border-r border-black/10">
                    <span className="text-[10px] uppercase tracking-widest text-black/40 font-bold" style={{ fontFamily: "var(--font-futura)" }}>Page</span>
                    <span className="text-sm font-semibold text-[#1a1a1a] tabular-nums">
                        {currentPage + 1} <span className="text-black/30 mx-1">/</span> {numPages}
                    </span>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-5">
                    <button
                        onClick={() => setAutoFlipPaused((p) => !p)}
                        className={`transition-colors duration-200 ${autoFlipPaused ? 'text-black/40 hover:text-black' : 'text-[#E89D42]'}`}
                        title={autoFlipPaused ? "Play" : "Pause"}
                    >
                        {autoFlipPaused ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>

                    <button
                        onClick={() => bookRef.current?.pageFlip()?.turnToPage(0)}
                        className="text-black/40 hover:text-black transition-colors"
                        title="First Page"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    <button
                        onClick={() => {
                            if (document.fullscreenElement) {
                                document.exitFullscreen();
                            } else if (containerRef.current) {
                                containerRef.current.requestFullscreen().catch((err) => {
                                    console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                                });
                            }
                        }}
                        className="text-black/40 hover:text-black transition-colors"
                        title="Toggle Fullscreen"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                    </button>

                    {downloadUrl && (
                        <a
                            href={downloadUrl}
                            download
                            className="text-black/40 hover:text-[#E89D42] transition-colors"
                            title="Download Menu PDF"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
}
