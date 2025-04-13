const Footer = () => {
    return (
      <div className="mt-10">
        <footer className="bg-base-200 text-base-content p-10">
          <div className="max-w-[80%] mx-auto flex flex-col sm:flex-row sm:justify-between gap-10">
            <aside className="flex justify-center sm:justify-start">
              <img
                src="/src/assets/360_F_211078110_mttxEdu3gsSbMKajsy98E4M4E5RUCiuo-removebg-preview.png"
                alt="Logo"
                className="w-32"
              />
            </aside>
            <nav className="grid">
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="grid">
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="grid">
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  