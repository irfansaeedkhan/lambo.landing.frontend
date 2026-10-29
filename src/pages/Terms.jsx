import React from "react";
import { Link } from "react-router-dom";

// Terms and conditions have not been published on this site yet.
// This page is an honest placeholder, not a legal document: it must
// not be presented as the project's terms, and no legal wording has
// been invented here. The project team needs to publish the real
// terms before this page can be replaced with them.
function Terms() {
  return (
    <main className="MaxWidth" style={{ padding: "4rem 1rem" }}>
      <h2 className="secondary-heading-white">Terms &amp; Conditions</h2>
      <p className="section-para">
        The Terms &amp; Conditions for NFT Lambo Club are not published on
        this site yet. This page will hold the full terms once the project
        team publishes them. Until then, do not treat anything on this
        landing page as the project's terms.
      </p>
      <p className="section-para">
        <Link to="/" className="link">
          Back to home
        </Link>
      </p>
    </main>
  );
}

export default Terms;
