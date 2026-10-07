import { useContext } from 'react';
import { ThemeContext } from './ThemeContextDefinition';
import type { ThemeContextType } from './ThemeContextDefinition';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
