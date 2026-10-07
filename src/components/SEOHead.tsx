import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogImageAlt?: string;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

const DEFAULT_TITLE = "AuraWise International | Premier Overseas Education & Global Migration Advisory";
const DEFAULT_DESCRIPTION = "India's premier overseas education and migration consultancy since 2009. Expert guidance for Student Visas, Permanent Residency, Work Permits, and Admissions across Canada, Australia, UK, USA, Germany, and Europe. MARA & OISC certified counsel with a 98% visa approval rate.";
const DEFAULT_KEYWORDS = "AuraWise International, overseas education Ahmedabad, study abroad consultant, student visa, permanent residency Canada Australia, work permit, Express Entry CRS, MARA certified agent, OISC registered, university admissions";
const DEFAULT_OG_IMAGE = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80";
const SITE_NAME = "AuraWise International";
const BASE_DOMAIN = "https://aurawise.international";

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = "AuraWise International — Overseas Education & Global Migration Advisory",
  breadcrumbs,
  structuredData,
  noindex = false,
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper: update or create meta tag
    const setMetaTag = (attr: 'name' | 'property', attrVal: string, content: string) => {
      let tag = document.querySelector(`meta[${attr}="${attrVal}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', 'AuraWise International LLP');
    setMetaTag(
      'name',
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // 3. Canonical URL
    const activePath = canonicalPath || location.pathname;
    const cleanPath = activePath === '/' ? '' : activePath;
    const canonicalUrl = `${BASE_DOMAIN}${cleanPath}`;

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl || `${BASE_DOMAIN}/`);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', 'en_US');
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl || `${BASE_DOMAIN}/`);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:secure_url', ogImage);
    setMetaTag('property', 'og:image:type', 'image/jpeg');
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', ogImageAlt);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:domain', 'aurawise.international');
    setMetaTag('name', 'twitter:url', canonicalUrl || `${BASE_DOMAIN}/`);
    setMetaTag('name', 'twitter:site', '@AuraWiseInt');
    setMetaTag('name', 'twitter:creator', '@AuraWiseInt');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:image:alt', ogImageAlt);

    // 6. Dynamic JSON-LD Structured Data
    const schemas: Array<Record<string, unknown>> = [];

    // WebPage schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description: description,
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${BASE_DOMAIN}/#website`,
        name: SITE_NAME,
        url: BASE_DOMAIN,
      },
      publisher: {
        '@type': 'EducationalOrganization',
        '@id': `${BASE_DOMAIN}/#organization`,
        name: SITE_NAME,
        url: BASE_DOMAIN,
      },
    });

    // BreadcrumbList schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((bc, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: bc.name,
          item: `${BASE_DOMAIN}${bc.path === '/' ? '' : bc.path}`,
        })),
      });
    }

    // Custom or page-specific schema
    if (structuredData) {
      if (Array.isArray(structuredData)) {
        schemas.push(...structuredData);
      } else {
        schemas.push(structuredData);
      }
    }

    // Inject schema script tag
    let schemaScript = document.getElementById('seo-page-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'seo-page-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : { '@context': 'https://schema.org', '@graph': schemas }, null, 2);

    return () => {
      // Cleanup custom schema on unmount if navigating away
      const el = document.getElementById('seo-page-schema');
      if (el) el.textContent = '';
    };
  }, [
    title,
    description,
    keywords,
    canonicalPath,
    location.pathname,
    ogType,
    ogImage,
    ogImageAlt,
    noindex,
    breadcrumbs,
    structuredData,
  ]);

  return null;
};
