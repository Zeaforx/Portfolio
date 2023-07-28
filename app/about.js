import Image from "next/image";

export default function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                <Image
                    className="about-image"
                    src="/about.jpg"
                    height={327}
                    width={574}
                />
                <div className="about-description">
                    <h3 className="about-description-header">About</h3>
                    <p className="about-description-text">
                        I am a web developer based in Nigeria. I customize in
                        making web solutions for various businesses of all
                        sizes. I believe in working closely to all my clients to
                        understand their needs and deliver high-quality user
                        friendly websites that meet their needs.
                        <br />
                        <br />
                        Here, I use latest technologies and best practices to
                        create websites that are not only visually stunning, but
                        functional and optimized for search engines. I am
                        commited to provide exceptional customer service and
                        suport, and I strive to exceed my clients' expectations
                        with every project I undertake.
                    </p>
                </div>
            </div>
        </section>
    );
}

