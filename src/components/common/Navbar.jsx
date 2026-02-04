import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import navData from "../../data/navbarData.json"


const Navbar = () => {

    const logo = "/assets/logos/builder-logo.png"

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container-main">
                <div className="flex-between h-20">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={navData.logo.src}
                            alt={navData.logo.alt}
                            className="h-[43px] w-[293px]"
                        />
                    </Link>

                    {/* Center Menu */}
                    <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-800">
                        {navData.menu.map((item, index) =>
                            item.dropdown ? (
                                <NavDropdown key={index} item={item} />
                            ) : (
                                <Link key={index} to={item.path} className="hover:text-blue-600">
                                    {item.label}
                                </Link>
                            )
                        )}

                    </div>

                    {/* Login Button */}
                    <Link
                        to={navData.cta.path}
                        className="px-4 py-2 rounded-xl text-white bg-gradient-to-r from-[#3785FF] to-[#1146F2] border border-[#1146F2] shadow-[0_6px_16px_rgba(0,0,0,0.2),0_0_0_1px_#155BC9] text-sm"
                    >
                        {navData.cta.label}
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar

/* Dropdown Item */
const NavDropdown = ({ item }) => {
    return (
        <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-600">
                {item.label}
                <ChevronDown size={14} />
            </div>

            <div className="absolute top-full left-0 mt-3 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {item.items.map((subItem, i) => (
                    <Link
                        key={i}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                        {subItem.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}

