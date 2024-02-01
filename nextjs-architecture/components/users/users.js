

export default function USersList({user}){
    return(<>
    <ul key={user.id}>
      <h1>User Name: {user.name}</h1>
        <li>Email: {user.email}</li>
        <li> Phone :{user.phone}</li>
    </ul>
    </>)
}