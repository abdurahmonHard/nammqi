import Header from './Header';
import MenuStruct from "./MenuStruct";
import logoUz from '../assets/images/logoUz.png'

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#6c5ebf] w-full fixed z-40 shadow-[-15px_20px_8px_-24px_rgba(0,0,0,0.4)]">
        <nav className="flex justify-between items-center w-11/12 h-5/6 m-auto ">
          <ul className="no-underline">
            <img className='w-48' src={logoUz} alt='logo'/>
          </ul>
          <ul className="menus">
            <MenuStruct/>
          </ul>
        </nav>
      </div>
      <Header/>
    </div>
    
  );
};

export default Navbar;





















// // (
// //   <li className="menu-items" key={index}>
// //     <a className='link' href={menu.url}>{menu.title}</a>
// //   </li>
// // );