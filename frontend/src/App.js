import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './config/Context';
import HomePage from './pages/HomePage';
import Connection from './pages/Connection';
import Error from './pages/Error';

function App() {
  
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/connection" element={<Connection/>} />
            {/* <Route path="/user" element={<DashBoard/>} />
            <Route path="/messagesPriver" element={<MessagesPriver/>} /> */}
            <Route path="*" element={<Error/>} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
