import "./contact-section.css";
import { Card, CardContent } from "@/components/ui/card";
import { SiGithub, SiFigma } from "react-icons/si";
import "./contact-section.css";

export function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <Card className="contact-card">
          <CardContent className="contact-card-content">
            <h2 className="contact-title">
              Uganda Explore Flutter App Installation
            </h2>
            <ol className="contact-list">
              <li>Open your PC terminal.</li>
              <li>
                <span className="contact-code">
                  git clone https://github.com/Alvin11David/UGANDA-EXPLORE.git
                </span>
              </li>
              <li>
                <span className="contact-code">cd uganda_explore</span>
              </li>
              <li>
                <span className="contact-code">flutter pub get</span>
              </li>
              <li>
                <span className="contact-code">flutter run</span>
              </li>
              <li>
                You can now sign in/up and use the Uganda Explore features.
              </li>
            </ol>
            <div className="contact-buttons">
              <button
                className="contact-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/Alvin11David/UGANDA-EXPLORE.git",
                    "_blank"
                  )
                }
              >
                <SiGithub size={20} /> GitHub Repository
              </button>
              <button
                className="contact-btn figma"
                onClick={() =>
                  window.open(
                    "https://www.figma.com/design/oMWnBgFv8tLGDjehlnOQkr/EXPLORE-UGANDA-MOBILE-UI?node-id=0-1&t=seNDCVfZe0nKlRXC-1",
                    "_blank"
                  )
                }
              >
                <SiFigma size={20} /> Figma Design
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
