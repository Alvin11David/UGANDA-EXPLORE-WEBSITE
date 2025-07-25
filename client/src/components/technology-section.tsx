import "./technology-section.css";

export function TechnologySection() {
  return (
    <section id="technology" className="technology-section">
      <div className="technology-container">
        <div className="technology-header">
          <h2 className="technology-title">TECHNOLOGIES USED</h2>
          <p className="technology-subtitle">
            Powered by industry-leading technologies for optimal performance and scalability
          </p>
        </div>

        <div className="technology-group">
          <h3 className="technology-group-title">Framework & Language</h3>
          <ul className="technology-list">
            <li className="technology-list-item">
              <span className="technology-icon">🟦</span>
              <span className="technology-name">Flutter (Dart):</span>
              <span className="technology-desc">Main framework for building a beautiful, cross-platform mobile app (iOS and Android).</span>
            </li>
          </ul>
        </div>

        <div className="technology-group">
          <h3 className="technology-group-title">☁️ Backend & Cloud Services</h3>
          <ul className="technology-list">
            <li className="technology-list-item">
              <span className="technology-name">Firebase Firestore:</span>
              <span className="technology-desc">NoSQL cloud database for storing tourism site details, user profiles, and favorites.</span>
            </li>
            <li className="technology-list-item">
              <span className="technology-name">Firebase Authentication:</span>
              <span className="technology-desc">Provides secure user sign-up, sign-in, and session management.</span>
            </li>
          </ul>
        </div>

        <div className="technology-group">
          <h3 className="technology-group-title">📍 Location & Mapping</h3>
          <ul className="technology-list">
            <li className="technology-list-item">
              <span className="technology-name">Geolocator:</span>
              <span className="technology-desc">Retrieves user’s GPS location, speed, altitude, and heading.</span>
            </li>
            <li className="technology-list-item">
              <span className="technology-name">Geocoding:</span>
              <span className="technology-desc">Converts latitude/longitude to readable location names (e.g., districts).</span>
            </li>
            <li className="technology-list-item">
              <span className="technology-name">Flutter Compass:</span>
              <span className="technology-desc">Retrieves device orientation to guide AR navigation.</span>
            </li>
            <li className="technology-list-item">
              <span className="technology-name">Google Maps JavaScript API:</span>
              <span className="technology-desc">Enables Street View integration via WebView for virtual 360° tours.</span>
            </li>
          </ul>
        </div>

        <div className="technology-group">
          <h3 className="technology-group-title">📷 AR & Camera</h3>
          <ul className="technology-list">
            <li className="technology-list-item">
              <span className="technology-name">Camera Plugin:</span>
              <span className="technology-desc">Enables access to device camera for augmented reality navigation.</span>
            </li>
            <li className="technology-list-item">
              <span className="technology-name">AR Navigation (custom logic):</span>
              <span className="technology-desc">Uses live camera, compass, and GPS to guide users with animated direction overlays.</span>
            </li>
          </ul>
        </div>

        <div className="technology-group">
          <h3 className="technology-group-title">🌦️ Weather & External Data</h3>
          <ul className="technology-list">
            <li className="technology-list-item">
              <span className="technology-name">OpenWeatherMap API:</span>
              <span className="technology-desc">Fetches live weather forecasts and temperature for each tourism site.</span>
            </li>
            <li className="technology-list-item">
              <span className="technology-name">OpenRouter (OpenAI) API:</span>
              <span className="technology-desc">Integrates a conversational AI assistant for queries and recommendations.</span>
            </li>
          </ul>
        </div>

        <div className="technology-group">
          <h3 className="technology-group-title">📲 UI & UX Enhancements</h3>
          <ul className="technology-list">
            <li className="technology-list-item">
              <span className="technology-name">WebView Flutter:</span>
              <span className="technology-desc">Displays embedded web content (e.g., Google Street View).</span>
            </li>
            <li className="technology-list-item">
              <span className="technology-name">Shimmer:</span>
              <span className="technology-desc">Provides loading animations for a smooth user experience while data is fetched.</span>
            </li>
            <li className="technology-list-item">
              <span className="technology-name">Glassmorphism/Gradient UI packages:</span>
              <span className="technology-desc">Adds modern, elegant styling to buttons, cards, and screens.</span>
            </li>
          </ul>
        </div>

        <div className="technology-group">
          <h3 className="technology-group-title">💾 Data Persistence</h3>
          <ul className="technology-list">
            <li className="technology-list-item">
              <span className="technology-name">Shared Preferences:</span>
              <span className="technology-desc">Locally stores user favorites and session data across app sessions.</span>
            </li>
          </ul>
        </div>

        <div className="technology-group">
          <h3 className="technology-group-title">📤 Communication</h3>
          <ul className="technology-list">
            <li className="technology-list-item">
              <span className="technology-name">EmailJS (Dashboard):</span>
              <span className="technology-desc">Sends email notifications from admin dashboard (e.g., feedback, reports).</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
