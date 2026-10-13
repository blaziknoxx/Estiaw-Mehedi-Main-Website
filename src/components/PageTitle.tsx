import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TITLE_MAP: Record<string, string> = {
  '/': 'ESTIAQ MEHEDI — Independent Artist, Photographer & Digital Creator',
  '/about': 'About — ESTIAQ MEHEDI',
  '/music': 'Original Music & Sound Works — ESTIAQ MEHEDI',
  '/photography': 'Photography Gallery — ESTIAQ MEHEDI',
  '/projects': 'Digital Projects & Creative Engineering — ESTIAQ MEHEDI',
  '/contact': 'Contact & Inquiries — ESTIAQ MEHEDI',
};

export const PageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (TITLE_MAP[pathname]) {
      document.title = TITLE_MAP[pathname];
    } else if (pathname.startsWith('/music/')) {
      document.title = 'Music Release Detail — ESTIAQ MEHEDI';
    } else if (pathname.startsWith('/photography/')) {
      document.title = 'Photograph Detail — ESTIAQ MEHEDI';
    } else if (pathname.startsWith('/projects/')) {
      document.title = 'Project Case Study — ESTIAQ MEHEDI';
    } else {
      document.title = 'Lost in the Frame — ESTIAQ MEHEDI';
    }
  }, [pathname]);

  return null;
};

export default PageTitle;
