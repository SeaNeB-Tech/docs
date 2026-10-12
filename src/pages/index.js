import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import Translate, { translate } from '@docusaurus/Translate';
import { products } from '../config/products';
import {
  Play,
  Book,
  Terminal,
  Cpu,
  LifeBuoy,
  Code2,
  Key,
  Webhook,
  Blocks,
  ArrowRight
} from 'lucide-react';

function Hero() {
  return (
    <section className="seaneb-hero" style={{ minHeight: 'calc(100vh - 60px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="seaneb-hero-content">
        <div className="seaneb-hero-eyebrow"><Translate id="homepage.hero.eyebrow">SEANEB DOCUMENTATION</Translate></div>
        <h1 className="seaneb-hero-title"><Translate id="homepage.hero.title">Welcome to Seaneb</Translate></h1>
        <p className="seaneb-hero-subtitle">
          <Translate id="homepage.hero.subtitle">Building technology for everyday life.</Translate>
        </p>

        <div className="seaneb-btn-group" style={{ marginBottom: '3rem' }}>
          <Link className="seaneb-btn seaneb-btn-primary" to="/docs/intro">
            <Translate id="homepage.hero.exploreBtn">Explore Documentation</Translate> <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
          <a className="seaneb-btn seaneb-btn-secondary" href="#products">
            <Translate id="homepage.hero.viewProductsBtn">View Products</Translate>
          </a>
        </div>

        <div className="seaneb-hero-search">
          <button
            className="seaneb-hero-search-btn"
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          >
            <Translate id="homepage.hero.searchPlaceholder">Search documentation, guides and references...</Translate>
            <span className="seaneb-hero-search-shortcut">⌘ K</span>
          </button>
        </div>


      </div>
    </section>
  );
}

function PackagePlaceholder(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16.5 9.4 7.55 4.24" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.29 7 12 12 20.71 7" /><polyline points="12 22 12 12" />
    </svg>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="seaneb-section soft">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="seaneb-section-header">
          <h2 className="seaneb-section-title"><Translate id="homepage.products.title">Explore the Seaneb Ecosystem</Translate></h2>
          <p className="seaneb-section-desc">
            <Translate id="homepage.products.desc">One ecosystem. Multiple products built around local businesses, communities and everyday needs.</Translate>
          </p>
        </div>

        <div className="cards-grid-3">
          {products.map((product) => {
            const Icon = product.icon;
            const Wrapper = product.comingSoon ? 'div' : Link;
            const wrapperProps = product.comingSoon
              ? { className: 'seaneb-card seaneb-card--coming-soon' }
              : { to: product.href, className: 'seaneb-card' };
            return (
              <Wrapper key={product.id} {...wrapperProps}>
                <div className="seaneb-card-icon">
                  {product.logo ? (
                    <img src={product.logo} alt={product.name} width={22} height={22} style={{ objectFit: 'contain' }} />
                  ) : (
                    <Icon size={20} />
                  )}
                </div>
                <h3 className="seaneb-card-title">{product.name}</h3>
                <p className="seaneb-card-desc">{product.description}</p>

                <div className="seaneb-card-footer">
                  {product.comingSoon ? (
                    <span className="seaneb-card-category coming-soon-badge"><Translate id="common.comingSoon">COMING SOON</Translate></span>
                  ) : (
                    <>
                      <span className="seaneb-card-category">{product.category}</span>
                      <ArrowRight size={18} className="seaneb-card-arrow" />
                    </>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className="seaneb-section">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="seaneb-section-header">
          <h2 className="seaneb-section-title"><Translate id="homepage.quicklinks.title">Popular Resources</Translate></h2>
          <p className="seaneb-section-desc">
            <Translate id="homepage.quicklinks.desc">Frequently visited pages, guides, and developer documentation.</Translate>
          </p>
        </div>

        <div className="popular-links-list">
          <Link to="/docs/intro" className="popular-link">
            <div className="popular-link-content">
              <h4><Translate id="homepage.quicklinks.gettingStarted.title">Getting Started</Translate></h4>
              <p><Translate id="homepage.quicklinks.gettingStarted.desc">Learn about the Seaneb architecture and ecosystem setup.</Translate></p>
            </div>
            <ArrowRight size={18} color="var(--seaneb-text-secondary)" />
          </Link>

          <Link to="/docs/Seaneb%20Jobs/overview" className="popular-link">
            <div className="popular-link-content">
              <h4><Translate id="homepage.quicklinks.jobs.title">Seaneb Jobs</Translate></h4>
              <p><Translate id="homepage.quicklinks.jobs.desc">Documentation for job seekers and business recruitment portals.</Translate></p>
            </div>
            <ArrowRight size={18} color="var(--seaneb-text-secondary)" />
          </Link>

          <Link to="/docs/Seaneb%20App/overview" className="popular-link">
            <div className="popular-link-content">
              <h4><Translate id="homepage.quicklinks.app.title">Seaneb App</Translate></h4>
              <p><Translate id="homepage.quicklinks.app.desc">Customer application features, guides, and ecosystem connections.</Translate></p>
            </div>
            <ArrowRight size={18} color="var(--seaneb-text-secondary)" />
          </Link>

          <Link to="/docs/Seaneb%20Auto/overview" className="popular-link">
            <div className="popular-link-content">
              <h4><Translate id="homepage.quicklinks.auto.title">Seaneb Auto</Translate></h4>
              <p><Translate id="homepage.quicklinks.auto.desc">Local transportation, auto-rickshaw network guides, and driver apps.</Translate></p>
            </div>
            <ArrowRight size={18} color="var(--seaneb-text-secondary)" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="final-cta">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2><Translate id="homepage.cta.title">Ready to build or integrate?</Translate></h2>
        <p>
          <Translate id="homepage.cta.desc">Explore developer guides, architecture documentation, or system specifications.</Translate>
        </p>
        <div className="seaneb-btn-group">
          <Link className="seaneb-btn seaneb-btn-primary" to="/docs/intro">
            <Translate id="homepage.cta.exploreBtn">Explore Documentation</Translate>
          </Link>
          <a className="seaneb-btn seaneb-btn-secondary" href="https://www.seaneb.org/" target="_blank" rel="noopener noreferrer">
            <Translate id="homepage.cta.websiteBtn">Visit Seaneb Website</Translate>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={translate({ message: "Official Documentation & Resources", id: "homepage.meta.title" })}
      description={translate({ message: "Explore official documentation for the Seaneb ecosystem including Seaneb App, Seaneb Auto, Seaneb Jobs, Seaneb News, Seaneb Property, Seaneb NGO and Tiffin Service.", id: "homepage.meta.description" })}
    >
      <Head>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Hero />
        <ProductsSection />
        <QuickLinks />
        <CTASection />
      </main>
    </Layout>
  );
}
