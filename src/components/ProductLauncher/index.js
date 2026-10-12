import React, { useState, useRef, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { Grip } from 'lucide-react';
import Translate, { translate } from '@docusaurus/Translate';
import { products } from '../../config/products';

export default function ProductLauncherItem() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="navbar__item" ref={popoverRef} style={{ position: 'relative' }}>
      <button
        className="launcher-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Seaneb Products"
        aria-expanded={isOpen}
      >
        <Grip size={20} />
      </button>

      {isOpen && (
        <div className="launcher-popover">
          <div className="launcher-header">
            <div className="launcher-title"><Translate id="launcher.title">Seaneb Products</Translate></div>
            <div className="launcher-subtitle"><Translate id="launcher.subtitle">Explore the Seaneb ecosystem</Translate></div>
          </div>

          <div className="launcher-grid">
            {products.map((product) => {
              const Icon = product.icon;
              if (product.comingSoon) {
                return (
                  <div key={product.id} className="launcher-item launcher-item--coming-soon">
                    <div className="launcher-item-icon">
                      {product.logo ? (
                        <img src={product.logo} alt={product.name} width={20} height={20} style={{ objectFit: 'contain', opacity: 0.5 }} />
                      ) : (
                        <Icon size={18} />
                      )}
                    </div>
                    <span className="launcher-item-name">{product.name}</span>
                    <span className="coming-soon-tag"><Translate id="common.soon">Soon</Translate></span>
                  </div>
                );
              }
              return (
                <Link key={product.id} to={product.href} className="launcher-item">
                  <div className="launcher-item-icon">
                    {product.logo ? (
                      <img src={product.logo} alt={product.name} width={20} height={20} style={{ objectFit: 'contain' }} />
                    ) : (
                      <Icon size={18} />
                    )}
                  </div>
                  <span className="launcher-item-name">{product.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
