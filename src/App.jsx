import './App.css';
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="app">
      <div className="container pt-2 text-primary text-center">
        <h1>React Price Tag</h1>
      </div>
      <div className="container p-4 box">
        <div className="row mt-0">
          <div className="col-md-4">
            <Card tier="FREE" cost='0' users='Single User'/>
          </div>
          <div className="col-md-4">
            <Card tier="PLUS" cost='9' users='5 Users'/>
          </div>
          <div className="col-md-4">
            <Card tier="PRO" cost='49' users='Unlimited Users'/>
          </div>
        </div>
      </div>  
    </div>  
  );
}

export default App;
