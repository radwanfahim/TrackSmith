import { BsSearch } from "solid-icons/bs";

const Search = () => {
  return (
    <div>
      <label class="w-full input outline-none rounded-lg focus:ring-teal-500 focus:border-none focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-none">
        <BsSearch class="text-gray-600 " />
        <input
          type="search"
          class="grow "
          placeholder="Search order by customer or product..."
        />
      </label>
    </div>
  );
};

export default Search;
