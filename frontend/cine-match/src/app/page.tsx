"use client";

import { useEffect, useState } from "react";
import MovieCard from "../../components/movies";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data.movies);
      })      
      .catch((err) => {
        setError(err.message);
      })
      .finally(() =>{
        setLoading(false)
      })
  }, []);

  if (loading) {
    return <h1 className="text-center mt-10">Loading movies...</h1>;
  }

  if (error) {
    return <h1 className="text-center mt-10 text-red-500">Error: {error}</h1>;
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">CineMatch</h1>
      <div>
        {movies.map((movie) =>(
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}