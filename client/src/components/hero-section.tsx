import { useMemo } from "react";
import {
  Download,
  Github,
  Smartphone,
  Eye,
  Bot,
  Search,
  Heart,
} from "lucide-react";
import "./hero-section.css";
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning!";
  if (hour < 18) return "Good Afternoon!";
  return "Good Evening!";
}

export function HeroSection() {
  const greeting = useMemo(getGreeting, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div
        className="hero-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
        }}
      ></div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <div className="text-center lg:text-left">
              <div className="hero-badge">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--uganda-yellow)" }}
                >
                  🇺🇬 Discover Uganda's Beauty
                </span>
              </div>

              <h1 className="hero-title">
                Explore Uganda's
                <span
                  className="block"
                  style={{ color: "var(--uganda-yellow)" }}
                >
                  Hidden Gems
                </span>
              </h1>

              <p className="hero-subtitle">
                Immerse yourself in Uganda's breathtaking landscapes with our
                AR-powered mobile app. Discover national parks, serene lakes,
                and majestic mountains through virtual tours and intelligent
                navigation.
              </p>

              <div className="hero-buttons">
                <button
                  className="btn btn-lg"
                  style={{
                    background: "var(--uganda-yellow)",
                    color: "var(--charcoal)",
                  }}
                  onClick={() => {
                    // Optional: Scroll first
                    document
                      .getElementById("download")
                      ?.scrollIntoView({ behavior: "smooth" });

                    // Trigger APK download
                    setTimeout(() => {
                      window.location.href = "/app-release.apk"; // Make sure this path is correct
                    }, 500); // Wait half a second after scroll
                  }}
                >
                  <Download style={{ marginRight: "0.5rem" }} size={20} />
                  Download App
                </button>

                <button
                  className="btn btn-lg btn-outline"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                  onClick={() =>
                    window.open(
                      "https://github.com/Alvin11David/UGANDA-EXPLORE.git",
                      "_blank"
                    )
                  }
                >
                  <Github style={{ marginRight: "0.5rem" }} size={20} />
                  View Code
                </button>
              </div>

              <div className="hero-features">
                <div className="hero-feature">
                  <Smartphone size={16} />
                  <span>Flutter App</span>
                </div>
                <div className="hero-feature">
                  <Eye size={16} />
                  <span>AR Navigation</span>
                </div>
                <div className="hero-feature">
                  <Bot size={16} />
                  <span>AI Assistant</span>
                </div>
              </div>
            </div>

            <div className="phone-mockup">
              <div className="phone-container">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="phone-app">
                      <div className="phone-header">
                        <div className="phone-header-row">
                          <span className="text-sm">{greeting}</span>
                          <span className="text-sm">26°C ☀️</span>
                        </div>
                        <h2 className="phone-title">Explore Uganda</h2>
                      </div>
                      <div className="phone-content">
                        <div className="phone-search-bar">
                          <Search size={16} style={{ marginRight: 6 }} />
                          <input
                            type="text"
                            className="phone-search-input"
                            placeholder="Search sites, parks, lakes..."
                            disabled
                          />
                        </div>
                        <div className="phone-categories">
                          <div className="phone-category">
                            <div
                              style={{
                                color: "#059669",
                                marginBottom: "0.5rem",
                              }}
                            >
                              🌳
                            </div>
                            <div>National Parks</div>
                          </div>
                          <div
                            className="phone-category"
                            style={{ background: "#dbeafe", color: "#2563eb" }}
                          >
                            <div style={{ marginBottom: "0.5rem" }}>🌊</div>
                            <div>Lakes</div>
                          </div>
                          <div
                            className="phone-category"
                            style={{ background: "#fef3c7", color: "#f59e42" }}
                          >
                            <div style={{ marginBottom: "0.5rem" }}>⛰️</div>
                            <div>Mountains</div>
                          </div>
                        </div>
                        <div className="phone-favorites">
                          <span className="phone-fav-title">
                            <Heart
                              size={14}
                              style={{ color: "#e11d48", marginRight: 4 }}
                            />
                            Favorites
                          </span>
                          <div className="phone-fav-list">
                            <div className="phone-fav-item">
                              Murchison Falls
                            </div>
                            <div className="phone-fav-item">Lake Victoria</div>
                          </div>
                        </div>
                        <div className="phone-featured-card">
                          <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                            alt="Featured Site"
                            className="phone-featured-img"
                          />
                          <div className="phone-featured-info">
                            <div className="phone-featured-title">
                              Queen Elizabeth NP
                            </div>
                            <div className="phone-featured-desc">
                              Safari, boat rides, wildlife
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="phone-badge">AR Ready!</div>
                <div className="phone-label">Firebase Powered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
