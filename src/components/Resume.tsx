
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, GraduationCap, Award, Building } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      year: "2018 - 2022",
      description: "Specialized in Game Development and Computer Graphics"
    },
    {
      degree: "Game Development Bootcamp",
      school: "Unity Academy",
      year: "2022",
      description: "Intensive 6-month program focused on Unity and C# development"
    }
  ];

  const experience = [
    {
      position: "Senior Game Developer",
      company: "Pixel Studios",
      period: "2023 - Present",
      description: "Lead developer for mobile RPG games with over 1M+ downloads. Responsible for gameplay mechanics, UI/UX implementation, and performance optimization."
    },
    {
      position: "Game Developer",
      company: "Indie Game Collective",
      period: "2022 - 2023",
      description: "Developed multiple indie games using Unity and Unreal Engine. Collaborated with artists and designers to create engaging gaming experiences."
    },
    {
      position: "Junior Developer",
      company: "TechStart Gaming",
      period: "2021 - 2022",
      description: "Assisted in developing casual mobile games. Gained experience in mobile optimization and cross-platform development."
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

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                <Award className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            {certifications.map((cert, index) => (
              <Card key={index} className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{cert.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-600 dark:text-orange-400 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p>
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
