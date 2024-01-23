import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImgHOC from './components/HOCs/LikeImgHOC';
import LikePostHOC from './components/HOCs/LikePostHOC';
import LikeImageProps from './components/RenderProps/LikeImageProps';
import LikePostProps from './components/RenderProps/LikePostProps';

function App() {
  return (
    <div>
      <h3>Blog Posts using HOC</h3>
        <LikeImgHOC/>
        <LikePostHOC/>

      <h3>Blog Posts Original</h3>
        <LikeImage/>
        <LikePost/>

      <h3>Blog Posts using Render Props</h3>
        <LikeImageProps/>
        <LikePostProps/>
    </div>
  );
}

export default App;
