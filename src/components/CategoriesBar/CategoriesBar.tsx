
import React from 'react'

export default function CategoriesBar(
    {selectedCategory    ,  onSelected}:
    {selectedCategory:string , onSelected:(c:string)=>void}

) 

{


    const categories = ["all", "Technology", "Startup", "Lifestyle", "Finance"]; 


    return (

    <div className='w-full flex flex-wrap gap-3 justify-center    mb-8 '>
        {categories?.map((cat)=> (
            <button key={cat}
            className={`px-4 py-2 rounded-full font-medium transition-all
                ${selectedCategory === cat ?
                     "bg-linear-to-r border-amber-50  text-white from-sky-400 to-cyan-400  shadow-md " : 
                     " bg-sky-50 text-sky-700 hover:bg-sky-100"}`}
            onClick={()=> onSelected(cat)}>{cat}</button>
        ))}
    </div>
  )
}
