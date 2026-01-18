# 🎵 Mukanda

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Made in Angola](https://img.shields.io/badge/Made%20in-Angola-red.svg)](https://angola.ao)

📖 Sobre o projeto

A Mukanda é um projeto digital dedicado à preservação, valorização e acesso à memória viva da música angolana.

O seu objetivo é criar um arquivo vivo que organize artistas, canções e histórias que moldaram — e continuam a moldar — a identidade musical de Angola.

Mais do que uma aplicação, a Mukanda é um espaço de memória, descoberta e continuidade cultural.

🌍 Visão

A música angolana é mais do que entretenimento.
É resistência, identidade, memória e futuro.

A Mukanda nasce para:
	•	Preservar a história musical angolana
	•	Tornar essa história acessível às novas gerações
	•	Unir cultura, tecnologia e memória
	•	Criar uma base sólida para investigação, descoberta e valorização cultural

🧩 O que é a Mukanda?

A Mukanda é composta por três pilares principais:

🧠 Backend (API)

Responsável por gerir:
	•	Artistas
	•	Músicas
	•	Relações culturais e históricas

🎨 Frontend (App / Web)

Interface intuitiva e editorial para:
	•	Explorar artistas e músicas
	•	Descobrir contextos históricos
	•	Navegar pelo arquivo musical angolano

📚 Conteúdo cultural
	•	Textos históricos
	•	Contexto educativo
	•	Narrativas sobre movimentos, estilos e artistas


🎨 Design (Figma)

👉 Protótipo e UI/UX no Figma:
🔗 https://www.figma.com/make/4AzyG1u9SmLpiOwbztG7Cm/Mukanda-Music-Streaming-App

Princípios de UI/UX:
	•	Mobile-first
	•	Editorial e limpa
	•	Nostálgica (tons quentes, sépia, textura)
	•	Cultura em primeiro lugar
	•	Foco em descoberta, não em algoritmos agressivos

🛠️ Tecnologias

Backend
	•	Python
	•	FastAPI
	•	Pydantic
	•	Estrutura modular (models, routes, main)
	•	API documentada com Swagger (OpenAPI)

Frontend (em desenvolvimento)
	•	JavaScript / TypeScript
	•	React
	•	Consumo direto da API Mukanda
	•	UI inspirada em plataformas de música, com identidade cultural própria

📁 Estrutura do projeto

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
	•	Swagger Docs: http://127.0.0.1:8000/docs



📡 Endpoints principais

Artistas
	•	GET /artists — Listar artistas
	•	POST /artists — Criar artista

Músicas
	•	GET /songs — Listar músicas
	•	POST /songs — Criar música



🧪 Estado do projeto
	•	✅ Backend MVP funcional
	•	✅ API documentada (Swagger)
	•	✅ Design UI/UX definido no Figma
	•	🚧 Frontend em desenvolvimento
	•	🚧 Base de dados persistente (planeado)
	•	🚧 Autenticação e curadoria (futuro)



🔄 Atualizações (Updates)
	•	v0.1 — MVP Backend
	•	API funcional com FastAPI
	•	Endpoints de artistas e músicas
	•	Estrutura modular definida
	•	v0.2 — Design & UX
	•	UI/UX mobile-first criado no Figma
	•	Identidade visual definida
	•	Estrutura de ecrãs da app
	•	Próximo passo
	•	Integração Frontend + API
	•	Persistência com PostgreSQL
	•	Player de música (MVP)



🗺️ Roadmap
	•	Persistência de dados (PostgreSQL)
	•	Sistema de curadoria cultural
	•	Pesquisa avançada
	•	Upload de conteúdos históricos
	•	App mobile (iOS / Android)
	•	Parcerias culturais e educativas


🤝 Contribuição

Este projeto nasce com respeito profundo pela cultura angolana.

Contribuições são bem-vindas desde que alinhadas com:
	•	Preservação cultural
	•	Rigor histórico
	•	Responsabilidade ética

🖤 Agradecimento

Obrigado a todos que acreditam na memória, na música e na cultura angolana.

A Mukanda está a nascer —
e cresce com a comunidade.


