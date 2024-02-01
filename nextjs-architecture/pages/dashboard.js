import { useEffect, useState } from "react";


export default function DashboardProf(){
    const [isLoading,setLoading] = useState(true)
    const [dbData,setDbData] = useState([])

    useEffect(()=>{
        setLoading(true)
        const fetchFun = async()=>{
            const response = await fetch('http://localhost:5000/dashboard')
            const data =  await response.json()
            setDbData(data)
            setLoading(false)
        }
        fetchFun()
    },[])

    if(isLoading)return <div>LOading .....</div>

    return (
        <>
        {dbData ? (dbData.map((data)=>{
            return (<div>{data.posts}</div>)
        })
        ):(<div>no data</div>)
        }
        </>
    )
    
}


