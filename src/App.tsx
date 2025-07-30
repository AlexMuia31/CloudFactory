import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type TagListProps = {
  title: string;
  tags: string[];
};

function TagList({ title, tags }: TagListProps) {
  return (
    <div className="mt-8 px-6 max-w-5xl mx-auto">
      <div className="text-white text-lg font-semibold mb-4 font-inter">
        {title}
      </div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-gray-800 text-[#9EABB8] text-[14px] hover:bg-gray-700 cursor-pointer font-inter p-[5.5px_16px] rounded-[12px]"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function BoxArea97() {
  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      <img src="/task1/hero-bg.png" className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-inter font-black text-[38px] md:text-[48px] leading-[60px] tracking-[-2px] text-center text-white">
          Search for words, phrases and <br />
          meanings
        </h1>
        <BoxArea108 initialValue="" onSearch={onSearch} />
      </div>
    </div>
  );
}

function BoxArea108({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (search: string) => void;
}) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex items-center px-4 py-2 rounded-[12px] w-full max-w-xl mt-6 shadow-lg h-[64px] bg-[#1C2126]">
      <Search className="text-gray-400 mr-3" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder="Type to search..."
        className="flex-1 bg-transparent border-none text-white focus:ring-0
             placeholder:font-work placeholder:font-normal
             placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-[0px]"
      />
      <Button className="bg-[#1A80E5] hover:bg-blue-700 text-white ml-4 h-[48px] w-[96px] mr-[-7px]">
        Search
      </Button>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-[#121417] flex items-center justify-between px-6 py-4 border-b border-gray-800">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Logo" className="w-10 h-10" />
        <div className="text-white font-bold text-[18px] leading-[23px] tracking-[0px] font-inter">
          Worctionary
        </div>
      </div>

      <div className="flex items-center gap-4 ">
        <div style={{ position: "relative" }} className="hidden md:block">
          <span>
            <span>
              <span className="absolute left-3 top-2.5">
                <Search className="text-gray-400 text-sm" />
              </span>
            </span>
          </span>
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 pt-[8px] pb-[8px] bg-[#293038] text-white border-none focus:ring-0 rounded-[12px] h-[40px]"
          />
        </div>
        <Avatar style={{ width: "32px", height: "32px" }}>
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default function App() {
  const [tags] = useState([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <main className="bg-[#121417] min-h-screen text-white">
      <Header />
      <BoxArea97 />
      <TagList title="Trending" tags={tags} />
      <TagList title="For you" tags={tags} />
    </main>
  );
}
