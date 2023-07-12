import ScrollSpyHeader from './layout/Hd';
import './App.css';

function App() {
  return (
    <div>
      <ScrollSpyHeader />
      <div className="section">
        Section 1
      </div>
      <div name="section2" className="section">
        Section 2
      </div>
      <div name="section3" className="section">
        Section 3
      </div>
    </div>
  );
}

export default App;
