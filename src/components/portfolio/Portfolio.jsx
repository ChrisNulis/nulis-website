import React from 'react'
import "./portfolio.scss"
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data";

export default function Portfolio() {
    const[selected, setSelected] = useState("featured")
    const[data, setData] = useState([]);

  const list =[
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web",
    },
    {
      id: "mobile",
      title: "Mobile",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {

    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "featured":
        setData(featuredPortfolio);
        break;
      case "featured":
        setData(featuredPortfolio);
        break;
      case "featured":
        setData(featuredPortfolio);
        break;
      case "featured":
        setData(featuredPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
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
        <div className="item">
          <img src="assets/Project1.png" alt=""/>
          <h3>Unit Project 1 App</h3>
        </div>
        <div className="item">
          <img src="assets/Project1.png" alt=""/>
          <h3>Unit Project 1 App</h3>
        </div>
        <div className="item">
          <img src="assets/Project1.png" alt=""/>
          <h3>Unit Project 1 App</h3>
        </div>
        <div className="item">
          <img src="assets/Project1.png" alt=""/>
          <h3>Unit Project 1 App</h3>
        </div>
        <div className="item">
          <img src="assets/Project1.png" alt=""/>
          <h3>Unit Project 1 App</h3>
        </div>
      </div>


    </div>
  )
}
