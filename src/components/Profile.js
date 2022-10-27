import React from 'react'

function Profile() {
  return (
    <div className="grid place-items-center">
      <div className="border-rounded w-[800px] mt-8 px-5 relative hidden md:block lg:block">
        <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666880520/desktopicon_sks8qd.png" alt="shareimage" className="px-3 py-3 rounded-full text-[#D0D5DD] border-dotted border-2 bg-white hover:bg-[#D0D5DD] border-[#D0D5DD] cursor-pointer absolute top-0 right-0 mx-5 ring-opacity-25  hover:ring-8 ring-[#D0D5DD] w-[60px] h-[60px]"/>
      </div>

      <div className="border-rounded w-full mt-5 px-5 relative lg:hidden md:hidden">
        <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666880242/mobileicon_op3ael.png" alt="shareimage" className="px-3 py-3 rounded-full text-[#D0D5DD] border-dotted border-2 bg-white hover:bg-[#D0D5DD] border-[#D0D5DD] cursor-pointer absolute top-0 right-0 mx-5  ring-opacity-25  hover:ring-8 ring-[#D0D5DD]"/>
      </div>

        <div className="grid place-items-center">

        <div className="flex flex-wrap justify-center mt-8">
            <div className="px-4">
                <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666596997/hng-image_tazgxk.png" alt="profileimage" className="shadow rounded-full max-w-full h-auto align-middle w-[88px] h-[88px] hover:ring-8 ring-[#EBE9FE] cursor-pointer" id="profile_img"/>
            </div>
        </div>


        <h1 className="username mt-3" id="twitter">preshypie</h1>
        {/* <h1 className="username mt-3" id="slack">preshypie (Egwuenu Precious)</h1> */}
        </div>    
    </div>

  )
}

export default Profile