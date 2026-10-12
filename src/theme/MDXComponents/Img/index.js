import React from 'react';
import Img from '@theme-original/MDXComponents/Img';

const URL_CONFIGS = [
  { match: ['home'], url: 'https://jobs.seaneb.com' },
  { match: ['login'], url: 'https://jobs.seaneb.com/login' },
  { match: ['otp'], url: 'https://jobs.seaneb.com/verify-otp' },
  { match: ['create-account', 'create-acccount', 'register'], url: 'https://jobs.seaneb.com/register' },
  { match: ['profile'], url: 'https://jobs.seaneb.com/profile' },
  { match: ['settings'], url: 'https://jobs.seaneb.com/settings' },
  { match: ['job-list'], url: 'https://jobs.seaneb.com/jobs' },
  { match: ['job-details'], url: 'https://jobs.seaneb.com/job/details' },
  { match: ['applications', 'my-applications'], url: 'https://jobs.seaneb.com/applications' },
  { match: ['savedjobs', 'saved-jobs'], url: 'https://jobs.seaneb.com/saved-jobs' },
];

const KNOWN_MOBILE_HASHES_OR_NAMES = [
  'create-acccount',
  'education',
  'experince',
  'my-applications',
  'my-profile',
  'notifications',
  'saved-jobs',
  'login-1554ea0f',
  'job-details-b3fb90',
  'job-list-feed06',
];

function isMobileScreenshot(props, srcString) {
  const w = Number(props.width);
  const h = Number(props.height);

  // If dimensions exist: mobile screenshots are portrait (720x1600), web are landscape (1920x912)
  if (w > 0 && h > 0) {
    if (h > w) {
      return true; // Portrait = phone
    }
    return false; // Landscape = web browser
  }

  const s = (srcString || '').toLowerCase();
  if (s.includes('/img/mobile/') || s.includes('mobile/')) {
    return true;
  }
  if (KNOWN_MOBILE_HASHES_OR_NAMES.some((k) => s.includes(k))) {
    return true;
  }

  return false;
}

function getBrowserMockupUrl(src) {
  if (!src || typeof src !== 'string') return null;
  const lower = src.toLowerCase();

  // Exclude icons, logos, badges
  if (lower.includes('logo') || lower.includes('favicon') || lower.endsWith('.svg')) {
    return null;
  }

  for (const config of URL_CONFIGS) {
    if (config.match.some((m) => lower.includes(m.toLowerCase()))) {
      return config.url;
    }
  }

  if (lower.includes('assets/images') || lower.includes('/img/web/') || lower.includes('web/')) {
    return 'https://jobs.seaneb.com';
  }

  return null;
}

export default function ImgWrapper(props) {
  const srcString = typeof props.src === 'string' ? props.src : (props.src?.default || '');
  const altText = props.alt ? props.alt.replace(/&amp;/g, '&') : '';

  // Exclude icons, logos, badges
  const lowerSrc = srcString.toLowerCase();
  if (lowerSrc.includes('logo') || lowerSrc.includes('favicon') || lowerSrc.endsWith('.svg')) {
    return <Img {...props} />;
  }

  // 1. Mobile Phone Mockup: Strictly for vertical mobile phone screenshots (720x1600)
  if (isMobileScreenshot(props, srcString)) {
    return (
      <span className="mobile-mockup">
        <span className="mobile-mockup-frame">
          <span className="mobile-mockup-notch" aria-hidden="true">
            <span className="mobile-mockup-speaker" />
            <span className="mobile-mockup-camera" />
          </span>
          <span className="mobile-mockup-screen">
            <img
              decoding="async"
              loading="lazy"
              {...props}
              className={`mobile-mockup-image ${props.className || ''}`}
            />
          </span>
          <span className="mobile-mockup-home-bar" aria-hidden="true" />
        </span>
        {altText && (
          <span className="mobile-mockup-caption">
            {altText}
          </span>
        )}
      </span>
    );
  }

  // 2. Web Browser Mockup: For landscape web screenshots (1920x912)
  const displayUrl = getBrowserMockupUrl(srcString);
  if (displayUrl) {
    return (
      <span className="browser-mockup">
        <span className="browser-mockup-frame">
          <span className="browser-mockup-header">
            <span className="browser-mockup-dots" aria-hidden="true">
              <span className="mockup-dot mockup-dot--close" />
              <span className="mockup-dot mockup-dot--minimize" />
              <span className="mockup-dot mockup-dot--maximize" />
            </span>
            <span className="browser-mockup-address-bar">
              <svg
                className="mockup-lock-icon"
                viewBox="0 0 24 24"
                width="12"
                height="12"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="mockup-url-text">{displayUrl}</span>
            </span>
            <span className="browser-mockup-actions" aria-hidden="true" />
          </span>
          <span className="browser-mockup-viewport">
            <img
              decoding="async"
              loading="lazy"
              {...props}
              className={`browser-mockup-image ${props.className || ''}`}
            />
          </span>
        </span>
        {altText && (
          <span className="browser-mockup-caption">
            {altText}
          </span>
        )}
      </span>
    );
  }

  return <Img {...props} />;
}
