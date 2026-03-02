import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SectionSkeleton from '@/src/components/SectionSkeleton';

// Pages
const Home = lazy(() => import('@/src/[locale]/page'));
const About = lazy(() => import('@/src/[locale]/about/page'));
const Blog = lazy(() => import('@/src/[locale]/blog/page'));
const Contact = lazy(() => import('@/src/[locale]/contact/page'));
const Menu = lazy(() => import('@/src/[locale]/menu/page'));
const Reservation = lazy(() => import('@/src/[locale]/reservation/page'));

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/:locale" element={<Layout />}>
                <Route index element={
                    <Suspense fallback={<SectionSkeleton height="h-screen" />}>
                        <Home />
                    </Suspense>
                } />
                <Route path="about" element={
                    <Suspense fallback={<SectionSkeleton height="h-screen" />}>
                        <About />
                    </Suspense>
                } />
                <Route path="blog" element={
                    <Suspense fallback={<SectionSkeleton height="h-screen" />}>
                        <Blog />
                    </Suspense>
                } />
                <Route path="contact" element={
                    <Suspense fallback={<SectionSkeleton height="h-screen" />}>
                        <Contact />
                    </Suspense>
                } />
                <Route path="menu" element={
                    <Suspense fallback={<SectionSkeleton height="h-screen" />}>
                        <Menu />
                    </Suspense>
                } />
                <Route path="reservation" element={
                    <Suspense fallback={<SectionSkeleton height="h-screen" />}>
                        <Reservation />
                    </Suspense>
                } />
            </Route>
            <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
    );
};

export default App;
