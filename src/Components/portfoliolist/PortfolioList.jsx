import React from 'react'
import "./portfolioList.scss"


export default function PortfolioList({title,active,setSelected,id}) {
    return (
        // Jika aktif maka akan menjadi portfoliolist active jika tidak maka menjadi portfolioList
        <li className={active ? "portfolioList active" : "portfolioList"} onClick={()=> setSelected(id)}>
            {title}
        </li>
    )
}
