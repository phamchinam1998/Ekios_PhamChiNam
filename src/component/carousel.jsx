import React from 'react';
import { Button, Carousel } from 'antd';
import "../scss/Homepage/carousel.scss";

export default function CarouselImg() {

    return (
        <>
            <Carousel dots={false} className="carousel container" >
                <div>
                    <div className="carousel-item">
                        <h1>
                            Let's Write Something About Your Store!
                        </h1>
                        <p>
                            Use overlay text to give your customers insight into your brand. Select imagery and text that relates to your style and story.
                        </p>
                        <Button className="button-1" type="primary" >EXPLORE NOW</Button>
                    </div>
                </div>
            </Carousel>
        </>
    )
}