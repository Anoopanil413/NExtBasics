import { useState } from "react"



export default function CommentsDisplayfun(){
    const [comments,setComments] = useState()
    const [comment,setCommnet] = useState()
    const fetchComments = async()=>{
        const response = await fetch('/api/comments')
        const data = await response.json()
       setComments(data?.comments)
    }
    const handlecommentSubmit= async()=>{
        const response = await fetch('/api/comments',{
            method:"POST",
            body:JSON.stringify({comment}),
            headers:{
                'Content-Type':'application/json',
            }
        })

        const data = await response.json()
        setComments(data?.comments)

    }

    return (
        <>
        <div>
            <input type="text" placeholder="type your text" value={comment} onChange={(e)=>setCommnet(e.target.value)}/>
            <button onClick={handlecommentSubmit}>Submit comment</button>
            <button onClick={fetchComments}>Click</button>
            {comments && comments.map((comment)=>{
                return (<div key={comment.id}>{comment.text} </div>)
            })}
        </div>
        </>
    )
}