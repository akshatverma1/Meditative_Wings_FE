"use client"

import { useState } from "react"
import { Button } from "./../components/ui/Button.jsx"
import { Input } from "./../components/ui/Input.jsx"
import { Textarea } from "./../components/ui/Textarea.jsx"
import { Label } from "./../components/ui/Label.jsx"
import { FileText, Send } from "lucide-react"

export default function NewPostForm() {

    return (
        <div className="bg-card/40 border border-border/50 backdrop-blur rounded-lg p-6 md:p-8">
            {/* Backend */}

            <form action="https://meditative-wings-backend-three.vercel.app/newTweetPost" method='post' className="space-y-6">
                
                <div className="space-y-2">
                    <Label htmlFor="videoDesp" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Author Name</span>
                    </Label>
                    <Input
                        id="authorName"
                        name="authorName"
                        placeholder="Enter the Author Name"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="videoTitle" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Content</span>
                    </Label>
                    <Textarea
                        id="tweetContent"
                        name="tweetContent"
                        placeholder="Enter Your Content"
                        rows={4}
                    />
                </div>

                {/* Hidden Tag Input with default value "NULL" */}
                <input type="hidden" id="tweetTag" name="tweetTag" value="NULL" />

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
