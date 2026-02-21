'use client';

const integrations = [
  { name: 'Asana', color: '#F06A6A' },
  { name: 'Zendesk', color: '#03363D' },
  { name: 'Zoom', color: '#2D8CFF' },
  { name: 'Slack', color: '#4A154B' },
  { name: 'Zapier', color: '#FF4A00' },
  { name: 'Trello', color: '#0079BF' },
  { name: 'Teams', color: '#6264A7' },
  { name: 'Mailchimp', color: '#FFE01B' },
  { name: 'Google Meet', color: '#00897B' },
];

export default function Integrations() {
  return (
    <section className="py-20 bg-white animate-slideUp">
      <div className="container mx-auto px-6 text-center">
        <span className="text-sm uppercase tracking-wider text-body">what we do?</span>
        <h2 className="text-[42px] leading-[1.2] font-semibold text-foreground mt-4 mb-4">
          Fully integrated with all the tools<br />
          you&apos;re already familar with
        </h2>
        <p className="text-body mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse<br />
          varius enim in eros elementum tristique.
        </p>

        {/* Integration Logos */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="w-[140px] h-[100px] rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${integration.color}20` }}
            >
              <span 
                className="font-medium text-sm"
                style={{ color: integration.color }}
              >
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <a href="#" className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M8.15685 4.96448L13.8137 10.6213L8.15685 16.2782" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Learn More
        </a>
      </div>
    </section>
  );
}
