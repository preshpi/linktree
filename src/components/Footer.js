import React from 'react'

function Footer() {
  return (
    <div className="grid place-items-center mt-5 h-[200px]">

        <div className="flex gap-5 m-10">
        <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666712488/MC04MC5qcGc_sckr5i.jpg" alt="slacklogo" className="w-12 h-8 object-cover cursor-pointer"/>
        <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666713118/GitHub-Mark_pmzq4e.png" alt="githublogo" className="w-12 h-9 object-cover cursor-pointer"/>
        </div>

        <hr className="border-1 border-gray-300 lg:w-[1152px] w-[343px] mt-5"/>

        <div className="flex lg:w-[1152px] w-[343px] justify-between">
         <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666713494/zuri-training-img_keslcg.svg" alt="zurilogo" className="w-48"/>
         <h1 className="text-[#667085] hng items-center justify-center grid">HNG Internship 9 Frontend Task</h1>
         <div className="flex items-center justify-center">
             <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666714039/I4G_qvbdlk.png" alt="I4Glgo" className="i4g"/>
        </div>
        </div>
    </div>
  )
}

export default Footer