const API_URL = "http://localhost:8080";

export async function fetchBackendStatus() {
  const start = performance.now();
  const response = await fetch(API_URL);
  const text = await response.text();
  const latency = performance.now() - start;

  return {
    message: text,
    latency: latency.toFixed(2),
    timestamp: new Date().toLocaleTimeString()
  };
}
