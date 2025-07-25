import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiFigma } from "react-icons/si";
import "./gallery-section.css";


import homeScreen from "./images/HOMESCREEN.png";
import placeDetails from "./images/PLACE DETAILS.png";
import arScan from "./images/AR SCAN SCREEN-1.png";
import tour360 from "./images/360 TOUR SCREEN.png";
import mapView from "./images/MAP VIEW SCREEN.png";
import aiChat from "./images/AI CHAT.png";
import streetView from "./images/STREETVIEW.png";
import adminUi from "./images/ADMIN UI.png";

const screenshots = [
  {
    image: homeScreen,
    title: "Home Screen",
    description:
      "• Displays tourism categories (National Parks, Lakes, Mountains).",
  },
  {
    image: placeDetails,
    title: "Place Details",
    description: `• Displays full site data: name, location, photos, description, entry fees, and activities.
• Scrollable image gallery with zoom and transitions.
• "Favorite" button to save preferred sites.
• Navigation option via Google Maps or Augmented Reality.`,
  },
  {
    image: arScan,
    title: "AR Scan Screen",
    description: `• Augmented Reality-based navigation to guide users on-site.
• Real-time camera, compass, and geolocation integration.
• Displays directional arrows, site metadata, heading, speed, and distance.`,
  },
  {
    image: tour360,
    title: "360 Tour Screen",
    description: `• Google Street View embedded inside a WebView.
• Users can preview tourism sites virtually before visiting.
• Offers immersive 360° experiences of landscapes and site environments.`,
  },
  {
    image: mapView,
    title: "Map View Screen",
    description: `• Fetches and shows user's current location and district.
• Provides personalized suggestions based on the user’s region.
• Used to calculate distance and routing for AR and Maps.`,
  },
  {
    image: aiChat,
    title: "AI Chat",
    description: `• Built-in chatbot for user support and tourism recommendations.
• Personalized suggestions like "What can I visit near Murchison Falls?"
• Integrated with GPT-style AI for rich, conversational answers.
• Smooth chat animations and modern chat UI.`,
  },
  {
    image: streetView,
    title: "Street View",
    description: `For many sites, users can launch immersive 360° virtual tours via Google Street View embedded inside the app, offering a realistic preview of the terrain and surroundings before visiting physically.`,
  },
  {
    image: adminUi,
    title: "Admin User Interface",
    description: `A powerful interface for content managers to add/edit/delete tourism site data in real-time via Firebase Firestore.`,
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">App Screenshots</h2>
          <p className="gallery-subtitle">
            Get a glimpse of the beautiful and intuitive user interface designed
            for the best user experience
          </p>
        </div>
        <div className="gallery-list">
          {screenshots.map((screenshot, index) => (
            <Card key={index} className="gallery-card">
              <CardContent className="gallery-card-content">
                <div className="gallery-row">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="gallery-img"
                  />
                  <div className="gallery-info">
                    <h3 className="gallery-img-title">{screenshot.title}</h3>
                    <p
                      className="gallery-img-desc"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="gallery-footer">
          <Button
            variant="default"
            size="lg"
            className="gallery-figma-btn"
            onClick={() =>
              window.open(
                "https://www.figma.com/design/oMWnBgFv8tLGDjehlnOQkr/EXPLORE-UGANDA-MOBILE-UI?node-id=0-1&t=seNDCVfZe0nKlRXC-1",
                "_blank"
              )
            }
          >
            <SiFigma className="mr-2" size={20} />
            View Figma Designs
          </Button>
        </div>
      </div>
    </section>
  );
}
