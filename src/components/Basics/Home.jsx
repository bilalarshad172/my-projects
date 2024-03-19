import React, {useState} from 'react'
import './style.css';
import Menu from './Menu';
import MenuCard from './MenuCard';
import NavBar from './NavBar'

const uniqueList = [
    ...new Set(
        Menu.map((currentElement)=>{
            return currentElement.category
        })
    ), "All"
    
]
const Home = () => {
    const [menu, setMenu] = useState(Menu);
    const [menuList , setMenuList]=useState(uniqueList)
    const filteritem = (category)=>{
        if(category==="All"){
            setMenu(Menu);
            return;
        }
        const updatedList= Menu.filter((currentElement)=>{
            return currentElement.category === category;
        })
        setMenu(updatedList)
    }
  return (
   <>
   <NavBar filteritem={filteritem} menuList={menuList}/>
   <MenuCard menu = {menu}/>
   </>
  )
}

export default Home