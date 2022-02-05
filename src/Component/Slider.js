import React from "react";
import { Carousel} from "react-bootstrap";
import banner1  from "../Image/banner1.jpg";
import banner2  from "../Image/banner2.jpg";
import banner3  from "../Image/banner3.jpg";
import banner4  from "../Image/banner4.jpg";
import banner5  from "../Image/banner5.jpg";

const Slider=()=>
{
    return(
        <div style={{}}>
           
            <Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="First slide"
    />
    
    
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={banner3}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={banner4}
      alt="Second slide"
      
      
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner5}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}
export default Slider;