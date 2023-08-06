export default function Quote() {
    return (
        <section className="quote-section">
            <div className="quote-scroll-container ml-5  ">
                <div className="quote-container card mt-5 ">
                    <blockquote className="">
                        <p className="fs-3 ">
                            Anyone can write code computers understand. <br />
                            Good programmers write code that any human can
                            understand
                        </p>
                        <cite> -Martin Fowler</cite>
                    </blockquote>
                </div>
                <div className="quote-container card">
                    <blockquote>
                        <p className="fs-3">Talk is cheap show me the code</p>
                        <cite> -Linus Torvalds</cite>
                    </blockquote>
                </div>
                <div className="quote-container card">
                    <blockquote>
                        <p className="fs-3">
                            There are 3 responses to any design -- yes, no and
                            WOW! Wow is my aim
                        </p>
                        <cite> -Milton Glaser</cite>
                    </blockquote>
                </div>
                <div className="quote-container card ml-5 ">
                    <blockquote className="ml-5">
                        <p className=" fs-3 ">
                            You know you have achieved perfection not when
                            there's nothing left to add <br />
                            but when there's nothing left to take away
                        </p>
                        <cite> -Emma</cite>
                    </blockquote>
                </div>
                <div className="spacer" ></div>
                <div className="space"></div>
            </div>
        </section>
    );
}
