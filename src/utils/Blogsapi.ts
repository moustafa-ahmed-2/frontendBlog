


import axios from 'axios'


const blogsapi =  axios.create(
    {
        baseURL:   "http://localhost:5000/dashboard/blog",
        withCredentials:true
    }
    
)


const publicAi =  axios.create(
    {
        baseURL:   "http://localhost:5000/blogs",
        withCredentials:true
    }
    
)


export const getBlogsCount = async():Promise<number> =>{

try {

    const res = await blogsapi.get("/blogs-count")
console.log("BLOGS COUNT RESPONSE:", res.data);
    console.log("BLOGS COUNT VALUE:", res.data.count);

return res.data.count || 0;
} catch (error:any) {
    
    console.log("Error fetching blogs count" , error.response.data || error.message);
    throw new Error(error.response.data.message)
}





}




export const getallBlogs = async():Promise<any[]> =>{

try {

    const res = await blogsapi.get("/all-Blogs")
 console.log("BLOGS API RESPONSE:", res.data);
return res.data.blogs ;
} catch (error:any) {
    
    console.log("Error fetching blogs count" , error.response.data || error.message);
    throw new Error(error.response.data.message)
}





}





export const getallPublicBlogs = async():Promise<any> =>{

try {

    const res = await publicAi.get("/all-Blogs")
 console.log("BLOGS API RESPONSE:", res.data);
return res.data.blogs ;
} catch (error:any) {
    
    console.log("Error fetching blogs count" , error.response.data || error.message);
    throw new Error(error.response.data.message)
}





}




export const getallPublicBlogDetails = async(id:string):Promise<any> =>{

try {

    const res = await publicAi.get(`${id}`)
 console.log("BLOGS API RESPONSE:", res.data);
return res.data.blog ;
} catch (error:any) {
    
    console.log("Error fetching blogs count" , error.response.data || error.message);
    throw new Error(error.response.data.message)
}


}






export const deleteBlog = async(id:string)=>{

    try {
        
        await blogsapi.delete(`/delete-blog/${id}`)
    } catch (error) {
        console.log(error , "Failed to delete this Blog");
        
    }

}