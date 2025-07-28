import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { SiGithub, SiX, SiLinkedin, SiFigma } from "react-icons/si";
import "./footer.css";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="md:col-span-2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "#fff",
                  borderRadius: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <MapPin className="text-uganda-green" size={24} />
              </div>
              <span className="footer-title">Uganda Explore</span>
            </div>
            <p className="footer-description">
              Makerere University
              <br /> College of Computing School of Informatics Technology
              <br />
              Department of Computer Science Kampala,Uganda
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                className="footer-icon-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/Alvin11David/UGANDA-EXPLORE.git",
                    "_blank"
                  )
                }
              >
                <SiGithub size={22} />
              </button>
              <button
                className="footer-icon-btn"
                style={{ color: "#a21caf" }}
                onClick={() =>
                  window.open(
                    "https://www.figma.com/design/oMWnBgFv8tLGDjehlnOQkr/EXPLORE-UGANDA-MOBILE-UI?node-id=0-1&t=seNDCVfZe0nKlRXC-1",
                    "_blank"
                  )
                }
              >
                <SiFigma size={22} />
              </button>
            </div>
          </div>
          <div>
            <h3 className="footer-section-title">Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <button
                  className="footer-btn"
                  onClick={() => scrollToSection("features")}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  className="footer-btn"
                  onClick={() => scrollToSection("technology")}
                >
                  Technology
                </button>
              </li>
              <li>
                <button
                  className="footer-btn"
                  onClick={() => scrollToSection("gallery")}
                >
                  Screenshots
                </button>
              </li>
              <li>
                <button
                  className="footer-btn"
                  onClick={() => scrollToSection("team")}
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  className="footer-btn"
                  onClick={() => {
                    window.location.href = "/app-release.apk";
                  }}
                >
                  Download
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-section-title">Resources</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <button
                  className="footer-link"
                  onClick={() =>
                    window.open(
                      "https://github.com/Alvin11David/UGANDA-EXPLORE.git",
                      "_blank"
                    )
                  }
                >
                  GitHub Repo
                </button>
              </li>
              <li>
                <button
                  className="footer-link"
                  onClick={() =>
                    window.open(
                      "https://www.figma.com/design/oMWnBgFv8tLGDjehlnOQkr/EXPLORE-UGANDA-MOBILE-UI?node-id=0-1&t=seNDCVfZe0nKlRXC-1",
                      "_blank"
                    )
                  }
                >
                  Figma Design
                </button>
              </li>
              <li>
                <button
                  className="footer-link"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/10O7YYuDtf5RIC_BJsliVmhFNwlLiUk-z/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  Documentation
                </button>
              </li>
              <li>
                <button className="footer-link">API Reference</button>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            Thank you for visiting Uganda Explore! Our team is excited to offer
            you an immersive virtual experience that lets you discover the
            stunning beauty and rich culture of Uganda from anywhere in the
            world. Get ready to explore, learn, and be inspired like never
            before.
          </p>
          <p className="footer-bottom-text">© Group 5</p>
        </div>
      </div>
    </footer>
  );
}
