import Link from "next/link";

interface CTASectionProps {
  heading: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
}

export default function CTASection({
  heading,
  subtext,
  ctaText,
  ctaLink,
}: CTASectionProps) {
  return (
    <section
      className="py-16 px-4 md:px-8 text-black"
      style={{
        background:
          "linear-gradient(90deg, rgba(205,255,218,1) 0%, rgba(176,219,235,1) 50%, rgba(148,185,255,1) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-lg md:text-xl mb-8 text-gray-400">{subtext}</p>
        <Link
          href={ctaLink}
          className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700 disabled:pointer-events-none disabled:opacity-50"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
