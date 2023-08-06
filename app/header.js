



export default function Headers() {
    return (
        <nav className="navbar navbar-expand navbar-dark navbar-custom w-100">
            <div className="container-fluid">
                <div className="navbar-header  ">
                    <h1 className=" display-5 navbar-brand "> Ajibade </h1>
                </div>

                {/* <div className="socials">
                    <a href="https://twitter.com/kaexponent2">
                        <i
                            className="fa fa-twitter-square fa-2x"
                            aria-hidden="false"
                        ></i>
                    </a>

                    <a href="https://instagram.com/kaexponent_2">
                        <i
                            className="fa fa-instagram fa-2x"
                            aria-hidden="true"
                        ></i>
                    </a>
                    <a>
                        <i
                            className="fa fa-linkedin-square fa-2x"
                            aria-hidden="true"
                        ></i>
                    </a>
                </div>

                 */}

                <ul className="nav navbar-nav navbar-right gap-3 ">
                    <li>
                        <a href="https://twitter.com/kaexponent2">
                            <span className="bi bi-twitter h3 "></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/kaexponent_2">
                            <span className="bi bi-instagram h3 "></span>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com">
                            <i className="bi bi-linkedin h3"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
