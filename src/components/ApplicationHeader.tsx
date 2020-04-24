import React from "react";
import ApplicationIconSidebar from "@components/ApplicationIconSidebar";
import ApplicationLogo from "@components/ApplicationLogo";
import ApplicationSection from "./ApplicationSection";

export default function ApplicationHeader() {
  return (
    <ApplicationSection>
      <ApplicationIconSidebar>
        <ApplicationLogo />
      </ApplicationIconSidebar>
      <div>
        {/* pencil icon */}
        theme-name
      </div>
      <a
        href="https://native-elements.stackblitz.io/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Native elements
      </a>
    </ApplicationSection>
  );
}
