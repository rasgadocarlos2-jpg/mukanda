from fastapi import FastAPI
from app.routes import artists, songs

app = FastAPI(title="Mukanda API")

app.include_router(artists.router)
app.include_router(songs.router)


@app.get("/")
def home():
    return {"mensagem": "Mukanda API está viva"}
