import Activity from "./components/home/introduction/activity";
import ActivityContent from "./components/home/content/activity-content";
import FirstView from "./components/home/introduction/first-view";
import ActivityAchievement from "./components/home/achievement/activity-achievement";

const HomePage = () => {
  return (
    <>
      <FirstView />
      <Activity />
      <ActivityContent />
      <ActivityAchievement />
    </>
  );
};

export default HomePage;
