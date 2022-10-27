import React from 'react'

function Footer() {
  return (
    <div className="grid place-items-center mt-5 h-[200px]">

        <div className="flex gap-5 m-10">
        
      <a href="https://app.slack.com/client/T042F7V19Q8/D0484S11W1L/rimeto_profile/U04915HB52L" target="_blank" rel="noreferrer">
        <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666712488/MC04MC5qcGc_sckr5i.jpg" alt="slacklogo" className="w-12 h-8 object-cover cursor-pointer"/>
      </a>

      <a href="https://github.com/preshpi" target="_blank" rel="noreferrer">
        <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666713118/GitHub-Mark_pmzq4e.png" alt="githublogo" className="w-12 h-9 object-cover cursor-pointer"/>
      </a>
        </div>

        <hr className="border-1 border-gray-300 lg:w-[1152px] w-[343px] mt-5"/>

        <div className="grid lg:flex md:flex gap-5 lg:w-[1152px] md:w-[600px] w-[343px] justify-between mt-5 p-8">
         <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666869157/Vector_h3cvpj.png" alt="zurilogo" className="i4gg mt-5"/>
         <h1 className="text-[#667085] hng items-center justify-center grid mt-3">HNG Internship 9 Frontend Task</h1>
         <div className="flex items-center">
          <img src="https://res.cloudinary.com/dpokiomqq/image/upload/v1666714039/I4G_qvbdlk.png" alt="I4Glgo" className="i4g"/>
        </div>
        </div>
    </div>
  )
}

export default Footer