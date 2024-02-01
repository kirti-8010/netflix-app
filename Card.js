import React from 'react';

function Card({ item }) {
    console.log(item,"item")
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={item.imgsrc} alt="pic-1" className="card_img" />
                    <div className="card_info">
                        <span className="card_category">{item.title}</span>
                        <h3 className="card_title"> {item.sname} </h3>
                        <a href={item.link} target=" _blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default Card;