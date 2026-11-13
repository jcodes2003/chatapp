import React from "react";

const page = () => {
  const tasks = [
    {
      time: "09:30",
      title: "Plan the week",
      detail: "Choose what matters most",
      color: "bg-amber-200",
    },
    {
      time: "11:00",
      title: "Make a first draft",
      detail: "Give the idea room to grow",
      color: "bg-rose-200",
    },
    {
      time: "14:30",
      title: "Take a proper break",
      detail: "A walk counts as progress",
      color: "bg-emerald-200",
    },
  ];

  const notes = [
    {
      title: "A little less, a little better",
      tag: "THOUGHT FOR TODAY",
      color: "bg-[#e8eadf]",
    },
    {
      title: "Ideas for a slower Sunday",
      tag: "IN YOUR NOTES",
      color: "bg-[#f3e7db]",
    },
  ];
  return (
    <main className="min-h-screen bg-[#f8f7f3] px-5 py-6 text-[#20251f] sm:px-10 sm:py-9">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between border-b border-[#e7e5dd] pb-5">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            daybook<span className="text-[#78846d]">.</span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-[#777970]">
            <a href="#today" className="transition hover:text-[#20251f]">
              Today
            </a>
            <a href="#notes" className="transition hover:text-[#20251f]">
              Notes
            </a>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8eadf] text-xs font-medium text-[#59624f]">
              A
            </span>
          </nav>
        </header>

        <section
          id="home"
          className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#85877c]">
              Saturday · A fresh page
            </p>
            <h1 className="max-w-2xl text-5xl font-medium leading-[1.06] tracking-[-0.055em] sm:text-7xl">
              Make room for what{" "}
              <span className="font-serif italic text-[#78846d]">matters.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-[#777970]">
              A calmer place to collect your thoughts, find your focus, and make
              today your own.
            </p>
            <a
              href="#today"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#30382c] px-6 py-3 text-sm text-white transition hover:bg-[#485343]"
            >
              Start your day <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-[2rem] bg-[#e8eadf] p-8 sm:min-h-72">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-[#d3d8c7]" />
            <div className="absolute -right-2 -top-12 h-48 w-48 rounded-full border border-[#d3d8c7]" />
            <div className="relative max-w-xs text-center">
              <span className="text-4xl" aria-hidden="true">
                ☼
              </span>
              <p className="mt-3 font-serif text-2xl italic text-[#53604b]">
                “Almost everything will work again if you unplug it for a few
                minutes, including you.”
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#85877c]">
                Anne Lamott
              </p>
            </div>
          </div>
        </section>

        <section
          id="today"
          className="grid gap-10 border-t border-[#e7e5dd] py-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16"
        >
          <div>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#85877c]">
                  A gentle plan
                </p>
                <h2 className="mt-2 text-2xl font-medium tracking-tight">
                  Your day, at a glance
                </h2>
              </div>
              <span className="text-sm text-[#85877c]">3 moments</span>
            </div>
            <div className="divide-y divide-[#e7e5dd]">
              {tasks.map((task) => (
                <article
                  key={task.time}
                  className="flex items-center gap-4 py-4"
                >
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${task.color}`}
                  />
                  <span className="w-12 text-xs tabular-nums text-[#85877c]">
                    {task.time}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{task.title}</h3>
                    <p className="mt-1 text-sm text-[#85877c]">{task.detail}</p>
                  </div>
                  <span className="text-[#a4a59c]" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div id="notes">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#85877c]">
                  Keep close
                </p>
                <h2 className="mt-2 text-2xl font-medium tracking-tight">
                  A few good reminders
                </h2>
              </div>
              <a
                href="#notes"
                className="text-sm text-[#78846d] hover:text-[#30382c]"
              >
                All notes ↗
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {notes.map((note) => (
                <article
                  key={note.title}
                  className={`rounded-2xl ${note.color} p-5`}
                >
                  <p className="text-[10px] font-medium tracking-[0.16em] text-[#85877c]">
                    {note.tag}
                  </p>
                  <h3 className="mt-8 font-serif text-xl italic">
                    {note.title}
                  </h3>
                  <p className="mt-4 text-xs text-[#85877c]">
                    A thought to return to <span aria-hidden="true">↗</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <footer className="border-t border-[#e7e5dd] py-5 text-xs text-[#a0a197]">
          A little space for yourself. Made for today.
        </footer>
      </div>
    </main>
  );
};

export default page;
