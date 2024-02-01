import { useRouter } from "next/router"


export default function PostData({post}){

    //if fallback set to true , initialy loading page will be renderes and then the actual page if available is rendered.
    // const router = useRouter()
    // if(router.isFallback){
    //     return <h1>Loading....</h1>
    // }
 
    return (<>
    {post && (<><h1>Id:{post.id}</h1>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    </>)}
    </>)
}

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map((post)=>{
        return {
            params:{postId:`${post.id}`}
        }
    })
    return {
        // paths:[
        //     {
        //         params:{postId:"1"}
        //     },
        //     {
        //         params:{postId:"2"}
        //     },
        //     {
        //         params:{postId:"3"}
        //     }
        // ],
        paths,
        //if fallback set to false paths other than the from get static paths will throw erro and lead us to 404 page
        fallback: false,
    }
}

export async function getStaticProps(context){
    
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    return {
        props:{
            post:data
        }
    }

}