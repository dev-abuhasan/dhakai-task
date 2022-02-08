import { Suspense } from "react";
import Loading from "./Loading";

const LoadingSuspense = ({ children }) => {
    return <Suspense fallback={<Loading />}>{children}</Suspense>
};

export default LoadingSuspense;