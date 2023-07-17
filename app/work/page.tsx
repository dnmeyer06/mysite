//Image imports
import shhh from "../../public/shhhh.png";
import innerworldLogo from "../../public/innerworldLogo.png";
import tackingNetZeroUI from "../../public/trackingNetZero.png";
import prodPerfectoLogo from "../../public/prodPerfectLogo.png";
import refoldLogo from "../../public/refold.png";
// import massMutualLogo from "../../public/massMutual.png";

// Component imports
import WorkTile from "@/components/WorkPageComponents/WorkTile";

export default function Work() {
  return (
    <>
      <div className="relative flex flex-wrap justify-center gap-6">
        <WorkTile
          link="work/shhh"
          alt="Stealth mode AI project tile image"
          src={shhh}
          title="Stealth mode AI project"
        />

        <WorkTile
          link="work/tracking_net_zero"
          alt="Tacking Net Zero UI"
          src={tackingNetZeroUI}
          title="Tracking Net Zero"
        />

        <WorkTile
          link="work/innerworld"
          alt="Innerworld Logo"
          src={innerworldLogo}
          title="Innerworld"
        />

        <WorkTile
          link="work/prod_perfect"
          alt="ProdPerfect Logo"
          src={prodPerfectoLogo}
          title="ProdPerfect"
        />

        <WorkTile
          link="work/refold"
          alt="Refold Logo"
          src={refoldLogo}
          title="Refold Languages"
        />
        {/* 
        <WorkTile
          link="work/mass_mutual"
          alt="Mass Mutual Logo"
          src={massMutualLogo}
          title="MassMutual"
        /> */}
      </div>
    </>
  );
}
