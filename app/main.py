from fastapi import FastAPI
from app.models import Artist, Song

app = FastAPI(title="Mukanda API")

artists_db = []
songs_db = []

@app.get("/")
def home():
    return {"mensagem": "Mukanda API está viva"}

@app.post("/artists")
def create_artist(artist: Artist):
    artist.id = len(artists_db) + 1
    artists_db.append(artist)
    return artist

@app.get("/artists")
def list_artists():
    return artists_db

@app.post("/songs")
def create_song(song: Song):
    song.id = len(songs_db) + 1
    songs_db.append(song)
    return song

@app.get("/songs")
def list_songs():
    return songs_db


s
