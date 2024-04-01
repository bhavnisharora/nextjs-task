import HeroSection from "@/app/components/heroSection";
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
const page = () => {
  return (
    <>
      <HeroSection title={"Let's watch movie together"} imgUrl={"/home.svg"} /> 
    </>
  );
};

export default page;
