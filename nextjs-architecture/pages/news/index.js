

export default function newList({articles}){
    return (<>
    <div>
        News list
    </div>
    {
        articles ? articles.map((art)=>{
            return (<div key={art.id}>{art.id} | {art.category} on {art.date}</div>)
        }):<h1>Empty</h1>
    }
    </>)
}


export async function getServerSideProps(){
    const response = await fetch('http://localhost:5000/news')
    const data = await response.json()
    return {
        props:{
            articles:data,
        }
    }
}