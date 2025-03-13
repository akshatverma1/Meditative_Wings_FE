import { useState, useEffect } from "react";
import { Play, ExternalLink, Clock, Eye, BookmarkPlus } from "lucide-react";
import { Button } from "./../components/ui/Button.jsx";
import { Badge } from "./../components/ui/Badge.jsx";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { useParams, useNavigate } from "react-router-dom";

const sampleData = [
    // ... keep the same sampleData array from original code ...
];

export default function Akshat({ data = sampleData, title = "Featured Meditations", apiUrl }) {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    const [hoveredId, setHoveredId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [apidata, apisetData] = useState([]);

    // Pagination calculations
    const totalPages = Math.ceil(apidata.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = apidata.slice(startIndex, endIndex);

    useEffect(() => {
        setVideos(data);
    }, [data]);

    useEffect(() => {
        const apiCalling = async () => {
            try {
                const response = await fetch(apiUrl);
                const oneapidata = await response.json();
                apisetData(oneapidata);
                setCurrentPage(1); // Reset to first page on new data load
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        apiCalling();
    }, [apiUrl]);

    const featuredVideos = videos.filter((video) => video.featured);

    return (
        <>
            <section className="py-12 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 relative inline-block">
                        {title}
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform translate-y-2"></span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentData.map((video) => (
                            <div
                                key={video.id}
                                className="group relative bg-card/40 border border-border/50 rounded-lg overflow-hidden backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                                onMouseEnter={() => setHoveredId(video.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="relative aspect-video w-full overflow-hidden">
                                    <img
                                        src={video.thumbnailLink}
                                        alt={video.videoTitle}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70"></div>

                                    {hoveredId === video.id && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300">
                                            <form action="/Videoshow">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-16 w-16 rounded-full bg-primary/90 hover:bg-primary text-white"
                                                >
                                                    <Play className="h-8 w-8 fill-current" />
                                                    <span className="sr-only">Play video</span>
                                                </Button>
                                            </form>
                                        </div>
                                    )}
                                </div>

                                <div className="p-4">
                                    <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                                        {video.videoTitle}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{video.videoDesp}</p>
                                    
                                    <Button
                                        className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                                        onClick={() => navigate(`/Videoshows/${video._id}`)}
                                    >
                                        Watch Now
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {apidata.length > itemsPerPage && (
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <Button
                                variant="outline"
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </Button>
                            
                            <span className="text-sm text-muted-foreground">
                                Page {currentPage} of {totalPages}
                            </span>

                            <Button
                                variant="outline"
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </Button>
                        </div>
                    )}

                    {/* {featuredVideos.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground">
                            <p>No featured videos available at the moment.</p>
                        </div>
                    )} */}
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}