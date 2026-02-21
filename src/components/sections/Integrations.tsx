"use client";

const integrations = [
  { name: "Slack", color: "#4A154B" },
  { name: "Notion", color: "#000000" },
  { name: "Trello", color: "#0079BF" },
  { name: "Asana", color: "#F06A6A" },
  { name: "Monday", color: "#FF3D57" },
  { name: "Jira", color: "#0052CC" },
];

export default function Integrations() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-body text-sm uppercase tracking-[2px] font-medium mb-4">
            what we do?
          </p>
          <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.16] text-foreground mb-6">
            We want to bring business<br />& the digital world together.
          </h2>
        </div>

        {/* Second Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <p className="text-body text-sm uppercase tracking-[2px] font-medium mb-4">
              what we do?
            </p>
            <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.16] text-foreground mb-6">
              Fully integrated with all the tools<br />you&apos;re already familiar with
            </h2>
            <p className="text-body text-lg max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          {/* Integration logos grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: integration.color }}
              >
                {integration.name[0]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
