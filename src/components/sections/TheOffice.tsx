// Session 50 — TheOffice. Heading renamed to "An inside look at our
// team." The magazine-collage placeholders now host AI team images
// (moved out of Operators). When real photography is captured, swap
// each <img src> for the real shot at the same path.

import Image from "next/image";
import { TriangleMark } from "@/components/ui/TriangleMark";
import { Reveal } from "@/components/ui/Reveal";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";

// AI placeholder shots living in /public/assets. Mark each as a
// PLACEHOLDER so the real-shoot drop-in is obvious.
type OfficeShot = {
  src: string;
  alt: string;
  ratio: string;
  width: number;
  height: number;
  caption: string;
};

const SHOTS: ReadonlyArray<OfficeShot> = [
  {
    src: "/assets/office/exterior-front.png",
    alt: "Rysen studio exterior (placeholder)",
    ratio: "3 / 4",
    width: 720,
    height: 960,
    caption: "STUDIO · EXTERIOR · PLACEHOLDER",
  },
  {
    src: "/assets/team/team-photo.png",
    alt: "Rysen team at work (placeholder)",
    ratio: "4 / 5",
    width: 720,
    height: 900,
    caption: "TEAM AT WORK · PLACEHOLDER",
  },
  {
    src: "/assets/founder/art-khan-portrait.png",
    alt: "Founder portrait, Art Khan (placeholder)",
    ratio: "16 / 9",
    width: 960,
    height: 540,
    caption: "FOUNDER · PLACEHOLDER",
  },
];

export function TheOffice() {
  return (
    <section
      className="office-section office-section--collage"
      aria-label="The team"
    >
      <div className="office-section__inner">
        <Reveal className="office-section__header">
          <div className="office-section__label">
            <TriangleMark size={10} />
            <span>THE TEAM</span>
          </div>
          <h2 className="office-section__headline">
            An inside look at{" "}
            <span className="office-section__highlight">
              our team
              <MarkerUnderline className="highlight-marker__underline" />
            </span>
            .
          </h2>
          <p className="office-section__sub">
            A working studio of engineers and creatives. These are the
            people behind every engagement.
          </p>
        </Reveal>

        <div className="office-section__gallery">
          {SHOTS.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 80}>
              <figure
                className="office-section__shot"
                style={{ aspectRatio: shot.ratio }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  className="office-section__shot-img"
                />
                <figcaption className="office-section__shot-caption">
                  {shot.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
