import React from 'react'
import './services.css'
import image01 from '../../assets/image01.png'
import image02 from '../../assets/image02.png'
import image03 from '../../assets/image03.png'


const data = [
  {
    id: 1,
    image: image01,
    title: "Frontend",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: image02,
    title: "Backend",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: image03,
    title: "Full stack developer",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];


const Services = () => {
  return (
  <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        );
      })}
    </div>
  </section>
  )
}

export default Services