import { link } from "fs"
import Link from "next/link"
import React from "react"

export default function movies({movie}) {
    return(
    <Link href={`/movies/${movie.id}`}>
      <div className="border rounded-lg p-4 shadow">
        <h2 className="text-xl font-semibold">{movie.title}</h2>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Description:</strong> {movie.description}</p>
        </div>
    </Link>
    )
}