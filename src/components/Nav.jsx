import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants/index";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="Logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <>
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-monts errat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            </>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
