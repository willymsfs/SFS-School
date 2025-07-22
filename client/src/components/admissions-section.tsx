import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AdmissionsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ageRequirements = [
    { grade: "Nursery", age: "3 years by April 1" },
    { grade: "LKG", age: "3 years 7 months by April 1" },
    { grade: "UKG", age: "4 years 7 months by April 1" },
    { grade: "Class I", age: "5½ years by September 30" }
  ];

  return (
    <section id="admissions" className="py-20 bg-gradient-to-br from-royal-navy to-navy-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Admission Information</h2>
          <div className="w-32 h-1 bg-elegant-gold mx-auto mb-8"></div>
          <p className="text-xl opacity-90">Join our community of learners and leaders</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Admission Process */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-3xl font-serif font-bold mb-8 elegant-gold">Admission Process</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-elegant-gold royal-navy w-8 h-8 rounded-full flex items-center justify-center font-bold mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Obtain the Prospectus</h4>
                    <p className="opacity-90">Visit the school office on any working day between 9:00 AM and 3:00 PM. You can pick it up in person or send someone on your behalf.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-elegant-gold royal-navy w-8 h-8 rounded-full flex items-center justify-center font-bold mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Register Your Child</h4>
                    <p className="opacity-90">Complete the forms provided in the prospectus and submit them with the required documents to register.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Age Requirements */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-3xl font-serif font-bold mb-8 elegant-gold">Age Requirements</h3>
              <div className="space-y-4">
                {ageRequirements.map((requirement, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{requirement.grade}</span>
                      <span className="elegant-gold">{requirement.age}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">Ready to Begin the Journey?</h3>
              <p className="text-lg opacity-90 mb-6">Contact us today to learn more about our admission process and schedule a school tour.</p>
              <div className="space-x-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-elegant-gold royal-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
                >
                  Contact Admissions
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-elegant-gold text-elegant-gold px-8 py-3 rounded-lg font-semibold hover:bg-elegant-gold hover:text-royal-navy transition-all duration-300"
                  asChild
                >
                  <a href="tel:+919545395680">Call Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
