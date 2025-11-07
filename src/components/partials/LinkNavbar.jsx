import { Link } from "react-router-dom"
export default function LinkNavbar({data,name,nav}){
    return (   <Link data-page={data} className="nav-btn hover:text-[#1E8F4F]" to={nav} >{name}</Link>)
}