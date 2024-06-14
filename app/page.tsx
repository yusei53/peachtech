import Activity from "./components/home/introduction/activity";
import ActivityContent from "./components/home/content/activity-content";
import FirstView from "./components/home/introduction/first-view";
import ActivityAchievement from "./components/home/achievement/activity-achievement";
import Sponsor from "./components/home/sponsor/sponsor";

const HomePage = () => {
  return (
    <>
      <FirstView />
      <Activity />
      <ActivityContent />
      <ActivityAchievement />
      <Sponsor />
    </>
  );
};

export default HomePage;
