'use client'
import { Card, CardBody, CardHeader } from "@nextui-org/react"

const experiences = [
  {
    company: "Turkcell Global Bilgi",
    position: "Customer Representative",
    duration: "May 2021 - Present",
    description: "For the past 3.5 years, I have been working as a Customer Service Representative, involved in both call center operations and written communications.",
    responsibilities: [
      "Provided solution-oriented customer service",
      "Managed call center operations",
      "Handled written communications",
      "Stayed updated with technological advancements"
    ]
  },
  {
    company: "Yazaki Otomotiv",
    position: "Production Personnel",
    duration: "Feb 2018 - Jul 2018",
    description: "I worked in the automotive sector, where I participated in international projects and spent one year abroad. I gained the opportunity to develop innovative solutions and experience a global business environment."
  },
  {
    company: "OnlyJS Academy",
    position: "Frontend Development Trainee",
    duration: "January 2023 - Current",
    description: "At OnlyJS Academy, I gained proficiency in React.js, TypeScript, JavaScript, Bootstrap, Material-UI, and CSS-in-JS. I streamline the development process and create user-friendly interfaces with HTML, CSS, SASS, and CSSNext. Using Zustand and React Hook Form enhance state and form management. I am skilled in developing dynamic and interactive web applications and ready to contribute to exciting projects.",
  }
]

export default function WorkExperience() {
  return (
    <section className="py-16">
      <div className="flex items-center justify-center">
      <h2 className="sm:text-3xl md:text-3xl font-bold text-center mb-10 text-gray-400 shadow-custom inline-block p-4">
        Work Experience
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-gray-100 h-full border-2 border-gray-400 hover:border-gray-300 duration-300 transition ease-in-out">
            <CardHeader className="flex flex-col items-start gap-1 px-6 pt-6">
              <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-1">
                <p className="font-medium">{exp.position}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
              </div>
            </CardHeader>
            <CardBody className="px-6 py-4">
              <p className="text-gray-600 mb-4 text-sm">{exp.description}</p>
              {exp.responsibilities && (
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">{resp}</li>
                  ))}
                </ul>
              )}
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}
