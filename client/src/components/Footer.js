import logo from '../images/logo_2.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
            <svg id="visual" viewBox="0 0 675 900" width="675" height="900" version="1.1"><path d="M0 763L23 313L45 480L68 602L90 684L113 435L135 153L158 192L180 488L203 602L225 416L247 338L270 267L293 243L315 713L338 408L360 694L383 461L405 579L428 190L450 442L472 189L495 760L518 737L540 571L563 578L585 431L608 575L630 685L653 622L675 174" fill="none" stroke-linecap="square" stroke-linejoin="bevel" stroke="#ffff00" stroke-width="99"></path></svg>
                <img className="logo" src={logo} alt="ready_to_fly logo" />
            </div>
        </footer>
    )
}
export default Footer