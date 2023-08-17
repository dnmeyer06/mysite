import "./door-opening.css";

export default function DoorOpening() {
  return (
    <div className="w-96">
      <div className="outerPerspective flex h-96 w-96 border border-slate-500">
        <div className="innerPerspectiveTransform door-left relative grid h-96 w-48 grid-cols-2 items-center justify-items-center border border-black bg-amber-950 p-4">
          <div className="absolute right-2 h-4 w-4 rounded-full bg-yellow-600"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
        </div>
        <div className="innerPerspectiveTransform door-right relative grid h-96 w-48 grid-cols-2 items-center justify-items-center border border-black bg-amber-950 p-4">
          <div className="absolute left-2 h-4 w-4 rounded-full bg-yellow-600"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
          <div className="innerPerspectiveTransform h-12 w-12 bg-amber-900"></div>
        </div>
      </div>
      <p>Door opening animation. Hover the door to see what&apos;s inside</p>
    </div>
  );
}
