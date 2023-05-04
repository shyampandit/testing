import { Fragment } from "react";
import Link from "next/link";

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
function NewsPage(){
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  console.log(data);
  if(error) return <div>Failed to load</div>
  if(!data) return <div>Loading...</div>
    return (
          <div>
           {
            data.map((item,index) =>{
              return (<><div key={index}><h1 key={index}>{item.title}</h1>
                <p key={index}>{item.body}</p></div>
                </>)
            })
            }
          </div>
      
    )
   }
   export default NewsPage;