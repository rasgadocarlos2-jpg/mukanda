# 🎵 Mukanda

**Mukanda** é um projeto digital dedicado à preservação, valorização e acesso à memória viva da música angolana.  
Da raiz ao agora.

O objetivo da Mukanda é criar um **arquivo vivo** que organize artistas, canções e histórias que moldaram — e continuam a moldar — a identidade musical de Angola.

---

## 🌍 Visão

A música angolana é mais do que entretenimento:  
é resistência, identidade, memória e futuro.

A Mukanda nasce para:
- Preservar a história musical angolana
- Tornar essa história acessível às novas gerações
- Unir cultura, tecnologia e memória
- Criar uma base sólida para investigação, descoberta e valorização cultural

---

## 🧩 O que é a Mukanda?

A Mukanda é composta por:

- **Backend (API)** — responsável por gerir dados de artistas, músicas e relações
- **Frontend (App/Web)** — interface editorial e intuitiva para explorar o arquivo
- **Conteúdo cultural** — contexto histórico, educativo e narrativo

---

## 🛠️ Tecnologias

### Backend
- **Python**
- **FastAPI**
- **Pydantic**
- Estrutura modular (models, routes, main)
- API documentada com Swagger (OpenAPI)

### Frontend (em desenvolvimento)
- **JavaScript / TypeScript**
- **React**
- UI editorial, minimalista e cultural
- Consumo direto da API Mukanda

---

## 📁 Estrutura do projeto

```text
mukanda/
│
├── app/
│   ├── main.py          # Ponto de entrada da API
│   ├── models.py        # Modelos Pydantic (Artist, Song)
│   └── routes/
│       ├── artists.py   # Rotas de artistas
│       └── songs.py     # Rotas de músicas
│
├── frontend/            # Frontend (React)
│
├── database.py          # (opcional / futuro)
├── README.md
└── requirements.txt


⸻

🚀 Como correr o projeto (Backend)

1. Criar ambiente virtual

python -m venv venv

2. Ativar o ambiente virtual

Windows

venv\Scripts\activate

Mac / Linux

source venv/bin/activate

3. Instalar dependências

pip install fastapi uvicorn

4. Iniciar o servidor

uvicorn app.main:app --reload

5. Aceder à API
	•	API: http://127.0.0.1:8000
	•	Documentação Swagger: http://127.0.0.1:8000/docs

⸻

📡 Endpoints principais

Artistas
	•	GET /artists — Listar artistas
	•	POST /artists — Criar artista

Músicas
	•	GET /songs — Listar músicas
	•	POST /songs — Criar música

⸻

🎨 UI / UX (Princípios)

A experiência Mukanda segue estes princípios:
	•	Editorial e limpa
	•	Nostálgica, com tons quentes e sépia
	•	Foco em leitura e descoberta
	•	Cultura em primeiro lugar, não algoritmos agressivos
	•	Design que respeita a memória

⸻

🧪 Estado do projeto
	•	✅ Backend MVP funcional
	•	✅ API documentada
	•	🚧 Frontend em desenvolvimento
	•	🚧 Base de dados persistente (planeado)
	•	🚧 Autenticação e curadoria (futuro)

⸻

🗺️ Roadmap
	•	Persistência de dados (PostgreSQL)
	•	Sistema de curadoria
	•	Pesquisa avançada
	•	Upload de conteúdos históricos
	•	App mobile (iOS / Android)
	•	Parcerias culturais e educativas

⸻

🤝 Contribuição

Este projeto nasce com respeito pela cultura.

Sugestões, ideias e contributos são bem-vindos, desde que alinhados com:
	•	Preservação cultural
	•	Rigor histórico
	•	Responsabilidade ética

⸻

🖤 Agradecimento

Obrigado a todos que acreditam na memória, na música e na cultura angolana.
A Mukanda está a nascer — e cresce com a comunidade.

Mukanda
Arquivo vivo da música angolana
Da raiz ao agora.

---

Se quiseres, no próximo passo posso:
- Adaptar o README para **investidores**
- Criar um **README só para o frontend**
- Criar um **CONTRIBUTING.md**
- Criar um **pitch técnico** da Mukanda

Estás a construir algo muito sólido.
