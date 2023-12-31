import Image from "next/image";

export default function About() {
    return (
        <section className="w-100 container-fluid d-sm-flex align-items-center justify-content-center about-section w-100">
            <div className="about-container   w-100  card-deck d-sm-flex align-items-center justify-content-center flex-row-reverse    gap-3">
                <div className=" card w-50 about-img-container ">
                    <Image
                        className="d-none d-sm-block img-fluid about-image "
                        src="/about.jpg"
                        height={400}
                        width={574}
                    />
                </div>
                <div className=" card  w-sm-100  container about-description">
                    <div className="card-body text-nowraps ">
                        <h3 className=" card-title about-description-header">
                            About
                        </h3>
                        <p className=" card-text about-description-text fs-6 ">
                            I am a web developer based in Nigeria. I customize
                            in making web solutions for various businesses of
                            all sizes. I believe in working closely to all my
                            clients to understand their needs and deliver
                            high-quality user friendly websites that meet their
                            needs.
                            <br />
                            <br />
                            Here, I use latest technologies and best practices
                            to create websites that are not only visually
                            stunning, but functional and optimized for search
                            engines. I am commited to provide exceptional
                            customer service and suport, and I strive to exceed
                            my clients' expectations with every project I
                            undertake.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

