# Mukanda - Arquivo Vivo da Música Angolana

MVP Full Stack da aplicação Mukanda, uma plataforma para preservar e explorar a memória cultural da música angolana.

## 📋 Sobre o Projeto

Mukanda é um arquivo vivo da música angolana, focado em preservar memória, cultura e história musical (Semba, artistas pioneiros, canções clássicas). Esta é uma plataforma cultural, educativa e curatorial, não comercial.

## 🏗️ Arquitetura

- **Backend**: FastAPI (Python)
- **Frontend**: React + Vite
- **Dados**: Em memória (listas Python) - MVP simples

## 🚀 Como Executar

> **📖 Guia Completo:** Ver ficheiro [COMO_EXECUTAR.md](COMO_EXECUTAR.md) para instruções detalhadas passo a passo.

### Resumo Rápido

**Precisas de 2 terminais abertos:**

#### Terminal 1 - Backend
```bash
cd C:\Users\Carlos Rasgado\Desktop\mukanda
venv\Scripts\activate
uvicorn app.main:app --reload
```
✅ Backend em: `http://localhost:8000`

#### Terminal 2 - Frontend
```bash
cd C:\Users\Carlos Rasgado\Desktop\mukanda\frontend
npm install  # Primeira vez apenas
npm run dev
```
✅ Frontend em: `http://localhost:5173`

#### Ver a App
Abre o browser e vai para: **`http://localhost:5173`**

## 📡 Endpoints da API

### Artistas

- `GET /artists` - Lista todos os artistas
- `GET /artists/{id}` - Busca artista por ID
- `POST /artists` - Cria novo artista

**Modelo Artist:**
```json
{
  "id": 1,
  "nome": "Bonga",
  "origem": "Benguela",
  "estilo": "Semba",
  "descricao": "Descrição do artista..."
}
```

### Músicas

- `GET /songs` - Lista todas as músicas
- `POST /songs` - Cria nova música

**Modelo Song:**
```json
{
  "id": 1,
  "titulo": "Mona Ki Ngi Xica",
  "artista": "Bonga",
  "ano": 1972,
  "estilo": "Semba"
}
```

## 🎨 Funcionalidades do MVP

### Frontend

1. **Home** (`/home`)
   - Texto: "Mukanda — arquivo vivo da música angolana"
   - Lista de artistas (consumindo GET /artists)

2. **Lista de Artistas** (`/artists`)
   - Grid com todos os artistas
   - Link para adicionar novo artista

3. **Detalhes do Artista** (`/artists/:id`)
   - Informações do artista
   - Lista de músicas associadas (filtradas por nome do artista)

4. **Adicionar Artista** (`/artists/new`)
   - Formulário com campos: nome, origem, estilo, descrição
   - Envia POST /artists

5. **Adicionar Música** (`/songs/new`)
   - Formulário com campos: título, artista, ano, estilo
   - Envia POST /songs

## 🎯 Estado dos Dados

**IMPORTANTE**: Os dados são armazenados em memória (listas Python). Isto significa que:
- Os dados são perdidos quando o servidor é reiniciado
- Cada instância do servidor tem os seus próprios dados
- Ideal apenas para desenvolvimento/testes

Para produção, será necessário implementar uma base de dados (PostgreSQL, SQLite, etc.).

## 🛠️ Estrutura do Projeto

```
mukanda/
├── app/                    # Backend FastAPI
│   ├── main.py            # Ponto de entrada da aplicação
│   ├── models.py          # Modelos Pydantic (Artist, Song)
│   └── routes/            # Rotas da API
│       ├── artists.py     # Rotas de artistas
│       └── songs.py       # Rotas de músicas
│
├── frontend/              # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── services/      # Serviços de API
│   │   └── styles/        # Estilos globais
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🧪 Testar o MVP

1. Iniciar backend e frontend (ver instruções acima)

2. **Criar um artista:**
   - Aceder a `http://localhost:5173/artists/new`
   - Preencher formulário e guardar
   - Verificar na lista de artistas

3. **Criar uma música:**
   - Aceder a `http://localhost:5173/songs/new`
   - Preencher formulário (usar nome do artista criado)
   - Verificar na página de detalhes do artista

4. **Navegar:**
   - Home mostra todos os artistas
   - Clicar num artista para ver detalhes e músicas
   - Usar navegação inferior para mover entre secções

## 🐛 Troubleshooting

### Backend não inicia
- Verificar se a porta 8000 está livre
- Verificar se todas as dependências estão instaladas
- Verificar erros no terminal

### Frontend não conecta à API
- Verificar se o backend está a correr em `http://localhost:8000`
- Verificar CORS no backend (já configurado para localhost:5173)
- Verificar a variável `VITE_API_URL` no `.env`

### Dados não aparecem
- Os dados são em memória - reiniciar o backend apaga tudo
- Verificar o console do browser para erros
- Verificar o terminal do backend para erros

## 📝 Próximos Passos

Para tornar a aplicação production-ready:

- [ ] Implementar base de dados (PostgreSQL/SQLite)
- [ ] Adicionar autenticação (se necessário)
- [ ] Adicionar validações mais robustas
- [ ] Implementar testes
- [ ] Adicionar upload de imagens para artistas
- [ ] Implementar player de áudio real
- [ ] Adicionar pesquisa/filtros
- [ ] Melhorar tratamento de erros

## 📄 Licença

Este é um projeto MVP em desenvolvimento.

---

**Mukanda** - Preservando a memória da música angolana 🎵

