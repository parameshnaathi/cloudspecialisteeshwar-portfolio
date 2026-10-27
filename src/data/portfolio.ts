export const profile = {
  name: "Paramesh Nathi",
  role: "Senior SRE · DevOps · Platform Engineering",
  headline:
    "Senior SRE | DevOps | Platform Engineering | Cloud | Kubernetes | Terraform | Observability | AI-Driven Automation",
  summary:
    "Building reliable, scalable and intelligent platforms through Cloud, Kubernetes, Infrastructure as Code, Observability, Automation and AI.",
  github: "https://github.com/parameshnaathi",
  linkedin: "",
  email: "",
  resumePath: "resume/Paramesh-Nathi-Resume.pdf",
  resumeAvailable: true,
};

export const metrics = [
  { value: "8+", label: "Years of experience" },
  { value: "40+", label: "Enterprise clients supported" },
  { value: "60+", label: "Major incidents led" },
  { value: "50%", label: "Faster deployments" },
  { value: "35%", label: "Improved incident response" },
];

export const navigation = [
  { id: "about", label: "About" },
  { id: "sre", label: "SRE" },
  { id: "devops", label: "DevOps" },
  { id: "cloud", label: "Cloud" },
  { id: "kubernetes", label: "Kubernetes" },
  { id: "iac", label: "IaC" },
  { id: "observability", label: "Observability" },
  { id: "automation", label: "Automation" },
  { id: "ai", label: "AI / AIOps" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "credentials", label: "Credentials" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Reliability engineering",
    category: "SRE",
    description:
      "Production reliability, high availability, incident management, RCA, blameless postmortems, MTTR reduction, SLI / SLO / SLA, error budgets, capacity planning, disaster recovery and production readiness.",
    tools: ["On-call operations", "Runbooks", "Performance engineering", "Major incident response"],
  },
  {
    title: "Delivery & GitOps",
    category: "DevOps",
    description:
      "CI/CD, deployment automation, release management, rollback strategies, blue/green and canary deployments.",
    tools: ["GitHub Actions", "Jenkins", "GitLab CI", "Git", "Argo CD", "Docker"],
  },
  {
    title: "Cloud platforms",
    category: "Cloud",
    description:
      "AWS and Microsoft Azure infrastructure, cloud monitoring, automation and cost management.",
    tools: [
      "AWS: EC2, EKS, S3, IAM, VPC, ECR, ECS, CloudWatch",
      "Azure: Azure Monitor, Functions, OpenAI, Cost Management, PostgreSQL",
      "GCP: Learning / exposure; production experience not specified",
    ],
  },
  {
    title: "Infrastructure as Code",
    category: "IaC",
    description:
      "Repeatable cloud provisioning and configuration management with infrastructure reviewed as code.",
    tools: ["Terraform", "Terraform modules", "Remote state", "Drift detection", "Ansible"],
  },
  {
    title: "Observability",
    category: "Observability",
    description:
      "Monitoring infrastructure, Kubernetes and applications with metrics, logs, traces and actionable alerts.",
    tools: ["Datadog", "Prometheus", "Grafana", "Splunk", "CloudWatch", "PagerDuty"],
  },
  {
    title: "Automation & AI",
    category: "Automation",
    description:
      "Automating operational work and applying LLMs to incident analysis, troubleshooting, documentation and FinOps.",
    tools: ["Python", "Bash", "FastAPI", "APIs", "RAG", "MCP", "LLM"],
  },
];

export const deliverySteps = [
  "Developer",
  "Git",
  "CI",
  "Build",
  "Test",
  "Security scan",
  "Docker",
  "Registry",
  "Kubernetes",
  "Argo CD",
  "Production",
  "Observability",
];

export type PortfolioProject = {
  title: string;
  category: string;
  problem: string;
  architecture: string;
  stack: string[];
  features: string[];
  impact: string;
  learning: string;
  repository?: string;
};

export const projects: PortfolioProject[] = [
  {
    title: "AI-Powered RCA & Postmortem Automation",
    category: "AI / AIOps",
    problem: "Major incident documentation can consume significant responder time after service recovery.",
    architecture: "Python + Azure Functions + Microsoft Graph + Azure OpenAI",
    stack: ["Python", "Azure OpenAI", "Microsoft Graph", "Azure Functions"],
    features: ["Automates incident documentation", "Supports postmortem workflows"],
    impact: "Approximately 95% less documentation effort.",
    learning: "Applying generative AI to operational knowledge while keeping incident workflows practical.",
  },
  {
    title: "AI Kubernetes Troubleshooting Copilot",
    category: "Kubernetes",
    problem: "Diagnosing common Kubernetes failures requires quickly connecting symptoms to useful context.",
    architecture: "Python / FastAPI + LLM + RAG + MCP + Kubernetes",
    stack: ["Python", "FastAPI", "LLM", "RAG", "MCP", "Agent Skills", "Sim.ai", "Kubernetes"],
    features: [
      "CrashLoopBackOff and OOMKilled guidance",
      "ImagePullBackOff and networking troubleshooting",
      "Manifest troubleshooting",
    ],
    impact: "Impact measurement not supplied.",
    learning: "Combining cluster troubleshooting context with retrieval and agent-based workflows.",
  },
  {
    title: "AI Azure FinOps Platform",
    category: "Cloud",
    problem: "Cloud spend review and analysis can be slow and difficult to operationalize.",
    architecture: "FastAPI + PostgreSQL + Azure Cost Management APIs + LLM analytics",
    stack: ["FastAPI", "PostgreSQL", "Azure Cost Management APIs", "LLM analytics"],
    features: ["Analyzes Azure cloud costs", "Surfaces cost insights and recommendations"],
    impact: "Cloud spend reduction and faster cost-review workflows; no quantified result supplied.",
    learning: "Connecting cost data and AI analysis to a review workflow.",
    repository: "https://github.com/parameshnaathi/devops-azure-cloud-cost-ai-analyzer",
  },
  {
    title: "AI Terraform Drift Detector",
    category: "Terraform",
    problem: "Live cloud resources can diverge from the expected Terraform state.",
    architecture: "Terraform state + cloud APIs + normalized resource comparison + drift report",
    stack: ["Go", "Terraform", "AWS APIs", "AI-assisted analysis"],
    features: [
      "Compares expected and live infrastructure",
      "Identifies missing, extra and changed resources",
      "Outputs reports for detected drift",
    ],
    impact: "Impact measurement not supplied.",
    learning: "Normalizing infrastructure models makes drift comparison more actionable.",
    repository: "",
  },
  {
    title: "AI Documentation Automation",
    category: "AI / AIOps",
    problem: "Runbooks, onboarding and incident knowledge can be difficult to keep current and discoverable.",
    architecture: "Datadog MCP + GitHub + LLM workflows",
    stack: ["Datadog MCP", "GitHub", "LLMs"],
    features: ["Runbooks", "Onboarding", "Incident documentation", "Operational knowledge"],
    impact: "Impact measurement not supplied.",
    learning: "Applying AI to operational documentation and knowledge-sharing workflows.",
  },
  {
    title: "Kubernetes Pod Topology Generator",
    category: "Kubernetes",
    problem: "Cluster traffic paths across Ingress, Service and Pod resources can be hard to visualize.",
    architecture: "kubectl resource discovery + LLM mapping + generated topology diagram",
    stack: ["Python", "Kubernetes", "kubectl", "OpenAI", "Luma AI"],
    features: ["Maps Ingress-to-Service-to-Pod traffic", "Displays pod health states"],
    impact: "Impact measurement not supplied.",
    learning: "Turning Kubernetes resource relationships into a visual operational aid.",
    repository: "",
  },
];

export const experience = [
  {
    role: "Senior SRE / DevOps / Platform Engineering",
    company: "Employer and role details to be added",
    dates: "Dates to be added",
    summary:
      "Add verified employers, role dates and project ownership here. Metrics above are supplied in the portfolio brief; add supporting context and attribution before publication.",
    achievements: [],
    technologies: ["SRE", "DevOps", "Cloud", "Kubernetes", "Automation"],
  },
];

export const credentials: Record<"certifications" | "training" | "awards", string[]> = {
  certifications: [],
  training: [],
  awards: [],
};

export const resumeFacts = [
  "Site Reliability Engineering and production operations",
  "DevOps, CI/CD and GitOps delivery",
  "Cloud, Kubernetes and Infrastructure as Code",
  "Observability, incident management and automation",
  "AI / AIOps applications for operational workflows",
];
