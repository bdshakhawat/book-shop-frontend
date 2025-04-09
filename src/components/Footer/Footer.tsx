

const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside >
           <img src="/src/assets/360_F_211078110_mttxEdu3gsSbMKajsy98E4M4E5RUCiuo-removebg-preview.png" alt="" />
           
        </aside>
        <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
        </footer>
            
        </div>
    );
};

export default Footer;