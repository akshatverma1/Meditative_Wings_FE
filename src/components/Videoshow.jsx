"use client"

import { useState, useEffect } from "react"
import { AlertCircle, Loader2 } from "lucide-react"
import { useParams, useNavigate, data } from "react-router-dom"
import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx"

export function VideoShow({ id }) {
    const [video, setVideo] = useState([])
    const { ids } = useParams();
    console.log(ids);
    let url = `https://meditative-wings-backend-finaltwo.vercel.app/search/${ids}`;
    useEffect(async () => {
        // Simulate API call to fetch video data

        try {
            // In a real app, you'd fetch data from an API
            console.log("Api Calling");
            const response = await fetch(url);
            const data = await response.json()
            console.log(data);
            setVideo(data)
        } catch (error) {
            setError("An error occurred. Please try again later.")
        }

    }, [])


    return (
        <>
            <div className="min-h-screen flex flex-col relative">
                {/* <Stars /> */}
                <Header />
                <main className="flex-1 py-12 px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        {video.map((videos) => (
                            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-center">
                                <span className="featured-gradient">Meditative Wings</span> Videos
                            </h1>
                        ))}
                        <div className="bg-card/40 border border-border/50 rounded-lg overflow-hidden">
                            <div className="aspect-video w-full">
                                {video.map((videos) => (

                                    <iframe
                                        src={`https://www.youtube.com/embed/${videos.youtubeLink}?controls=1`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                    // <video src={videos.youtubeLink} width="100%"></video>
                                ))}
                            </div>
                            {video.map((videos) => (
                            <div className="p-6">
                                
                                <h2 className="text-2xl font-bold mb-2">{videos.videoTitle}</h2>
                                <p className="text-muted-foreground mb-4">{videos.videoDesp}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">{videos.category}</span>
                                    {/* <span className="text-sm text-muted-foreground">{videos.views.toLocaleString()} views</span> */}
                                </div>
                               
                            </div>
                             ))}

                        </div>

                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

