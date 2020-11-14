import React from 'react'
import "./Products.css";




function Products({ id, title, product_image, image, heart, price, spec, text, loc, date}) {
    return (
        <div className = "products">
           
            <div className = "product_line1">
                <div className = "pr1">
                    <div className ="prdisplay">
                        <div className = "ftag">
                            <p>{title}</p>
                        </div>
                        <div className = "primg">
                            <img src ={product_image} alt=""/>
                         </div>
                        <div className = "fav">
                            <img src = {image} alt ="Heart Icon"/>
                        </div>
                    </div> 
                    <div className ="prdetails">
                        <div className ="pricespec">
                            <div className ="price">
                                <strong>{price}</strong>
                            </div>
                            <div className ="spec">
                                {spec}
                            </div>
                            <div className="msg">

                                {text}
                            </div>
                        </div>
                        <div className ="locDate">
                            <div className="loc">
                                {loc}    
                            </div>
                            <div className ="date">
                                {date}
                            </div>
                        </div>
                    </div>
                    

                </div>

            </div>
                        
        </div>
    )
}

export default Products
