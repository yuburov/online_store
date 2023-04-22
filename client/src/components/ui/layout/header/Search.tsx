import SquareButton from "@/ui/button/SquareButton";
import { useRouter } from "next/router";
import { FC, useCallback, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search: FC = () => {
  const router = useRouter();
  const { term } = router.query;
  const [query, setQuery] = useState<string>(term ? term.toString() : "");

  const goToSearch = useCallback(() => {
    if (query.trim().length > 0) {
      router.push(`/search?term=${query}`);
    }
  }, [query]);

  useEffect(() => {
    const enterEvent = (e: any) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [query, goToSearch]);

  return (
    <div className="flex items-center">
      <input
        placeholder="Search..."
        className="max-w-md py-[6px] px-[12px] bg-black outline-none text-white w-full rounded-lg rounded-r-none"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        type="text"
      />
      <SquareButton Icon={AiOutlineSearch} onClick={goToSearch} />
    </div>
  );
};

export default Search;
