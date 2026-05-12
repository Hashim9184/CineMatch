import Link from 'next/link'

export default function MovieCard({movie}){
    return(
        <Link href={`/movies/${movie_id}`}>
            <div></div>
            <h1>{movie.title}</h1>
            <p>{movie.desc}</p>
            <p>{movie.genre}</p>
            <p>{movie.year}</p>
        
        </Link>
    )
}