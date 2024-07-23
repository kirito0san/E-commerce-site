import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Component2 from "../../public/assets/Component 2.png";
import hart from "../../public/assets/hart.png";
import user from "../../public/assets/user.png";
import Cart1 from "../../public/assets/Cart1.png";
const Nav = () => {
  return (
    <nav className="flex flex-col">
      <div className="flex flex-wrap gap-5 justify-between items-center py-5 mx-auto w-5/6 border-b-2">
        <h2>Exclusive</h2>
        <ul className="flex rounded-lg bg-[#eee] justify-between flex-wrap w-[350px] gap-3">
          <li>
            <Button variant="ghost">home</Button>
          </li>
          <li>
            <Button variant="ghost">contact</Button>
          </li>
          <li>
            {" "}
            <Button variant="ghost">about</Button>
          </li>
          <li>
            {" "}
            <Button variant="ghost">sign up</Button>
          </li>
        </ul>
        <label className="flex gap-1 w-[230px] p-2 rounded-lg border" htmlFor="search">
          <input
            className="flex-1 outline-none"
            id="search"
            name="search"
            type="text"
            placeholder="What are you looking for?"
          />
          <button>
            <img src={Component2} alt="Why is not show cheek my src" />
          </button>{" "}
        </label>{" "}
        <div className="flex gap-2 items-center">
          <button>
            <img src={hart} alt="" />
          </button>
          <button>
            {" "}
            <img src={user} alt="" />
          </button>
          <button>
            {" "}
            <img src={Cart1} alt="" />
          </button>
        </div>
      </div>
      <hr />
      <div className="py-3 mx-auto w-5/6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </nav>
  );
};

export default Nav;
