import { comments } from "../../data.js"



export default function CommentIdFEtching({comment}){

    return(
        <>
        <div>
            Comment id :{comment.id}
        </div>
        <div>
            {comment.text}
        </div>
        </>
    )


}


export async function getStaticPaths(){
    return {
        paths:[
            {params:{commentId:"1"}},
            {params:{commentId:"2"}},
            {params:{commentId:"3"}},
        ],
        fallback:false
    }
} 

export async function getStaticProps(context){
    const {params} = context
    const {commentId} = params


    const comnt = comments.find(comment=>{
        return comment.id === parseInt(commentId)} )
    console.log(comnt)

    return {
        props:{
            comment:comnt
        }
    }
}