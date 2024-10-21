import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    <div id='div1'>
      <div>
      <Image src={"https://img.freepik.com/free-vector/astronaut-dabbing-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3360.jpg?w=740&t=st=1729506210~exp=1729506810~hmac=96ddce76166301d12e2655d93d1a9d5bd40bea55089b0ca55dd63fa0dbff9f4d"}
     alt="Image"
     height={500}
     width={500}
     id='Image'
     ></Image>
      </div>
      <div id='div3' >
    <p id='greet'>ASALAM ALIKUM</p>
    <span id='name' >HAMZA NASIR</span>
  </div>
    </div>
    </>
  )
}

export default page