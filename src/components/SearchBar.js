export const SearchBar = ({ propQuery, propSetQuery, propSearch }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search..."
      onChange={(e) => {
        propSetQuery(e.target.value);
      }}
      onKeyPress={propSearch}
      value={propQuery}
    />
  );
};
