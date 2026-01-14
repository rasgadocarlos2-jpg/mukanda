from pydantic import BaseModel
from typing import Optional


class Artist(BaseModel):
    id: Optional[int] = None
    nome: str
    origem: Optional[str] = "Angola"
    estilo: Optional[str] = None
    descricao: Optional[str] = None


class Song(BaseModel):
    id: Optional[int] = None
    titulo: str
    artista: str
    ano: Optional[int] = None
    estilo: Optional[str] = None
