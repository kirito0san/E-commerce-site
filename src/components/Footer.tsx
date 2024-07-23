import { Input } from "@/components/ui/input";
import QRCodeIcon from "./icons/qrcodeIcon";
import GoogleIcon from "./icons/googleIcon";
import AppStoreIcon from "./icons/appStoreIcon";
import FbIcon from "./icons/fbIcon";
import TwIcon from "./icons/twIcon";
import IgIcon from "./icons/igIcon";
import InIcon from "./icons/inIcon";
const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex flex-wrap justify-between gap-[60px] py-10 mx-auto w-5/6 text-white text-start">
        <div className="flex flex-col gap-3">
          <h2>Exclusive</h2>
          <p>Subscribe</p>
          <h4>Get 10% off your first order</h4>
          <Input className="bg-black" type="email" placeholder="Email" />
        </div>
        <div className="flex flex-col gap-3">
          <h2>Support</h2>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
          <p>+88015-88888-9999</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2>Account</h2>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2>Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-3">
          <h2>Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className="flex gap-4 justify-between">
            <QRCodeIcon />
            <div>
              <GoogleIcon />
              <AppStoreIcon />
            </div>
          </div>
          <div className="flex gap-8">
            <a href="/">
              {" "}
              <FbIcon />
            </a>
            <a href="/">
              {" "}
              <TwIcon />
            </a>
            <a href="/">
              {" "}
              <IgIcon />
            </a>
            <a href="/">
              {" "}
              <InIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
