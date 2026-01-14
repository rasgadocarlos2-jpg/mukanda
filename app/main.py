from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import artists, songs

app = FastAPI(title="Mukanda API")

# CORS para permitir chamadas do frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # Vite usa 5173 por padrão
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(artists.router)
app.include_router(songs.router)


@app.get("/")
def home():
    return {"mensagem": "Mukanda API está viva"}
