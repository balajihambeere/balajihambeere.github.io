(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function d(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(a){if(a.ep)return;a.ep=!0;const r=d(a);fetch(a.href,r)}})();const t={name:"Balaji Raje Hambeere",title:"Lead Gen AI Architect",tagline:"Agentic AI & Enterprise RAG",location:"Pune, Maharashtra, India",email:"balaji.hambeere@hotmail.com",summary:"Principal AI Solutions Architect with 15+ years of software engineering and architecture experience and 4+ years delivering production Generative AI systems. Expertise in Agentic AI, enterprise RAG, multi-agent orchestration, Model Context Protocol (MCP), context engineering, AI guardrails, evaluation, AI security, and AWS cloud architecture.",links:{linkedin:"https://www.linkedin.com/in/balajihambeere/",github:"https://github.com/balajihambeere",zudyog:"https://www.zudyog.com/",amazon:"https://www.amazon.com/dp/B0GZFCQ837"}},x=[["15+","years of software engineering"],["4+","years shipping production GenAI"],["5,000+","distributors served in production"],["20,000+","requests per day at peak"],["11","engineers led across 3 teams"],["60%+","retrieval cost reduction delivered"]],h=[{category:"Generative AI",items:["LLM Applications","Agentic AI","AI Agents","Multi-Agent Systems","Agent Orchestration"]},{category:"RAG & Retrieval",items:["Enterprise RAG","Hybrid Search","Semantic Search","Cross-Encoder Re-ranking","RAGAS","Retrieval Evaluation"]},{category:"Agent & Context Architecture",items:["LangGraph","LangChain","Google ADK","A2A Protocol","Context Engineering","Token Budgeting","Context Compression","Redis Context Management"]},{category:"MCP & Integration",items:["Model Context Protocol","MCP Servers","STDIO","HTTP/SSE","OAuth 2.0","Tool Calling","Schema-Based Tool Contracts"]},{category:"AI Security & Guardrails",items:["Guardrails AI","Microsoft Presidio","Prompt Injection Detection","PII Protection","Policy Enforcement","Human-in-the-Loop"]},{category:"AI Evaluation & Operations",items:["RAGAS","EvalOps","LangSmith","CloudWatch","LLM Cost Attribution","FinOps","Decision Explainability"]},{category:"AWS & Cloud",items:["AWS Bedrock","Lambda","ECS Fargate","SQS","DynamoDB","KMS","CDK","Event-Driven Architecture"]},{category:"Technology",items:["Python","FastAPI","Node.js","React","Next.js","TypeScript","Redis","Docker","PostgreSQL","Qdrant","Pinecone"]}],b=[{role:"Lead GenAI Architect",org:"zUdyog",meta:"Independent · Pune, India · Feb 2026 – Present",bullets:["Architected and launched an AI engineering platform comprising 8 learning pathways and 32 courses (~238 hours) covering RAG, Agentic AI, MCP, context engineering, guardrails, observability, FinOps, and explainability.","Developed production-oriented reference implementations covering multi-tenant RAG, AI evaluation, LLM cost attribution, and decision explainability.","Established a hands-on architecture approach where each learning path progresses toward a deployed and evaluated AI system.","Published open-source implementations demonstrating enterprise AI architecture patterns and production failure scenarios."]},{role:"Lead Agentic AI Architect",org:"Fint Solutions — Senior Full Stack Developer (Client: Nu Skin US)",meta:"May 2025 – Jan 2026",bullets:["Directed end-to-end architecture and delivery of a production Agentic AI platform, leading 3 teams and 11 engineers across Sales, Seller Intelligence, and Compliance agents.","Architected an enterprise AI platform supporting 5,000+ distributors and sales representatives and 20,000+ requests per day on AWS.","Designed MCP server infrastructure using STDIO and HTTP/SSE, exposing inventory, order, and customer APIs through schema-based contracts, OAuth 2.0, versioning, and least-privilege IAM.","Reduced redundant retrieval and context-processing costs by 60%+ through token budgeting, sliding-window summarization, decision-state preservation, and Redis-backed cross-agent context caching.","Established an AI safety architecture using Guardrails AI and Presidio for prompt-injection detection, PII protection, pre-action policy enforcement, and human-in-the-loop review.","Delivered a Sales Agent, a Seller Intelligence Agent, and a Compliance Agent with an auditable review trail — prepared the platform for peak traffic using SQS-based traffic isolation and CDK-managed infrastructure."]},{role:"Independent AI Architect & Author",org:"Self-directed",meta:"Pune, India · Nov 2024 – Apr 2025",bullets:["Authored the Enterprise AI Systems Series covering production RAG, retrieval grounding, failure analysis, and enterprise-scale AI architecture.","Created the Pramana Framework, a reusable architecture framework for production RAG and Agentic AI systems.","Developed reusable patterns for hybrid retrieval, re-ranking, MCP integration, and context engineering."]},{role:"Senior Full Stack Engineer",org:"Deque Systems",meta:"Sep 2022 – Oct 2024",bullets:["Developed an AI-assisted accessibility testing pipeline using RAG over a WCAG knowledge base and axe-core results.","Implemented automated crawling, accessibility issue classification, and grounded remediation recommendations.","Engineered AI solutions using Python, FastAPI, LangChain, LangGraph, OpenAI, Pinecone, React, Node.js, and AWS (Lambda, ECS, SQS, SNS)."]}],g=[{role:"Software Developer 3, Full Stack",org:"Hubilo",dates:"Apr 2021 – Apr 2022",stack:"React · Next.js · Node.js · GraphQL · AWS"},{role:"Software Developer 3",org:"ILink Systems (Client: AECOM)",dates:"Nov 2020 – Mar 2021",stack:"Angular · React · Node.js · Docker · AWS"},{role:"Solution Architect, Full Stack",org:"Harbinger Group",dates:"Nov 2018 – Nov 2019",stack:"AWS · Azure · React · Node.js"},{role:"Application Architect, Full Stack",org:"Sysgain (Client: Microsoft Hyderabad)",dates:"Jun 2017 – Oct 2017",stack:"React · Node.js · AWS · API Design"},{role:"Technical Lead, Full Stack",org:"ValueLabs",dates:"May 2015 – Apr 2017",stack:"React · Node.js · .NET · Azure"},{role:"Senior Software Engineer",org:"Vertex Solutions",dates:"Sep 2013 – Nov 2014",stack:"ASP.NET MVC · C# · SQL Server"},{role:"Senior Technology Consultant",org:"Annik Technology & Aster Mind (Client: Microsoft Hyderabad)",dates:"Jan 2011 – Feb 2013",stack:"C# · WPF · WCF · SQL Server"},{role:"Software Engineer",org:"Scorbs Solutions",dates:"Jun 2007 – Dec 2010",stack:"ASP.NET · C# · WCF · SQL Server"}],f=[{name:"Multi-Tenant RAG Platform",description:"Python-based RAG platform with per-tenant Qdrant isolation, AWS SQS, DynamoDB, KMS, GDPR deletion workflows, CLIP multimodal search, and tenant-specific fine-tuned models.",url:"https://github.com/balajihambeere/rag-at-scale"},{name:"Cost Ledger — AI FinOps",description:"LLM cost attribution and budget enforcement platform using FastAPI, Next.js, PostgreSQL, Redis, and AWS Bedrock Converse API tagging.",url:"https://github.com/balajihambeere/cost-ledger"},{name:"Aegis Measure — EvalOps",description:"Continuous AI quality evaluation platform for production AI systems.",url:"https://github.com/balajihambeere/aegis-measure"},{name:"Candor — DecisionOps",description:"Decision explainability engine implementing Decide, Trace, Justify, and Disclose workflows.",url:"https://github.com/balajihambeere/candor"}],c={seriesName:"Enterprise AI Systems Series — Pramana Framework",url:t.links.amazon,description:"Author of six books covering production RAG, Agentic AI, retrieval systems, and enterprise AI architecture.",books:["RAG Essentials","RAG in Practice","Advanced RAG","RAG at Scale","AI Agents That Act","RAG Forward Deployment"]},m={degree:"Bachelor's Degree",school:"Kakatiya University",dates:"2004 – 2007"},l={name:"Yantrika Agent Patterns",description:"Six working LangGraph patterns for the manufacturing ERP domain — FastAPI + LangGraph backends, Next.js frontends — each with a real server-side interrupt() that genuinely pauses for a human, not a simulated one. Covers staged autonomy, hard invariants, weighted reasoning, policy-as-code, and multi-site arbitration across PO acknowledgment, material allocation, and cross-plant arbitration scenarios.",url:"https://github.com/balajihambeere/yantrika-agent-patterns",liveUrl:"https://balajihambeere.github.io/yantrika-agent-patterns/"};function o(e,n="h-4 w-4"){return`<svg viewBox="0 0 24 24" class="${n}" fill="currentColor" aria-hidden="true">${e}</svg>`}const i={github:o('<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.42.36.78 1.07.78 2.15v3.19c0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>'),linkedin:o('<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>'),mail:o('<path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6.2 7.8-6.2H4.2ZM20 7.3l-7.4 5.9a1 1 0 0 1-1.2 0L4 7.3V18h16V7.3Z"/>'),globe:o('<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9H16c-.08-2.1-.52-4-1.18-5.47A8.02 8.02 0 0 1 18.9 11ZM12 4.06c.8 1.1 1.6 3.2 1.78 6.94H10.2c.18-3.74.98-5.84 1.8-6.94ZM9.18 5.53C8.52 7 8.08 8.9 8 11H5.1a8.02 8.02 0 0 1 4.08-5.47ZM5.1 13H8c.08 2.1.52 4 1.18 5.47A8.02 8.02 0 0 1 5.1 13Zm5.1 6.94C9.4 18.84 8.6 16.74 8.42 13h3.37v6.94Zm1.6 0V13h3.38c-.18 3.74-.98 5.84-1.8 6.94h-1.58Zm3.02-1.47c.66-1.47 1.1-3.37 1.18-5.47h2.9a8.02 8.02 0 0 1-4.08 5.47Z"/>'),external:o('<path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/>',"h-3.5 w-3.5")};function v(){return`
    <header class="sticky top-0 z-20 border-b border-border/80 bg-bg/85 backdrop-blur">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" class="font-semibold tracking-tight">${t.name}</a>
        <nav class="flex items-center gap-4 text-base">
          <a href="#experience" class="hidden text-soft transition-colors hover:text-accent sm:inline">Experience</a>
          <a href="#projects" class="hidden text-soft transition-colors hover:text-accent sm:inline">Projects</a>
          <a href="#publications" class="hidden text-soft transition-colors hover:text-accent sm:inline">Publications</a>
          <a
            href="${t.links.github}"
            class="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-soft transition-colors hover:border-accent hover:text-accent"
          >
            ${i.github} <span class="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>`}function s(e,n,d){return`
    <a href="${e}" class="flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-base text-ink transition-colors hover:border-accent hover:text-accent">
      ${n} ${d}
    </a>`}function A(){return`
    <section id="top" class="mx-auto max-w-4xl px-5 pb-14 pt-20 text-center sm:px-8 sm:pb-20 sm:pt-28">
      <p class="mb-5 font-mono text-base uppercase tracking-[0.2em] text-accent">${t.location}</p>
      <h1 class="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
        ${t.name}
      </h1>
      <p class="mt-4 text-xl font-semibold text-accent sm:text-2xl">${t.title}</p>
      <p class="mt-1 font-mono text-base text-soft">${t.tagline}</p>

      <p class="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-soft">
        ${t.summary}
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        ${s(`mailto:${t.email}`,i.mail,t.email)}
        ${s(t.links.linkedin,i.linkedin,"LinkedIn")}
        ${s(t.links.github,i.github,"GitHub")}
        ${s(t.links.zudyog,i.globe,"zUdyog")}
      </div>

      <dl class="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
        ${x.map(([e,n])=>`
          <div>
            <dt class="sr-only">${n}</dt>
            <dd class="font-mono text-2xl font-semibold text-ink sm:text-3xl">${e}</dd>
            <dd class="mt-1 text-base leading-snug text-soft">${n}</dd>
          </div>`).join("")}
      </dl>
    </section>`}function y(){return`
    <section class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <p class="font-mono text-base uppercase tracking-[0.15em] text-accent">Featured open-source work</p>
        <h2 class="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">${l.name}</h2>
        <p class="mt-4 max-w-2xl leading-relaxed text-soft">${l.description}</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a
            href="${l.liveUrl}"
            class="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-base font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            View live demo ${i.external}
          </a>
          <a
            href="${l.url}"
            class="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-base text-ink transition-colors hover:border-accent hover:text-accent"
          >
            ${i.github} Source
          </a>
        </div>
      </div>
    </section>`}function S(){return`
    <section id="experience" class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Experience</h2>

        <div class="mt-10 space-y-12">
          ${b.map(e=>`
            <div class="grid gap-2 sm:grid-cols-[1fr_2.4fr] sm:gap-8">
              <div>
                <p class="font-semibold text-ink">${e.role}</p>
                <p class="mt-0.5 text-base text-soft">${e.org}</p>
                <p class="mt-1 font-mono text-base text-accent">${e.meta}</p>
              </div>
              <ul class="mt-3 space-y-2 sm:mt-0">
                ${e.bullets.map(n=>`
                  <li class="flex gap-2.5 text-base leading-relaxed text-soft">
                    <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"></span>
                    <span>${n}</span>
                  </li>`).join("")}
              </ul>
            </div>`).join('<div class="border-t border-border"></div>')}
        </div>

        <details class="mt-10 group">
          <summary class="cursor-pointer font-mono text-base text-soft transition-colors hover:text-accent">
            Earlier career (${g.length} roles, 2007 – 2022) ↓
          </summary>
          <div class="mt-5 space-y-3 border-l-2 border-border pl-5">
            ${g.map(e=>`
              <div class="text-base">
                <span class="font-medium text-ink">${e.role}</span>
                <span class="text-soft"> — ${e.org}</span>
                <div class="font-mono text-base text-soft">${e.dates} · ${e.stack}</div>
              </div>`).join("")}
          </div>
        </details>
      </div>
    </section>`}function k(){return`
    <section id="skills" class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Skills</h2>
        <div class="mt-8 space-y-6">
          ${h.map(e=>`
            <div>
              <p class="font-mono text-base uppercase tracking-[0.1em] text-soft">${e.category}</p>
              <div class="mt-2.5 flex flex-wrap gap-2">
                ${e.items.map(n=>`<span class="rounded-full border border-border px-2.5 py-1 font-mono text-base text-ink">${n}</span>`).join("")}
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>`}function $(){return`
    <section id="projects" class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Open-Source AI Products</h2>
        <div class="mt-8 grid gap-5 sm:grid-cols-2">
          ${f.map(e=>`
            <a
              href="${e.url}"
              class="group block rounded-lg border border-border bg-panel p-5 transition-colors hover:border-accent"
            >
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-semibold text-ink group-hover:text-accent transition-colors">${e.name}</h3>
                <span class="mt-1 text-soft group-hover:text-accent transition-colors">${i.external}</span>
              </div>
              <p class="mt-2 text-base leading-relaxed text-soft">${e.description}</p>
            </a>`).join("")}
        </div>
      </div>
    </section>`}function I(){return`
    <section id="publications" class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Publications</h2>
        <div class="mt-8 rounded-lg border border-border bg-panel p-6">
          <p class="font-semibold text-ink">${c.seriesName}</p>
          <p class="mt-2 text-base leading-relaxed text-soft">${c.description}</p>
          <ul class="mt-4 flex flex-wrap gap-2">
            ${c.books.map(e=>`<li class="rounded-full border border-border px-2.5 py-1 font-mono text-base text-ink">${e}</li>`).join("")}
          </ul>
          <a
            href="${c.url}"
            class="mt-5 inline-flex items-center gap-1.5 font-mono text-base font-medium text-ink underline decoration-border decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            View on Amazon ${i.external}
          </a>
        </div>
      </div>
    </section>`}function w(){return`
    <section class="section-divider py-14 sm:py-16">
      <div class="mx-auto max-w-4xl px-5 sm:px-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Education</h2>
        <div class="mt-6">
          <p class="font-semibold text-ink">${m.degree}</p>
          <p class="mt-0.5 text-base text-soft">${m.school}</p>
          <p class="mt-1 font-mono text-base text-accent">${m.dates}</p>
        </div>
      </div>
    </section>`}function P(){return`
    <footer class="section-divider py-12">
      <div class="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p class="text-base text-soft">${t.name} — ${t.title}</p>
        <div class="mt-4 flex flex-wrap items-center justify-center gap-3">
          ${s(`mailto:${t.email}`,i.mail,"Email")}
          ${s(t.links.linkedin,i.linkedin,"LinkedIn")}
          ${s(t.links.github,i.github,"GitHub")}
        </div>
      </div>
    </footer>`}document.querySelector("#app").innerHTML=`
  ${v()}
  <main>
    ${A()}
    ${y()}
    ${S()}
    ${k()}
    ${$()}
    ${I()}
    ${w()}
  </main>
  ${P()}
`;
