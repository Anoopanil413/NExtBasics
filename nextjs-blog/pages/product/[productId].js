
import Link from "next/link";
import { useRouter } from "next/router";

export default function productDetails(){
    const router = useRouter()
    const productId = router.query.productId
     const handleSubmit =()=>{
        console.log("submiting order")
        router.push('/product')
      }
    return (<><h1>Details about the product  {productId}</h1>
    <Link href={'/'}>
        Home
    </Link>
    <button onClick={handleSubmit}>Submit</button>

    </>)

}