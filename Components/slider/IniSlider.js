import React from 'react'
import Card from '../../app/components/Card'

const foto = [
    { img: "/sasa.png"},
    { img: "/sasa.png"},
    { img: "/sasa.png"},
    { img: "/sasa.png"},
    { img: "/sasa.png"},
    { img: "/sasa.png"},
]

const IniSlider = () => {
  return (
    <div>
        {foto.map((el, index) => <Card key={index} img={el.img}/>)}
    </div>
  )
}

export default IniSlider
