import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Dialog } from "@mui/material";

export default function DetailsPage() {

  const params = useParams()

  const [data, setData] = useState({})
  const [handletoggle, sethandletoggle] = useState(false);
  const [name, setName] = useState(localStorage.getItem("TicketDetails") ? JSON.parse(localStorage.getItem("TicketDetails")).name : "");
  const [theater, setTheater] = useState(localStorage.getItem("TicketDetails") ? JSON.parse(localStorage.getItem("TicketDetails")).theater : "");
  const [ticketType, setticketType] = useState(localStorage.getItem("TicketDetails") ? JSON.parse(localStorage.getItem("TicketDetails")).ticketType : "");
  const [date, setDate] = useState(Date.now());
  const [price, setPrice] = useState(localStorage.getItem("TicketDetails") ? JSON.parse(localStorage.getItem("TicketDetails")).price : "");
  const [quantity, setQuantity] = useState(localStorage.getItem("TicketDetails") ? JSON.parse(localStorage.getItem("TicketDetails")).quantity : 1);


  const Api = `https://api.tvmaze.com/shows/${params.id}`;

  const getMoviesDetails = async (api) => {
    const { data } = await axios.get(api);
    setData(data);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("TicketDetails", JSON.stringify({
      name, theater, ticketType, date, price, quantity
    })
    );
    // console.log(name, theater, ticketType, date, price, quantity);
  }

  useEffect(() => {
    getMoviesDetails(Api)
  }, [Api])

  const summaryWithoutTags = data.summary && data.summary.replace(/<[^>]+>/g, "");

  return (
    <div className=' bg-gray-900'>

      <div className='sticky top-0 py-10 pl-10'>
        <button
          onClick={() => sethandletoggle(!handletoggle)}
          className="my-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book ticket</button>
      </div>

      {
        data &&
        <div className='w-[60%] mx-auto flex flex-col items-center justify-center text-gray-400 bg-gray-900 space-y-5'>
          <h2 className='text-2xl font-medium leading-loose  text-white'>{data.name}</h2>
          <img className='h-[60vh]' src={data.image && data.image.original} alt="" />
          <div className='flex items-center '>
            <h3 className='text-white mx-5 text-lg'> Genres</h3>
            {
              data.genres?.map((ele, index) => (
                <p key={index} className='mx-2'>{ele}</p>
              ))
            }
          </div>
          <h4 className='text-white'>Language :  <span>{data.language}</span></h4>


          <a className='underline cursor-pointer text-white' href={data.url}>
            Visit Offiicial Site
          </a>
          <div className='py-10 text-center'>
            <h4 className=' text-white text-4xl'>Summery</h4>
            <p className='leading-loose'>{summaryWithoutTags}</p>
          </div>

        </div>
      }


      <Dialog open={handletoggle} onClose={() => sethandletoggle(!handletoggle)} >
        <div className="md:w-[30vw] h-[100%] p-2 ">

          <div className='flex flex-col justify-center items-center border border-blue-600 p-10 mb-10'>
            <img className='h-[20vh]' src={data.image && data.image.medium} alt="" />
            <p className='text-3xl text-center my-5'>{data.name}</p>
          </div>

          <form className="w-[100%] flex flex-col items-center" onSubmit={handleOnSubmit}>

            <label htmlFor="">Customer Name</label>
            <input className='w-[100%] p-3 border-2 border-b-4 outline-none text-xs' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />

            <label htmlFor="">Theater</label>
            <select className='w-[100%] p-3 border-2 border-b-4 outline-none text-xs' name="" id=""
              onChange={(e) => setTheater(e.target.value)} required
            >
              <option value={theater}>{theater}</option>
              <option value="Amazon Prime">Amazon Prime</option>
              <option value="Netflix">Netflix</option>
              <option value="Youtube">Youtube</option>
            </select>

            <label htmlFor="">Ticket Type</label>
            <select className='w-[100%] p-3 border-2 border-b-4 outline-none text-xs' name="" id=""
              onChange={(e) => setticketType(e.target.value)} required
            >
              <option value={ticketType}>{ticketType}</option>
              <option value="Adult">Adult</option>
              <option value="Child">Child</option>
              <option value="Senior">Senior</option>
              <option value="Student">Student</option>
              <option value="Other">Other</option>
            </select>


            <label htmlFor="">Date</label>
            <input className='w-[100%] p-3 border-2 border-b-4 outline-none text-xs' type="date" placeholder='Date' required
              value={date} onChange={(e) => setDate(e.target.value)}
            />

            <label htmlFor="">Ticket Price</label>
            <select className='w-[100%] p-3 border-2 border-b-4 outline-none text-xs' name="" id=""
              onChange={(e) => setPrice(e.target.value)} required
            >
              <option value={price}>{price}</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="250">250</option>
              <option value="9000">9000</option>
            </select>


            <label htmlFor="">Quantity</label>
            <input className='w-[100%] p-3 border-2 border-b-4 outline-none text-xs' type="Number" placeholder='Quantity' required
              value={quantity} onChange={(e) => setQuantity(e.target.value)}
            />



            <button className='bg-blue-500 p-2 text-white text-sm ' type="submit">
              Book Now
            </button>

          </form>
        </div>
      </Dialog>

    </div>
  )
}
