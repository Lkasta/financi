import Image from "next/image";

export default function StateFlag({
  path,
  state,
  width = "w-12",
}: {
  path: string;
  state: string;
  width?: string;
}) {
  if (!path) {
    return (
      <div
        className={`${width} h-24 bg-green-100 rounded-full overflow-hidden`}
      />
    );
  }

  return (
    <div
      className={`${width} aspect-square relative bg-white rounded-full overflow-hidden border border-gray-50`}
    >
      <Image
        className="object-cover w-full h-full pointer-events-none select-none"
        src={path || "/public/dices.webp"}
        alt={`${state} flag`}
        width={100}
        height={100}
      />
    </div>
  );
}
