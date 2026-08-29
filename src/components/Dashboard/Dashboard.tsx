

import React, { useEffect, useState } from 'react'
import { getallBlogs, getBlogsCount } from '../../utils/Blogsapi';
import { FileText, MessageSquare } from 'lucide-react';
import BlogTable from '../BlogTable/BlogTable';
import { getUserCommentsCount } from '../../utils/commentapi';




export default function Dashboard() {
  
  
const[blogscount , setBlogscount] = useState<number>(0);
const [loading , setloading] =  useState(true)
const [blogs , setBlogs] = useState<any[]>([]);
const [commentsCount , setCommentsCount] = useState<number>(0);
  



const handleBlogDeleted = (deletedId: string) => {
  setBlogs(prev => prev.filter(blog => blog._id !== deletedId));
};








useEffect(() => {
  const fetchDashboardData = async () => {
    setloading(true);

    try {
      const count = await getBlogsCount();
      setBlogscount(count);
    } catch (error) {
      console.log("Error fetching count:", error);
    }

  const comments = await getUserCommentsCount();
  setCommentsCount(comments)


    try {
      const allBlogs = await getallBlogs();
      setBlogs(allBlogs);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }

    setloading(false);
  };

  fetchDashboardData();
}, []);
  
 


 return (
    <div className='w-full mx-16 max-w-full p-6 min-h-screen overflow-x-hidden'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-5'>
            <div className='flex items-center gap-3 rounded-xl shadow-sm border border-emerald-100 p-6 hover:shadow-md transition bg-white'>

                <div className='p-3 bg-emerald-100 rounded-lg'>
                <FileText className='text-emerald-600 w-6 h-6'/>

                </div>

        <div>

       
        <h2 className='text-3xl font-bold text-emerald-700'>

            {loading ? "...."  : blogscount}


        </h2>

        <p className="text-gray-500 font-medium">Blogs</p> 
         </div>

            </div>


   <div className='flex items-center gap-3 rounded-xl shadow-sm border border-emerald-100 p-6 hover:shadow-md transition bg-white'>

                <div className='p-3 bg-emerald-100 rounded-lg'>
                <MessageSquare  className='text-emerald-600 w-6 h-6'/>

                </div>

        <div>

       
        <h2 className='text-3xl font-bold text-emerald-700'>

               {loading ? "...." : commentsCount}


        </h2>

        <p className="text-gray-500 font-medium">Comments</p> 
         </div>

            </div>
            
        </div>




<div className="grid grid-cols-1  gap-6">
  <BlogTable
    onDelete={handleBlogDeleted}
    blogs={blogs}
  />
</div>



    </div>
  )
}




