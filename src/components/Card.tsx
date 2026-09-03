import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

type CardProps = {
  venueName: string;
  imgSrc: string;
};

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <InteractiveCard>
      <article className="overflow-hidden rounded-lg border border-zinc-200">
        <Image
          className="h-56 w-full object-cover"
          src={imgSrc}
          alt={venueName}
          width={640}
          height={360}
        />
        <div className="p-5">
          <h2 className="text-xl font-semibold">{venueName}</h2>
        </div>
      </article>
    </InteractiveCard>
  );
}
