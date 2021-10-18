import logo from './logo.svg';
import './App.css';
import Header from './component/Demo/Header'
import HeaderRFC from './component/Demo/HeaderRFC';
import BaiTapChiaLayout from './component/BaiTapChiaLayout/BaiTapChiaLayout';
import Home from './component/BaiTapChiaLayout/Home';
import BaiTapThucHanhLayout from './component/BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import DataBinding from './DataBinding/DataBinding';
import DataBindingFRC from './DataBinding/DataBindingFRC';
import HandleEvent from './HandleEvent/HandleEvent';
import RenderingCondition from './RenderingConditions/RenderingCondition';
import StateDemo from './State/StateDemo';
import Styling from './Styling/Styling';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import RenderWithLoop from './RenderWithLoop/RenderWithLoop';

function App() {
  return (
    <div className="App">
      {/* <BaiTapThucHanhLayout/> */}
      {/* <DataBinding/> */}
      {/* <DataBindingFRC/> */}
      {/* <HandleEvent/> */}
      {/* <RenderingCondition/> */}
      {/* <StateDemo/> */}
      {/* <Styling /> */}
      <BaiTapChonXe />
      {/* <RenderWithLoop /> */}
    </div>
  );
}

export default App;
