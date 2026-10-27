import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Bot,
  Boxes,
  Braces,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Container,
  Eye,
  GitBranch,
  Github,
  Layers3,
  Menu,
  Moon,
  Radio,
  ShieldCheck,
  Sun,
  Workflow,
  X,
} from "lucide-react";
import {
  credentials,
  deliverySteps,
  experience,
  metrics,
  navigation,
  profile,
  projects,
  resumeFacts,
  skillGroups,
} from "./data/portfolio";

type IconType = typeof Activity;

const categories = ["All work", ...new Set(projects.map((project) => project.category))];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return <span className="tag">{children}</span>;
}

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All work");
  const hasResume = profile.resumeAvailable;
  const hasContact = Boolean(profile.email || profile.linkedin);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = lightMode ? "light" : "dark";
  }, [lightMode]);

  const visibleProjects =
    projectFilter === "All work"
      ? projects
      : projects.filter((project) => project.category === projectFilter);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="#about" aria-label="Paramesh Nathi, home">
          <span className="brand-mark">PN</span>
          <span className="brand-copy">
            <strong>Paramesh Nathi</strong>
            <small>RELIABILITY · PLATFORM · AI</small>
          </span>
        </a>
        <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            aria-label={`Switch to ${lightMode ? "dark" : "light"} theme`}
            onClick={() => setLightMode((current) => !current)}
          >
            {lightMode ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="icon-button menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero-section section-wrap" id="about">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse-dot" />
              RELIABILITY ENGINEERING · CLOUD · AI
            </div>
            <p className="hero-kicker">Hello, I’m</p>
            <h1>
              Paramesh
              <br />
              <span>Nathi.</span>
            </h1>
            <p className="hero-role">{profile.headline}</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <ArrowRight size={16} />
              </a>
              <a className="button button-secondary" href="#sre">
                View skills <ArrowDown size={16} />
              </a>
            </div>
            <div className="hero-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub <ArrowUpRight size={13} />
              </a>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight size={13} />
                </a>
              )}
              {profile.email && <a href={`mailto:${profile.email}`}>Contact me</a>}
              <a href="#resume">Resume <ArrowUpRight size={13} /></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustration of connected cloud infrastructure">
            <div className="visual-topline">
              <span><span className="pulse-dot" /> PLATFORM STATUS</span>
              <span>LIVE SYSTEMS / 01</span>
            </div>
            <div className="orbit-scene">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-core"><Layers3 size={34} strokeWidth={1.4} /></div>
              <div className="orbit-node node-cloud"><Cloud size={18} /><span>Cloud</span></div>
              <div className="orbit-node node-k8s"><Container size={18} /><span>Kubernetes</span></div>
              <div className="orbit-node node-ai"><Bot size={18} /><span>AI / Ops</span></div>
              <div className="orbit-node node-code"><Braces size={18} /><span>IaC</span></div>
              <span className="orbit-spark spark-one" />
              <span className="orbit-spark spark-two" />
            </div>
            <div className="visual-footer">
              <span><Activity size={14} /> Reliability by design</span>
              <span className="status-ok"><Check size={14} /> Systems thinking</span>
            </div>
          </div>

          <div className="metrics-strip" aria-label="Career highlights supplied in the portfolio brief">
            {metrics.map((metric) => (
              <div className="metric-item" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section" id="sre">
          <SectionHeading
            eyebrow="01 / Site reliability"
            title="Make reliability part of the design."
            description="Production engineering is a balance of service health, responder effectiveness and clear operational practices."
          />
          <div className="sre-grid">
            {skillGroups.slice(0, 1).map((group) => (
              <article className="feature-card sre-feature" key={group.title}>
                <div className="feature-icon"><ShieldCheck size={20} /></div>
                <span className="card-label">OPERATING PRINCIPLES</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="tag-list">{group.tools.map((tool) => <Tag key={tool}>{tool}</Tag>)}</div>
              </article>
            ))}
            <div className="reliability-stack">
              {[
                ["01", "Define", "SLI / SLO / SLA · Error budgets"],
                ["02", "Observe", "Golden signals · Service health"],
                ["03", "Respond", "Incident command · Runbooks"],
                ["04", "Improve", "RCA · Blameless postmortems"],
              ].map(([number, title, detail]) => (
                <div className="stack-row" key={number}>
                  <span className="stack-number">{number}</span>
                  <div><strong>{title}</strong><span>{detail}</span></div>
                  <ArrowRight size={15} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="devops">
          <SectionHeading
            eyebrow="02 / Delivery engineering"
            title="Ship changes with confidence."
            description="A clear delivery path connects developers, automated checks and production feedback."
          />
          <div className="pipeline-card">
            <div className="pipeline-heading">
              <span><Workflow size={17} /> DELIVERY PIPELINE</span>
              <span className="pipeline-caption">FROM COMMIT TO SIGNAL</span>
            </div>
            <div className="pipeline-scroll" aria-label="Continuous delivery flow">
              {deliverySteps.map((step, index) => (
                <div className="pipeline-step" key={step}>
                  <span className="pipeline-icon">
                    {index === 0 ? <Code2 size={17} /> : index === 8 ? <Container size={17} /> : <GitBranch size={16} />}
                  </span>
                  <span>{step}</span>
                  {index < deliverySteps.length - 1 && <ArrowRight className="pipeline-arrow" size={14} />}
                </div>
              ))}
            </div>
          </div>
          <div className="delivery-tools">
            {skillGroups.find((group) => group.category === "DevOps")?.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
            {["GitOps", "CI/CD", "Blue/Green", "Canary", "Rollback strategies"].map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section" id="cloud">
          <SectionHeading
            eyebrow="03 / Cloud engineering"
            title="Build for the cloud you run."
            description="Cloud skills are presented by platform; GCP is deliberately labeled as learning / exposure."
          />
          <div className="cloud-grid">
            {[
              {
                name: "Amazon Web Services",
                short: "AWS",
                icon: Cloud,
                detail: "Infrastructure, container platforms and cloud-native operations.",
                tools: ["EC2", "EKS", "S3", "IAM", "VPC", "Load Balancers", "Auto Scaling", "CloudWatch", "Route 53", "ECR", "ECS"],
              },
              {
                name: "Microsoft Azure",
                short: "AZURE",
                icon: Boxes,
                detail: "Azure infrastructure, monitoring, automation and cost management.",
                tools: ["Azure Infrastructure", "Azure Functions", "Azure Monitor", "Azure OpenAI", "Cost Management", "Azure PostgreSQL"],
              },
              {
                name: "Google Cloud Platform",
                short: "GCP",
                icon: Layers3,
                detail: "Learning / exposure. Production experience is not specified.",
                tools: ["Learning / exposure"],
              },
            ].map((cloud) => {
              const Icon = cloud.icon;
              return (
                <article className={`cloud-card${cloud.short === "GCP" ? " cloud-muted" : ""}`} key={cloud.short}>
                  <div className="cloud-card-top">
                    <span className="feature-icon"><Icon size={20} /></span>
                    <span className="cloud-mark">{cloud.short}</span>
                  </div>
                  <h3>{cloud.name}</h3>
                  <p>{cloud.detail}</p>
                  <div className="tag-list">{cloud.tools.map((tool) => <Tag key={tool}>{tool}</Tag>)}</div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-wrap content-section" id="kubernetes">
          <SectionHeading
            eyebrow="04 / Containers & orchestration"
            title="Kubernetes, from workload to recovery."
            description="A practical view across deployments, network paths, resource behavior and day-two troubleshooting."
          />
          <div className="k8s-layout">
            <div className="cluster-diagram">
              <div className="cluster-head"><Container size={18} /> CLUSTER WORKLOAD PATH</div>
              <div className="cluster-flow">
                {[
                  ["Ingress", "External traffic"],
                  ["Service", "Discovery & routing"],
                  ["Deployment", "Desired replicas"],
                  ["Pods", "Health & resources"],
                ].map(([title, detail], index) => (
                  <div className="cluster-node" key={title}>
                    <span className="cluster-node-icon">{index === 0 ? <Radio size={17} /> : index === 3 ? <Boxes size={17} /> : <Container size={17} />}</span>
                    <strong>{title}</strong><small>{detail}</small>
                    {index < 3 && <ArrowDown className="cluster-arrow" size={15} />}
                  </div>
                ))}
              </div>
            </div>
            <div className="k8s-details">
              <article className="feature-card">
                <span className="card-label">DAY-TWO OPERATIONS</span>
                <h3>Operate with the right context.</h3>
                <p>Deployments, Services, Ingress, ConfigMaps, Secrets, HPA, resource requests / limits, health probes, Helm, Argo CD and cluster upgrades.</p>
              </article>
              <div className="incident-states">
                <span className="card-label">TROUBLESHOOTING STATES</span>
                {["CrashLoopBackOff", "OOMKilled", "ImagePullBackOff", "Pending", "Failed probes", "DNS / networking"].map((state, index) => (
                  <div className="incident-state" key={state}>
                    <span className={`state-dot state-${index % 3}`} /> {state} <ArrowUpRight size={13} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="iac">
          <SectionHeading
            eyebrow="05 / Infrastructure as Code"
            title="Infrastructure that can be reviewed."
            description="Provision, review and reconcile changes through a deliberate infrastructure workflow."
          />
          <div className="iac-card">
            <div className="iac-flow">
              {["Code", "Terraform plan", "Review", "Apply", "Cloud", "Drift detection"].map((step, index) => (
                <div className="iac-step" key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                  {index < 5 && <ArrowRight size={14} />}
                </div>
              ))}
            </div>
            <div className="iac-footer">
              <span><Braces size={16} /> Terraform modules · Remote state · Drift detection · Ansible</span>
              <span>AWS + Azure automation</span>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="observability">
          <SectionHeading
            eyebrow="06 / Observability"
            title="From infrastructure signals to user impact."
            description="Layered observability connects telemetry to the health of the services and business they support."
          />
          <div className="observability-card">
            <div className="signal-flow">
              {["Infrastructure", "Kubernetes", "Application", "Business metrics"].map((layer, index) => (
                <div className="signal-layer" key={layer}>
                  <span className="signal-index">0{index + 1}</span><strong>{layer}</strong>
                  {index < 3 && <ArrowRight size={15} />}
                </div>
              ))}
            </div>
            <div className="golden-signals">
              <span className="card-label">THE GOLDEN SIGNALS</span>
              {[
                ["Latency", "Response time"],
                ["Traffic", "Request volume"],
                ["Errors", "Failure rate"],
                ["Saturation", "Resource pressure"],
              ].map(([label, hint], index) => (
                <div className="golden-row" key={label}>
                  <span className="golden-bar" style={{ width: `${56 + index * 10}%` }} />
                  <strong>{label}</strong><small>{hint}</small>
                </div>
              ))}
            </div>
            <div className="observability-footer">
              <span>Logs · Metrics · Traces · Dashboards · Alerting · Synthetic monitoring · Incident correlation</span>
              <div className="tag-list">
                {skillGroups.find((group) => group.category === "Observability")?.tools.map((tool) => <Tag key={tool}>{tool}</Tag>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="automation">
          <SectionHeading
            eyebrow="07 / Automation & scripting"
            title="Give repeatable work a repeatable path."
            description="Scripting and APIs make routine operations easier to trigger, understand and maintain."
          />
          <div className="automation-grid">
            {[
              ["Disk utilization monitoring", "Surface capacity signals before they become operational surprises.", Activity],
              ["Log analysis", "Turn noisy operational output into a useful starting point for investigation.", Radio],
              ["Deployment automation", "Reduce manual steps in build, release and rollback workflows.", Workflow],
              ["Incident automation", "Connect alerts and response procedures with repeatable actions.", ShieldCheck],
              ["Cloud automation", "Apply Python, Bash, Ansible and APIs to infrastructure operations.", Cloud],
            ].map(([title, detail, Icon]) => {
              const FeatureIcon = Icon as IconType;
              return (
                <article className="automation-card" key={title as string}>
                  <span className="feature-icon"><FeatureIcon size={19} /></span>
                  <h3>{title as string}</h3>
                  <p>{detail as string}</p>
                </article>
              );
            })}
          </div>
          <div className="delivery-tools">
            {["Python", "Bash", "Shell scripting", "Ansible", "APIs", "FastAPI", "Linux automation"].map((tool) => <Tag key={tool}>{tool}</Tag>)}
          </div>
        </section>

        <section className="section-wrap content-section ai-section" id="ai">
          <SectionHeading
            eyebrow="08 / Applied AI · AIOps"
            title="AI for operational work, not just demos."
            description="The focus is on specific SRE and DevOps workflows: incident documentation, Kubernetes troubleshooting, cost analysis, drift and operational knowledge."
          />
          <div className="ai-principles">
            {[
              ["Context", "Bring operational signals, state and documentation together."],
              ["Assist", "Use LLMs and retrieval to make investigations more navigable."],
              ["Review", "Keep outputs visible to engineers and fit into existing workflows."],
            ].map(([title, detail], index) => (
              <div className="ai-principle" key={title}>
                <span className="principle-number">0{index + 1}</span>
                <div><strong>{title}</strong><p>{detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <SectionHeading
            eyebrow="09 / Selected work"
            title="Projects built around real engineering problems."
            description="Explore the problem, architecture, technology and impact for each project. No repository link is shown unless a URL was supplied."
          />
          <div className="project-toolbar">
            <span>{visibleProjects.length} projects</span>
            <div className="filter-list" aria-label="Filter projects">
              {categories.map((category) => (
                <button
                  type="button"
                  className={projectFilter === category ? "filter-chip selected" : "filter-chip"}
                  key={category}
                  aria-pressed={projectFilter === category}
                  onClick={() => setProjectFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="projects-grid" aria-live="polite">
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-head">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-problem">{project.problem}</p>
                <div className="project-detail">
                  <span>ARCHITECTURE</span><p>{project.architecture}</p>
                </div>
                <div className="tag-list">{project.stack.map((tool) => <Tag key={tool}>{tool}</Tag>)}</div>
                <div className="project-detail feature-list">
                  <span>KEY FEATURES</span>
                  <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                </div>
                <div className="impact-note"><Activity size={15} /><span>{project.impact}</span></div>
                <p className="learning-note"><strong>What I learned:</strong> {project.learning}</p>
                <div className="project-links">
                  {project.repository ? (
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      <Github size={15} /> Repository <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span className="link-pending">Repository link not supplied</span>
                  )}
                  {project.repository && <span className="readme-note">README in repository</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section" id="experience">
          <SectionHeading
            eyebrow="10 / Career timeline"
            title="Experience, grounded in outcomes."
            description="The timeline structure is ready; add verified employers, dates, responsibilities and measurable results in the portfolio data."
          />
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <span className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-heading">
                    <div><h3>{item.role}</h3><span>{item.company}</span></div>
                    <span className="timeline-date">{item.dates}</span>
                  </div>
                  <p>{item.summary}</p>
                  {item.achievements.length > 0 && (
                    <ul>{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
                  )}
                  <div className="tag-list">{item.technologies.map((tool) => <Tag key={tool}>{tool}</Tag>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section" id="credentials">
          <SectionHeading
            eyebrow="11 / Credentials & recognition"
            title="A place for verified credentials."
            description="Add certificates, training and awards with their official titles and links; no credentials have been inferred."
          />
          <div className="credential-grid">
            {[
              ["Certifications", credentials.certifications],
              ["Training", credentials.training],
              ["Awards & recognition", credentials.awards],
            ].map(([title, items]) => (
              <article className="credential-card" key={title as string}>
                <span className="feature-icon"><ShieldCheck size={19} /></span>
                <h3>{title as string}</h3>
                {(items as string[]).length > 0 ? (
                  <ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
                ) : (
                  <p>Details to be added from verified records.</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section" id="resume">
          <SectionHeading
            eyebrow="12 / Resume"
            title="A focused view of my engineering profile."
            description="Preview the supplied PDF or download a copy. The editable profile summary is shown below."
          />
          <div className="resume-card" id="resume-preview">
            <div className="resume-summary">
              <span className="resume-label">PROFILE SNAPSHOT</span>
              <h3>{profile.name}</h3>
              <p>{profile.role}</p>
              <ul>{resumeFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
            </div>
            <div className="resume-actions">
              <div className="resume-button-row">
                <a
                  className="button button-secondary"
                  href={hasResume ? `${import.meta.env.BASE_URL}${profile.resumePath}` : "#resume-preview"}
                  target={hasResume ? "_blank" : undefined}
                  rel={hasResume ? "noreferrer" : undefined}
                  aria-disabled={!hasResume}
                >
                  <Eye size={16} /> Preview PDF
                </a>
                <a
                  className="button button-primary"
                  href={hasResume ? `${import.meta.env.BASE_URL}${profile.resumePath}` : "#resume-preview"}
                  download={hasResume ? "Paramesh-Nathi-Resume.pdf" : undefined}
                  aria-disabled={!hasResume}
                >
                  <ArrowDownToLine size={16} /> Download PDF
                </a>
              </div>
              {!hasResume && <span>Add the approved PDF at public/resume/Paramesh-Nathi-Resume.pdf to enable these actions.</span>}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <span className="eyebrow">13 / Contact</span>
              <h2>Let’s build dependable systems.</h2>
              <p>For SRE, DevOps, platform engineering and AI-driven operations conversations.</p>
            </div>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>}
              {profile.email && <a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={14} /></a>}
              {!hasContact && <span className="contact-pending">Add a professional email and LinkedIn URL in src/data/portfolio.ts.</span>}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#about" aria-label="Back to top">
          <span className="brand-mark">PN</span><span className="brand-copy"><strong>Paramesh Nathi</strong><small>ENGINEERING WITH INTENT</small></span>
        </a>
        <span>Built for reliability, clarity and the next deploy.</span>
        <a href="#about">Back to top <ChevronDown size={14} className="back-top-icon" /></a>
      </footer>
    </>
  );
}

export default App;
