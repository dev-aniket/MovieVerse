import { useState } from "react";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Crousel from "../../../components/crousel/Crousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const {data, loading} = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <>
      <div className="crouselSection">
        <ContentWrapper>
          <span className="crouselTitle">Trending</span>
          <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Crousel data = {data?.results} loading={loading} />
      </div>
    </>
  );
};

export default Trending;
