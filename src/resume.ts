export const profile = {
  name: "Balaji Raje Hambeere",
  title: "Lead Gen AI Architect",
  tagline: "Agentic AI & Enterprise RAG",
  location: "Pune, Maharashtra, India",
  email: "balaji.hambeere@hotmail.com",
  summary:
    "Principal AI Solutions Architect with 15+ years of software engineering and architecture experience and 4+ years delivering production Generative AI systems. Expertise in Agentic AI, enterprise RAG, multi-agent orchestration, Model Context Protocol (MCP), context engineering, AI guardrails, evaluation, AI security, and AWS cloud architecture.",
  links: {
    linkedin: "https://www.linkedin.com/in/balajihambeere/",
    github: "https://github.com/balajihambeere",
    zudyog: "https://www.zudyog.com/",
    amazon: "https://www.amazon.com/dp/B0GZFCQ837",
  },
};

export const stats: [string, string][] = [
  ["15+", "years of software engineering"],
  ["4+", "years shipping production GenAI"],
  ["5,000+", "distributors served in production"],
  ["20,000+", "requests per day at peak"],
  ["11", "engineers led across 3 teams"],
  ["60%+", "retrieval cost reduction delivered"],
];

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Generative AI",
    items: ["LLM Applications", "Agentic AI", "AI Agents", "Multi-Agent Systems", "Agent Orchestration"],
  },
  {
    category: "RAG & Retrieval",
    items: [
      "Enterprise RAG",
      "Hybrid Search",
      "Semantic Search",
      "Cross-Encoder Re-ranking",
      "RAGAS",
      "Retrieval Evaluation",
    ],
  },
  {
    category: "Agent & Context Architecture",
    items: [
      "LangGraph",
      "LangChain",
      "Google ADK",
      "A2A Protocol",
      "Context Engineering",
      "Token Budgeting",
      "Context Compression",
      "Redis Context Management",
    ],
  },
  {
    category: "MCP & Integration",
    items: [
      "Model Context Protocol",
      "MCP Servers",
      "STDIO",
      "HTTP/SSE",
      "OAuth 2.0",
      "Tool Calling",
      "Schema-Based Tool Contracts",
    ],
  },
  {
    category: "AI Security & Guardrails",
    items: [
      "Guardrails AI",
      "Microsoft Presidio",
      "Prompt Injection Detection",
      "PII Protection",
      "Policy Enforcement",
      "Human-in-the-Loop",
    ],
  },
  {
    category: "AI Evaluation & Operations",
    items: ["RAGAS", "EvalOps", "LangSmith", "CloudWatch", "LLM Cost Attribution", "FinOps", "Decision Explainability"],
  },
  {
    category: "AWS & Cloud",
    items: ["AWS Bedrock", "Lambda", "ECS Fargate", "SQS", "DynamoDB", "KMS", "CDK", "Event-Driven Architecture"],
  },
  {
    category: "Technology",
    items: ["Python", "FastAPI", "Node.js", "React", "Next.js", "TypeScript", "Redis", "Docker", "PostgreSQL", "Qdrant", "Pinecone"],
  },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  meta: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Lead GenAI Architect",
    org: "zUdyog",
    meta: "Independent · Pune, India · Feb 2026 – Present",
    bullets: [
      "Architected and launched an AI engineering platform comprising 8 learning pathways and 32 courses (~238 hours) covering RAG, Agentic AI, MCP, context engineering, guardrails, observability, FinOps, and explainability.",
      "Developed production-oriented reference implementations covering multi-tenant RAG, AI evaluation, LLM cost attribution, and decision explainability.",
      "Established a hands-on architecture approach where each learning path progresses toward a deployed and evaluated AI system.",
      "Published open-source implementations demonstrating enterprise AI architecture patterns and production failure scenarios.",
    ],
  },
  {
    role: "Lead Agentic AI Architect",
    org: "Fint Solutions — Senior Full Stack Developer (Client: Nu Skin US)",
    meta: "May 2025 – Jan 2026",
    bullets: [
      "Directed end-to-end architecture and delivery of a production Agentic AI platform, leading 3 teams and 11 engineers across Sales, Seller Intelligence, and Compliance agents.",
      "Architected an enterprise AI platform supporting 5,000+ distributors and sales representatives and 20,000+ requests per day on AWS.",
      "Designed MCP server infrastructure using STDIO and HTTP/SSE, exposing inventory, order, and customer APIs through schema-based contracts, OAuth 2.0, versioning, and least-privilege IAM.",
      "Reduced redundant retrieval and context-processing costs by 60%+ through token budgeting, sliding-window summarization, decision-state preservation, and Redis-backed cross-agent context caching.",
      "Established an AI safety architecture using Guardrails AI and Presidio for prompt-injection detection, PII protection, pre-action policy enforcement, and human-in-the-loop review.",
      "Delivered a Sales Agent, a Seller Intelligence Agent, and a Compliance Agent with an auditable review trail — prepared the platform for peak traffic using SQS-based traffic isolation and CDK-managed infrastructure.",
    ],
  },
  {
    role: "Independent AI Architect & Author",
    org: "Self-directed",
    meta: "Pune, India · Nov 2024 – Apr 2025",
    bullets: [
      "Authored the Enterprise AI Systems Series covering production RAG, retrieval grounding, failure analysis, and enterprise-scale AI architecture.",
      "Created the Pramana Framework, a reusable architecture framework for production RAG and Agentic AI systems.",
      "Developed reusable patterns for hybrid retrieval, re-ranking, MCP integration, and context engineering.",
    ],
  },
  {
    role: "Senior Full Stack Engineer",
    org: "Deque Systems",
    meta: "Sep 2022 – Oct 2024",
    bullets: [
      "Developed an AI-assisted accessibility testing pipeline using RAG over a WCAG knowledge base and axe-core results.",
      "Implemented automated crawling, accessibility issue classification, and grounded remediation recommendations.",
      "Engineered AI solutions using Python, FastAPI, LangChain, LangGraph, OpenAI, Pinecone, React, Node.js, and AWS (Lambda, ECS, SQS, SNS).",
    ],
  },
];

export const earlierCareer: { role: string; org: string; dates: string; stack: string }[] = [
  { role: "Software Developer 3, Full Stack", org: "Hubilo", dates: "Apr 2021 – Apr 2022", stack: "React · Next.js · Node.js · GraphQL · AWS" },
  { role: "Software Developer 3", org: "ILink Systems (Client: AECOM)", dates: "Nov 2020 – Mar 2021", stack: "Angular · React · Node.js · Docker · AWS" },
  { role: "Solution Architect, Full Stack", org: "Harbinger Group", dates: "Nov 2018 – Nov 2019", stack: "AWS · Azure · React · Node.js" },
  { role: "Application Architect, Full Stack", org: "Sysgain (Client: Microsoft Hyderabad)", dates: "Jun 2017 – Oct 2017", stack: "React · Node.js · AWS · API Design" },
  { role: "Technical Lead, Full Stack", org: "ValueLabs", dates: "May 2015 – Apr 2017", stack: "React · Node.js · .NET · Azure" },
  { role: "Senior Software Engineer", org: "Vertex Solutions", dates: "Sep 2013 – Nov 2014", stack: "ASP.NET MVC · C# · SQL Server" },
  { role: "Senior Technology Consultant", org: "Annik Technology & Aster Mind (Client: Microsoft Hyderabad)", dates: "Jan 2011 – Feb 2013", stack: "C# · WPF · WCF · SQL Server" },
  { role: "Software Engineer", org: "Scorbs Solutions", dates: "Jun 2007 – Dec 2010", stack: "ASP.NET · C# · WCF · SQL Server" },
];

export type OpenSourceProject = { name: string; description: string; url: string };

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "Multi-Tenant RAG Platform",
    description:
      "Python-based RAG platform with per-tenant Qdrant isolation, AWS SQS, DynamoDB, KMS, GDPR deletion workflows, CLIP multimodal search, and tenant-specific fine-tuned models.",
    url: "https://github.com/balajihambeere/rag-at-scale",
  },
  {
    name: "Cost Ledger — AI FinOps",
    description:
      "LLM cost attribution and budget enforcement platform using FastAPI, Next.js, PostgreSQL, Redis, and AWS Bedrock Converse API tagging.",
    url: "https://github.com/balajihambeere/cost-ledger",
  },
  {
    name: "Aegis Measure — EvalOps",
    description: "Continuous AI quality evaluation platform for production AI systems.",
    url: "https://github.com/balajihambeere/aegis-measure",
  },
  {
    name: "Candor — DecisionOps",
    description: "Decision explainability engine implementing Decide, Trace, Justify, and Disclose workflows.",
    url: "https://github.com/balajihambeere/candor",
  },
];

export const publications = {
  seriesName: "Enterprise AI Systems Series — Pramana Framework",
  url: profile.links.amazon,
  description:
    "Author of six books covering production RAG, Agentic AI, retrieval systems, and enterprise AI architecture.",
  books: ["RAG Essentials", "RAG in Practice", "Advanced RAG", "RAG at Scale", "AI Agents That Act", "RAG Forward Deployment"],
};

export const education = {
  degree: "Bachelor's Degree",
  school: "Kakatiya University",
  dates: "2004 – 2007",
};

// A featured, hand-picked portfolio entry linking out to the
// yantrika-agent-patterns project site — this profile stays the entry
// point; the project's own repo is where the real depth lives.
export const featuredProject = {
  name: "Yantrika Agent Patterns",
  description:
    "Six working LangGraph patterns for the manufacturing ERP domain — FastAPI + LangGraph backends, Next.js frontends — each with a real server-side interrupt() that genuinely pauses for a human, not a simulated one, plus an optional OpenAI-powered chat panel tested against a real API key. Covers staged autonomy, hard invariants, weighted reasoning, policy-as-code, and multi-site arbitration across PO acknowledgment, material allocation, and cross-plant arbitration scenarios.",
  url: "https://github.com/balajihambeere/yantrika-agent-patterns",
  liveUrl: "https://balajihambeere.github.io/yantrika-agent-patterns/",
};
