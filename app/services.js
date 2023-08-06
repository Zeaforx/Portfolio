import Image from "next/image";

export default function Services() {



    return (
        <section className="services-section w-100 d-flex align-items-center justify-content-center flex-column">
            
                <h1 className="services-header">My services</h1>
                <div className="services-container card-deck w-100 h-100 d-flex flex-row gap-3  ">
                    <div className="card w-25 service d-flex align-items-center justify-content-center flex-column ">
                        <Image
                            className="service-image card-img-top mb-5"
                            src="/service/web_dev.jpg"
                            height={384}
                            width={384}
                        />
                        <div className="service-info card-body">
                            <h3 className="service-info-header card-title mb-2">
                                Custom Web Development
                            </h3>
                            <br />
                            <p className="card-text fs-5">
                                Tailored website solution to meet your exact
                                needs
                            </p>
                        </div>
                        <a href="#contact">
                            <button className=" title-button  btn btn-warning ">
                                More Info
                            </button>
                        </a>
                    </div>
                    <div className="card w-25 service d-flex align-items-center justify-content-center flex-column ">
                        <Image
                            className="service-image card-img-top mb-5"
                            src="/service/ecommerce.jpg"
                            height={384}
                            width={384}
                        />
                        <div className="service-info card-body">
                            <h3 className="service-info-header card-title mb-2">
                                E-commerce development
                            </h3>
                            <br />
                            <p className="card-text fs-5">
                                Create an online store with secure payment 
                                integration and user friendly features
                            </p>
                        </div>
                        <a href="#contact">
                            <button className=" title-button  btn btn-warning ">
                                More Info
                            </button>
                        </a>
                    </div>
                    <div className="card w-25 service d-flex align-items-center justify-content-center flex-column ">
                        <Image
                            className="service-image card-img-top mb-5"
                            src="/service/Web_maintenance.jpg"
                            height={384}
                            width={384}
                        />
                        <div className="service-info card-body">
                            <h3 className="service-info-header card-title mb-2">
                                Website Maintenace
                            </h3>
                            <br />
                            <p className="card-text fs-5">
                                Keep your website secure, up-to-date, and 
                                running smoothly with our services
                            </p>
                        </div>
                        <a href="#contact">
                            <button className=" title-button  btn btn-warning ">
                                More Info
                            </button>
                        </a>
                    </div>
                </div>
            
        </section>
    );
}















                    // <div className="service">
                    //     <Image
                    //         className="service-image"
                    //         src="/service/Web_maintenance.jpg"
                    //         height={384}
                    //         width={384}
                    //     />
                    //     <div className="service-info">
                    //         <h3 className="service-info-header">
                    //             Website Maintenace
                    //         </h3>
                    //         <br />
                    //         <p>
                    //             Keep your website secure, up-to-date, and
                    //             running smoothly with our services
                    //         </p>
                    //     </div>
                    //     <a href="#contact">
                    //         <button className="service-button">
                    //             More Info
                    //         </button>
                    //     </a>
                    // </div>
                    // <div className="service">
                    //     <Image
                    //         className="service-image"
                    //         src="/service/ecommerce.jpg"
                    //         height={384}
                    //         width={384}
                    //     />
                    //     <div className="service-info">
                    //         <h3 className="service-info-header">
                    //             E-commerce development
                    //         </h3>
                    //         <br />
                    //         <p>
                    //             Create an online store with secure payment
                    //             integration and user friendly features
                    //         </p>
                    //     </div>
                    //     <a href="#contact">
                    //         <button className="service-button">
                    //             More Info
                    //         </button>
                    //     </a>
                    // </div>