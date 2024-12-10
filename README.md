# Farm Management Mobile App

A comprehensive mobile application for managing farm operations, built with React Native and Expo.

## Features

- Animal Management
- Health Records
- Production Tracking
- Inventory Management
- Financial Management
- Weather Monitoring
- Task Management

## Tech Stack

- React Native / Expo
- TypeScript
- Redux Toolkit for state management
- React Navigation for routing
- React Native Paper for UI components
- AsyncStorage for local storage
- Axios for API requests

## Project Structure

```
src/
├── api/          # API services and configurations
├── components/   # Reusable UI components
├── hooks/        # Custom hooks
├── navigation/   # Navigation configuration
├── screens/      # Screen components
├── store/        # Redux store configuration and slices
├── theme/        # Theme configuration
├── types/        # TypeScript type definitions
└── utils/        # Utility functions
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Run on Android:
   ```bash
   npm run android
   ```

4. Run on iOS:
   ```bash
   npm run ios
   ```

## Development Guidelines

- Follow the TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write unit tests for critical functionality
- Follow the established folder structure
- Use proper naming conventions

## Testing

```bash
npm test
```

## Building for Production

```bash
expo build:android  # For Android
expo build:ios      # For iOS
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT License
