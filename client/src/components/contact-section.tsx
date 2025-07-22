import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.parentName || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Show success message
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. We will get back to you soon.",
    });

    // Reset form
    setFormData({
      parentName: "",
      phone: "",
      email: "",
      grade: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold royal-navy mb-6">Get In Touch</h2>
          <div className="w-32 h-1 bg-elegant-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">We're here to answer your questions and welcome you to our community</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-royal-navy to-navy-light text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="elegant-gold text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="opacity-90">
                        St. Francis de Sales English Medium School and Junior College<br/>
                        Tayade Colony<br/>
                        KHAMGAON 444303<br/>
                        Maharashtra
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="elegant-gold text-xl flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:+919545395680" className="elegant-gold hover:text-yellow-300 transition-colors">
                        +91 9545395680
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="elegant-gold text-xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Office Hours</h4>
                      <p className="opacity-90">
                        Monday - Friday: 9:00 AM - 3:00 PM<br/>
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-cream/30 to-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold royal-navy mb-8">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="parentName" className="text-sm font-semibold text-gray-700 mb-2">Parent's Name *</Label>
                      <Input
                        id="parentName"
                        type="text"
                        placeholder="Your full name"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                        className="text-lg"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 your number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="text-lg"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="text-lg"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="grade" className="text-sm font-semibold text-gray-700 mb-2">Child's Grade/Class of Interest</Label>
                    <Select value={formData.grade} onValueChange={(value) => handleInputChange('grade', value)}>
                      <SelectTrigger className="text-lg">
                        <SelectValue placeholder="Select Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                        <SelectItem value="class1">Class I</SelectItem>
                        <SelectItem value="class2">Class II</SelectItem>
                        <SelectItem value="class3">Class III</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your inquiry or any questions you have..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-royal-navy text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-light transition-colors duration-300"
                  >
                    Send Message
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                    </svg>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
