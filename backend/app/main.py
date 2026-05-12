from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import get_connection

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:3000"],
    allow_headers = ["*"],    
    allow_methods = ["*"],
    allow_credentials = True,
)

@app.get("/")
def home():
    return {"Server": "Running"}

@app.get("/health")
def health():
    return {"Status": "Ok"}

@app.get("/movies")
def get_movies():
    conn  = get_connection()
    cur = conn.cursor()

    cur.execute("SELECT id, title, genre, year, description FROM movies;")
    rows = cur.fetchall()

    cur.close()
    conn.close()

    movies = []

    for row in rows:
        movies.append({
            "id": row[0],
            "title": row[1],
            "genre": row[2],
            "year": row[3],
            "description": row[4],
        })

    return {"movies": movies}

@app.get("/movies/{movie_id}")
def movie_get(movie_id:int):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("SELECT id, title, genre, year, description FROM movies WHERE id=%s;",(movie_id,))
    row = cur.fetchone()

    cur.close()
    conn.close()
    
    if not row:
        return {"error": "No Movie Found"}

    return{
            "id": row[0],
            "title": row[1],
            "genre": row[2],
            "year": row[3],
            "description": row[4],
        }

        
