import React from 'react'

function Links() {
  return (
    <div className="grid place-items-center">
        <div className="mt-6">

            <a href="https://twitter.com/Presh_pie" id="twitter">
              <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
                  <div className="flex justify-between ">
                      <p className="text-center link text-[#101828]">Twitter Link</p>
                      <p className="text-right">icon</p>
                    {/* <img src="" alt="shareimage"/> */}
                  </div>        
              </div> 
            </a>

            <a href="https://training.zuri.team/" id="btn__zuri">
              <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
                <div className="grid gird-cols-2">
                  <h1 className="text-center link text-[#101828]">Zuri Team</h1>
                  <p className="text-center text-[#98A2B3] italic">Find books about desings and code</p>
                </div>
              </div> 
            </a>

            <a href="https://books.zuri.team/" id="books">
              <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
              <p className="text-center link text-[#101828]">Zuri Books</p>
              </div> 
            </a>

            <a href="https://books.zuri.team/python-for-beginners?ref_id=egwuenuprecious" id="book__python">
             <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
              <p className="text-center link text-[#101828]">Python Books</p>
             </div> 
            </a>

            <a href="https://background.zuri.team/" id="pitch">
               <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
              <p className="text-center link text-[#101828]">Background Check for Coders</p>
              </div>
            </a>    

            <a href="https://books.zuri.team/design-rules">
              <div className="links lg:w-[1152px] w-[343px] hover:bg-gray-300 hover:border-2 hover:border-[#98A2B3] bg-[#EAECF0] transistion-color">
              <p className="text-center link text-[#101828]">Design books</p>
              </div>  
            </a>

        </div>
    </div>
  )
}

export default Links