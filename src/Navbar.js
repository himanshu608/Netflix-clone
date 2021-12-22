import React, { useEffect, useState } from 'react'
import './navbar.css'
function Navbar() {
    const [show,setShow]  = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if(window.scrollY >100){
                setShow(true);
            }else{
                setShow(false);
            }
        })
    },[])
    return (
        <div className="navbar" style={show?{backgroundColor:"black"}:null}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png' alt="netflix" className="nav_logo"></img>
        <img className="nav_menu" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAATlBMVEX///8AAAA/Pz+/v79DQ0NiYmLX19eYmJji4uL8/PwuLi4WFhaurq6IiIisrKxISEiCgoIyMjLb29v29vZLS0ttbW2SkpIQEBCzs7Nzc3NGrq78AAABFklEQVR4nO3b0XKCMBBA0aRFREQUbGv9/x+t7Wt9645bM+f8wR0IyZDZUgAAAAAAAAAAAACAZuzmTffyYN1m2kV39GNNMa6xHes+p6PW/RAa0mV11HqM7OjzOmrtA0O2mSHbwJBTZsgpMKSZJ9LMGinHvI63yI4ytLKPlHXJ6ViCd/bbWWtq46wFAAAAAE9qeH244N+lP+aU29Bxju54z8j4do3t+MjqiL3nKedLXsjlHBgy5XXU+hkYcsgMOQj5rZlXq5nFnnnRHvr5LeWa1RG8Id6WScoRZZmiO0ozh0YAAAAAeEY5I65zOyOuoRNWRlwjGHG9p5mBSiOuEYy43tPKV8uI658ZcQUAAAAAAAAAAAAA/p8vAnkcBX+sF3UAAAAASUVORK5CYII='></img>
        </div>
    )
}

export default Navbar
