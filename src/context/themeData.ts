export type AtmosphereTheme = 'imperial' | 'sapphire' | 'emerald' | 'atelier';

export interface DestinationAura {
  countryCode: string;
  name: string;
  primaryColor: string;
  glowColor: string;
  secondaryColor: string;
  flag: string;
}

export const DESTINATION_AURAS: Record<string, DestinationAura> = {
  CA: { countryCode: 'CA', name: 'Canada', primaryColor: '#E11D48', glowColor: 'rgba(225, 29, 72, 0.35)', secondaryColor: '#FDA4AF', flag: '🇨🇦' },
  AU: { countryCode: 'AU', name: 'Australia', primaryColor: '#F97316', glowColor: 'rgba(249, 115, 22, 0.35)', secondaryColor: '#FDBA74', flag: '🇦🇺' },
  NZ: { countryCode: 'NZ', name: 'New Zealand', primaryColor: '#10B981', glowColor: 'rgba(16, 185, 129, 0.35)', secondaryColor: '#6EE7B7', flag: '🇳🇿' },
  GB: { countryCode: 'GB', name: 'United Kingdom', primaryColor: '#3B82F6', glowColor: 'rgba(59, 130, 246, 0.35)', secondaryColor: '#93C5FD', flag: '🇬🇧' },
  US: { countryCode: 'US', name: 'United States', primaryColor: '#6366F1', glowColor: 'rgba(99, 102, 241, 0.35)', secondaryColor: '#A5B4FC', flag: '🇺🇸' },
  DE: { countryCode: 'DE', name: 'Germany', primaryColor: '#F59E0B', glowColor: 'rgba(245, 158, 11, 0.35)', secondaryColor: '#FCD34D', flag: '🇩🇪' },
  IE: { countryCode: 'IE', name: 'Ireland', primaryColor: '#059669', glowColor: 'rgba(5, 150, 105, 0.35)', secondaryColor: '#34D399', flag: '🇮🇪' },
  AE: { countryCode: 'AE', name: 'United Arab Emirates', primaryColor: '#D97706', glowColor: 'rgba(217, 119, 6, 0.35)', secondaryColor: '#FDE68A', flag: '🇦🇪' },
  FR: { countryCode: 'FR', name: 'France', primaryColor: '#8B5CF6', glowColor: 'rgba(139, 92, 246, 0.35)', secondaryColor: '#C4B5FD', flag: '🇫🇷' },
  IT: { countryCode: 'IT', name: 'Italy', primaryColor: '#EC4899', glowColor: 'rgba(236, 72, 153, 0.35)', secondaryColor: '#F472B6', flag: '🇮🇹' },
};

export interface ThemeConfig {
  id: AtmosphereTheme;
  name: string;
  descriptor: string;
  badge: string;
  paletteNotes: string;
}

export const ATMOSPHERE_THEMES: ThemeConfig[] = [
  {
    id: 'imperial',
    name: 'Imperial Noir',
    descriptor: 'Obsidian & Champagne Gold',
    badge: 'Flagship Edition',
    paletteNotes: 'Deep midnight obsidian, champagne titanium gold, cashmere ivory'
  },
  {
    id: 'sapphire',
    name: 'Diplomatic Sapphire',
    descriptor: 'Abyssal Navy & Celestial Ice',
    badge: 'International Modern',
    paletteNotes: 'Atlantic deep oceanic sapphire, celestial platinum ice, crisp frost'
  },
  {
    id: 'emerald',
    name: 'Sovereign Emerald',
    descriptor: 'Botanical Spruce & Antique Brass',
    badge: 'Heritage Trust',
    paletteNotes: 'Deep alpine spruce, lustrous antique brass, warm alabaster'
  },
  {
    id: 'atelier',
    name: 'Atelier Alabaster',
    descriptor: 'Warm Cashmere & Tuscan Cognac',
    badge: 'Editorial High Fashion',
    paletteNotes: 'Curated ivory silk, deep espresso serif, warm cognac gold'
  }
];
