import React from 'react'


const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div>
        <img src={item.image} alt="" className='work__img' />
        <div className="work__mask"></div>
      </div>
        
      <span className="work__category">{item.category}</span>
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
      <i class="ri-links-line work__button-icon"></i>
      </a>
    </div>
  )
}

export default WorkItems