import Header from './Header';
import MenuStruct from "./MenuStruct";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-[#6c5ebf] w-full fixed z-40 shadow-[-15px_20px_8px_-24px_rgba(0,0,0,0.4)]">
        <nav className="flex justify-between items-center w-[94%] h-5/6 m-auto ">
          <ul className="no-underline">
            <img className='w-48' src={t("Navbar.logo")} alt='logo'/>
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