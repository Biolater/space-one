import axios from "axios";
//@ts-ignore
import { SearchIcon, CloseIcon } from "../../utils/Svg";
import { useState, useEffect } from "react";
import SearchBarSuggestions from "./SearchBarSuggestions";
import PcMobileSearchBarSuggestions from "./PcMobileSearchBarSuggestions";
import { createPortal } from "react-dom";
import { useSearchBarContext } from "../SearchBarContext";
type MobileSearchBarProps = {
  isSearchMenuOpen: boolean;
  handleSearchMenuToggle: () => void;
};

const SearchBar = () => {
  const rootContainer = document.getElementById("root") as HTMLDivElement;
  const { searchQuery ,setSearchQuery } = useSearchBarContext();
  return (
    <>
      <input
        placeholder="Search"
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
        value={searchQuery}
        type="text"
        className="h-8 focus:outline-cyan-600 w-40 px-3 outline-none border-2 rounded border-gray-700 bg-transparent"
        id="search-input"
      />
      {createPortal(<PcMobileSearchBarSuggestions />, rootContainer)}
    </>
  );
};

const MobileSearchBar = ({
  isSearchMenuOpen,
  handleSearchMenuToggle,
}: MobileSearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<object[]>([]);
  const [noResult, setNoResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [sliceCount, setSliceCount] = useState<number>(5);
  //@ts-ignore
  useEffect(() => {
    setNoResult(false);
    let timeOut: NodeJS.Timeout;
    const endPoint = `https://images-api.nasa.gov/search?q=${searchTerm}`;
    const fetchData = async () => {
      try {
        const response = await (
          await axios.get(endPoint)
        ).data.collection.items;
        setSuggestions(response);
        if (response.length === 0) {
          setNoResult(true);
        } else {
          setNoResult(false);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (searchTerm.length > 0) {
      setLoading(true);
      timeOut = setTimeout(async () => {
        await fetchData();
      }, 500);
    } else {
      setSuggestions([]);
      setNoResult(false);
      setLoading(false);
    }
    return () => clearTimeout(timeOut);
  }, [searchTerm]);
  return (
    <>
      <div
        className={`search__menu lg:hidden absolute gap-4 duration-500 flex items-center px-4 py-5 bg-primary w-full transition-all ${
          isSearchMenuOpen ? "right-0" : "right-screenvw"
        }`}
      >
        <button title="Search" className="search-icon">
          <SearchIcon />
        </button>
        <input
          className="w-full bg-transparent focus:outline-cyan-600 outline-none"
          placeholder="Explore the Space"
          value={searchTerm}
          type="text"
          name="search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSliceCount(5);
          }}
          id="SearchInput"
        />
        <button
          title="Close Search Menu"
          onClick={() => {
            handleSearchMenuToggle();
            setSearchTerm("");
          }}
          className="search-icon lg:hidden"
        >
          <CloseIcon />
        </button>
      </div>
      <SearchBarSuggestions
        loading={loading}
        noResult={noResult}
        suggestions={suggestions}
        sliceCount={sliceCount}
        onLoadMore={() => setSliceCount((prev) => prev + 5)}
        hideLoadMore={sliceCount >= suggestions.length}
      />
    </>
  );
};

export { SearchBar, MobileSearchBar };
