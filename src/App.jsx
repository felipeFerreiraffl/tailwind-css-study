import Animation from "./components/Animation";
import Font from "./components/Fonts";
import Positioning from "./components/Positioning";
import Spacing from "./components/Spacing";
import "./index.css";

export default function App() {
  return (
    <div className="flex justify-center items-center m-10 flex-col gap-28">
      <Positioning />

      <Font />

      <Spacing />

      <Animation />
    </div>
  );
}
