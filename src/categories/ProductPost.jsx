import { Button } from "./../components/ui/Button.jsx"
import { Input } from "./../components/ui/Input.jsx"
import { Textarea } from "./../components/ui/Textarea.jsx"
import { Label } from "./../components/ui/Label.jsx"
import { FileText, Image, Hash, IndianRupee, Send } from "lucide-react"

export default function NewProductForm() {

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
                    <Label htmlFor="productImageLink" className="flex items-center gap-2">
                        <Image className="h-4 w-4" />
                        <span>Product Image Link</span>
                    </Label>
                    <Input
                        id="productImageLink"
                        name="productImageLink"
                        type="url"
                        placeholder="Enter the URL for the product image"
                        required
                    />
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
