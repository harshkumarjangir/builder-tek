import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"

const Navbar = () => {

    const logo = "/assets/logos/builder-logo.png"

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="BuilderTek"
                            className="h-[43px] w-[293px]"
                        />
                    </Link>

                    {/* Center Menu */}
                    <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-800">
                        <Link to="/" className="hover:text-blue-600">
                            Home
                        </Link>

                        <Link to="/about" className="hover:text-blue-600">
                            About Us
                        </Link>

                        <NavDropdown label="Solutions" />
                        <NavDropdown label="Who We Serve" />
                        <NavDropdown label="Services" />
                        <NavDropdown label="Resource" />
                    </div>

                    {/* Login Button */}
                    <div className="hidden lg:block">
                        <Link
                            to="/login"
                            className="bg-gradient-to-r from-[#3785FF] to-[#1146F2] hover:bg-blue-700 border border-[#1146F2] shadow-[0_6px_16px_rgba(0,0,0,0.2),0_0_0_1px_#155BC9]
 text-white px-6 py-2 rounded-xl text-sm font-medium transition"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

/* Dropdown Item */
const NavDropdown = ({ label }) => {
    return (
        <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-600">
                {label}
                <ChevronDown size={14} />
            </div>

            {/* Dropdown Menu (placeholder) */}
            <div className="absolute top-full left-0 mt-3 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                    to="/solutions/rfq"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                >
                    Solutions RFQ
                </Link>
                <Link
                    to="/solutions/quote"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                >
                    Solutions QUOTE
                </Link>
            </div>
        </div>
    )
}
