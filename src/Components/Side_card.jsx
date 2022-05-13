import React, { PureComponent } from 'react'
import code from '../img/code.jpg';
import './Responsive.css';

export default function Side_card(){
    return(
        <>
        <div className="side-card-container">
            <div className="left">
                <img src={code} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fugit? Illum, consequuntur expedita aliquam eaque rerum deleniti temporibus soluta nesciunt voluptatibus velit ipsa eius corporis culpa hic possimus adipisci reiciendis?<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fugit? Illum, consequuntur expedita aliquam eaque rerum deleniti temporibus soluta nesciunt voluptatibus velit ipsa eius corporis culpa hic possimus adipisci reiciendis?<br />
                </p>
            </div>
            <div className="right">
                <img src={code} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fugit? Illum, consequuntur expedita aliquam eaque rerum deleniti temporibus soluta nesciunt voluptatibus velit ipsa eius corporis culpa hic possimus adipisci reiciendis?<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fugit? Illum, consequuntur expedita aliquam eaque rerum deleniti temporibus soluta nesciunt voluptatibus velit ipsa eius corporis culpa hic possimus adipisci reiciendis?<br />
                </p>
            </div>
            <div className="left">
                <img src={code} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fugit? Illum, consequuntur expedita aliquam eaque rerum deleniti temporibus soluta nesciunt voluptatibus velit ipsa eius corporis culpa hic possimus adipisci reiciendis?<br />
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fugit? Illum, consequuntur expedita aliquam eaque rerum deleniti temporibus soluta nesciunt voluptatibus velit ipsa eius corporis culpa hic possimus adipisci reiciendis?<br />
                </p>
            </div>
            <div className="right">
                <img src={code} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fugit? Illum, consequuntur expedita aliquam eaque rerum deleniti temporibus soluta nesciunt voluptatibus velit ipsa eius corporis culpa hic possimus adipisci reiciendis?<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, fugit? Illum, consequuntur expedita aliquam eaque rerum deleniti temporibus soluta nesciunt voluptatibus velit ipsa eius corporis culpa hic possimus adipisci reiciendis?<br />
                </p>
            </div>
        </div>
        </>
    )
}