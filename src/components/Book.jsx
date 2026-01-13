import React, { useEffect, useState } from 'react'
import main_logo from "../assets/cook_logo.png"
import { SlNotebook } from "react-icons/sl";
import { CgSearch } from "react-icons/cg";
import RecipeCards from './RecipeCards';
import Contact from './Contact';


export default function Book() {

  const [input , setinput] = useState("")
  const [loading , setLoading] = useState(true)
  const [recipe , setRecipe] = useState([])

  function handelChange(e){
    setinput(e.target.value)
  }

  async function fetchData() {
      const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input ? input : "ch"}`)
      const res = await data.json()
      setLoading(false)
      setRecipe(res.meals ? res.meals.slice(0,8) : [])
  }

  useEffect(()=>{
    fetchData()
  },[input])

  console.log(recipe)

  return (
    <main className='flex flex-col'>
        <section className='flex  flex-col items-center bg-[#FFA542]'>
        <p className='mr-auto pl-8 pt-4 flex items-center gap-2 font-serif font-bold text-2xl' > <SlNotebook/>Cook<span className='text-green-800'>Book</span></p>
        <div className='text-5xl font-bold flex items-center pt-16'>
                    <img src={main_logo} alt="" />
                    <div>
                     <h1>Your Recipe <span className='text-6xl text-green-800 font-light font-sans'>Guide </span></h1>
                     <h1 className='pl-14'>For Culinery</h1>
                     <h1>Inspiration</h1>
                    </div>
        </div>
        <p className='text-xl font-serif p-3'>A recipe is a story that ends with a delicious chapter</p>
        <div className='flex pb-16 pt-5 relative'>
         <button className='absolute p-4 w-12 h-12 rounded-full'> <CgSearch className='text-3xl text-[#FFA542] font-bold'/> </button>
            <input onChange={handelChange} value={input} name='input' className='p-3 focus:ring-1 pl-14 border-2 border-gray-300 text-2xl w-[500px] focus:outline-none  rounded-l-full rounded-r-full' type="text"/>
        </div> 
        </section>
        
        {
          recipe &&  <RecipeCards loading={loading} recipe={recipe}/>
        }
       <Contact/>
    </main>
  )
} 
