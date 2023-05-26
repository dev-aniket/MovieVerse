import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";

import "./style.scss";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendations";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { credits, creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      {/* <Cast data={credits?.cast?.[0]} loading={creditsLoading}/> */}

      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
