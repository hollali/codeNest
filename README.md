# 3D Interactive Portfolio

A modern, interactive portfolio website built with Vue.js, React.js, and Three.js, featuring 3D model animations and avatars.

## 🚀 Features

- Interactive 3D environment powered by [Three.js](https://threejs.org/)
- Seamless integration with [Sketchfab](https://sketchfab.com/) for 3D model hosting
- Custom avatar animations using [ReadyPlayer](https://www.readyplayer.me/)
- Responsive design for all devices
- Dynamic model loading and rendering
- Smooth transitions and animations
- Cross-browser compatibility

## 🔧️ Technologies

- **Frontend Framework**: [Vue.js 3](https://vuejs.org/) with Composition API
- **UI Components**: [React.js 18](https://reactjs.org/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **3D Model Integration**: [Sketchfab API](https://sketchfab.com/developers)
- **Avatar System**: [ReadyPlayer SDK](https://www.readyplayer.me/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [SCSS](https://sass-lang.com/) / [Tailwind CSS](https://tailwindcss.com/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Pinia](https://pinia.vuejs.org/) / [Vuex](https://vuex.vuejs.org/)

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) >= 16.0.0
- [npm](https://www.npmjs.com/) >= 8.0.0
- [Sketchfab](https://sketchfab.com/) API key
- [ReadyPlayer](https://www.readyplayer.me/) account and API credentials

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/hollali/codeNest.git
cd 3d-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🗊 Project Structure

```
3d-portfolio/
├── src/
│   ├── components/
│   │   ├── three/        # Three.js components
│   │   ├── react/        # React components
│   │   └── vue/          # Vue components
│   ├── models/           # 3D model configurations
│   ├── scenes/           # Three.js scenes
│   ├── store/            # State management
│   ├── styles/           # Global styles
│   └── utils/            # Helper functions
├── public/               # Static assets
└── config/               # Configuration files
```

## 🎮 Usage

### Loading 3D Models

```javascript
import { loadSketchfabModel } from '@/utils/sketchfab';

const modelId = 'your_model_id';
await loadSketchfabModel(modelId, sceneRef);
```

### Implementing Avatar Animations

```javascript
import { createAvatar } from '@/utils/readyplayer';

const avatarOptions = {
  modelUrl: 'path_to_avatar',
  animations: ['idle', 'wave', 'walk']
};
const avatar = await createAvatar(avatarOptions);
```

## 🔍 Configuration

### Three.js Scene Settings

```javascript
export default {
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: [0, 5, 10]
  },
  renderer: {
    antialias: true,
    shadowMap: true
  }
};
```

## 📝 Development Guidelines

1. Follow the Vue.js and React.js best practices
2. Use TypeScript for type safety
3. Implement responsive design patterns
4. Optimize 3D models for web performance
5. Write unit tests for critical components

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to your preferred hosting service:
```bash
npm run deploy
```

## 📊 Performance Optimization

- Implement lazy loading for 3D models
- Use compressed textures
- Enable model LOD (Level of Detail)
- Implement proper garbage collection
- Optimize render loops

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 💄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) community
- [Sketchfab](https://sketchfab.com/) for 3D model hosting
- [ReadyPlayer](https://www.readyplayer.me/) for avatar system
- [Vue.js](https://vuejs.org/) and [React.js](https://reactjs.org/) teams
- And special thanks to [@adrianhajdin](https://github.com/adrianhajdin) for the awesome tutorial

## 📲 Support

For support, email dheztinykartel@gmail.com or create an issue in the repository.

