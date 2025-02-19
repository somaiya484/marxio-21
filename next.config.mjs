/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyAnzh1QpiTXIiGh8yCV8s4ANs--WMcJteg",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "marxio-43.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "marxio-43",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "marxio-43.firebasestorage.app",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "286225156632",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:286225156632:web:33df79d70c318f5d03d16d",
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: "G-M4TG8K22HF",
    NEXT_PUBLIC_DOMAIN: "https://marxio.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
