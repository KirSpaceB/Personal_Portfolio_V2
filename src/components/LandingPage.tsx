
import useAnimatedString from "../Hooks/useAnimatedString";
export default function LandingPage() {
  const animatedString = useAnimatedString("Hello, world!", 100); // Example usage

  return (
    <div className="flex-grow bg-red-500">
      {animatedString}
    </div>
  );

}
