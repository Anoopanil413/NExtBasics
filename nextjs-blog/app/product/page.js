import Link from "next/link";

export default function Product({prodId=400}){
   
     
    return (<div>
        <h1>product 1</h1>
        <Link href={'/product/1'}>

            1
  
        </Link>
        <h1>product 2</h1>
        <Link href={'/product/2'}>
        
            2
        
        </Link>
        <h1>product 3</h1>
        <Link href={'/product/3'}>
        
            3
        
        </Link>
        <Link href={`/product/${prodId}`}>
        
            final
        
        </Link>
    </div>)
}