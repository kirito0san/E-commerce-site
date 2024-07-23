import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Header = () => {
  return (
    <>
      <header className="flex relative flex-col gap-3 items-center px-5 py-2 text-white bg-black sm:flex-row">
        <div className="flex-1 gap-2 justify-center items-center md:flex">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <span className="font-semibold">ShopNow</span>
        </div>
        <Select>
          <SelectTrigger className="w-[90px] outline-none bg-black">
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Arabic">Arabic</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </header>
    </>
  );
};

export default Header;
