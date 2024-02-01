const { useRouter } = require("next/router");
// catching all the routes, soupose we have routes which have same patern and multiple routes can be handles under single file as below.


export default function Doc(){
    const router = useRouter()
    const {params = [] } = router.query
    console.log(params)
    if(params.length === 2){
        return <h1>viewing {params[0]} for {params[1]}</h1>
    }
    if(params.length === 1){
        return <h1>viewing {params[0]}</h1>
    }

    return <h1>Docs home page</h1>

}