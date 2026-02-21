'use client';

const stats = [
  { value: '100+', label: 'Projects completed' },
  { value: '28+', label: 'Team members' },
  { value: '99%', label: 'Customer satisfaction' },
  { value: '24/7', label: 'Support available' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
