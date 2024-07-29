
import useAnimatedString from "../Hooks/useAnimatedString";
import { ArrowUpComponent } from "./ArrowUpComponent";
import { OpenAiLogo } from "./OpenAiLogo";


export default function LandingPage() {
  const animatedString = useAnimatedString
  (
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 1
  );

  const animatedStringForInputBox = useAnimatedString("Test", 400);

  return (
    <div className="flex flex-col justify-start bg-[#212121] w-screen ">
      <div className="flex flex-grow flex-col justify-start m-8">
        <div className="flex flex-row items-center">
          <OpenAiLogo classname="lg:w-12 lg:h-16 lg:m-16 w-6 h-6 m-4"/>
          <p className="flex-1 lg:h-auto overflow-hidden text-wrap" // Applying a fixed width to stabilize layout
          >
            {animatedString}
          </p>
        </div>

        <div className="flex flex-row items-center">
          <OpenAiLogo classname="lg:w-12 lg:h-16 lg:m-16 w-6 h-6 m-4"/>
          <p className="flex-1 lg:h-auto overflow-hidden text-wrap text-sm" // Applying a fixed width to stabilize layout
          >
            {animatedString}
          </p>
        </div>
      </div>

      <footer className="bg-[#212121] h-16 flex justify-center items-center">
        <div className="flex justify-center items-center ">
          <div className="flex justify-start items-center w-64 h-12 rounded-full bg-[#2f2f2feb] text-[#141212]	 pl-4">
            {animatedStringForInputBox}
          </div>
          <div className="relative flex justify-center ">
            <ArrowUpComponent classname="relative right-10 rounded-full bg-gray"/>
          </div>
        </div>
      </footer>
    </div>
  );
}
