import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Palette, Server } from "lucide-react";
import "./team-section.css";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiDribbble,
  SiBehance,
  SiStackoverflow,
} from "react-icons/si";

type GradientKey =
  | "from-uganda-green to-emerald-500"
  | "from-blue-500 to-cyan-600"
  | "from-purple-500 to-indigo-600"
  | "from-pink-500 to-rose-600"
  | "from-teal-500 to-green-600";

type ColorKey =
  | "text-uganda-green"
  | "text-blue-600"
  | "text-purple-600"
  | "text-pink-600"
  | "text-teal-600";

interface TeamMember {
  name: string;
  role: string;
  regNumber: string;
  studentNumber: string;
  description: string;
  icon: React.ElementType;
  gradient: GradientKey;
  color: ColorKey;
  socials: { icon: React.ElementType; href: string }[];
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "WALUUBE ALVIN DAVID",
      role: "Full Stack Developer",
      regNumber: "24/U/11805/PS",
      studentNumber: "2400711805",
      description:
        "Passionate about mobile app development and creating impactful applications for tourism and education.",
      icon: User,
      gradient: "from-uganda-green to-emerald-500",
      color: "text-uganda-green",
      socials: [
        
      ],
    },
    {
      name: "SSEBYALA DENIS TENDO",
      role: "Full Stack Developer",
      regNumber: "24/U/11123/PS",
      studentNumber: "2400711123",
      description:
        "Expert in backend development for scalable mobile applications.",
      icon: Server,
      gradient: "from-blue-500 to-cyan-600",
      color: "text-blue-600",
      socials: [
        
      ],
    },
    {
      name: "MULEMA BLAISE DAVIS",
      role: "Full Stack Developer",
      regNumber: "24/U/0763",
      studentNumber: "2400700763",
      description:
        "Specializes in creating intuitive and beautiful user experiences for mobile applications.",
      icon: Palette,
      gradient: "from-purple-500 to-indigo-600",
      color: "text-purple-600",
      socials: [
        
      ],
    },
    {
      name: "NAMULI MARTINA DANIELLA",
      role: "Frontend Developer",
      regNumber: "23/U/14837/EVE",
      studentNumber: "2300714837",
      description:
        "Creative designer focused on user interface and user experience design for mobile platforms.",
      icon: Palette,
      gradient: "from-pink-500 to-rose-600",
      color: "text-pink-600",
      socials: [
        
      ],
    },
    {
      name: "NANKINGA RONITAH",
      role: "Frontend Developer",
      regNumber: "24/U/24540/PS",
      studentNumber: "2400724540",
      description:
        "Frontend specialist with expertise in responsive design and modern web technologies.",
      icon: Palette,
      gradient: "from-teal-500 to-green-600",
      color: "text-teal-600",
      socials: [
        
      ],
    },
  ];

  const gradients: Record<GradientKey, string> = {
    "from-uganda-green to-emerald-500":
      "linear-gradient(135deg,#15803d 0%,#10b981 100%)",
    "from-blue-500 to-cyan-600":
      "linear-gradient(135deg,#3b82f6 0%,#0891b2 100%)",
    "from-purple-500 to-indigo-600":
      "linear-gradient(135deg,#a21caf 0%,#4f46e5 100%)",
    "from-pink-500 to-rose-600":
      "linear-gradient(135deg,#ec4899 0%,#e11d48 100%)",
    "from-teal-500 to-green-600":
      "linear-gradient(135deg,#14b8a6 0%,#22c55e 100%)",
  };

  const colors: Record<ColorKey, string> = {
    "text-uganda-green": "#15803d",
    "text-blue-600": "#2563eb",
    "text-purple-600": "#a21caf",
    "text-pink-600": "#ec4899",
    "text-teal-600": "#14b8a6",
  };

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Meet the Team</h2>
          <p className="team-subtitle">
            Passionate developers and designers bringing Uganda's beauty to the
            digital world
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <Card key={index} className="team-card">
              <CardContent className="p-0">
                <div
                  className="team-card-gradient"
                  style={{ background: gradients[member.gradient] }}
                >
                  <div className="team-card-icon-bg">
                    <member.icon style={{ color: "#fff" }} size={48} />
                  </div>
                </div>
                <div className="team-card-content">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p
                    className="team-member-role"
                    style={{
                      color: colors[member.color],
                    }}
                  >
                    {member.role}
                  </p>
                  <p className="team-member-reg">Reg: {member.regNumber}</p>
                  <p className="team-member-student">
                    Student: {member.studentNumber}
                  </p>
                  <p className="team-member-desc">{member.description}</p>
                  <div className="team-socials">
                    {member.socials.map((social, idx) => (
                      <button
                        key={idx}
                        className="team-social-btn"
                        onClick={() => {
                          // These would link to actual social profiles
                          console.log(`Social link clicked for ${member.name}`);
                        }}
                       aria-label={member.name + " social link"}
                      >
                        <social.icon size={16} />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}