# Feed

A simplified Instagram-like feed built with React Native and Expo. This mobile application displays a social media feed with posts including user profiles, images, interactions (like, comment, save), and timestamps.

## Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **Axios** - HTTP client for API requests
- **Moment.js** - Date formatting
- **NativeWind** - Tailwind CSS for React Native
- **Expo Vector Icons** - Icon library

## Project Structure

```
Feed/
├── app/                    # Expo Router navigation
├── components/
│   ├── Feed/              # Main feed component
│   ├── Post/              # Post-related components
│   │   ├── Header.jsx     # Post header with user info
│   │   ├── Content.jsx    # Post image content
│   │   ├── Interaction.jsx # Like, comment, save buttons
│   │   ├── Footer.jsx     # Post description and timestamp
│   │   └── Profile.jsx    # User profile picture
│   ├── Icons/             # Reusable icon components
│   └── Layout/            # Layout components
├── hooks/
│   └── usePosts.js        # Custom hook for posts data
├── services/
│   └── posts.js           # API service functions
└── utils/
    └── formatter.js       # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android) or Xcode (for iOS)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Nightingale04/Feed.git
cd Feed
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## Key Components

### usePosts Hook
Custom React hook that manages posts state, loading, and error handling.

### Post Component
Modular post component broken down into:
- **Header**: User avatar, name, and location
- **Content**: Post image
- **Interaction**: Like, comment, and save buttons with counts
- **Footer**: Post description and relative timestamp

### Feed Component
Main component that renders the list of posts with loading states and error handling.

## Development Notes

- Uses FlatList for optimal performance with large lists
- Implements proper error boundaries and loading states
- Uses NativeWind for consistent styling across platforms

## Platform Compatibility

✅ **Tested Platforms:**
- Android - Fully tested and working
- Web - Fully tested and working

⚠️ **Not Tested:**
- iOS - Not tested

## Built For

This project was created as a technical assessment for a Mobile Engineer position, demonstrating:
- React Native proficiency
- Component architecture
- API integration
- UI/UX implementation
- Code organization and best practices

---
