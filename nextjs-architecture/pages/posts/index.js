import Link from "next/link"


export default function PostList({posts}){
    return (
        <>
        <h1>Listing</h1>
        {posts?(posts.map((post)=>{
            return (<>
            <Link  href={`/posts/${post.id}`}>
            <h1 key={post.id}>{post.id}:{post.title}</h1>
            </Link>
            </>)
        })):<h1>No list</h1>

    }
        </>
    )
}

export async function getStaticProps(){

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    // if(!data.id){
    //     return {
    //         notFound:true,
    //     }
    // }
    return {
        props:{
            posts:data
        },
        revalidate:10
    }

}