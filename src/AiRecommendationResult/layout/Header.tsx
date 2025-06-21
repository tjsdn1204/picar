import OriginHeader from "../../Survey/layout/Header"

const Header = ({ title, goToPrevious }) => {
    return (
        <OriginHeader title={title} goToPrevious={goToPrevious}/>
     );
}

export default Header;