import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { VenueProvider } from "@/shared/context/venue/venue.provider.tsx";
import GlobalStyles from "@/shared/styles/global.styles.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <VenueProvider>
      <App />
    </VenueProvider>
  </StrictMode>
);
