from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import engine, get_db
from models import Base, Artist

app = FastAPI(title="Mukanda API")

Base.metadata.create_all(bind=engine)

@app.get("/")
def inicio():
    return {"mensagem": "Mukanda está viva"}

@app.post("/artists")
def criar_artista(nome: str, genero: str, db: Session = Depends(get_db)):
    artista = Artist(nome=nome, genero=genero)
    db.add(artista)
    db.commit()
    db.refresh(artista)
    return artista

from models import Music

@app.post("/musics")
def criar_musica(
    titulo: str,
    genero: str,
    artista_id: int,
    db: Session = Depends(get_db)
):
    musica = Music(
        titulo=titulo,
        genero=genero,
        artista_id=artista_id
    )
    db.add(musica)
    db.commit()
    db.refresh(musica)
    return musica


