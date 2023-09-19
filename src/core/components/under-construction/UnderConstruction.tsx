import { useLocation } from "react-router-dom";

function upperCaseFirstLetter(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function UnderConstruction() {
  const currentLocation = useLocation();
  const pathSegments = currentLocation.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1] || "Page";

  const pageName =
    currentLocation.pathname === "/uc"
      ? currentLocation.pathname.toUpperCase()
      : upperCaseFirstLetter(lastSegment);

  return (
    <div className="my-20 py-12 flex justify-center items-center text-3xl md:text-5xl font-extrabold">

      <div className="flex flex-col justify-between items-center ml-4">
        <h3 className="text-gray-300">Coming Soon</h3>
        <h3 className="text-slate-600">{`${pageName} is Under Construction`}</h3>
      </div>
    </div>
  );
}

UnderConstruction.displayName = "@UnderConstruction";
