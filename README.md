
# 🎬 YouTube Learning App (React Native + Expo)

A mobile app for browsing and watching YouTube videos with a focus on learning content. Built with React Native, Expo, and best 
React Native Video Player: [![react-native-video](https://img.shields.io/badge/react_native_video-421?style=for-the-badge&logo=ko-ai&logoColor=white)](https://github.com/TheWidlarzGroup/react-native-video/)
## Features

- Home screen with curated videos.
- Search screen to find videos by query.
- Video Detail screen with embedded video player (react-native-video).
- Preload/welcome screen with guest login.
- Custom bottom tab navigation with dynamic icons.
- Clean and responsive UI, fully type-safe using TypeScript.


## Tech Stack

- React Native (via Expo)
- TypeScript
- Expo Managed Workflow
- React Navigation v6 (@react-navigation/native, native-stack, bottom-tabs)
- react-native-video for video playback
- Axios for API requests
- YouTube Data API v3
## Project Structure

```http
/assets        # Images, icons, SVGs, Static video file
/components    # Reusable UI components (PreloadScreen, VideoCard, etc.)
/navigation    # AppNavigator.tsx
/screens       # Screens/Route (HomeScreen, SearchScreen, VideoDetailScreen)
/api           # YouTube API helper
/theme         # Theme/colors constants
/types         # TypeScript interfaces
```


## Getting started

1. Install Dependencies after clone
```bash
  yarn install
  # or
  npm install
```

2. Set up Environment Variables
 - Create a .env file in the project root:
 - You can generate a YouTube API key from Google Cloud Console
```bash
  YOUTUBE_API_SECRET_KEY='YOUR_YOUTUBE_API_KEY_123'
```
3. Android SDK (for video playback)
- Install Android Studio and the SDK for your system.
- Make sure you have at least API Level 30 installed.
- Set JAVA_HOME and add it to PATH.
- Expo Video Player sometimes requires a custom SDK version to play videos properly.

4. Start the App
- For Expo Go (development):
```bash
  npx expo start
```
Then scan the QR code with your Expo Go app.

- For Android emulator / device:
```bash
  npx expo run:android
```
- For iOS (optional):
```bash
  npx expo run:ios
```
    
## UI / UX Notes

- Preload screen overlays the whole app until guest login is clicked.
- Bottom Tab Navigator has Home and Search with custom SVG icons.
- VideoDetail screen hides the Tab Bar completely.
- Video cards are clickable on both Home and Search screens.
- Dates are formatted as DD.MM.YYYY.


## Notes / Gotchas

- YouTube API free tier has a daily quota (~10,000 requests). Once exhausted, use mock data or create a new API key.
- react-native-video may require Android SDK ≥30.
- Video playback URLs are fetched via YouTube API. Ensure your key has access to v3 endpoints.
- PreloadScreen is implemented as a full-screen overlay using conditional rendering.


## Recommended Improvements

- Add pull-to-refresh for Home and Search screens.
- Implement caching for video data to reduce API calls.
- Enhance PreloadScreen with animations.
- Add settings/profile screens.


## 🔗 References
[![expo](https://img.shields.io/badge/expo_docs-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://docs.expo.dev/)
[![navigation](https://img.shields.io/badge/react_navigation-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://reactnavigation.org/)
[![react_native_video](https://img.shields.io/badge/react_native_video-0A23C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://github.com/TheWidlarzGroup/react-native-video)
[![youtube_api](https://img.shields.io/badge/youtube_api-FF0000?style=for-the-badge&logo=linkedin&logoColor=white)](https://developers.google.com/youtube/v3)

