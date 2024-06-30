import SubHeader from "../components/about/subheader";
import AboutBarArea from "../components/about/AboutBarArea";
import AboutMessageArea from "../components/about/AboutMessageArea";
import { missionData, visionData, valueData } from "../const/about-page-data";

const page = () => {
  return (
    <>
      <SubHeader
        title={"PeachTechの価値観"}
        description={
          " PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観"
        }
      />
      <AboutBarArea title={"Vision"} aboutPageData={visionData} />
      <AboutBarArea title={"Misson"} aboutPageData={missionData} />
      <AboutBarArea title={"Values"} aboutPageData={valueData} />
      <AboutMessageArea
        title={"代表からのメッセージ"}
        comment={
          "PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観"
        }
      />
    </>
  );
};

export default page;
