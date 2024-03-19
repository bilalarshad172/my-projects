import React from 'react'

const MenuCard = ({menu}) => {
  return (
    <>
    <section className='main-card--cointainer'>
    {menu.map((currentElement)=>{
        const {id, category , name, description, image} = currentElement
        return(
            <>
        <div className="card-container" key={currentElement.id}>
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className='card-author subtle'>{category}</span>
                <h2 className='Card-title'>{name}</h2>

                <span className='card-description subtle'>
                    {description}
                </span>
                <div className="card-read">Read</div>
            </div>
            <img src={image} className='card-media' alt="images" />
            <span className='card-tag subtle'>Order Now</span>

        </div>
    </div>
    </>
        )
    })}
    </section>
    
    
    </>
  )
}

export default MenuCard