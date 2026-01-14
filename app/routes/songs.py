from fastapi import APIRouter
from app.models import Song

router = APIRouter(prefix="/songs", tags=["songs"])

songs_db = []


@router.post("", response_model=Song)
def create_song(song: Song):
    song.id = len(songs_db) + 1
    songs_db.append(song)
    return song


@router.get("", response_model=list[Song])
def list_songs():
    return songs_db

