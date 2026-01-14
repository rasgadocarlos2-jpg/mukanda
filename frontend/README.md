# Mukanda Frontend

Frontend da aplicação Mukanda - Arquivo Vivo da Música Angolana.

## Tecnologias

- React 18
- React Router DOM
- Vite
- CSS puro (sem frameworks CSS)

## Estrutura do Projeto

```
frontend/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Navigation/
│   │   └── Player/
│   ├── pages/               # Páginas/rotas
│   │   ├── Splash/
│   │   ├── Home/
│   │   ├── Artists/
│   │   ├── ArtistDetail/
│   │   └── Favorites/
│   ├── styles/              # Estilos globais e tema
│   │   ├── global.css
│   │   └── theme.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Sistema de Design

### Cores

A identidade visual da Mukanda usa tons quentes inspirados em arquivos e museus:

#### Cores Principais
- **Primary**: `#8B6F47` (Castanho médio)
- **Primary Dark**: `#6B5335` (Castanho escuro)
- **Primary Light**: `#A68B6B` (Castanho claro)

#### Tons Neutros Quentes
- **Bege**: `#F5E6D3` (Backgrounds principais)
- **Bege Medium**: `#E8D5C0`
- **Bege Dark**: `#D4C4B0`
- **Off White**: `#FAF8F5` (Branco quente)

#### Sépias
- **Sepia**: `#C9A961` (Sépia dourada)
- **Sepia Dark**: `#9B8450`
- **Sepia Light**: `#E5D4A8`

#### Textos
- **Text Primary**: `#3D2F1F` (Marrom escuro)
- **Text Secondary**: `#5C4A37` (Marrom médio)
- **Text Light**: `#8B7355` (Marrom claro)

#### Acentos
- **Accent**: `#B8860B` (Dourado)
- **Accent Light**: `#DAA520`

### Tipografia

#### Títulos (Serifada Editorial)
- **Fonte**: `'Crimson Text', 'Georgia', serif`
- **Uso**: Títulos principais, nomes de artistas
- **Pesos**: 400 (regular), 600 (semibold), 700 (bold)

#### Corpo (Sans-serif Legível)
- **Fonte**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Uso**: Textos, descrições, navegação
- **Pesos**: 300 (light), 400 (regular), 500 (medium)

### Princípios de Design

1. **Visual Calmo e Respeitoso**: Cores quentes e suaves, sem elementos agressivos
2. **Estilo Editorial/Museu**: Inspirado em arquivos históricos e curadoria
3. **Nostálgico**: Tons sépia e castanhos evocam memória e história
4. **Simples e Focado**: Interface limpa, sem distrações
5. **Cultural**: Respeito pela história e cultura angolana

## Instalação

```bash
cd frontend
npm install
```

## Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## Build

```bash
npm run build
```

## Integração com API

O frontend está configurado para comunicar com a API FastAPI (backend). 

As chamadas à API devem usar o prefixo `/api` que será redirecionado para `http://localhost:8000` (ver `vite.config.js`).

Exemplo:
```javascript
const response = await fetch('/api/artists')
const artists = await response.json()
```

## Páginas Principais

### 1. Splash / Welcome
- Tela inicial com logo e tagline
- Redireciona automaticamente para Home após 2 segundos

### 2. Home
- Destaque: "De quem é esta música?"
- Secção: Artistas em destaque
- Secção: Sabias que... (curiosidade cultural)

### 3. Lista de Artistas
- Grid de artistas com foto, nome e estilo
- Link para perfil detalhado

### 4. Perfil do Artista
- Foto do artista
- Biografia
- Lista de músicas
- Contexto histórico

### 5. Favoritos
- Músicas guardadas
- Artistas guardados

## Próximos Passos

- [ ] Implementar integração real com API
- [ ] Adicionar funcionalidade de favoritos (localStorage/contexto)
- [ ] Implementar player de áudio funcional
- [ ] Adicionar imagens reais dos artistas
- [ ] Implementar pesquisa/filtros
- [ ] Adicionar mais contexto histórico nas páginas
- [ ] Responsividade mobile otimizada
- [ ] Testes

## Notas

- O design foi pensado para ser calmo, respeitoso e cultural
- Foco em preservação de memória e história
- Não é uma plataforma comercial, mas sim educativa e curatorial

