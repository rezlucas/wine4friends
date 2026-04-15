import { useState, useRef, useEffect } from 'react';
import { CIDADES } from '../../data/cidades';
import styles from './CityAutocomplete.module.scss';

// Normaliza string removendo acentos para comparação
function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export default function CityAutocomplete({ value, onChange, className, ...props }) {
  const [query, setQuery]       = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen]         = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const containerRef            = useRef(null);
  const inputRef                = useRef(null);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleInput = (e) => {
    const val = e.target.value;
    setQuery(val);
    onChange(val); // repassa como string ao pai (ainda não selecionado da lista)

    if (val.length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    const q = normalize(val);
    const matches = CIDADES.filter((c) => normalize(c).includes(q)).slice(0, 8);
    setSuggestions(matches);
    setOpen(matches.length > 0);
    setHighlighted(-1);
  };

  const select = (city) => {
    setQuery(city);
    onChange(city);
    setSuggestions([]);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!open) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlighted >= 0) select(suggestions[highlighted]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={styles.wrap}>
      <input
        {...props}
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        className={className}
        aria-autocomplete="list"
        aria-expanded={open}
      />

      {open && (
        <ul className={styles.dropdown} role="listbox">
          {suggestions.map((city, i) => (
            <li
              key={city}
              role="option"
              aria-selected={i === highlighted}
              className={`${styles.option} ${i === highlighted ? styles['option--active'] : ''}`}
              onMouseDown={() => select(city)}
              onMouseEnter={() => setHighlighted(i)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
