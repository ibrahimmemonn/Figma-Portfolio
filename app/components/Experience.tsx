import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "SaaS Operations Engineer – Sitecore (IGT1 Sri Lanka)",
    Nov 2024 – Aug 2025
    description: `
Nov 2024 – Aug 2025

• Provided 24/7 operational support for production SaaS environments, resolving incidents across applications, infrastructure, and integrations within SLAs.
• Automated deployments and configuration management using Azure DevOps CI/CD pipelines, GitHub Actions, and Terraform.
• Managed containerized workloads on Azure Kubernetes Service (AKS) using Helm charts.
• Monitored application health using Prometheus, Grafana, and Site24x7.
• Executed automation jobs with Rundeck and Ansible playbooks.
• Supported Azure services including App Services, SQL Databases, Redis, Logic Apps, and networking.
• Performed RCA, created runbooks, SOPs, and operational documentation in Confluence.
    `,
    icon: "/cards/sitecore.png",
  },
  {
    id: 2,
    title: "Operations Engineer – eBuilder Technology Centre (Pvt) Ltd",
    description: `
May 2022 – Oct 2024

• Supported Tier-1 banking systems and middleware integrations ensuring high availability.
• Troubleshot Linux systems using logs, configurations, Bash scripts, and API checks.
• Developed Bash and PowerShell scripts for automation and system maintenance.
• Participated in on-prem to Azure AD migration and Microsoft 365 identity tasks.
• Supported middleware migrations and SQL-based data validation.
• Managed incidents and changes via Jira and TopDesk following ITIL practices.
• Participated in 24/7 on-call rotation support.
    `,
    icon: "/cards/ebuilder.png",
  },
  {
    id: 3,
    title: "Intern – Telecommunication Engineer (Sri Lanka Telecom PLC)",
    description: `
Jul 2021 – Jan 2022

• Assisted in design and implementation of the national fibre network.
• Installed and configured fibre optic cables and network equipment.
• Performed testing, troubleshooting, and maintenance of fibre networks.
    `,
    icon: "/cards/SLT.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              <Link
                href="https://ibiimemon.com/lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
                LEARN MORE →
              </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

