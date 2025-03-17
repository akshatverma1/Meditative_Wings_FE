"use client"

import { useState } from "react"
// import { Card } from "./ui/Card"
import {Card} from "../components/ui/card"
// import { Button } from "./ui/Button"
import { Button } from "../components/ui/Button"
import { Copy, Check, Smartphone, CreditCard, AlertCircle } from "lucide-react"

// Payment data
const paymentData = {
  PhonePe: {
    Accepted: "Yes",
    QR_Code: "Available",
    Account_Holder: "Aditya Kumar",
  },
  UPI_IDs: ["9597381588-4@ybl", "9597381588-4@ibl", "9597381588-4@axl"],
  Bank_Account: {
    Account_Name: "MEDITATIVEWINGS",
    Bank_Name: "Kotak Mahindra Bank",
    Account_Number: "5249551924",
    IFSC_Code: "KKBK0005663",
  },
}

export function PaymentDetails() {
  const [copiedText, setCopiedText] = useState("")

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)

    setTimeout(() => {
      setCopiedText("")
    }, 2000)
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* QR Code Section */}
      <Card className="bg-card/40 border-border/50 backdrop-blur p-6 flex flex-col items-center">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Scan QR Code</h2>
          <p className="text-muted-foreground">Scan with any UPI app to pay directly</p>
        </div>

        <div className="bg-white p-4 rounded-lg mb-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-16%20at%2010.33.18%20PM%20%282%29-x5T0kYoHyL2hqmSEujXW1JvnKGFbyr.jpeg"
            alt="PhonePe QR Code"
            className="w-full max-w-[250px] h-auto"
          />
        </div>

        <div className="text-center">
          <p className="font-medium">Account Holder: {paymentData.PhonePe.Account_Holder}</p>
          <p className="text-sm text-muted-foreground">PhonePe, Google Pay, Paytm, or any UPI app</p>
        </div>
      </Card>

      {/* Payment Details Section */}
      <div className="space-y-6">
        {/* UPI IDs */}
        <Card className="bg-card/40 border-border/50 backdrop-blur p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold">UPI Payment</h2>
          </div>

          <div className="space-y-3">
            {paymentData.UPI_IDs.map((upiId, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-md">
                <code className="font-mono">{upiId}</code>
                <Button variant="ghost" size="sm" onClick={() => handleCopy(upiId)} className="h-8 w-8">
                  {copiedText === upiId ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-4 text-sm text-muted-foreground flex items-start gap-2">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>Use these UPI IDs with any UPI-enabled payment app</p>
          </div>
        </Card>

        {/* Bank Account Details */}
        <Card className="bg-card/40 border-border/50 backdrop-blur p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold">Bank Transfer</h2>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Account Name:</span>
              <span className="font-medium">{paymentData.Bank_Account.Account_Name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">Bank Name:</span>
              <span className="font-medium">{paymentData.Bank_Account.Bank_Name}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Account Number:</span>
              <div className="flex items-center gap-2">
                <code className="font-mono font-medium">{paymentData.Bank_Account.Account_Number}</code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(paymentData.Bank_Account.Account_Number)}
                  className="h-8 w-8"
                >
                  {copiedText === paymentData.Bank_Account.Account_Number ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">IFSC Code:</span>
              <div className="flex items-center gap-2">
                <code className="font-mono font-medium">{paymentData.Bank_Account.IFSC_Code}</code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(paymentData.Bank_Account.IFSC_Code)}
                  className="h-8 w-8"
                >
                  {copiedText === paymentData.Bank_Account.IFSC_Code ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Additional Information */}
      {/* <Card className="bg-card/40 border-border/50 backdrop-blur p-6 md:col-span-2">
        <h3 className="text-lg font-semibold mb-3">Payment Instructions</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>• After making a payment, please save the transaction ID for your reference.</li>
          <li>• For any payment-related queries, contact us at support@meditativeblogs.com</li>
          <li>• All contributions help us maintain and improve our meditation content.</li>
        </ul>
      </Card> */}
    </div>
  )
}

