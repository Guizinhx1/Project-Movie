import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Layout } from './components/Layout/Layout';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
        
        <Routes>
            <Route path ='/' element = {<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '*' element = {<h1>404 not found</h1>}/>
            
            {/* </Route>

            <Route path = '/admin' element = {<AdminLayout/>}>
            <Route index element = {<DashBoard/>}></Route>
            <Route path = '/admin/users' element = {<Users/>}></Route>
            <Route path = '*' element = {<h1>404 Not Found</h1>}></Route> */}


            </Route>

        </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
