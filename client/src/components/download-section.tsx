import "./download-section.css";

export function DownloadSection() {
  return (
    <section className="download-section">
      <div className="download-container">
        <h2 className="download-title">HOW UGANDA EXPLORE WORKS</h2>
        <h3 className="download-subtitle">USER FLOW</h3>
        <ul className="download-list">
          <li>
            <strong>User Sign In / Registration</strong>
            <br />
            Upon launching the app, users either sign in or register using their
            email and password via Firebase Authentication. New users can easily
            create an account, while returning users securely log in. Password
            recovery is supported through an OTP-based verification process.
          </li>
          <li>
            <strong>Home Screen & Personalization</strong>
            <br />
            After successful login, users are welcomed with a personalized home
            screen featuring a friendly greeting based on the time of day, live
            local weather information, and clearly organized categories of
            tourism sites such as National Parks, Lakes, and Mountains.
          </li>
          <li>
            <strong>Browsing & Searching Tourism Sites</strong>
            <br />
            Users can browse tourism categories or use the search functionality
            to find specific sites by name, location, or interest. The app
            fetches results dynamically from Firebase Firestore and displays
            them with vivid images and concise descriptions for quick
            exploration.
          </li>
          <li>
            <strong>Viewing Detailed Site Information</strong>
            <br />
            Tapping on a tourism site opens a dedicated detail page showcasing
            high-resolution images, rich descriptions, exact location, entry
            fees, and key activities. Users can also mark sites as favorites for
            easy future access.
          </li>
          <li>
            <strong>Favorites Management</strong>
            <br />
            Favorited sites are stored locally and synced with the user’s
            account, accessible in a dedicated favorites section. This feature
            helps users quickly revisit or plan trips around their preferred
            destinations.
          </li>
          <li>
            <strong>Virtual 360° Tours (Google Street View)</strong>
            <br />
            For many sites, users can launch immersive 360° virtual tours via
            Google Street View embedded inside the app, offering a realistic
            preview of the terrain and surroundings before visiting physically.
          </li>
          <li>
            <strong>Augmented Reality (AR) Navigation</strong>
            <br />
            Users can activate the AR navigation feature to receive real-time,
            on-screen guidance to their chosen tourism site. Using the device’s
            camera, compass, and GPS, animated arrows, distance counters, and
            progress bars guide users intuitively toward their destination.
          </li>
          <li>
            <strong>Weather & Location Metrics</strong>
            <br />
            Throughout the app experience, users can view live weather updates
            and personal movement metrics such as speed, altitude, and heading
            to enhance safety and trip planning.
          </li>
          <li>
            <strong>AI Chat Assistant</strong>
            <br />
            An integrated AI-powered chat assistant is available to answer
            questions, provide personalized recommendations, and assist users in
            discovering new attractions or planning their trips.
          </li>
        </ul>
        <h3 className="download-subtitle">ADMIN FLOW</h3>
        <ul className="download-list">
          <li>
            <strong>Admin Sign In</strong>
            <br />
            The admin opens the app and signs in using their credentials.
          </li>
          <li>
            <strong>Access Admin Dashboard</strong>
            <br />
            After authentication, the admin is redirected to the Admin Dashboard
            screen.
          </li>
          <li>
            <strong>View Tourism Sites List</strong>
            <br />
            The dashboard displays a list of all tourism sites fetched from
            Firestore.
          </li>
          <li>
            <strong>Edit Site Details</strong>
            <br />
            The admin selects a site and can view all its fields. By tapping an
            edit icon or field, the admin opens a dialog to update the value and
            type (e.g., text, timestamp, geopoint).
          </li>
          <li>
            <strong>Save Changes</strong>
            <br />
            The admin confirms edits, and the updated data is saved back to
            Firestore.
          </li>
          <li>
            <strong>Add or Remove Sites</strong>
            <br />
            The admin can add new tourism sites or delete existing ones from the
            dashboard.
          </li>
          <li>
            <strong>Review Changes</strong>
            <br />
            All changes are reflected instantly in the dashboard and available
            to users in the app.
          </li>
        </ul>
        <div className="download-summary">
          <span>Summary:</span>
          <br />
          Admin signs in → accesses dashboard → views and edits site data →
          saves changes → manages site list.
        </div>
      </div>
    </section>
  );
}
