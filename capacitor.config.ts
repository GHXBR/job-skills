import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "Job Skills",
  webDir: "build",
  server: {
    androidScheme: "http://192.168.19.1:3000",
  },
};

export default config;
