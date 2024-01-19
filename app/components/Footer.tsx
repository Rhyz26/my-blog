import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
  
} from "@fortawesome/free-solid-svg-icons";





 export default function Footer() {
  return (
    <div className=''>


{/* <Link href="https://twitter.com/Initial_Rhy" target="_blank" i className="fa-brands fa-x-twitter"></Link> */}
<h1>hhhyjjjj</h1>

 

<FontAwesomeIcon
        icon={faMagnifyingGlass}
      />
      <FontAwesomeIcon
      style={{color: "orange" }}
        icon={faCircleStop}
        size="2x"
      />

      <FontAwesomeIcon
      style={{color: "orange" }}
        icon={faCircleStop}
        size="2x"
      />

    </div>
  )
}

