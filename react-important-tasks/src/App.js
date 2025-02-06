import './App.css';
import Timer from './components/Timer';
import UseCallBack from './Hooks/UseCallBack';
import UseContext from './Hooks/UseContext';
import UseEffect from './Hooks/UseEffect';
import UseMemo from './Hooks/UseMemo';
import UseReducer from './Hooks/UseReducer';
import UseRef from './Hooks/UseRef';
import UseState from './Hooks/UseState';
function App() {
  return (
    <div className="App">
      <h1>**Just do the things what you want**</h1>
     <Timer />
     <UseState />
     <UseEffect />
     <UseRef />
     <UseContext />
     <UseMemo />
     <UseCallBack />
     <UseReducer />
    </div>
  );
}

export default App;
