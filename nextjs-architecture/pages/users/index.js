import USersList from "../../components/users/users.js"

 
function UserList({users}){
    return (<>
    <h1>Users List</h1>
    {users ?users.map((user)=>(<div key={user.id}><USersList user={user}/></div>)):<h3>No users</h3>

    }
    </>)
}


export default UserList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()

    return {
        props:{
            users:data
        }
    }

}