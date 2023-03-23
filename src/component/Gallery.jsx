import React from 'react'
import './style/Gallery.css'


function Gallery() {
  return (
    <>
    <section className='Gallery'>
    <h2>Gallery</h2>
    <ul>
        <li>
            <img width={200} src="src\assets\PomPom.jpg" alt="" />
        </li>
        <li>
            <img width={200} src="src\assets\PomPom.jpg" alt="" />
        </li>
        <li>
            <img width={200} src="src\assets\PomPom.jpg" alt="" />
        </li>
    </ul>
    </section>
    </>
  )
}

export default Gallery