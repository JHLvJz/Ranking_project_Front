import { PieChart } from "react-minimal-pie-chart";

export default function Chart() {
  const data = [
    { title: "One", value: 10, color: "#E38627" },
    { title: "two", value: 20, color: "wheat" },
  ];
  return (
    <PieChart
      data={data}
      animate={true}
      center={[70, 70]}
      viewBoxSize={[140, 140]}
    />
  );
}
