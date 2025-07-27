import { Card, CardContent } from "@/components/ui/card";
import { 
  Route, 
  View, 
  Bot, 
  CloudSun, 
  Search, 
  Settings,
  CheckCircle
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Route,
      title: "AR Navigation",
      description: "Real-time augmented reality guidance with directional arrows, distance counters, and live compass integration for seamless exploration.",
      iconColor: "#10b981",
      features: ["Live camera overlay", "GPS tracking", "Distance metrics"]
    },
    {
      icon: View,
      title: "360° Virtual Tours", 
      description: "Immersive Google Street View integration lets you preview destinations with 360° virtual tours before your visit.",
      iconColor: "#3b82f6",
      features: ["Street View embed", "Interactive panorama", "WebView integration"]
    },
    {
      icon: Bot,
      title: "Smart AI Assistant",
      description: "Conversational AI chatbot provides personalized recommendations, travel tips, and answers to all your Uganda exploration questions.",
      iconColor: "#8b5cf6",
      features: ["OpenAI integration", "Smart recommendations", "Travel planning"]
    },
    {
      icon: CloudSun,
      title: "Live Weather Updates",
      description: "Real-time weather information for each destination helps you plan the perfect visit with current conditions and forecasts.",
      iconColor: "#f59e0b",
      features: ["OpenWeatherMap API", "Location-based forecast", "Visual weather icons"]
    },
    {
      icon: Search,
      title: "Advanced Search & Filter",
      description: "Powerful search capabilities let you find destinations by name, category, district, or interests like wildlife watching and hiking.",
      iconColor: "#6366f1",
      features: ["Category filtering", "Location search", "Interest-based results"]
    },
    {
      icon: Settings,
      title: "Admin Management",
      description: "Comprehensive admin dashboard for real-time content management, analytics, and tourism site data updates via Firebase.",
      iconColor: "#10b981",
      features: ["Real-time updates", "Site analytics", "Content management"]
    }
  ];

  return (
    <section id="features" className="section" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Features Overview</h2>
          <p className="section-description">
            Experience Uganda like never before with cutting-edge technology and intuitive design
          </p>
        </div>
        
        <div className="grid lg:grid-3 md:grid-2 grid-1 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon" style={{ background: feature.iconColor }}>
                <feature.icon size={24} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-list">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="feature-list-item">
                    <CheckCircle size={14} style={{ color: feature.iconColor }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
