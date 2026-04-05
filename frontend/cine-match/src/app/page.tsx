"use client"

import { useEffect, useState } from "react";

export default function Home(){

    const [message, setMessage] = useState("Loading...")

    useEffect(() =>{
        fetch("http://127.0.0.1:8000/")
        .then((res) => res.json())
        .then((res) => res.message)
        .catch((res) => res.setMessage("Connected to backend successfully"))
    },[])

    return(
    <main className="justify-center items-center text-center flex min-h-screen">
        <div className="text-center">
            <h1>CineMatch</h1>
        </div>
    </main>
    )
}