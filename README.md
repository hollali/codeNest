# 3D Interactive Portfolio

A modern, interactive portfolio website built with Vue.js, React.js, and Three.js, featuring 3D model animations and avatars.

## 🚀 Features

- Interactive 3D environment powered by Three.js
- Seamless integration with Sketchfab for 3D model hosting
- Custom avatar animations using ReadyPlayer
- Responsive design for all devices
- Dynamic model loading and rendering
- Smooth transitions and animations
- Cross-browser compatibility

## 🛠️ Technologies

- **Frontend Framework**: Vue.js 3 with Composition API
- **UI Components**: React.js 18
- **3D Graphics**: Three.js
- **3D Model Integration**: Sketchfab API
- **Avatar System**: ReadyPlayer SDK
- **Build Tool**: Vite
- **Styling**: SCSS/Tailwind CSS
- **Type Checking**: TypeScript
- **State Management**: Pinia/Vuex

## 📋 Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0
- Sketchfab API key
- ReadyPlayer account and API credentials

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

## 📁 Project Structure

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

## 📈 Performance Optimization

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Three.js community
- Sketchfab for 3D model hosting
- ReadyPlayer for avatar system
- Vue.js and React.js teams

## 📞 Support

For support, email portfolio@example.com or create an issue in the repository.