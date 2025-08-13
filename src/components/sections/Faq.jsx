import React, { useState } from "react";
import SectionTemplate from "./SectionTemplate";

export default function FAQ({ setActiveSection }) {
  const [openIndex, setOpenIndex] = useState(null);

  const categories = {
    Me: [
      {
        q: "What are your passions?",
        a: `Picture this: me, hunched over a laptop at 2 AM, not because I have to, but because I can’t stop. That’s how much I love AI and tech — the rush of figuring out how to make life easier, cooler, and just a bit more magical.

And then there’s entrepreneurship. For me, there’s nothing like the thrill of taking an idea from a scrap of paper to something people actually use.`,
      },
      {
        q: "How did you get into tech?",
        a: `I’ve always been the person who likes to “fix” things — whether it's a broken gadget or a messy process. Studying CSE gave me the toolbox, but building my first working solution was the real challenge. That’s when the obsession really kicked in.`,
      },
      {
        q: "Where do you see yourself in 5 years?",
        a: `If all goes to plan, running a startup that blends AI and buttery-smooth UX, surrounded by a dream team of people who care as much as I do.

I’ll be traveling, keeping up my fitness game, and yes — still pulling the occasional all-nighter to code.`,
      },
      {
        q: "What changed a huge chunk of you?",
        a: `My college’s The Literary & Debating society — my second home and the most elite club on campus. It pulled in people from wildly different backgrounds, created insane networks, my super intimidating seniors and alumni I still keep in touch with.

Weekly Meeting, GDs, debates on geopolitics, CAUPEDs, and ice-breakers… it was my refuge outside of tech. My interest ran deep, so I contested the elections and became VP.

The club taught me leadership, strategy, collaboration, and how to own a stage. Shoutout to my crew, 10Hearts!`,
      },
    ],
    Professional: [
      {
        q: "How do you keep your skills up to date?",
        a: `I treat learning like most people treat Netflix — always something queued up. Courses, webinars, hands-on experiments… I’m that person who says, “Ooh, let’s try building that” at 11 PM.`,
      },
      {
        q: "What makes you a valuable team member?",
        a: `I’m the mix of quick learner, stubborn problem-solver, and cheerleader your team didn’t know it needed. I like making sure everyone shines while we deliver something worth bragging about.`,
      },
      {
        q: "What motivates you to work in tech?",
        a: `The fact that one small idea can go from “sketch on a napkin” to “someone’s daily essential” in weeks. Tech moves fast — and I like keeping up.`,
      },
      {
        q: "How do you handle tight deadlines?",
        a: `Like an air-traffic controller — I keep priorities clear, communication open, and focus razor-sharp. And somehow, I still manage to sneak in good design and polish.`,
      },
    ],
    Fun: [
      {
        q: "What are you certain about that 90% get wrong?",
        a: `That success is just luck. Nope. It’s showing up every day, pivoting when things break, and putting in the work when no one’s watching.`,
      },
      {
        q: "What’s the craziest thing you’ve ever done?",
        a: `Two major events. Same time. Both needed me. One was at my club, the other a Hackathon.

I dashed between venues and Gmeet, juggled crises in real time, and somehow made both look effortless. My heart was pounding like I’d run a marathon — but it paid off. The event crushed it and even made it to the finals.`,
      },
    ],
    Contact: [
      {
        q: "Where are you right now?",
        a: `Bangalore — city of startups, tech, and food so good it should be illegal.`,
      },
      {
        q: `What kind of projects make you say "yes" immediately?`,
        a: `Anything where AI does 99% of the heavy lifting and I get 100% of the fun 😆. But really — AI + great UX, especially in SaaS, is my jam.`,
      },
    ],
  };

  const toggleIndex = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  let counter = 0;

  return (
    <SectionTemplate setActiveSection={setActiveSection} sectionName="FAQ">
      <div className="flex flex-col gap-8 w-full max-w-3xl mx-auto">
        {Object.entries(categories).map(([category, faqs]) => (
          <div key={category}>
            <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono border-b border-green-500 pb-1">
              {category}
            </h2>
            {faqs.map((faq) => {
              const index = counter++;
              return (
                <div
                  key={faq.q}
                  className="border border-green-500/40 mb-2 rounded-lg overflow-hidden bg-black/30 backdrop-blur-sm"
                >
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full text-left px-4 py-3 flex justify-between items-center text-green-300 hover:text-green-100 font-mono"
                  >
                    <span>{faq.q}</span>
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 py-3 text-green-100 whitespace-pre-line">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
}
