import React, { Component } from 'react';
import '../css/Spotlight.css';
import { Link } from 'react-router-dom';


class Spotlight extends Component {
  render() {
    const cardsData = [
      {
        image: '../assets/image1.jpg',
        name: 'Tabari Linus',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!'
      },
      
      {
        image: '../assets/image1.jpg',
        name: 'Tabari Linus',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!'

      },
      {
        image: '../assets/image1.jpg',
        name: 'Tabari Linus',
        comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia illum minima consectetur molestias impedit ex dolores aut quod corrupti eaque!'

      }
    ];

    return (
      
      <div className="spotlight">
         <div className="s_s">
               <div className="header">
                   <h4>Spotlight</h4>
                   <Link to="/" className="tdn view_all">View All</Link>
                </div>
                
        </div>
        <div className="spotlight-cards">
          {cardsData.map((card, index) => (
            <div className="spotlight-card" key={index}>
              <img src={card.image} alt="" className="spotlight-card-image" />
              <h2 className="spotlight-card-text">{card.name}</h2>
              <p className="comment">{card.comment}</p>
              <button className="spotlight-card-button">Read More</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Spotlight;
