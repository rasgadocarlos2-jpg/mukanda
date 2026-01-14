# Como Executar a App Mukanda

Guia passo a passo para executar o backend e frontend da aplicação Mukanda.

## 📋 Pré-requisitos

- Python 3.8+ instalado
- Node.js 16+ e npm instalados
- Terminal/Command Prompt aberto

## 🚀 Passo a Passo

### 1. Abrir dois terminais

Vais precisar de **2 terminais** abertos ao mesmo tempo:
- **Terminal 1**: Para o Backend (FastAPI)
- **Terminal 2**: Para o Frontend (React)

---

### 2. Terminal 1 - Backend (FastAPI)

#### 2.1. Navegar para a pasta do projeto
```bash
cd C:\Users\Carlos Rasgado\Desktop\mukanda
```

#### 2.2. Ativar ambiente virtual (se ainda não estiver ativo)
```bash
venv\Scripts\activate
```

#### 2.3. Iniciar o servidor backend
```bash
uvicorn app.main:app --reload
```

**Deves ver:**
```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

✅ **Backend está a correr!**

**URLs disponíveis:**
- API: `http://localhost:8000`
- Documentação Swagger: `http://localhost:8000/docs`
- Documentação ReDoc: `http://localhost:8000/redoc`

**⚠️ IMPORTANTE:** Deixa este terminal aberto e a correr!

---

### 3. Terminal 2 - Frontend (React)

#### 3.1. Navegar para a pasta frontend
```bash
cd C:\Users\Carlos Rasgado\Desktop\mukanda\frontend
```

#### 3.2. Instalar dependências (apenas na primeira vez)
```bash
npm install
```

**Nota:** Isto pode demorar alguns minutos na primeira vez.

#### 3.3. Iniciar o servidor frontend
```bash
npm run dev
```

**Deves ver:**
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

✅ **Frontend está a correr!**

**⚠️ IMPORTANTE:** Deixa este terminal aberto e a correr!

---

### 4. Ver a Aplicação no Browser

1. Abre o teu browser (Chrome, Firefox, Edge, etc.)

2. Vai para:
   ```
   http://localhost:5173
   ```

3. Deves ver a tela inicial (Splash) da Mukanda que redireciona automaticamente para a Home.

---

## 🎯 O que podes fazer agora?

### Criar um Artista
1. Clica em "Artistas" na navegação inferior
2. Clica em "+ Adicionar Artista"
3. Preenche o formulário:
   - **Nome**: (obrigatório) Ex: "Bonga"
   - **Origem**: Ex: "Benguela"
   - **Estilo**: Ex: "Semba"
   - **Descrição**: (opcional)
4. Clica em "Guardar Artista"
5. Serás redirecionado para a lista de artistas

### Criar uma Música
1. Vai para "Artistas" → Clica num artista
2. Clica em "+ Adicionar Música" (ou vai diretamente para `/songs/new`)
3. Preenche o formulário:
   - **Título**: (obrigatório) Ex: "Mona Ki Ngi Xica"
   - **Artista**: (obrigatório) Digita o nome do artista criado
   - **Ano**: Ex: 1972
   - **Estilo**: Ex: "Semba"
4. Clica em "Guardar Música"
5. Volta à página do artista para ver a música listada

### Navegar
- **Home** (`/home`): Lista todos os artistas
- **Artistas** (`/artists`): Lista completa de artistas
- **Favoritos** (`/favorites`): (ainda não implementado)

---

## 🐛 Problemas Comuns

### Backend não inicia
**Erro:** `ModuleNotFoundError: No module named 'fastapi'`

**Solução:**
```bash
pip install fastapi uvicorn
```

### Frontend não inicia
**Erro:** `npm: command not found`

**Solução:** Instala Node.js de https://nodejs.org/

### Frontend não conecta ao backend
**Erro:** Erro de CORS ou "Failed to fetch"

**Solução:**
1. Verifica se o backend está a correr em `http://localhost:8000`
2. Verifica se ambos os servidores estão a correr
3. Verifica o console do browser (F12) para ver erros

### Porta já em uso
**Erro:** `Address already in use`

**Solução:**
1. Fecha outros processos que possam estar a usar a porta
2. Ou muda a porta no comando:
   - Backend: `uvicorn app.main:app --reload --port 8001`
   - Frontend: Edita `vite.config.js` e muda a porta

---

## 🛑 Parar os Servidores

Para parar qualquer servidor:
- Pressiona `CTRL + C` no terminal correspondente

---

## 📝 Notas Importantes

1. **Dados em Memória**: Os dados são guardados apenas em memória. Se reiniciares o backend, todos os dados são perdidos.

2. **Dois Terminais**: Precisas de ambos os servidores a correr ao mesmo tempo:
   - Backend (porta 8000)
   - Frontend (porta 5173)

3. **Primeira Vez**: Na primeira execução do frontend, `npm install` pode demorar alguns minutos.

4. **Hot Reload**: Ambos os servidores têm "hot reload" - mudanças no código são refletidas automaticamente.

---

## ✅ Checklist Rápido

- [ ] Terminal 1: Backend a correr em `http://localhost:8000`
- [ ] Terminal 2: Frontend a correr em `http://localhost:5173`
- [ ] Browser aberto em `http://localhost:5173`
- [ ] Vês a página inicial da Mukanda

**Se tudo estiver OK, estás pronto para usar a app! 🎉**

