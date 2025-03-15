"use client"

import { useState } from "react"
import { Button } from "./../components/ui/Button.jsx"
import { Input } from "./../components/ui/Input.jsx"
import { Textarea } from "./../components/ui/Textarea.jsx"
import { Label } from "./../components/ui/Label.jsx"
import { AlertCircle, CheckCircle2, LinkIcon, Youtube, Image, FileText, Send } from "lucide-react"

export default function NewPostForm() {

    return (
        <div className="bg-card/40 border border-border/50 backdrop-blur rounded-lg p-6 md:p-8">
{/* Backend */}

            <form action="https://meditative-wings-backend-seven.vercel.app/newRequest" method='post' className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="videoTitle" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Title</span>
                    </Label>
                    <Input
                        id="videoTitle"
                        name="videoTitle"
                        placeholder="Enter the title of your content"
                    />

                </div>

                <div className="space-y-2">
                    <Label htmlFor="videoDesp" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Description</span>
                    </Label>
                    <Textarea
                        id="videoDesp"
                        name="videoDesp"
                        placeholder="Provide a detailed description of your content"
                        rows={4}

                    />

                </div>

                <div className="space-y-2">
                    <Label htmlFor="thumbnailLink" className="flex items-center gap-2">
                        <Image className="h-4 w-4" />
                        <span>Thumbnail Link</span>
                    </Label>
                    <Input
                        id="thumbnailLink"
                        name="thumbnailLink"
                        placeholder="Enter the URL for your thumbnail image"

                    />

                </div>

                <div className="space-y-2">
                    <Label htmlFor="youtubeLink" className="flex items-center gap-2">
                        <Youtube className="h-4 w-4" />
                        <span>YouTube Video Id</span>
                    </Label>
                    <Input
                        id="youtubeLink"
                        name="youtubeLink"
                        placeholder="Enter the YouTube video URL"

                    />

                </div>

                <div className="space-y-2">
                    <Label htmlFor="category" className="flex items-center gap-2">
                        <LinkIcon className="h-4 w-4" />
                        <span>Category</span>
                    </Label>
                    <select
                        id="category"
                        name="category"

                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <option value="Meditative Knowledge">Meditative Knowledge</option>
                        <option value="Meditative Thoughts">Meditative Thoughts</option>
                        <option value="Meditative Movie">Meditative Movie</option>
                        <option value="Meditative Writings">Meditative Writings</option>
                        <option value="Life Understanding">Life Understanding</option>
                        <option value="Meditative Shayari">Meditative Shayari</option>
                        <option value="Meditative Shayari Movie">Meditative Shayari Movie</option>
                        <option value="Meditative Shayari Writings">Meditative Shayari Writings</option>
                        <option value="Meditative Wings Media">Meditative Wings Media</option>
                    </select>
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full md:w-auto gap-2" >
                        <>
                            <Send className="h-4 w-4" />
                            Submit Content
                        </>
                    </Button>
                </div>
            </form>
        </div>
    )
}

