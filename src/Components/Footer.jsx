import LogoSVG from "../Components/SVGComponents/LogoSVG";
import { RiGithubFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer bg-base-200/25 text-base-content p-10 mt-20 rounded-lg">
  <aside>
    <figure className="h-20 aspect-1">
    <LogoSVG/>
    </figure>
    <h1 className="font-logo text-4xl text-defaultColor font-semibold tracking-wide">ReelEra
            <small className="text-xs font-space text-pink-300 italic tracking-tight font-thin md:block hidden">one stop for all Movies</small>
    </h1>
    
    <section className="flex gap-2 items-center">
        <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target="_blank"><FaFacebook size={30} fill="#1877F2"/></a>
        <a href="https://github.com/Dev-NayanBiswas" target="_blank"><RiGithubFill size={30} /></a>
        <a href="https://www.linkedin.com/in/nayan-biswas1996/" target="_blank"><FaLinkedinIn size={30} fill="#1877F2"/></a>
    </section>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">One One Help</a>
    <a className="link link-hover">COD</a>
    <a className="link link-hover">24/7 Customer Care</a>
    <a className="link link-hover">Refund Policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Collaborate</a>
    <a className="link link-hover">Remote Jobs</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of Uses</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ReelEra 1998 Ltd</p>
  </aside>
</footer>
    </>
  );
}

export default Footer;
