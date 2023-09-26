import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Job Skills',
  webDir: 'build',
  server: {
    androidScheme: 'http://192.168.1.8:3000',
    cleartext: true
  }
};

export default config;
