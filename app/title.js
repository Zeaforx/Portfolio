export default function Title() {
    return (
        <section className=" jumbotron-fluid title-section  d-flex justify-content-center align-items-center w-100 ">
            <div className="container d-flex justify-content-center d-flex align-items-center flex-column ">
                <div className="title-header">
                    <h1 className="title-header-text display-3 ">
                        Transform Your Online Presence
                    </h1>
                </div>
                <div className="title-description mb-3 ">
                    <p className="h3">
                        Expert web development services to help your business
                        grow to new levels
                    </p>
                </div>
                <div className="title-button-container  mt-3">
                    <a href="#contact">
                        <button className="title-button  btn btn-warning">
                            Get Started
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
