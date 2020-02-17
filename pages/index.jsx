import dynamic from "next/dynamic";

const DynamicContent = dynamic(() => import("../src/Content"));

export default function Index() {
    return <DynamicContent />
}