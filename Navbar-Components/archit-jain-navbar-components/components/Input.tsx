import React from "react";
import { Input } from "./ui/input";
const SearchInput = () => {
  return (
    <div>
      <Input
        type="email"
        placeholder="Search"
        className="w-80 border-none bg-[#EDF3F8] rounded-lg outline-none"
      />
    </div>
  );
};

export default SearchInput;
