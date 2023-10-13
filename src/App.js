import './App.css';
import Header from './Header';
import NotificattionPage from './NotificattionPage';
import Names from './Names';
function App() {
 
  // let reacted = (
  //   <span>
  //     <strong>{modifiedNames}</strong>
  //   </span>
  // );
  return (
    <div className="App">
      <header>
     <Header />
     <names />
     {/* <ul>{modifiedNames[0]}</ul> */}
     </header>
     <NotificattionPage />
      </div>
      
      
    
  );
}

export default App;
