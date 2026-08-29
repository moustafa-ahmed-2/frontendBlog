
// import React from 'react'


// import { Outlet } from 'react-router-dom'
// import Dashboardsidebar from '../Dashboardsidebar/Dashboardsidebar'
// import DashboardHeader from '../DashboardHeader/DashboardHeader'



// export default function DashboardLayout() {
//   return (
//     <div>


//    <div className='min-h-screen flex bg-linear-to-br from-sky-50 via-cyan-50 to-emerald-50 '>
        
//    <Dashboardsidebar/>  

//          <div className='flex-1 flex flex-col'>
           
//   <DashboardHeader/>   
     
 
//            <main className='flex-1 p-8 bg-white/70 backdrop-blur-md m-4 rounded-2xl shadow-lg'>
           
//            <Outlet/>
//            </main>


//          </div>
//     </div>






//     </div>
//   )
// }



import React from "react";
import { Outlet } from "react-router-dom";
import Dashboardsidebar from "../Dashboardsidebar/Dashboardsidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

export default function DashboardLayout() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">

      <div className="flex min-h-screen w-full">

       
        <Dashboardsidebar />

      
        <div className="flex-1 min-w-0 w-full">

          <DashboardHeader />

          <main className="w-full min-w-0 p-4">
            <div className="w-full min-w-0">
              <Outlet />
            </div>
          </main>

        </div>

      </div>

    </div>
  );
}



