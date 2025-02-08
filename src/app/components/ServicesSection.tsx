'use client'
import { Button } from "@nextui-org/react"

const services = [
  {
    icon: "🎨",
    title: "UX & UI",
    description: "Designing interfaces that are intuitive, efficient, and enjoyable to use."
  },
  {
    icon: "💻",
    title: "Web & Mobile App",
    description: "Developing clean and functional apps with great user experiences."
  },
  {
    icon: "✏️",
    title: "Design & Creative",
    description: "Creating visually stunning designs that capture your brand's essence."
  },
  {
    icon: "🚀",
    title: "Development",
    description: "Bringing your vision to life with the latest technology and best practices."
  }
]

export default function ServicesSection() {
  return (
    <div className="mb-16">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-8">
          Collaborate with brands and agencies<br />
          to create impactful results.
        </h2>
        <Button
          className="bg-gray-100 text-gray-900 rounded-full px-6 py-2"
        >
          Services
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.title} className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
              <span>{service.icon}</span>
            </div>
            <h3 className="font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
