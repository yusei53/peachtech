import SubHeader from "../components/about/subheader";
import AboutBarArea from "../components/about/AboutBarArea";
import { missionData, valueData, visionData } from "../const/about-page-data";

const page = () => {
  return (
    <>
      <SubHeader />
      <AboutBarArea title={"Vision"} aboutPageData={visionData} />
      <AboutBarArea title={"Misson"} aboutPageData={missionData} />
      <AboutBarArea title={"Values"} aboutPageData={valueData} />
    </>
  );
};

export default page;
