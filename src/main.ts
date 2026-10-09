import "./style.css";
import {
  profile,
  stats,
  skillGroups,
  experience,
  earlierCareer,
  openSourceProjects,
  publications,
  education,
  featuredProject,
} from "./resume";

function icon(path: string, cls = "h-4 w-4"): string {
  return `<svg viewBox="0 0 24 24" class="${cls}" fill="currentColor" aria-hidden="true">${path}</svg>`;
}

const ICONS = {
  github: icon(
    `<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.42.36.78 1.07.78 2.15v3.19c0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>`
  ),
  linkedin: icon(
    `<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>`
  ),
  mail: icon(`<path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6.2 7.8-6.2H4.2ZM20 7.3l-7.4 5.9a1 1 0 0 1-1.2 0L4 7.3V18h16V7.3Z"/>`),
  globe: icon(
    `<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9H16c-.08-2.1-.52-4-1.18-5.47A8.02 8.02 0 0 1 18.9 11ZM12 4.06c.8 1.1 1.6 3.2 1.78 6.94H10.2c.18-3.74.98-5.84 1.8-6.94ZM9.18 5.53C8.52 7 8.08 8.9 8 11H5.1a8.02 8.02 0 0 1 4.08-5.47ZM5.1 13H8c.08 2.1.52 4 1.18 5.47A8.02 8.02 0 0 1 5.1 13Zm5.1 6.94C9.4 18.84 8.6 16.74 8.42 13h3.37v6.94Zm1.6 0V13h3.38c-.18 3.74-.98 5.84-1.8 6.94h-1.58Zm3.02-1.47c.66-1.47 1.1-3.37 1.18-5.47h2.9a8.02 8.02 0 0 1-4.08 5.47Z"/>`
  ),
  external: icon(`<path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/>`, "h-3.5 w-3.5"),
};

function header(): string {
  return `
    <header class="sticky top-0 z-20 border-b border-border/80 bg-bg/85 backdrop-blur">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" class="font-semibold tracking-tight">${profile.name}</a>
        <nav class="flex items-center gap-4 text-base">
          <a href="#experience" class="hidden text-soft transition-colors hover:text-accent sm:inline">Experience</a>
          <a href="#projects" class="hidden text-soft transition-colors hover:text-accent sm:inline">Projects</a>
          <a href="#publications" class="hidden text-soft transition-colors hover:text-accent sm:inline">Publications</a>
          <a
            href="${profile.links.github}"
            class="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-soft transition-colors hover:border-accent hover:text-accent"
          >
            ${ICONS.github} <span class="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>`;
}

function contactLink(href: string, iconSvg: string, label: string): string {
  return `
    <a href="${href}" class="flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-base text-ink transition-colors hover:border-accent hover:text-accent">
      ${iconSvg} ${label}
    </a>`;
}

function hero(): string {
  return `
    <section id="top" class="mx-auto max-w-4xl px-5 pb-14 pt-20 text-center sm:px-8 sm:pb-20 sm:pt-28">
      <p class="mb-5 font-mono text-base uppercase tracking-[0.2em] text-accent">${profile.location}</p>
      <h1 class="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
        ${profile.name}
      </h1>
      <p class="mt-4 text-xl font-semibold text-accent sm:text-2xl">${profile.title}</p>
      <p class="mt-1 font-mono text-base text-soft">${profile.tagline}</p>

      <p class="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-soft">
        ${profile.summary}
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        ${contactLink(`mailto:${profile.email}`, ICONS.mail, profile.email)}
        ${contactLink(profile.links.linkedin, ICONS.linkedin, "LinkedIn")}
        ${contactLink(profile.links.github, ICONS.github, "GitHub")}
        ${contactLink(profile.links.zudyog, ICONS.globe, "zUdyog")}
      </div>

      <dl class="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
        ${stats
          .map(
            ([value, label]) => `
          <div>
            <dt class="sr-only">${label}</dt>
            <dd class="font-mono text-2xl font-semibold text-ink sm:text-3xl">${value}</dd>
            <dd class="mt-1 text-base leading-snug text-soft">${label}</dd>
          </div>`
          )
          .join("")}
      </dl>
    </section>`;
}

function featuredProjectSection(): string {
  return `
    <section class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <p class="font-mono text-base uppercase tracking-[0.15em] text-accent">Featured open-source work</p>
        <h2 class="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">${featuredProject.name}</h2>
        <p class="mt-4 max-w-2xl leading-relaxed text-soft">${featuredProject.description}</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a
            href="${featuredProject.liveUrl}"
            class="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-base font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            View live demo ${ICONS.external}
          </a>
          <a
            href="${featuredProject.url}"
            class="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-base text-ink transition-colors hover:border-accent hover:text-accent"
          >
            ${ICONS.github} Source
          </a>
        </div>
      </div>
    </section>`;
}

function experienceSection(): string {
  return `
    <section id="experience" class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Experience</h2>

        <div class="mt-10 space-y-12">
          ${experience
            .map(
              (e) => `
            <div class="grid gap-2 sm:grid-cols-[1fr_2.4fr] sm:gap-8">
              <div>
                <p class="font-semibold text-ink">${e.role}</p>
                <p class="mt-0.5 text-base text-soft">${e.org}</p>
                <p class="mt-1 font-mono text-base text-accent">${e.meta}</p>
              </div>
              <ul class="mt-3 space-y-2 sm:mt-0">
                ${e.bullets
                  .map(
                    (b) => `
                  <li class="flex gap-2.5 text-base leading-relaxed text-soft">
                    <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"></span>
                    <span>${b}</span>
                  </li>`
                  )
                  .join("")}
              </ul>
            </div>`
            )
            .join('<div class="border-t border-border"></div>')}
        </div>

        <details class="mt-10 group">
          <summary class="cursor-pointer font-mono text-base text-soft transition-colors hover:text-accent">
            Earlier career (${earlierCareer.length} roles, 2007 – 2022) ↓
          </summary>
          <div class="mt-5 space-y-3 border-l-2 border-border pl-5">
            ${earlierCareer
              .map(
                (e) => `
              <div class="text-base">
                <span class="font-medium text-ink">${e.role}</span>
                <span class="text-soft"> — ${e.org}</span>
                <div class="font-mono text-base text-soft">${e.dates} · ${e.stack}</div>
              </div>`
              )
              .join("")}
          </div>
        </details>
      </div>
    </section>`;
}

function skillsSection(): string {
  return `
    <section id="skills" class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Skills</h2>
        <div class="mt-8 space-y-6">
          ${skillGroups
            .map(
              (g) => `
            <div>
              <p class="font-mono text-base uppercase tracking-[0.1em] text-soft">${g.category}</p>
              <div class="mt-2.5 flex flex-wrap gap-2">
                ${g.items
                  .map(
                    (item) =>
                      `<span class="rounded-full border border-border px-2.5 py-1 font-mono text-base text-ink">${item}</span>`
                  )
                  .join("")}
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function projectsSection(): string {
  return `
    <section id="projects" class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Open-Source AI Products</h2>
        <div class="mt-8 grid gap-5 sm:grid-cols-2">
          ${openSourceProjects
            .map(
              (p) => `
            <a
              href="${p.url}"
              class="group block rounded-lg border border-border bg-panel p-5 transition-colors hover:border-accent"
            >
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-semibold text-ink group-hover:text-accent transition-colors">${p.name}</h3>
                <span class="mt-1 text-soft group-hover:text-accent transition-colors">${ICONS.external}</span>
              </div>
              <p class="mt-2 text-base leading-relaxed text-soft">${p.description}</p>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function publicationsSection(): string {
  return `
    <section id="publications" class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Publications</h2>
        <div class="mt-8 rounded-lg border border-border bg-panel p-6">
          <p class="font-semibold text-ink">${publications.seriesName}</p>
          <p class="mt-2 text-base leading-relaxed text-soft">${publications.description}</p>
          <ul class="mt-4 flex flex-wrap gap-2">
            ${publications.books
              .map((b) => `<li class="rounded-full border border-border px-2.5 py-1 font-mono text-base text-ink">${b}</li>`)
              .join("")}
          </ul>
          <a
            href="${publications.url}"
            class="mt-5 inline-flex items-center gap-1.5 font-mono text-base font-medium text-ink underline decoration-border decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            View on Amazon ${ICONS.external}
          </a>
        </div>
      </div>
    </section>`;
}

function educationSection(): string {
  return `
    <section class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Education</h2>
        <div class="mt-6">
          <p class="font-semibold text-ink">${education.degree}</p>
          <p class="mt-0.5 text-base text-soft">${education.school}</p>
          <p class="mt-1 font-mono text-base text-accent">${education.dates}</p>
        </div>
      </div>
    </section>`;
}

function footer(): string {
  return `
    <footer class="section-divider py-12">
      <div class="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p class="text-base text-soft">${profile.name} — ${profile.title}</p>
        <div class="mt-4 flex flex-wrap items-center justify-center gap-3">
          ${contactLink(`mailto:${profile.email}`, ICONS.mail, "Email")}
          ${contactLink(profile.links.linkedin, ICONS.linkedin, "LinkedIn")}
          ${contactLink(profile.links.github, ICONS.github, "GitHub")}
        </div>
      </div>
    </footer>`;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  ${header()}
  <main>
    ${hero()}
    ${featuredProjectSection()}
    ${experienceSection()}
    ${skillsSection()}
    ${projectsSection()}
    ${publicationsSection()}
    ${educationSection()}
  </main>
  ${footer()}
`;
