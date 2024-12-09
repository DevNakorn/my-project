import Link from "next/link"

const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchTodos = async() => {
  const res = await fetch(url)
  const data = await res.json()
  // console.log(res)
  return data
 }

const Aboutpage = async() => {

 const data = await fetchTodos()
 console.log(data)
  
  return (
    <div>About Page
      {
      data.map((item,index)=>{
        return <div>
                   <li key={index}>{item.id}. {item.title}</li>
              </div> 
      })
      }
    </div>
  )
}

export default Aboutpage