import React from 'react'
import "./portfolio.scss"
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
    const[selected, setSelected] = useState("project1")

  const list =[
    {
      id: "project1",
      title: "Project 1",
    },
    {
      id: "project2",
      title: "Project 2",
    },
    {
      id: "project3",
      title: "Project 3",
    },
    {
      id: "project4",
      title: "Project 4",
    },
    {
      id: "project5",
      title: "Project 5",
    },
    {
      id: "project6",
      title: "Project 6",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portolio</h1>
      <ul>
          {list.map((item)=>(
            <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            />
          ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/Project1.png" alt=""/>
          <h3>Unit Project 1 App</h3>
        </div>
      </div>


    </div>
  )
}
