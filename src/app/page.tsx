type Product= {
  id:number,
  title:string,
  author_name:string,
  created_at:string,
  featured_image:string,
  short_description:string
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import moment from "moment";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import wait from "wait";

async function getData(){
  const res = await fetch('http://45.117.153.85:8002/api/v1/frontend/post');
  await wait(5000);
  return res.json();
}

export default async function Home(){
  const data = await getData();
  const products= data.data;
  console.log(products)
  
  return(
    <main className="p-5 sm:p-5 md:p-10 lg:p-20">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product:Product)=>(
          <Card key={product.id} className="flex flex-col justify-between">
             <CardHeader>
             <img 
                src={product.featured_image} 
                alt={product.title} 
                className="w-full h-[400px] object-cover rounded-md mb-4"
              />
              <div className="flex justify-between items-center">
                <CardTitle>{product.title.slice(0,30)}...</CardTitle>
                <CardDescription>Created: {moment(product.created_at).fromNow()}</CardDescription>
              </div>
             </CardHeader>
             <CardContent>
              {product.short_description.length>10? <p>{product.short_description.slice(0,30)}</p>: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nam dolorum maiores? Nesciunt, sapiente! Est, molestiae. Ullam, hic commodi natus deleniti ratione nulla necessitatibus nam sed numquam tempora. Aliquid, laudantium!</p>}
              </CardContent>
             <CardFooter className="flex justify-between">
                <Button>Read More</Button>
                <Badge variant="secondary">By: {product.author_name}</Badge>
             </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}