import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SearchModal from './index';

export default function SearchModalTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="navbar__item">
        <button
          className="launcher-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      </div>

      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
