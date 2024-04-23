
import useAnimatedString from "../Hooks/useAnimatedString";
export default function LandingPage() {
  const animatedString = useAnimatedString("Hello, world!", 100); // Example usage

  return (
    <div className="flex flex-col justify-between bg-red-500">
      <header className="bg-blue-500 w-screen h-16">

      </header>
      
      <div className="flex flex-col justify-start">
        <div className="flex flex-row items-center">
          <div className="w-16 h-16 bg-blue-500 m-16">

          </div>
          <p className="w-[200px] overflow-hidden text-wrap" // Applying a fixed width to stabilize layout
          >
            {animatedString}
          </p>
        </div>

        <div className="flex flex-row items-center">
          <div className="w-16 h-16 bg-blue-500 m-16">

          </div>
          <p className="w-[200px] overflow-hidden text-wrap" // Applying a fixed width to stabilize layout
          >
            {animatedString}
          </p>
        </div>
      </div>

      <footer className="bg-blue-500 w-screen h-16">

      </footer>
    </div>
  );
}
