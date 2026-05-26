// Session 41 — TheServices restructured as a 4-layer tech stack
// architecture. Foundation feeds Authority, Authority feeds Visibility,
// Visibility feeds Engagement. Reuses the 10 existing service
// illustrations from Session 39.

import type { ReactNode } from "react";
import {
  LocalVisibilityIllustration,
  GBPIllustration,
  AuthorityContentIllustration,
  AISearchIllustration,
  ReputationIllustration,
  WebsiteConversionIllustration,
  PressIllustration,
  SchemaIllustration,
  EmailIllustration,
  SocialIllustration,
} from "@/components/illustrations/ServiceIllustrations";
import { Reveal } from "@/components/ui/Reveal";
import { MarkerUnderline } from "@/components/ui/MarkerUnderline";

type LayerNum = 1 | 2 | 3 | 4;

function ServiceCard({
  num,
  name,
  desc,
  illustration,
  layer,
}: {
  num: string;
  name: string;
  desc: string;
  illustration: ReactNode;
  layer: LayerNum;
}) {
  return (
    <div className={`service-arch-card service-arch-card--layer${layer}`}>
      <div className="service-arch-card__illustration">{illustration}</div>
      <div className="service-arch-card__num">{num}</div>
      <div className="service-arch-card__name">{name}</div>
      <div className="service-arch-card__desc">{desc}</div>
    </div>
  );
}

export function TheServices() {
  return (
    <section className="services" id="services" aria-label="Engineered systems">
      <div className="services__inner">
        <Reveal className="services__header">
          <div className="services__label">
            <span className="services__label-marker" aria-hidden="true" />
            07 — The System
          </div>
          <h2 className="services__headline">
            Ten engineered services.{" "}
            <span className="services__highlight">
              One stack.
              <MarkerUnderline className="highlight-marker__underline" />
            </span>
          </h2>
          <p className="services__sub">
            Every engagement runs through our proprietary 4-layer
            architecture. Foundation systems feed authority systems. Authority
            feeds visibility. Visibility produces engagement and revenue.
            Stack any combination.
          </p>
        </Reveal>

        <Reveal className="services__architecture" delay={120}>
          <div className="services__flow-left">
            <div className="services__flow-label">DATA FLOW</div>
            <div className="services__flow-arrow" aria-hidden="true">↑</div>
          </div>

          <div className="services__layers">
            <div className="services__layer services__layer--4">
              <div className="services__layer-label">
                <span className="services__layer-num">04</span>
                <span className="services__layer-name">ENGAGEMENT LAYER</span>
                <span className="services__layer-desc">Customer-facing surfaces</span>
              </div>
              <div className="services__layer-cards">
                <ServiceCard
                  num="01"
                  name="Website and conversion"
                  desc="The page that turns visitors into qualified consultations."
                  illustration={<WebsiteConversionIllustration />}
                  layer={4}
                />
                <ServiceCard
                  num="02"
                  name="Email and newsletter"
                  desc="Nurturing the long decision cycles in legal and medical."
                  illustration={<EmailIllustration />}
                  layer={4}
                />
                <ServiceCard
                  num="03"
                  name="Selected social media"
                  desc="Brand presence at the surfaces where attention now lives."
                  illustration={<SocialIllustration />}
                  layer={4}
                />
              </div>
            </div>

            <div className="services__layer services__layer--3">
              <div className="services__layer-label">
                <span className="services__layer-num">03</span>
                <span className="services__layer-name">VISIBILITY LAYER</span>
                <span className="services__layer-desc">Where rankings happen</span>
              </div>
              <div className="services__layer-cards">
                <ServiceCard
                  num="04"
                  name="AI search optimization"
                  desc="Being the cited answer in ChatGPT, Perplexity, and Gemini."
                  illustration={<AISearchIllustration />}
                  layer={3}
                />
                <ServiceCard
                  num="05"
                  name="Press and authority"
                  desc="Real publication mentions that compound trust signals."
                  illustration={<PressIllustration />}
                  layer={3}
                />
              </div>
            </div>

            <div className="services__layer services__layer--2">
              <div className="services__layer-label">
                <span className="services__layer-num">02</span>
                <span className="services__layer-name">AUTHORITY LAYER</span>
                <span className="services__layer-desc">Content and reputation</span>
              </div>
              <div className="services__layer-cards">
                <ServiceCard
                  num="06"
                  name="Google Business Profile"
                  desc="The most valuable real estate in local search. Optimized weekly."
                  illustration={<GBPIllustration />}
                  layer={2}
                />
                <ServiceCard
                  num="07"
                  name="Authority content"
                  desc="Long-form articles that rank, get cited by AI, and convert."
                  illustration={<AuthorityContentIllustration />}
                  layer={2}
                />
                <ServiceCard
                  num="08"
                  name="Reputation management"
                  desc="Review velocity engineered. Response discipline maintained."
                  illustration={<ReputationIllustration />}
                  layer={2}
                />
              </div>
            </div>

            <div className="services__layer services__layer--1">
              <div className="services__layer-label">
                <span className="services__layer-num">01</span>
                <span className="services__layer-name">FOUNDATION LAYER</span>
                <span className="services__layer-desc">Technical infrastructure</span>
              </div>
              <div className="services__layer-cards">
                <ServiceCard
                  num="09"
                  name="Schema and technical foundation"
                  desc="The invisible infrastructure that makes everything else work."
                  illustration={<SchemaIllustration />}
                  layer={1}
                />
                <ServiceCard
                  num="10"
                  name="Local search visibility"
                  desc="Owning the map pack and local rankings in your metro."
                  illustration={<LocalVisibilityIllustration />}
                  layer={1}
                />
              </div>
            </div>
          </div>

          <div className="services__flow-right">
            <div className="services__flow-label">OUTCOMES</div>
            <div className="services__flow-list">
              <div>Revenue</div>
              <div>Clients</div>
              <div>Visibility</div>
              <div>Foundation</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
