import React, { useState } from 'react';
import "../../css/executive/Executive_card.css";
const Executive_card = () => {
  const [executives, setEvents] = useState([
    {
      id: 1,
      name: 'Tabari Linus',
      position: 'President',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non quos dicta est a excepturi possimus deserunt in iusto, voluptas ipsam similique perferendis obcaecati ex ipsum blanditiis deleniti impedit corporis',
      facebook: 'This is event 1',
      linkdln: 'This is event 1',
      twitter: 'This is event 1',
      imageUrl: '../assets/image1.jpg',
    },
    {
        id: 2,
        name: 'Tabari Linus',
        position: 'President',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non quos dicta est a excepturi possimus deserunt in iusto, voluptas ipsam similique perferendis obcaecati ex ipsum blanditiis deleniti impedit corporis',
        facebook: 'This is event 1',
        linkdln: 'This is event 1',
        twitter: 'This is event 1',
        imageUrl: '../assets/image1.jpg',
      },
      {
        id: 3,
        name: 'Tabari Linus',
        position: 'President',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non quos dicta est a excepturi possimus deserunt in iusto, voluptas ipsam similique perferendis obcaecati ex ipsum blanditiis deleniti impedit corporis',
        facebook: 'This is event 1',
        linkdln: 'This is event 1',
        twitter: 'This is event 1',
        imageUrl: '../assets/image1.jpg',
      },
   
  ]);

  return (
    <div className="executive_content cen">
         {executives.map((executive) => (
            <div key={executive.id} className="executive_card">
                <div className="executive_image cen">
                    <div className="box">
                        <div className="exbox e1"></div>
                        <div className="exbox e2"></div>
                        <div className="exbox e3"></div>
                        <div className="exbox e4"></div>
                    </div>
                </div>
                <div className="executive_info cen">
                    <h3>{executive.name}</h3>
                    <p>{executive.position}</p>
                    <div className="socials cen"></div>
                    <span>{executive.description}</span>
                    <button>View Profile</button>
                </div>

            

            </div>

        ))}
    </div>

    
   


    // <div className="executive_content cen">
       
    //      <div className="executive_card">
    //         <div className="executive_image cen">
    //             <div className="box">
    //             <div className="exbox e1"></div>
    //             <div className="exbox e2"></div>
    //             <div className="exbox e3"></div>
    //             <div className="exbox e4"></div>
    //             </div>
    //          </div>
    //         <div className="executive_info cen">
    //             <h3>Tabari Linus</h3>
    //             <p>President</p>
    //             <div className="socials cen"></div>
    //             <span>Lorem ipsum dolor sit amet, consitatibus provident porro enim saepe doloremque, ducimus repellendus harum consequuntur odio accusantium voluptatibus nobis fu</span>
    //             <button>View Profile</button>
    //         </div>
    // </div>
    

    // </div>
   
  );
};

export default Executive_card;
