const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            className="logoimage"
            src="https://e7.pngegg.com/pngimages/241/721/png-clipart-black-and-gray-eagle-face-bald-eagle-logo-graphic-design-eagle-mammal-animals.png"
            alt="Logo"
          />
        </div>
        <div className="right">
          <nav className="nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
