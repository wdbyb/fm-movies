import 'swiper/css';
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import Trending from './components/Trending';
import Content from './components/Content';

const App = () => {
  return (
    <div className="App font-light bg-darkBlue md:p-6 lg:flex">
      <Nav />
      <div className="w-full lg:pl-20 overflow-hidden">
        <Search />
        <Trending />
        <Content />
      </div>
    </div>
  );
};

export default App;
