// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export const NavBar = () => {

    const activeLinkClasses = `font-bold underline underline-offset-4 `

    return <>
        <div className='bg-blue-700 text-white font-semibold flex items-center justify-center'>
            <p className="p-3">
                <NavLink to='/'
                    className={({ isActive }) => isActive ? activeLinkClasses : ''}
                    end
                >Home</NavLink>
            </p>
            <p className="p-3">
                <NavLink to='/products'
                    className={({ isActive })=> isActive? activeLinkClasses : ''}    
                >Products</NavLink>
            </p>
        </div>
    </>
}