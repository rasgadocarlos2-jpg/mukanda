# Sistema de Design Mukanda

Documentação completa do sistema de design da aplicação Mukanda.

## Identidade Visual

Mukanda é um arquivo vivo da música angolana. A identidade visual reflete:
- **Memória e História**: Tons quentes, sépia, nostálgicos
- **Respeito e Curadoria**: Visual calmo, editorial, museu
- **Cultura Angolana**: Cores inspiradas na terra, história, tradição

## Paleta de Cores

### Cores Principais

| Nome | Hex | Uso |
|------|-----|-----|
| Primary | `#8B6F47` | Botões primários, destaques |
| Primary Dark | `#6B5335` | Hover de botões primários |
| Primary Light | `#A68B6B` | Variações, gradientes |

### Tons Neutros Quentes

| Nome | Hex | Uso |
|------|-----|-----|
| Bege | `#F5E6D3` | Background principal |
| Bege Medium | `#E8D5C0` | Backgrounds secundários |
| Bege Dark | `#D4C4B0` | Bordas, divisores |
| Off White | `#FAF8F5` | Cards, superfícies |

### Sépias

| Nome | Hex | Uso |
|------|-----|-----|
| Sepia | `#C9A961` | Acentos, destaques |
| Sepia Dark | `#9B8450` | Hover, estados ativos |
| Sepia Light | `#E5D4A8` | Backgrounds de destaque |

### Textos

| Nome | Hex | Uso |
|------|-----|-----|
| Text Primary | `#3D2F1F` | Texto principal (títulos, corpo) |
| Text Secondary | `#5C4A37` | Texto secundário (descrições) |
| Text Light | `#8B7355` | Texto leve (metadados, subtítulos) |

### Acentos

| Nome | Hex | Uso |
|------|-----|-----|
| Accent | `#B8860B` | Destaques especiais |
| Accent Light | `#DAA520` | Hover de acentos |

### Variáveis CSS

Todas as cores estão disponíveis como variáveis CSS:

```css
--color-primary
--color-primary-dark
--color-primary-light
--color-bege
--color-bege-medium
--color-bege-dark
--color-sepia
--color-text-primary
--color-text-secondary
--color-text-light
--color-white
--color-off-white
--color-border
--color-accent
```

## Tipografia

### Hierarquia

#### Títulos (Serifada Editorial)
- **Fonte**: `Crimson Text`, `Georgia`, serif
- **Uso**: Títulos principais, nomes de artistas, headings
- **Estilo**: Editorial, clássico, respeitoso

**Tamanhos:**
- H1: `2.5rem` (40px) - Títulos de página
- H2: `2rem` (32px) - Secções principais
- H3: `1.5rem` (24px) - Subsecções
- H4: `1.25rem` (20px) - Subtítulos

**Pesos:**
- Regular: 400
- Semibold: 600
- Bold: 700

#### Corpo (Sans-serif Legível)
- **Fonte**: `Inter`, system fonts, sans-serif
- **Uso**: Textos, descrições, navegação, UI
- **Estilo**: Moderno, legível, limpo

**Tamanhos:**
- Base: `1rem` (16px) - Corpo de texto
- Small: `0.875rem` (14px) - Metadados, captions
- Large: `1.125rem` (18px) - Texto destacado

**Pesos:**
- Light: 300
- Regular: 400
- Medium: 500

### Line Height
- Títulos: 1.2
- Corpo: 1.6-1.8

## Espaçamento

Sistema baseado em múltiplos de 4px:

| Nome | Valor | Uso |
|------|-------|-----|
| xs | 0.25rem (4px) | Espaçamentos mínimos |
| sm | 0.5rem (8px) | Espaçamentos pequenos |
| md | 1rem (16px) | Espaçamento padrão |
| lg | 1.5rem (24px) | Espaçamentos médios |
| xl | 2rem (32px) | Espaçamentos grandes |
| 2xl | 3rem (48px) | Espaçamentos muito grandes |
| 3xl | 4rem (64px) | Espaçamentos extremos |

## Componentes

### Button

Variantes:
- `primary`: Fundo castanho, texto branco
- `secondary`: Borda castanho, fundo transparente
- `text`: Apenas texto, sem borda

Tamanhos:
- `small`: Padding pequeno
- `medium`: Padding padrão
- `large`: Padding grande

### Card

- Fundo: `off-white`
- Borda: `border` (bege escuro)
- Border-radius: `8px`
- Hover: Sombra sutil, borda sépia

### Navigation

- Posição: Fixa no fundo
- Fundo: `off-white`
- Borda superior: `border`
- Itens ativos: Cor `primary`

### Player

- Posição: Fixa acima da navegação
- Fundo: `off-white`
- Botão play: Circular, cor `primary`
- Barra de progresso: Cor `sepia`

## Princípios de Design

### 1. Calmo e Respeitoso
- Sem elementos agressivos ou chamativos
- Transições suaves
- Espaçamentos generosos

### 2. Editorial/Museu
- Tipografia serifada para títulos
- Hierarquia clara
- Layout limpo e espaçado

### 3. Nostálgico
- Tons sépia e castanhos
- Referências a arquivos históricos
- Visual envelhecido/memória

### 4. Simples e Focado
- Sem distrações
- Foco no conteúdo
- Navegação clara

### 5. Cultural
- Respeito pela história
- Visual que honra a tradição
- Educativo e curatorial

## Breakpoints

| Nome | Largura | Uso |
|------|---------|-----|
| Mobile | 480px | Dispositivos móveis |
| Tablet | 768px | Tablets |
| Desktop | 1024px | Desktop |

## Exemplos de Uso

### Gradientes Comuns

```css
/* Background de headers */
background: linear-gradient(135deg, var(--color-bege-medium) 0%, var(--color-bege) 100%);

/* Avatares */
background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-sepia) 100%);
```

### Sombras

```css
/* Hover de cards */
box-shadow: 0 4px 12px rgba(61, 47, 31, 0.1);
```

## Acessibilidade

- Contraste mínimo: 4.5:1 para texto normal
- Contraste mínimo: 3:1 para texto grande
- Estados hover claramente visíveis
- Navegação por teclado funcional
- Labels semânticos em botões

