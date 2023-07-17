import { ReactNode } from "react";

const WorkAchievementBullet = ({ children }: { children: ReactNode }) => (
  <li className="list-disc pb-6">{children}</li>
);

export default WorkAchievementBullet;
