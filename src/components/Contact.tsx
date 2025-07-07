
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: 'Mobile Game',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a backend service
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      projectType: 'Mobile Game',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-muted/50 dark:from-orange-950/20 dark:to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            📧 Get In Touch
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Create Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your game idea to life? Let's discuss your project and make it happen!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mr-4">
                  📧
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">nadeem.shahzad@nplays.tech</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mr-4">
                  📱
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+92 (340) 763-1749</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mr-4">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Lahore, Punjab, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card rounded-2xl shadow-lg border">
              <h4 className="font-bold text-card-foreground mb-2">Available for:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>✅ Freelance Projects</li>
                <li>✅ Full-time Opportunities</li>
                <li>✅ Consulting & Code Reviews</li>
                <li>✅ Game Development Workshops</li>
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-card-foreground">Send Message</h3>
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white"
                onClick={() => window.open('mailto:alex.chen@gamedev.com?subject=Hire Me - Game Development Project', '_blank')}
              >
                Hire Me
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">First Name</label>
                  <Input 
                    name="firstName"
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Last Name</label>
                  <Input 
                    name="lastName"
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                <Input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Project Type</label>
                <select 
                  name="projectType"
                  className="w-full p-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={formData.projectType}
                  onChange={handleInputChange}
                >
                  <option>Mobile Game</option>
                  <option>PC Game</option>
                  <option>Console Game</option>
                  <option>Web Game</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Message</label>
                <Textarea 
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
