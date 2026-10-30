import { useState } from "react"
import { Button } from "./../components/ui/Button.jsx"
import { Input } from "./../components/ui/Input.jsx"
import { Textarea } from "./../components/ui/Textarea.jsx"
import { Label } from "./../components/ui/Label.jsx"
import { FileText, Image, Hash, IndianRupee, Send, Plus, Trash2 } from "lucide-react"

const MAX_IMAGES = 10

export default function NewProductForm() {
    const [imageLinks, setImageLinks] = useState([""])

    const updateImageLink = (index, value) => {
        setImageLinks(imageLinks.map((link, i) => (i === index ? value : link)))
    }

    const addImageLink = () => {
        if (imageLinks.length < MAX_IMAGES) setImageLinks([...imageLinks, ""])
    }

    const removeImageLink = (index) => {
        setImageLinks(imageLinks.filter((_, i) => i !== index))
    }

    return (
        <div className="bg-card/40 border border-border/50 backdrop-blur rounded-lg p-6 md:p-8">
            {/* Backend */}

            <form action="https://meditative-wings-backend-three.vercel.app/newProduct" method='post' className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="productTitle" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Product Title</span>
                    </Label>
                    <Input
                        id="productTitle"
                        name="productTitle"
                        placeholder="Enter the product name"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="productDesp" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Product Description</span>
                    </Label>
                    <Textarea
                        id="productDesp"
                        name="productDesp"
                        placeholder="Provide a short description of the product"
                        rows={4}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="productImages-0" className="flex items-center gap-2">
                        <Image className="h-4 w-4" />
                        <span>Product Image Links</span>
                    </Label>
                    <p className="text-xs text-muted-foreground">The first image is shown on the product card.</p>
                    {imageLinks.map((link, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Input
                                id={`productImages-${index}`}
                                name="productImages"
                                type="url"
                                value={link}
                                onChange={(e) => updateImageLink(index, e.target.value)}
                                placeholder={index === 0 ? "Main image URL" : `Image ${index + 1} URL`}
                                required={index === 0}
                            />
                            {imageLinks.length > 1 && (
                                <Button type="button" variant="ghost" size="icon" onClick={() => removeImageLink(index)}>
                                    <Trash2 className="h-4 w-4" />
                                    <span className="sr-only">Remove image {index + 1}</span>
                                </Button>
                            )}
                        </div>
                    ))}
                    {imageLinks.length < MAX_IMAGES && (
                        <Button type="button" variant="outline" size="sm" className="gap-2" onClick={addImageLink}>
                            <Plus className="h-4 w-4" />
                            Add another image
                        </Button>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="productPrice" className="flex items-center gap-2">
                        <IndianRupee className="h-4 w-4" />
                        <span>Product Price (₹)</span>
                    </Label>
                    <Input
                        id="productPrice"
                        name="productPrice"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="Enter the price in rupees, e.g. 499"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="productCode" className="flex items-center gap-2">
                        <Hash className="h-4 w-4" />
                        <span>Product Code</span>
                    </Label>
                    <Input
                        id="productCode"
                        name="productCode"
                        placeholder="Unique code, e.g. MW-SHOP-001"
                        required
                    />
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full md:w-auto gap-2" >
                        <>
                            <Send className="h-4 w-4" />
                            Submit Product
                        </>
                    </Button>
                </div>
            </form>
        </div>
    )
}
