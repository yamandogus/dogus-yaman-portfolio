'use client'
import { Button } from "@nextui-org/react"

export default function ContactSection() {
  return (
    <div className="text-center my-16">
      <h2 className="text-2xl font-semibold mb-4">
        Tell me about your<br />
        next project
      </h2>
      <div className="flex justify-center gap-4">
        <Button className="bg-black text-white rounded-full px-6 py-2">
          Email Me
        </Button>
        <Button className="bg-gray-100 text-gray-900 rounded-full px-6 py-2">
          WhatsApp
        </Button>
      </div>
    </div>
  )
}
