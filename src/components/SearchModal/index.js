import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Search, X } from 'lucide-react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import { products } from '@site/src/config/products';

// Map all products for search suggestions
const suggestedProducts = products.map((p) => ({
  id: p.id,
  title: p.name,
  desc: p.description,
  type: p.category,
  icon: p.icon,
  logo: p.logo,
  href: p.href,
  comingSoon: p.comingSoon || false,
}));

export default function SearchModal({ isOpen, onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') onClose();
    }

    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Render modal in portal if possible, otherwise normal render
  const modalContent = (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <Search size={20} color="var(--seaneb-text-secondary)" />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder={translate({ message: "Search documentation, APIs, guides...", id: "searchmodal.placeholder" })}
          />
          <button className="launcher-trigger" onClick={onClose} style={{ marginLeft: 'auto' }}>
            <X size={20} />
          </button>
        </div>

        <div className="search-modal-body">
          <div className="search-modal-group">
            <div className="search-group-title"><Translate id="searchmodal.suggested">Suggested</Translate></div>
            {suggestedProducts.map(res => {
              const Icon = res.icon;
              if (res.comingSoon) {
                return (
                  <div key={res.id} className="search-result-item search-result-item--coming-soon">
                    {res.logo ? (
                      <img src={res.logo} alt={res.title} className="search-result-logo" style={{ opacity: 0.45 }} />
                    ) : (
                      <Icon size={18} className="search-result-icon" />
                    )}
                    <div className="search-result-text">
                      <div className="search-result-title">{res.title}</div>
                      <div className="search-result-desc">{res.desc}</div>
                    </div>
                    <div className="coming-soon-badge"><Translate id="common.comingSoon">COMING SOON</Translate></div>
                  </div>
                );
              }
              return (
                <Link key={res.id} to={res.href} className="search-result-item" onClick={onClose}>
                  {res.logo ? (
                    <img src={res.logo} alt={res.title} className="search-result-logo" />
                  ) : (
                    <Icon size={18} className="search-result-icon" />
                  )}
                  <div className="search-result-text">
                    <div className="search-result-title">{res.title}</div>
                    <div className="search-result-desc">{res.desc}</div>
                  </div>
                  <div className="seaneb-card-category">{res.type}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
}
