'use client'
import { Card, CardBody, CardHeader } from "@nextui-org/react"

const experiences = [
  {
    company: "Turkcell Global Bilgi",
    position: "Müşteri Temsilcisi",
    duration: "Mayıs 2021 - Devam Ediyor",
    description: "Son 3.5 yıldır Müşteri Hizmetleri Temsilcisi olarak hem çağrı merkezi operasyonlarında hem de yazılı iletişimde görev almaktayım.",
    responsibilities: [
      "Çözüm odaklı müşteri hizmeti sunma",
      "Çağrı merkezi operasyonlarını yönetme",
      "Yazılı iletişimi yönetme",
      "Teknolojik gelişmeleri takip etme"
    ]
  },
  {
    company: "Yazaki Otomotiv",
    position: "Üretim Personeli",
    duration: "Şubat 2018 - Temmuz 2018",
    description: "Otomotiv sektöründe çalıştım, uluslararası projelere katıldım ve bir yıl yurtdışında bulundum. Yenilikçi çözümler geliştirme ve global iş ortamında deneyim kazanma fırsatı elde ettim."
  },
  {
    company: "OnlyJS Academy",
    position: "Frontend Geliştirme Kursiyeri",
    duration: "Ocak 2023 - Devam Ediyor",
    description: "OnlyJS Academy'de React.js, TypeScript, JavaScript, Bootstrap, Material-UI ve CSS-in-JS konularında uzmanlık kazandım. HTML, CSS, SASS ve CSSNext ile geliştirme sürecini optimize ediyor ve kullanıcı dostu arayüzler oluşturuyorum. Zustand ve React Hook Form ile durum ve form yönetimini geliştiriyorum. Dinamik ve interaktif web uygulamaları geliştirme konusunda yetenekliyim ve heyecan verici projelere katkıda bulunmaya hazırım.",
  }
]

export default function WorkExperience() {
  return (
    <section className="py-16">
      <div className="flex items-center justify-center">
      <h2 className="sm:text-3xl md:text-xl font-bold mb-6 text-center border p-4 rounded text-gray-400 shadow-custom inline-block">
        Work Experience
      </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-gray-100 h-full border-2 border-gray-400 hover:shadow-lg hover:scale-105 hover:border-gray-300 duration-300 transition ease-in-out cursor-pointer">
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
