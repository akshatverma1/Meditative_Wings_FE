import { Badge } from "./ui/Badge"
import { Card } from "./ui/card.jsx"
import { Quote } from "lucide-react"
import { useState,useEffect } from "react"

// Sample tweet data - in a real app, this would come from an API
const tweets = [
  {
    id: 1,
    content: "Akshat is very good at coding",
    author: "Akshat Verma",
    tags: ["Personal Life", "biography"],
  },
  {
    id: 2,
    content: "I doing the internship at Microsoft",
    author: "Lakshay Verma",
    tags: ["Personal Life"],
  },
  {
    id: 3,
    content: "I also doing freelancing",
    author: "Jini Verma",
    tags: ["Professional Life", "Job"],
  },
  {
    id: 4,
    content: "Just completed a 30-day meditation challenge! The journey was transformative.",
    author: "Maya Singh",
    tags: ["Personal Life", "Meditation"],
  },
  {
    id: 5,
    content: "Excited to announce my new mindfulness workshop series starting next month!",
    author: "Raj Kumar",
    tags: ["Professional Life", "Announcement"],
  },
]

export function TweetList() {
    let [datas,setData] = useState([]);
    let url = "https://meditative-wings-backend-final.vercel.app/tweetdata";
    const apicalling = async ()=>{
        console.log("Api Calling...");
        useEffect( async ()=>{
            let apidata = await fetch(url);
            let response = await apidata.json();
            console.log(response);
            setData(response);
        },[])
    }
    apicalling();

  return (
    <div className="space-y-6">
      {datas.map((tweet) => (
        <Card className="bg-card/40 border-border/50 backdrop-blur">
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">{tweet.tweetContent}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {/* <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tweet.tweetTags}
                    </Badge> */}
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-sm">~ {tweet.authorName}</p>
                {/* <p className="text-xs text-muted-foreground">~ {tweet.author.toLowerCase().replace(/\s+/g, "")}</p> */}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}