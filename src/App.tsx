/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import AmbientMesh from './components/AmbientMesh.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import PageTitle from './components/PageTitle.tsx';

import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import MusicPage from './pages/MusicPage.tsx';
import MusicReleaseDetailPage from './pages/MusicReleaseDetailPage.tsx';
import PhotographyPage from './pages/PhotographyPage.tsx';
import PhotographyDetailPage from './pages/PhotographyDetailPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import ProjectDetailPage from './pages/ProjectDetailPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

function AppLayout() {
  const location = useLocation();

  // Known top-level routes and prefixes
  const knownPaths = [
    '/',
    '/about',
    '/music',
    '/photography',
    '/projects',
    '/contact',
  ];
  const isKnownRoute =
    knownPaths.includes(location.pathname) ||
    location.pathname.startsWith('/music/') ||
    location.pathname.startsWith('/photography/') ||
    location.pathname.startsWith('/projects/');

  return (
    <div className="relative z-10 flex flex-col min-h-screen text-[#F7F7F2]">
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/music/:slug" element={<MusicReleaseDetailPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/photography/:slug" element={<PhotographyDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Full footer displayed only on existing pages; 404 provides an immersive full-screen viewport */}
      {isKnownRoute && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTitle />
      {/* Organic drifting ambient mesh gradient */}
      <AmbientMesh />

      <AppLayout />
    </BrowserRouter>
  );
}
