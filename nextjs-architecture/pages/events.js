import { useRouter } from "next/router"
import { useState } from "react"



export default function EventDetails({events}){
    const [myEvents,setEvents]  =  useState(events)
    const router = useRouter()
    const handleFun =  async()=>{
        const response = await fetch(`http://localhost:5000/events?category=sports`)
        const data =  await response.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, {shallow:true})
    
    }
    

    return (
        <>
        <div>
            Events
        </div>
        <div>
            <button onClick={handleFun}>Sports</button>
        </div>
        <div>
           {myEvents.map((event)=>{
            return (
                <div>
                <h1>{event.category}</h1>
                <h2>{event.title}</h2>

                <h3>{event.description}</h3>
                </div>
            )
           }) }
        </div>
        </>
    )
}




export async function getServerSideProps(content){
    const {query} = content
    const {category} = query
    const queryString = category ? 'category=sports' :''
    const response = await fetch(`http://localhost:5000/events?${queryString}`)
    const data = await response.json()
    return {
        props:{
            events:data,
        }
    }
}