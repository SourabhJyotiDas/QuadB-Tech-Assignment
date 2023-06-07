import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards({ data }) {

   return (
      <section className="text-gray-400 bg-gray-900 ">
         <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap ">

               {
                  data?.map((ele, index) => (
                     <div key={ele.show.id} className="lg:w-1/4 md:w-1/2 w-full border border-gray-500 p-5 cursor-pointer">
                        <img alt="ecommerce" className="object-cover object-center w-full" src={ele.show.image.medium} />
                        <div className="mt-4">
                           <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{ele.show.language}</h3>
                           <h2 className="text-white title-font text-lg font-medium">{ele.show.name}</h2>
                           <p className="mt-1">{ele.show.premiered}</p>
                           <Link to={`/movies/${ele.show.id}`}>
                              <button className="my-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">See Details</button>
                           </Link>
                        </div>
                     </div>
                  ))
               }

            </div>
         </div>
      </section>
   )
}
