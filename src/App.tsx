
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

import Register from './components/Register/Register'
import Login from './components/Login/Login'
import { Toaster } from 'react-hot-toast'
import DashboardLayout from './components/DashboardLayout/DashboardLayout'
import Dashboard from './components/Dashboard/Dashboard'
import Add_Blog from './components/Add_Blog/Add_Blog'
import Home from './components/Home/Home'
import BlogDetails from './components/BlogDetails/BlogDetails'
import DashboardComments from './components/DashboardComments/DashboardComments'


function AppContent(){

const location = useLocation();
const isDashboardpage=    location.pathname.startsWith("/dashboard")
return(

<>

{!isDashboardpage && <Navbar/>}

      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />



   <Route path='/dashboard'   element={<DashboardLayout/>}   > 
   
   <Route index element={<Dashboard/>} />
   <Route  path='/dashboard/blog/add-blog'   element={<Add_Blog/>} />
  
   <Route  path='/dashboard/comments'   element={<DashboardComments/>} />
  

   </Route>




      </Routes>







</>



  
)




}





function App() {
 






  return (
    <>








<BrowserRouter>
    




 <Toaster  position="top-center"
          toastOptions={{
            style: {
              background: "white",
              color: "#0c4a6e",
              border: "1px solid #bae6fd",
              fontWeight: 500,
            },
            success: {
              iconTheme: {
                primary: "#0ea5e9",
                secondary: "#fff",
              },
            },
            error: {
              style: {
                background: "#fee2e2",
                color: "#991b1b",
                border: "1px solid #fca5a5",
              },
            },
          }}
      
      
      />





  <AppContent />






  
    </BrowserRouter>












    </>
  )
}

export default App
