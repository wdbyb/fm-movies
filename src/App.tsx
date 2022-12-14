import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import Card from './components/Card';

const App = () => {
  return (
    <div className="App bg-darkBlue md:p-6 lg:flex">
      <Nav />
      <div className="w-full">
        <Search />
        <div className="px-4 py-12 grid grid-cols-2 gap-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
