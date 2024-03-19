import React from 'react'

const NavBar = ({filteritem , menuList}) => {
  return (
    <>
    <nav className='navbar'>
        <div className="btn-group">
            {menuList.map((currentElement)=>{
                return(
                    <button className='btn-group__item' onClick={()=>filteritem(currentElement)}>
                        {currentElement}
                    </button>
                )
            })}
        </div>
    </nav>
    </>
  )
}

export default NavBar