import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/components/ThemeContext";

createRoot(document.getElementById("root")!).render(
	<ThemeProvider>
		<App />
		<Analytics />
	</ThemeProvider>
);
