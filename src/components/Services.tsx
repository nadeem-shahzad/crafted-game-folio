
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Smartphone, Code, Palette, Zap, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Full-cycle game development from concept to deployment using Unity and Unreal Engine.",
      features: ["3D/2D Game Development", "Gameplay Programming", "Physics Integration", "Performance Optimization"],
      price: "Starting at $5,000"
    },
    {
      icon: Smartphone,
      title: "Mobile Game Development",
      description: "Cross-platform mobile games optimized for iOS and Android with engaging user experiences.",
      features: ["Cross-Platform Development", "Touch Controls", "In-App Purchases", "Social Integration"],
      price: "Starting at $3,000"
    },
    {
      icon: Code,
      title: "Custom Game Tools",
      description: "Development of custom tools and editors to streamline your game development workflow.",
      features: ["Unity Editor Tools", "Automation Scripts", "Build Pipelines", "Asset Management"],
      price: "Starting at $2,000"
    },
    {
      icon: Palette,
      title: "Game UI/UX Design",
      description: "Intuitive and visually appealing user interfaces that enhance player engagement.",
      features: ["UI/UX Design", "Interactive Menus", "HUD Design", "Responsive Layouts"],
      price: "Starting at $1,500"
    },
    {
      icon: Zap,
      title: "Game Optimization",
      description: "Performance optimization services to ensure smooth gameplay across all target platforms.",
      features: ["Performance Profiling", "Memory Optimization", "Frame Rate Improvement", "Platform-Specific Optimization"],
      price: "Starting at $1,000"
    },
    {
      icon: Users,
      title: "Consulting & Mentoring",
      description: "One-on-one consulting sessions and mentoring for aspiring game developers.",
      features: ["Technical Consulting", "Code Reviews", "Career Guidance", "Project Planning"],
      price: "Starting at $100/hour"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 bg-muted/30 dark:bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🛠️ Services
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">What I Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional game development services tailored to bring your vision to life with cutting-edge technology and creative expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                      <IconComponent className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-4">
                      {service.price}
                    </p>
                    <Button 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={scrollToContact}
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4"
            onClick={scrollToContact}
          >
            Contact Me for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
