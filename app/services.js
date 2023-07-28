import Image from "next/image";

export default function Services() {



    return (
        <section className="services-section">
            <div className="services-content">
                <h1 className="services-header">My services</h1>
                <div className="services-container">
                    <div className="service">
                        <Image
                            className="service-image"
                            src="/service/web_dev.jpg"
                            height={384}
                            width={384}
                        />
                        <div className="service-info">
                            <h3 className="service-info-header">
                                Custom Web Development
                            </h3>
                            <br />
                            <p>
                                Tailored website solution to meet your exact
                                needs
                            </p>
                        </div>
                        <a href="#contact">

                            <button className="service-button">More Info</button>
                        </a>
                    </div>
                    <div className="service">
                        <Image
                            className="service-image"
                            src="/service/Web_maintenance.jpg"
                            height={384}
                            width={384}
                        />
                        <div className="service-info">
                            <h3 className="service-info-header">
                                Website Maintenace
                            </h3>
                            <br />
                            <p>
                                Keep your website secure, up-to-date, and
                                running smoothly with our services
                            </p>
                        </div>
                        <a href="#contact">
                            <button className="service-button">
                                More Info
                            </button>
                        </a>
                    </div>
                    <div className="service">
                        <Image
                            className="service-image"
                            src="/service/ecommerce.jpg"
                            height={384}
                            width={384}
                        />
                        <div className="service-info">
                            <h3 className="service-info-header">
                                E-commerce development
                            </h3>
                            <br />
                            <p>
                                Create an online store with secure payment
                                integration and user friendly features
                            </p>
                        </div>
                        <a href="#contact">
                            <button className="service-button">
                                More Info
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
