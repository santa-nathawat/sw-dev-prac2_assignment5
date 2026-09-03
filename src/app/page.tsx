import Banner from "@/components/Banner";
import Card from "@/components/Card";

const venues = [
  {
    venueName: "The Bloom Pavilion",
    imgSrc: "/img/bloom.jpg",
  },
  {
    venueName: "Spark Space",
    imgSrc: "/img/sparkspace.jpg",
  },
  {
    venueName: "The Grand Table",
    imgSrc: "/img/grandtable.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950">
      <Banner />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {venues.map((venue) => (
          <Card
            key={venue.venueName}
            venueName={venue.venueName}
            imgSrc={venue.imgSrc}
          />
        ))}
      </section>
    </main>
  );
}
