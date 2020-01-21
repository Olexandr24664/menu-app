import React, { useState } from "react";
import { Search } from "semantic-ui-react";

const SearchBar: React.FC = () => {
  const [isLoading] = useState(false);
  return <Search loading={isLoading} />;
};

export default SearchBar;
