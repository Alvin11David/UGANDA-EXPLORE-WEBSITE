import "./about-section.css";

export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">Core Features</h2>
        <ul className="about-list">
          <li>
            🏠 <b>Home Screen Dashboard:</b> Features personalized greetings
            based on time of day, real-time weather information, and category
            filters (National Parks, Lakes, Mountains). Users can also access
            their saved favorites for quick reference.
          </li>
          <li>
            📍 <b>Tourism Site Explorer:</b> Each tourism site includes a
            detailed profile with rich descriptions, image galleries, location
            data, entry fees, nearby attractions, and cultural context. Users
            can bookmark favorites for future reference.
          </li>
          <li>
            🧭 <b>Virtual AR Navigation:</b> A cutting-edge AR interface
            provides directional guidance using the camera, compass, and
            geolocation data. Directional arrows, distance counters, and site
            labels enhance real-world discovery.
          </li>
          <li>
            🌍 <b>Street View Integration:</b> Seamless integration of Google
            Street View in WebView lets users take immersive 360° virtual tours
            before deciding to travel.
          </li>
          <li>
            💬 <b>Smart Chat Assistant (AI):</b> A conversational chatbot
            powered by AI helps users plan visits, get site recommendations, or
            ask for history, facts, and travel tips.
          </li>
          <li>
            🔐 <b>User Authentication:</b> Users can sign up, log in, and manage
            profiles using Firebase Authentication (Email/Password or Google
            Sign-In).
          </li>
          <li>
            🧑‍💼 <b>Admin Dashboard:</b> A powerful interface for content managers
            to add/edit/delete tourism site data in real-time via Firebase
            Firestore.
          </li>
          <li>
            🔎 <b>Smart Search & Filtering:</b> Users can search for sites by
            name, category, district, tags, or even interests (e.g.,
            birdwatching, hiking, wildlife), with matching results rendered
            visually.
          </li>
        </ul>
        <h3 className="about-subtitle">🛠 Key Technologies Used:</h3>
        <ul className="about-list">
          <li>Flutter (Dart)</li>
          <li>Firebase (Firestore, Authentication)</li>
          <li>AR packages (camera, sensors, animations)</li>
          <li>Geolocator & Geocoding</li>
          <li>WebView for Street View</li>
          <li>Custom UI (Glassmorphism, gradients, animated transitions)</li>
        </ul>
        <h3 className="about-subtitle">🎯 Target Audience:</h3>
        <ul className="about-list">
          <li>Local and international tourists</li>
          <li>Tour guides and travel planners</li>
          <li>Government agencies and tourism boards</li>
          <li>Educators and students learning about Uganda</li>
          <li>App admins managing tourism data</li>
        </ul>
        <h3 className="about-subtitle">🌍 Project Goal:</h3>
        <p className="about-desc">
          To create an intuitive, visually engaging, and informative platform
          that promotes Ugandan tourism, educates users, and allows for
          real-time exploration—blending physical travel with virtual
          technology.
        </p>
        <h3 className="about-subtitle">Project Statement</h3>
        <p className="about-desc">
          Despite Uganda’s rich diversity of tourism attractions — including
          national parks, lakes, mountains, and cultural heritage sites — many
          of these gems remain underexplored and under-promoted, especially
          among local and regional travelers. Tourists often face challenges in
          discovering verified tourism destinations, getting accurate
          information, navigating to remote locations, or visualizing what a
          place truly looks like before visiting. There’s also limited digital
          infrastructure offering immersive and interactive virtual previews of
          Uganda's attractions.
        </p>
        <h3 className="about-subtitle">Project Goals</h3>
        <ul className="about-list">
          <li>
            Discover verified tourism sites in Uganda by category (e.g., parks,
            lakes, mountains).
          </li>
          <li>
            Explore these destinations through rich content, street-view
            previews, and virtual/AR guidance.
          </li>
          <li>
            Navigate to destinations using augmented reality and live metrics.
          </li>
          <li>Receive personalized recommendations and weather updates.</li>
          <li>
            Mark favorite places and interact with the locations and receive
            smart recommendations via AI chat support.
          </li>
          <li>
            Manage content (for administrators) through an integrated dashboard.
          </li>
        </ul>
      </div>
    </section>
  );
}
