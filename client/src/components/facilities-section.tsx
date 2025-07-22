import { GraduationCap, Book, FlaskConical, Dumbbell, Laptop, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FacilitiesSection() {
  const facilities = [
    {
      icon: GraduationCap,
      title: "Smart Classrooms",
      description: "Modern classrooms equipped with interactive boards and audio-visual systems for enhanced learning experience.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      icon: Book,
      title: "Rich Library",
      description: "Extensive collection of books, journals, and digital resources to support academic excellence and research.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      icon: FlaskConical,
      title: "Science Labs",
      description: "Well-equipped laboratories for Physics, Chemistry, Biology, and Mathematics to encourage hands-on learning.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      icon: Dumbbell,
      title: "Sports Complex",
      description: "Basketball, football, and badminton courts for physical education and recreational activities.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      icon: Laptop,
      title: "Computer Lab",
      description: "Modern computer laboratory with latest software and internet connectivity for digital literacy.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      icon: Music,
      title: "Music & Arts",
      description: "Dedicated spaces for music, dance, and visual arts to nurture creative talents and cultural appreciation.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold royal-navy mb-6">World-Class Facilities</h2>
          <div className="w-32 h-1 bg-elegant-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">Providing the best environment for learning and growth</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <Card key={index} className="bg-gradient-to-br from-white to-cream/30 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-6 w-6 elegant-gold mr-3" />
                    <h3 className="text-xl font-serif font-bold royal-navy">{facility.title}</h3>
                  </div>
                  <p className="text-gray-700">{facility.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
