"use client";

import { forwardRef, useCallback, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF.js worker for Vite (use CDN so we don't need to copy worker into public)
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MAX_PAGE_WIDTH = 1000;
const MAX_PAGE_HEIGHT = 560;

const PdfPage = forwardRef(({ pageNumber, width, height }, ref) => (
    <div
        ref={ref}
        className="flipbook-page bg-[#FCF9F3] shadow-lg flex items-center justify-center overflow-hidden"
        style={{ width, height }}
    >
        <Page
            pageNumber={pageNumber}
            width={width}
            height={height}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="flex justify-center"
        />
    </div>
));
PdfPage.displayName = "PdfPage";

export default function FlipBookViewer({ file, className = "" }) {
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState({ width: MAX_PAGE_WIDTH, height: MAX_PAGE_HEIGHT });
    const bookRef = useRef(null);

    const onDocumentLoadSuccess = useCallback((pdf) => {
        setNumPages(pdf.numPages);
        // Size flipbook to PDF aspect ratio so there's no extra white space below content
        pdf.getPage(1).then((page) => {
            const viewport = page.getViewport({ scale: 1 });
            const scale = Math.min(
                MAX_PAGE_WIDTH / viewport.width,
                MAX_PAGE_HEIGHT / viewport.height
            );
            setPageSize({
                width: Math.round(viewport.width * scale),
                height: Math.round(viewport.height * scale),
            });
        });
    }, []);

    const onFlip = useCallback((e) => {
        setCurrentPage(e.data);
    }, []);

    if (!file) {
        return (
            <div className={`flex items-center justify-center min-h-[400px] text-[#1a1a1a]/60 ${className}`}>
                No PDF file provided.
            </div>
        );
    }

    return (
        <div className={`flex flex-col items-center justify-center gap-4 min-h-[calc(100vh-12rem)] py-8 px-4 ${className}`}>
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                    <div className="flex items-center justify-center min-h-[400px] text-[#1a1a1a]/60">
                        Loading menu…
                    </div>
                }
                error={
                    <div className="flex items-center justify-center min-h-[400px] text-red-600">
                        Failed to load PDF.
                    </div>
                }
            >
                {numPages != null && (
                    <>
                        <div className="flex justify-center">
                            <HTMLFlipBook
                                ref={bookRef}
                                width={pageSize.width}
                                height={pageSize.height}
                                size="fixed"
                                minWidth={280}
                                maxWidth={pageSize.width}
                                minHeight={360}
                                maxHeight={pageSize.height}
                                showCover={true}
                                flippingTime={600}
                                usePortrait={false}
                                startPage={0}
                                drawShadow={true}
                                onFlip={onFlip}
                                className="shadow-2xl"
                            >
                                {Array.from({ length: numPages }, (_, i) => i + 1).map((pageNumber) => (
                                    <PdfPage
                                        key={pageNumber}
                                        pageNumber={pageNumber}
                                        width={pageSize.width}
                                        height={pageSize.height}
                                    />
                                ))}
                            </HTMLFlipBook>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <button
                                type="button"
                                onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
                                disabled={currentPage <= 0}
                                className="px-4 py-2 rounded border border-[#1a1a1a]/20 bg-[#FCF9F3] text-[#1a1a1a] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1a1a1a]/5 transition-colors"
                                style={{ fontFamily: "var(--font-futura)" }}
                            >
                                Previous
                            </button>
                            <span
                                className="text-[#1a1a1a]/80 text-sm"
                                style={{ fontFamily: "var(--font-futura)" }}
                            >
                                Page {currentPage + 1} of {numPages}
                            </span>
                            <button
                                type="button"
                                onClick={() => bookRef.current?.pageFlip()?.flipNext()}
                                disabled={currentPage >= numPages - 1}
                                className="px-4 py-2 rounded border border-[#1a1a1a]/20 bg-[#FCF9F3] text-[#1a1a1a] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1a1a1a]/5 transition-colors"
                                style={{ fontFamily: "var(--font-futura)" }}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
            </Document>
        </div>
    );
}
