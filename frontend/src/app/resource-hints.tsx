import ReactDOM from "react-dom";

export function ResourceHints() {
  ReactDOM.preconnect("https://va.vercel-scripts.com", { crossOrigin: "anonymous" });
  ReactDOM.preconnect("https://vitals.vercel-insights.com", { crossOrigin: "anonymous" });
  ReactDOM.preconnect("https://fonts.gstatic.com", { crossOrigin: "anonymous" });
  ReactDOM.preconnect("https://fonts.googleapis.com");

  return null;
}
