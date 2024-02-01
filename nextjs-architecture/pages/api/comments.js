import { comments } from "@/data"

export default function handler(req,res){
    if(req.method==='GET') return res.status(200).json({comments})
    if(req.method === "POST"){
        const {comment} = req.body
        console.log(req.body)
        const commentDAta = {
            id:Date.now(),
            text:comment
        }
       const data =  comments.push(commentDAta)
       res.status(201).json({data})
    }
    

}