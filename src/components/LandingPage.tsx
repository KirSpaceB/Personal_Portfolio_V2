
import useAnimatedString from "../Hooks/useAnimatedString";
export default function LandingPage() {
  const animatedString = useAnimatedString
  (
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 1); // Example usage

  return (
    <div className="flex flex-col justify-start bg-red-500 w-screen ">
      <header className="bg-orange-500 h-16">

      </header>
      
      <div className="flex flex-grow flex-col justify-start">
        <div className="flex flex-row items-center">
          <div className="w-16 h-16 bg-blue-500 m-16">

          </div>
          <p className="flex-1 lg:h-auto overflow-hidden text-wrap" // Applying a fixed width to stabilize layout
          >
            {animatedString}
          </p>
        </div>

        <div className="flex flex-row items-center">
          <div className="w-16 h-16 bg-blue-500 m-16">

          </div>
          <p className="flex-1 lg:h-auto overflow-hidden text-wrap" // Applying a fixed width to stabilize layout
          >
            {animatedString}
          </p>
        </div>
      </div>

      <footer className="bg-green-500 h-16">

      </footer>
    </div>
  );
}
