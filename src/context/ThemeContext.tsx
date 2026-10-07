import React, { useState, useEffect } from 'react';
import type { AtmosphereTheme, DestinationAura } from './themeData';
import { ThemeContext } from './ThemeContextDefinition';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<AtmosphereTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aurawise-atmosphere') as AtmosphereTheme;
      if (saved && ['imperial', 'sapphire', 'emerald', 'atelier'].includes(saved)) {
        return saved;
      }
    }
    return 'imperial';
  });

  const [activeDestinationAura, setActiveDestinationAura] = useState<DestinationAura | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('aurawise-atmosphere', theme);
  }, [theme]);

  // Apply destination aura CSS variables dynamically
  useEffect(() => {
    const root = document.documentElement;
    if (activeDestinationAura) {
      root.style.setProperty('--dest-active-color', activeDestinationAura.primaryColor);
      root.style.setProperty('--dest-active-glow', activeDestinationAura.glowColor);
      root.style.setProperty('--dest-active-secondary', activeDestinationAura.secondaryColor);
    } else {
      root.style.removeProperty('--dest-active-color');
      root.style.removeProperty('--dest-active-glow');
      root.style.removeProperty('--dest-active-secondary');
    }
  }, [activeDestinationAura]);

  const setTheme = (newTheme: AtmosphereTheme) => {
    setThemeState(newTheme);
  };

  const isLightMode = theme === 'atelier';

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        activeDestinationAura,
        setActiveDestinationAura,
        isLightMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
