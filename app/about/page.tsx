import SubHeader from "../components/about/subheader";
import AboutBarArea from "../components/about/AboutBarArea";
import AboutCommentArea from "../components/about/AboutCommentArea";
import { missionData, valueData, visionData } from "../const/about-page-data";

const page = () => {
  return (
    <>
      <SubHeader
        title={"PeachTechの価値観"}
        description={
          "PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観"
        }
      />
      <SubHeader />
      <AboutBarArea title={"Vision"} aboutPageData={visionData} />
      <AboutBarArea title={"Misson"} aboutPageData={missionData} />
      <AboutBarArea title={"Values"} aboutPageData={valueData} />
      <AboutCommentArea
        title={"代表よりメッセージ"}
        comment={
          "PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観PeachTechの価値観"
        }
      />
    </>
  );
};

export default page;
