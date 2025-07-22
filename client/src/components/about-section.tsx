import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold royal-navy mb-6">About Fransalian Vidya Niketan</h2>
          <div className="w-32 h-1 bg-elegant-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A 43-year legacy of transformative education and spiritual growth</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Historic educational institution" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold royal-navy">Our Rich History</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fransalian Vidya Niketan (FVNK), founded in 1982 by Rev. Fr. P. V. Joseph in Khamgaon, Maharashtra, embodies the vision of a zealous Fransalian missionary dedicated to uplifting the poorest of the poor. Inspired by St. Francis de Sales, Fr. Joseph envisioned an ashram that would blend spiritual growth, education, social upliftment, and inter-religious harmony.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              On November 29, 1982, FVNK was registered as a trust, marking the beginning of a transformative journey. Starting with just four students in a small hut, the institution has grown into a beacon of hope and education for the marginalized communities.
            </p>
            <Card className="bg-cream/50">
              <CardContent className="p-6">
                <p className="royal-navy font-semibold text-lg italic">
                  "Education is not just about academics; it's about nurturing the whole person - mind, body, and spirit."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Achievements Timeline */}
        <Card className="bg-gradient-to-r from-royal-navy to-navy-light text-white">
          <CardContent className="p-8">
            <h3 className="text-3xl font-serif font-bold text-center mb-12">Key Milestones</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-elegant-gold royal-navy w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1982
                </div>
                <p className="font-medium">Foundation of FVNK</p>
              </div>
              <div className="text-center">
                <div className="bg-elegant-gold royal-navy w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1983
                </div>
                <p className="font-medium">Boarding House Established</p>
              </div>
              <div className="text-center">
                <div className="bg-elegant-gold royal-navy w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2023
                </div>
                <p className="font-medium">CBSE School Foundation</p>
              </div>
              <div className="text-center">
                <div className="bg-elegant-gold royal-navy w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2025
                </div>
                <p className="font-medium">60 Students Enrolled</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
