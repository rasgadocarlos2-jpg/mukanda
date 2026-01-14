from fastapi import APIRouter
from app.models import Artist

router = APIRouter(prefix="/artists", tags=["artists"])

artists_db = []


@router.post("", response_model=Artist)
def create_artist(artist: Artist):
    artist.id = len(artists_db) + 1
    artists_db.append(artist)
    return artist


@router.get("", response_model=list[Artist])
def list_artists():
    return artists_db

