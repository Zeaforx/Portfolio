"use client";
// import { Carousel } from "bootstrap";
import { Carousel, CarouselItem } from "react-bootstrap";
import { CarouselCaption } from "react-bootstrap";
import Image from "next/image";

export default function Quote() {
    return (
        <section className="quote-section  container-fluid w-100">
            <div className="col w-100 h-100">
                <Carousel className="w-100 h-100 d-flex align-items-center justify-content-center ">
                    <CarouselItem>
                        {/* <blockquote> */}
                        <Image
                            className="mt-5 f "
                            src="/about.jpg"
                            // alt="running"
                            width={100}
                            height={100}
                        />
                        <div className="mt-5"></div>

                        <CarouselCaption>
                            <p className="lead ">
                                Anyone can write code computers understand. Good
                                programmers write code that any human can
                                understand
                            </p>
                            <cite> -Martin Fowler</cite>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                        {/* <blockquote> */}
                        <Image
                            className="mt-5 f "
                            src="/about.jpg"
                            // alt="running"
                            width={100}
                            height={100}
                        />
                        <div className="mt-5"></div>

                        <CarouselCaption>
                            <p className="lead">
                                There are 3 responses to any design -- yes, no
                                and WOW! Wow is my aim
                            </p>
                            <cite> -Milton Glaser</cite>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                        {/* <blockquote> */}
                        <Image
                            className="mt-5 f "
                            src="/about.jpg"
                            // alt="running"
                            width={100}
                            height={100}
                        />
                        <div className="mt-5"></div>

                        <CarouselCaption>
                            <p className="lead">
                                Talk is cheap show me the code
                            </p>
                            <cite> -Linus Torvalds</cite>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                        {/* <blockquote> */}
                        <Image
                            className="mt-5 f "
                            src="/about.jpg"
                            // alt="running"
                            width={100}
                            height={100}
                        />
                        <div className="mt-5"></div>

                        <CarouselCaption>
                            <p className=" lead ">
                                You know you have achieved perfection not when
                                there's nothing left to but when there's nothing
                                left to take away
                            </p>
                            <cite> -Emma</cite>
                        </CarouselCaption>
                    </CarouselItem>
                </Carousel>
            </div>
            {/* <div className="carousel slide">
                <div
                    className="quote-scroll-container carousel-inner   ml-5  "
                    data-ride="carousel"
                >
                    <div className="spacer"></div>
                    <div className="space"></div>
                </div>
            </div> */}
        </section>
    );
}
