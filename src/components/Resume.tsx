
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, GraduationCap, Award, Building } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Narowal, Pakistan",
      year: "2015-2019",
      description: "Specialized in Game Development and Computer Graphics"
    },
    {
      degree: "Master of Science in Data Science",
      school: "University of Management and Technology, Lahore",
      year: "2021-2023",
      description: "My Master's degree in Data Science equipped me with advanced knowledge and skills in data analysis, machine learning, and statistical modeling. This program wasn't just about theory - I delved into practical applications through courses on Game Analytics, AI and Machine Learning in Games and Data-Driven Game Design."
    }
  ];

  const experience = [
    {
      position: "Leading the Hyper Casual Charge",
      company: "Sabasoft, Lahore",
      period: "2019 - 2022",
      description: "For three years, I had the pleasure of working at Sabasoft, a game development company focused on creating engaging hyper casual games. During my time there, I played a key role in the development of a staggering 20 Hyper Casual games, contributing significantly to the studio's success."
    },
    {
      position: "Senior Game Developer",
      company: "Coeus Solutions",
      period: "2022-Present",
      description: "In 2022, I embarked on a new chapter in my game development journey at Coeus Solutions, a service-based studio known for its expertise in crafting high-quality games across genres. This transition from hyper casual development at Sabasoft has broadened my skillset and exposed me to the exciting world of working on diverse game projects."
    }
  ];

  const certifications = [
    {
      name: "Unity Certified Programmer",
      issuer: "Unity Technologies",
      year: "2023",
      credentialId: "UC-12345"
    },
    {
      name: "Unreal Engine Blueprint Specialist",
      issuer: "Epic Games",
      year: "2022",
      credentialId: "UE-67890"
    },
    {
      name: "Mobile Game Development",
      issuer: "Google Play Academy",
      year: "2023",
      credentialId: "GP-11111"
    }
  ];

  return (
    <section id="resume" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            📄 Resume
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my education, professional experience, and certifications in game development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                <GraduationCap className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            {education.map((edu, index) => (
              <Card key={index} className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{edu.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-600 dark:text-orange-400 font-medium mb-2">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                <Building className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>
            {experience.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{exp.position}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-600 dark:text-orange-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Resume;
