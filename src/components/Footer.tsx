export default function Footer() {
  return (
    <footer className="pt-[128px] pb-[78px] text-tx-color">
      <div className="">
        <div className="block justify-center items-center footer-content text-center">
          <p className="font-sora text-[19px] font-bold">JosiAlex</p>

          <ul
            data-in="#"
            data-out="#"
            className="my-[33px] mb-[37px] text-[#676767] text-[12px] font-inter uppercase p-0 flex items-center justify-center xs:gap-[24px] md:gap-[44px] flex-wrap"
            id="menu-footer-menu"
          >
            <li id="menu-item-1856" className="">
              <a
                className="  font-iter"
                title="Home"
                href="https://wpriverthemes.com/gridx/"
              >
                Home
              </a>
            </li>
            <li
              id="menu-item-1857"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1857"
            >
              <a
                title="About"
                href="https://wpriverthemes.com/gridx/about-page/"
              >
                About
              </a>
            </li>
            <li
              id="menu-item-1859"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1859"
            >
              <a title="Works" href="https://wpriverthemes.com/gridx/work/">
                Works
              </a>
            </li>
            <li
              id="menu-item-1858"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1858"
            >
              <a
                title="Contact"
                href="https://wpriverthemes.com/gridx/contact-info/"
              >
                Contact
              </a>
            </li>
          </ul>
          <p className="text-[14px] text-[#727272] font-inter ">
            © All rights reserved 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
