import React from "react";

const UserStep = () => {
  const links = [
    { text: "REST API", url: "#" },
    { text: "GraphQL API", url: "#" },
    { text: "Document Service API", url: "#" },
    { text: "Plugin SDK", url: "#" },
    { text: "Upgrade to AppFlow 1", url: "#" },
  ];
  const usersGuide = [
    { text: "Introduction", url: "/AppFlowDocumentation/docs/intro/" },
    { text: "App Documentation", url: "/AppFlowDocumentation/docs/intro/Introduction" },
    { text: "Document Service API", url: "#" },
    { text: "Installation", url: "/AppFlowDocumentation/docs/intro/Installation" },
    { text: "Settings", url: "/AppFlowDocumentation/docs/Setappdeployment/" },
  ];
  const developerGuide = [
    { text: "Project creation", url: "#" },
    { text: "Usage & Billing", url: "#" },
    { text: "Project settings", url: "#" },
    { text: "Deployments management", url: "#" },
    { text: "Profile settings", url: "#" },
  ];
  return (
    <div className="section">
      <div className="containere">
        {usersGuide.map((link, index) => (
          <a key={index} href={link.url} className="linke">
            <div className="icone">
              <span>i</span>
            </div>
            <span className="texte">{link.text}</span>
            <span className="arrowe">→</span>
          </a>
        ))}
      </div>
      <div className="containere">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="linke">
            <div className="icone">
              <span>&lt;&gt;</span>
            </div>
            <span className="texte">{link.text}</span>
            <span className="arrowe">→</span>
          </a>
        ))}
      </div>
      <div className="containere">
        {developerGuide?.map((link, index) => (
          <a key={index} href={link.url} className="linke">
            <div className="icone">
              <span>...</span>
            </div>
            <span className="texte">{link.text}</span>
            <span className="arrowe">→</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UserStep;
