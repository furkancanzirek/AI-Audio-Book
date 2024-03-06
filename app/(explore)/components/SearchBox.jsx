const SearchBox = (
    {className = ''}
) => {
  return (
    <div
     className={`w-full max-w-md ${className}`}>
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-sm focus-within:scale-[1.01] transition-all overflow-hidden bg-gray-500/10 focus-within:bg-primary group" >
        <div className="grid w-12 h-full text-gray-300 place-items-center group-focus-within:text-background ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="w-full h-full pr-2 text-sm font-normal text-gray-300 bg-transparent outline-none peer placeholder:text-gray-300 group-focus-within:text-background group-focus-within:placeholder-background "
          type="text"
          id="search"
          placeholder="Search something.."
        />
      </div>
    </div>
  );
};

export default SearchBox;
