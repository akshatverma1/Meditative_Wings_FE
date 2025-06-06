"use client"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
// import { Button } from "./ui/Button"
import { Button } from "../components/ui/Button"

const teamMembers = [
  {
    id: 1,
    name: "Aditya kumar",
    role: "",
    image: "https://i.pinimg.com/474x/1e/11/19/1e11198fe3cc9bdfef3926b5a3c713ec.jpg",
    bio: "B.Tech-VIT VELLORE,TAMILNADU Director Meditativewings,Director Meditative IAS Academy,Director Meditativewings Media",
    social: {
      twitter: "https://twitter.com/akshat",
      github: "https://github.com/akshat",
      linkedin: "https://linkedin.com/in/akshat",
      email: "akshat@example.com",
    },
  },
  {
    id: 2,
    name: "Ram Chandra Mandal",
    role: "",
    image: "https://i.pinimg.com/736x/b0/72/1f/b0721f0c1c87e616d729b71d554eca3e.jpg",
    bio: "Director Meditativewings,Director Meditativeias academy,Retired Deputy Director Of Education,Magadh Division,Bihar Government",
    social: {
      twitter: "https://twitter.com/sarah",
      linkedin: "https://linkedin.com/in/sarah",
      email: "sarah@example.com",
    },
  },
  {
    id: 3,
    name: "Prashant sharma",
    role: "",
    image: "https://i.pinimg.com/736x/97/f5/ef/97f5ef6ca75431c6a789d060e764fffd.jpg",
    bio: "Social Media Manager",
    social: {
      twitter: "https://twitter.com/michael",
      linkedin: "https://linkedin.com/in/michael",
      email: "michael@example.com",
    },
  },
  
]

export function TeamGrid() {
  return (
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="group relative bg-card/40 border border-border/50 rounded-lg overflow-hidden backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
        >
          <div className="relative aspect-square w-full overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70"></div>

            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-sm text-white/80">{member.role}</p>
            </div>
          </div>

          <div className="p-4">
            <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
{/* 
            <div className="flex items-center gap-2">
              {member.social.github && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:text-primary hover:bg-primary/10"
                  onClick={() => window.open(member.social.github, "_blank")}
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              )}
              {member.social.twitter && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:text-primary hover:bg-primary/10"
                  onClick={() => window.open(member.social.twitter, "_blank")}
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              )}
              {member.social.linkedin && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:text-primary hover:bg-primary/10"
                  onClick={() => window.open(member.social.linkedin, "_blank")}
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              )}
              {member.social.email && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:text-primary hover:bg-primary/10"
                  onClick={() => (window.location.href = `mailto:${member.social.email}`)}
                >
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              )}
            </div> */}
          </div>
        </div>
      ))}
    </div>
  )
}

