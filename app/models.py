from sqlalchemy import Column, Integer, String
from database import Base

class Artist(Base):
    __tablename__ = "artists"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, unique=True, index=True)
    genero = Column(String)

from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Music(Base):
    __tablename__ = "musics"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, index=True)
    genero = Column(String)
    artista_id = Column(Integer, ForeignKey("artists.id"))

    artista = relationship("Artist")

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


