from fastapi import APIRouter
from app.models import Song

router = APIRouter(prefix="/songs", tags=["songs"])

songs_db = []


@router.post("", response_model=Song, status_code=201)
def create_song(song: Song):
    song_dict = song.model_dump()
    song_dict['id'] = len(songs_db) + 1
    new_song = Song(**song_dict)
    songs_db.append(new_song)
    return new_song


@router.get("", response_model=list[Song])
def list_songs():
    return songs_db

