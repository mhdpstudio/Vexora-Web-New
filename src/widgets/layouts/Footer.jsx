import { Link } from "react-router-dom"
import useLanguage from "../../hooks/useLanguage"

import "./../../styles/widgets/footer.css"


function Footer() {
    const { translations } = useLanguage()

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">

                    <Link
                        to="/"
                        className="footer-logo"
                    >
                        Vexora
                    </Link>

                    <p>
                        {translations.footer.description}
                    </p>

                </div>


                {/* Links */}
                <div className="footer-links">

                    <div className="footer-column">

                        <h3>
                            {translations.footer.navigation.title}
                        </h3>

                        <Link to="/">
                            {translations.footer.navigation.home}
                        </Link>

                        <Link to="/download">
                            {translations.footer.navigation.download}
                        </Link>

                        <Link to="/about">
                            {translations.footer.navigation.about}
                        </Link>

                        <Link to="/contact">
                            {translations.footer.navigation.contact}
                        </Link>

                    </div>


                    <div className="footer-column">

                        <h3>
                            {translations.footer.support.title}
                        </h3>

                        <Link to="/contact">
                            {translations.footer.support.contact}
                        </Link>

                        <a href="#">
                            {translations.footer.support.privacy}
                        </a>

                        <a href="#">
                            {translations.footer.support.terms}
                        </a>

                    </div>

                </div>

            </div>


            {/* Bottom */}
            <div className="footer-bottom">

                <span>
                    © {new Date().getFullYear()} Vexora
                </span>

                <span className="footer-divider">
                    •
                </span>

                <span>
                    {translations.footer.madeBy}
                </span>

            </div>

        </footer>
    )
}


export default Footer
