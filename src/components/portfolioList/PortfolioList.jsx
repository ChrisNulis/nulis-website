import React from 'react'
import "./portfolioList.scss"

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onCLick={() => setSelected(id)}>
        {title}
    </li>
  )
}
