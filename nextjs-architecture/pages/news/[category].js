


export default function CategoryBasedNews({catData,category}){
    return (
        <>
        <div>
            newsws for {category}
        </div>
        <div>
            {catData && (<div>{catData[0].id} | {catData[0].title} | {catData[0].content}</div>)}
        </div>
        </>
    )
}

export async function getServerSideProps(context){
    const {params,req,res,query} = context // has access to req res and query
    const category = params.category
    const response =  await fetch(`http://localhost:5000/news?category=${category}`)
    const data  = await response.json()
    
    return {
        props:{
            catData:data,
            category
        }
    }

}