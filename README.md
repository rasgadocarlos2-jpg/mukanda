# 🎵 Mukanda API

**Mukanda** é um projeto digital dedicado à preservação, valorização e acesso à memória viva da música angolana.

> Da raiz ao agora.

Este repositório contém a **API backend** da Mukanda, responsável por gerir artistas, músicas e, futuramente, utilizadores, interações e modelos de monetização.

---

## 🌍 Visão do Projeto

A música angolana sempre foi mais do que entretenimento — foi identidade, resistência, memória e cultura.

A Mukanda nasce para:
- Preservar artistas e músicas históricas
- Organizar dados musicais angolanos
- Criar uma ponte entre gerações
- Servir como base para uma app mobile e web

---

## 🚀 Estado Atual

🔧 **Fase:** MVP em desenvolvimento  
📦 **Tipo:** API REST  
⚙️ **Framework:** FastAPI  
🗄️ **Persistência:** Em memória (temporário)  
📱 **Frontend:** Ainda não implementado  

---

## 🧱 Estrutura do Projeto

```text
mukanda/
├── app/
│   ├── __init__.py
│   ├── main.py        # Entrypoint da API
│   └── models.py      # Modelos (Artist, Song)
├── database.py        # (placeholder para DB futura)
├── venv/              # Ambiente virtual (ignorado pelo git)
├── .gitignore
└── README.md

🛣️ Roadmap (Próximos Passos)
	•	Base de dados (PostgreSQL ou SQLite)
	•	Relação real entre artistas e músicas
	•	Pesquisa por artista / música
	•	Upload de metadados históricos
	•	Sistema de utilizadores
	•	Sistema de pontos / acesso patrocinado
	•	Integração com operadoras (ex: Africell)
	•	App mobile (React Native / Flutter)

⸻

💡 Monetização (Visão)
	•	Patrocínio por operadoras (dados patrocinados)
	•	Licenciamento cultural
	•	Parcerias institucionais
	•	Conteúdos premium
	•	API cultural para investigadores e media

⸻

🤝 Contribuição

Este projeto está em fase inicial.
Contribuições, ideias e parcerias são bem-vindas.

⸻

🖤 Mukanda

Arquivo vivo da música angolana.
Memória. Dados. Cultura.
---

### Próximo passo recomendado 🔥
1️⃣ Criar **issues no GitHub** (tarefas do MVP)  
2️⃣ Criar **branch `develop`**  
3️⃣ Preparar **base de dados real**  
4️⃣ Definir **modelo de pontos / acesso patrocinado**

Se quiseres, no próximo passo eu:
- organizo o **backend em arquitetura limpa**
- desenho o **modelo de dados final**
- preparo o projeto para **deploy**

Diz: **“vamos organizar o backend”** ou **“vamos preparar o MVP”** 🚀
