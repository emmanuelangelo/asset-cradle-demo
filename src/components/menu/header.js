import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { header } from 'react-bootstrap';
import { Link } from '@reach/router';


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);



const Header = function () {

  const [, setOpenMenu] = React.useState(false);
  // eslint-disable-next-line no-empty-pattern
  const [] = React.useState(false);
  // eslint-disable-next-line no-empty-pattern
  const [] = React.useState(false);
  const [, setOpenMenu3] = React.useState(false);
  const closeMenu = (): void => {
    setOpenMenu(false);
  };
  // eslint-disable-next-line no-unused-vars
  const closeMenu3 = (): void => {
    setOpenMenu3(false);
  };

  const [showmenu, btn_icon] = useState(false);
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");

      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      } if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <header id="myHeader" className='navbar white'>
      <div className='container'>
        <div className='row w-100-nav'>
          <div className='logo px-0'>
            <div className='navbar-title navbar-item'>
              <NavLink to="/">
                <img
                  width='30%'
                  src=".\src\assets\nav.png"
                  className="img-fluid d-block"
                  alt="#"
                />
                <img
                  width='30%'
                  src=".\src\assets\nav.png"
                  className="img-fluid d-3"
                  alt="Asset Cradle"
                />
                <img
                  width='30%'
                  src=".\src\assets\nav.png"
                  className="img-fluid d-none"
                  alt="#"
                />
              </NavLink>
            </div>
          </div>

          <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
          </div>

          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu &&
                <div className='menu'>
                  <div className='navbar-item'>
                    <NavLink to="/explore" onClick={() => btn_icon(!showmenu)}>
                      Explore
                    </NavLink>
                  </div>
                  <div className='navbar-item'>
                    <NavLink to="/create" onClick={() => btn_icon(!showmenu)}>
                      Create
                    </NavLink>
                  </div>
                </div>
              }
            </Breakpoint>

            <Breakpoint xl>
              <div className='menu'>
                <div className='navbar-item'>
                  <NavLink to="/explore">
                    Explore
                    <span className='lines'></span>
                  </NavLink>
                </div>
                <div className='navbar-item'>
                  <NavLink to="/create">
                    Create
                    <span className='lines'></span>
                  </NavLink>
                </div>
              </div>
            </Breakpoint>
          </BreakpointProvider>

          <div className='mainside'>
            <NavLink to="/wallet" className="btn-main">
              <i className="icon_wallet_alt"></i>
              <span>Connect Wallet</span>
            </NavLink>
          </div>

        </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>
    </header>
  );
}
export default Header;