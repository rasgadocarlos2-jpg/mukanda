// Sistema de Design Mukanda
// Cores quentes: bege, castanho, sépia, marrom
// Estilo editorial / museu / arquivo

export const colors = {
  // Tons principais
  primary: '#8B6F47',      // Castanho médio
  primaryDark: '#6B5335',  // Castanho escuro
  primaryLight: '#A68B6B', // Castanho claro
  
  // Tons neutros quentes
  bege: '#F5E6D3',         // Bege claro (backgrounds)
  begeMedium: '#E8D5C0',   // Bege médio
  begeDark: '#D4C4B0',     // Bege escuro
  
  // Sépias
  sepia: '#C9A961',        // Sépia dourada
  sepiaDark: '#9B8450',    // Sépia escura
  sepiaLight: '#E5D4A8',   // Sépia clara
  
  // Textos
  textPrimary: '#3D2F1F',  // Marrom escuro (texto principal)
  textSecondary: '#5C4A37', // Marrom médio (texto secundário)
  textLight: '#8B7355',    // Marrom claro (texto leve)
  
  // Acentos
  accent: '#B8860B',       // Dourado (destaques)
  accentLight: '#DAA520',  // Dourado claro
  
  // Neutros
  white: '#FFFFFF',
  offWhite: '#FAF8F5',     // Branco quente
  border: '#D9C7B0',       // Borda bege
  
  // Estados
  hover: '#C9A961',
  active: '#9B8450'
}

export const typography = {
  // Títulos - Tipografia serifada editorial
  fontFamilyHeading: "'Crimson Text', 'Georgia', serif",
  
  // Corpo - Tipografia simples e legível
  fontFamilyBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  
  // Tamanhos
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem'      // 48px
  },
  
  // Pesos
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
}

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem'    // 64px
}

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px'
}

