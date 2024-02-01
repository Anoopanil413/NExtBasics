


import useSWR from "swr"

const fetcher =  async()=>{
    const response = await fetch('http://localhost:5000/dashboard')
    const data =  await response.json()
    return data

}

export default function DashboardProf(){
    const {data, error} = useSWR('dashboard',fetcher)
    if(error) return "An error occures"
    if(!data)return "Loading ..."
    return (
        <>
        {data ? (data.map((datas)=>{
            return (<div>{datas.posts} | {datas.followers}</div>)
        })
        ):(<div>no data</div>)
        }
        </>
    )
    
}


