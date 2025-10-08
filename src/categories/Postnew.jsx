import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { Button } from "./../components/ui/Button.jsx";
import { Footer } from "../components/Footer.jsx";

const sampleData = [
  // ... keep your original sampleData ...
];

export default function Akshat({ data = sampleData, title = "Featured Meditations", apiUrl }) {
  const [videos, setVideos] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [apidata, apisetData] = useState([]);
  const [loading, setLoading] = useState(false); // Loader state

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
        setLoading(true);
        const response = await fetch(apiUrl);
        const oneapidata = await response.json();
        apisetData(oneapidata);
        setCurrentPage(1); // Reset to first page on new data load
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    apiCalling();
  }, [apiUrl]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            {title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform translate-y-2"></span>
          </h2>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentData.map((video) => (
                <div
                  key={video._id}
                  className="group relative bg-card/40 border border-border/50 rounded-lg overflow-hidden backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                  onMouseEnter={() => setHoveredId(video._id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Entire thumbnail clickable */}
                  <a href={`/Videoshows/${video._id}`} target="_blank" rel="noopener noreferrer" className="relative block">
                    <img
                      src={video.thumbnailLink}
                      alt={video.videoTitle}
                      className="w-full h-56 md:h-48 lg:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70"></div>

                    {/* Hover overlay Play button */}
                    {hoveredId === video._id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-16 w-16 rounded-full bg-primary/90 hover:bg-primary text-white"
                        >
                          <Play className="h-8 w-8 fill-current" />
                          <span className="sr-only">Play video</span>
                        </Button>
                      </div>
                    )}
                  </a>

                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                      {video.videoTitle}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{video.videoDesp}</p>

                    {/* Watch Now button clickable */}
                    <a href={`/Videoshows/${video._id}`} target="_blank" rel="noopener noreferrer">
                      <Button
                        className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                      >
                        Watch Now
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {!loading && apidata.length > itemsPerPage && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>

              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                variant="outline"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
