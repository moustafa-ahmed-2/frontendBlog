
import React, { useEffect, useState } from 'react'
import { getallPublicBlogs } from '../../utils/Blogsapi';
import Blogcard from '../Blogcard/Blogcard';
import CategoriesBar from '../CategoriesBar/CategoriesBar';

export default function Home() {


const[categories , setCategories] = useState("all");
const [loading , setloading] = useState(true);
const[blogs , setBlogs] = useState<any[]>([]);



useEffect(() => {
  const fetchallPublicBlogs = async () => {
    setloading(true);

  

    try {
      const allPublicBlogs = await getallPublicBlogs();
      setBlogs(allPublicBlogs);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }

    setloading(false);
  };

  fetchallPublicBlogs();
}, []);
  
 
const filterCtegories = categories == "all" ? blogs :  

blogs.filter(b=>b.category == categories)




 return (

    <div className='min-h-screen p-10 mt-14  overflow-hidden '>

    
    <div className='text-center mb-10'>
  <h1 className='text-4xl font-bold bg-linear-to-r from-green-100 via-cyan-500 to-blue-500 bg-clip-text text-transparent mb-4'>Your space to write <br/> express, and inspire</h1>
      <p className='text-gray-500'> Share your thoughts, experiences and ideas with the world. Your
          story starts here 🌍</p>

    </div>

<div className='flex justify-center mb-10'>

<CategoriesBar  
selectedCategory = {categories}
onSelected = {setCategories}



/>
</div>



      {loading ? (
         <p className="text-center text-gray-500">Loading blogs...</p>
      ): blogs.length === 0 ? (
       <p className="text-center text-gray-500">No blogs yet.</p>
      ):(
        <div className='grid gap-6
        container mx-auto
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            {filterCtegories.map((blog)=> (
              <Blogcard 
               id={blog._id}
              key={blog._id}
              title={blog.title}
              subtitle={blog.subtitle}
              category={blog.category}
              thumbnail={blog.thumbnail}
              author={blog.author?.name}
              date={blog.createdAt}
              />

  

            ))}
        </div>
      )}
    </div>
  )
}

