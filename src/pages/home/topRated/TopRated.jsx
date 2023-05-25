import { useState } from "react";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Crousel from "../../../components/crousel/Crousel";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movie" ? "movie" : "tv");
  };

  return (
    <>
      <div className="crouselSection">
        <ContentWrapper>
          <span className="crouselTitle">Top Rated</span>
          <SwitchTab data={["Movie", "TV"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Crousel data={data?.results} loading={loading} endpoint={endpoint}/>
      </div>
    </>
  );
};

export default TopRated;
