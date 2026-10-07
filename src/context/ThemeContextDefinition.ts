import { createContext } from 'react';
import type { AtmosphereTheme, DestinationAura } from './themeData';

export interface ThemeContextType {
  theme: AtmosphereTheme;
  setTheme: (theme: AtmosphereTheme) => void;
  activeDestinationAura: DestinationAura | null;
  setActiveDestinationAura: (aura: DestinationAura | null) => void;
  isLightMode: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
