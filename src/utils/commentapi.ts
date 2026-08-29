

import axios from 'axios'


const commentapi =  axios.create(
    {
        baseURL:   "http://localhost:5000/comments",
        withCredentials:true
    }
    
)






const commentAi =  axios.create(
    {
        baseURL:   "http://localhost:5000/comment-ai",
        withCredentials:true
    }
    
)



export const getBlogsComment = async(blogId:string):Promise<any> => {
  try {
    const res = await commentapi.get(`/blog-comment/${blogId}`)
    return res.data.comments;
  } catch (error:any) {
    const message = error?.response?.data?.message || error?.message || "Failed to fetch comments";
    console.log("Error fetching blogs comment", message);
    throw new Error(message)
  }
}





export const getAddComment = async(
    blogId:string , name:string , comment:string
):Promise<any> =>{

try {
   
    const res = await commentapi.post(`/add-comment` ,  {
        blogId  , name  ,  comment
    })
console.log("BLOGS COUNT RESPONSE:", res.data);
    console.log("BLOGS COUNT VALUE:", res.data.comment);

return res.data.comment ;
} catch (error:any) {
    
    console.log(
      "ADD COMMENT ERROR:",
      error.response?.data || error.message
    );

    throw new Error(
      error.response?.data?.message || "Failed to add comment"
    );
}





}








export const getaisuggessionsAi = async(
  topic:string
):Promise<string[]> =>{

try {
   
    const res = await commentAi.post(`/generate-comment` , {topic})
console.log("BLOGS COUNT RESPONSE:", res.data);
    console.log("BLOGS COUNT VALUE:", res.data.comment);

return res.data.suggestions ;
} catch (error:any) {
    
    console.log("Error AI generation comment" , error.response.data || error.message);
    throw new Error(error.response.data.message)
}





}







const commentDashboard =  axios.create(
    {
        baseURL:   "http://localhost:5000/dashboard/comments",
        withCredentials:true
    }
    
)




export const getUserComments = async():Promise<any[]>=>{


try {
   
    const res = await commentDashboard.get(`/user-comments`)
console.log("Comments COUNT RESPONSE:", res.data);
    console.log("Comment COUNT VALUE:", res.data.comment);

return res.data.comments ;
} catch (error:any) {
    
    console.log("Error AI generation comment" , error.response.data || error.message);
    throw new Error(error.response.data.message)
}





}




export const getUserCommentsCount = async():Promise<number>=>{


try {
   
    const res = await commentDashboard.get(`/user-comments`)

return res.data.count ;
} catch (error:any) {
    
    console.log("Error AI generation comment" , error.response.data || error.message);
    throw new Error(error.response.data.message)
}


}






