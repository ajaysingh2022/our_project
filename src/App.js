import './App.css';
import Login from './Component/Login/index'
import Url from './Component/url/url'
import FetchApi from './Component/url/FetchApi';
import Async from './Component/url/asynawait';
import State from './Component/Hooks/useState'
import Reducer from './Component/Hooks/useReducer'
import Effect from './Component/Hooks/useEffect'
import Callapi from './Component/url/callapi'
import Postapi from './Component/url/postmethod'
import Deleteapi from './Component/url/deletemethod'
import Practice from './Component/url/practice';

function App() {

  return (
    <div className="App">
      {/* <input type="button"></input>
      <input type="checkbox"></input>
      <input type="color"></input>
      <input type="date"></input>
      <input type="datetime-local"></input>
      <input type="email"></input>
      <input type="file"></input>

      <input type="image"></input>
      <input type="hidden"></input>
      <input type="range"></input>
      <input type="reset"></input>
      <input type="search"></input>
      <input type="submit"></input>
      <input type="tel"></input>
      <input type="text"></input> */}

      <div className='wg-login'>
        <Login />
      </div>
      <div>
        {/* <Url /> */}
      </div>
      {/* <FetchApi /> */}
      <div>
        {/* <Async /> */}
      </div>
      <div>
        {/* <State />
        <Reducer />
        <Effect /> */}
      </div>
      <div>
        {/* <Callapi /> */}
        {/* <Postapi /> */}
        <br />
        <br />

        <Deleteapi />

      </div>
      {/* <Practice /> */}

    </div>
  );
}

export default App;
