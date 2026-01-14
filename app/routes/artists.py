from fastapi import APIRouter, HTTPException
from app.models import Artist

router = APIRouter(prefix="/artists", tags=["artists"])

artists_db = []


@router.post("", response_model=Artist, status_code=201)
def create_artist(artist: Artist):
    artist_dict = artist.model_dump()
    artist_dict['id'] = len(artists_db) + 1
    new_artist = Artist(**artist_dict)
    artists_db.append(new_artist)
    return new_artist


@router.get("", response_model=list[Artist])
def list_artists():
    return artists_db


@router.get("/{artist_id}", response_model=Artist)
def get_artist(artist_id: int):
    artist = next((a for a in artists_db if a.id == artist_id), None)
    if not artist:
        raise HTTPException(status_code=404, detail="Artista não encontrado")
    return artist

