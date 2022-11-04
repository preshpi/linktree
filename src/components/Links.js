import React from 'react'
import { Link } from 'react-router-dom'
function Links() {
  return (
    <div className="grid place-items-center">
        <div className="mt-6 m-8">

            <a href="https://twitter.com/Presh_pie" target="_blank" rel="noreferrer"  id="twitter">
              <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
                  <div className="flex justify-between ">
                      <p className="text-center link text-[#101828]">Twitter Link</p>
                    {/* <img src="" alt="shareimage"/> */}
                  </div>        
              </div> 
            </a>

            <a href="https://training.zuri.team/" target="_blank" rel="noreferrer" id="btn__zuri">
              <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
                <div className="grid gird-cols-2">
                  <h1 className="text-center link text-[#101828]">Zuri Team</h1>
                </div>
              </div> 
            </a>

            <a href="https://books.zuri.team/" target="_blank" rel="noreferrer" id="btn__zuri">
              <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
                <div className="grid gird-cols-2">
                  <h1 className="text-center link text-[#101828]">Zuri Books</h1>
                  <span className="text-center text-[#98A2B3] italic">Find books about desings and code</span>
                </div>
              </div> 
            </a>

            <a href="https://books.zuri.team/python-for-beginners?ref_id=preshypie" target="_blank" rel="noreferrer" id="books">
              <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
              <div className="grid gird-cols-2">
                <h1 className="text-center link text-[#101828]">Python Books</h1>
                <span className="text-center text-[#98A2B3] italic">Check out my book for coding help</span>
              </div>
              </div> 
            </a>

            <a href="https://background.zuri.team/"  target="_blank" rel="noreferrer" id="pitch">
               <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
               <div className="grid gird-cols-2">
                 <h1 className="text-center link text-[#101828]  mt-3">Background Check for Coders</h1>
                 <span className="text-center text-[#98A2B3] italic  mb-3 ">Hope the bugs aren't bugging you</span>
              </div>
              </div>
            </a>    

            <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer" id="book__design">
              <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
              <div className="grid gird-cols-2">
               <h1 className="text-center link text-[#101828] mt-3">Design books</h1>
               <span className="text-center text-[#98A2B3] italic mb-3 ">Get free design books offered by Zuri</span>
              </div>
              </div>  
            </a>

            <Link to="/contact"  id="contact">
              <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
              <div className="grid gird-cols-2">
               <h1 className="text-center link text-[#101828] mt-3">Contact Me</h1>
              </div>
              </div>  
            </Link>

        </div>
    </div>
  )
}

export default Links