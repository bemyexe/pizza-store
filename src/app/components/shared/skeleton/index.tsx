import { FC } from "react";
import ContentLoader from "react-content-loader";

interface SkeletonProps {
  className?: string;
}

const Skeleton: FC<SkeletonProps> = (props) => (
  <ContentLoader
    speed={2}
    width={329}
    height={355}
    viewBox="0 0 329 355"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="91" y="201" rx="0" ry="0" width="158" height="15" />
    <rect x="9" y="227" rx="0" ry="0" width="308" height="79" />
    <rect x="31" y="315" rx="0" ry="0" width="100" height="31" />
    <rect x="202" y="318" rx="19" ry="19" width="88" height="27" />
    <circle cx="163" cy="97" r="94" />
  </ContentLoader>
);

export default Skeleton;
