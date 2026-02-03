export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    location: string;
    bio: string;
    availability: string;
    website?: string;
    linkedin?: string;
}

export interface WorkExperience {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    period: string;
    description?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
}

export const personalInfo: PersonalInfo = {
    name: "Andrea De Tomasi",
    title: "Cloud Architect & DevOps Engineer",
    email: "andreadetodev@gmail.com",
    location: "Vicenza, Veneto, Italy",
    bio: "Cloud Architect and DevOps Engineer focused on scalable, secure, and easily maintainable infrastructures. Curious and always seeking opportunities to learn, I enjoy transforming complex problems into simple solutions, following the KISS principle: 'Keep It Simple, Stupid.' In my free time, I enjoy practicing sports and spending time in nature, whether it's going for a walk or flying paragliders.",
    availability: "Available for freelance projects",
    website: "https://adetomasi.com",
    linkedin: "andrea-de-tomasi",
};

export const skills = [
    "AWS",
    "OCI",
    "Kubernetes",
    "ECS",
    "EKS",
    "Terraform",
    "AWS CDK",
    "Ansible",
    "GitLab CI",
    "Grafana",
    "CloudWatch",
    "Zabbix",
    "TypeScript",
    "Python",
    "FinOps",
    "IoT MQTT",
    "LangChain",
    "RAG",
];

export const workExperience: WorkExperience[] = [
    {
        id: "1",
        title: "Cloud Architecture Consultant",
        company: "Freelance",
        period: "January 2025 - Present",
        description:
            "Design and implementation of scalable cloud infrastructures, with a focus on cost optimization, automation, and data security. Achieved AWS cost reductions of 30–50% for customers through strategic FinOps implementations, autoscaling policies, and migrations. Conducted cloud architecture security audits, identifying potential vulnerabilities. Designed Cloud solutions integrated with development teams, using AWS managed services with Terraform and DevOps practices for automated deployments. Implemented infrastructure monitoring systems, preventing potential downtime of critical services through alerting and dashboards.",
    },
    {
        id: "2",
        title: "Cloud Architect",
        company: "Icaro",
        period: "January 2025 - January 2026",
        description:
            "Design and implementation of Cloud infrastructure for an internal product. IoT Infrastructure: setup and configuration of AWS IoT Core, MQTT, Timestream, Firehose to receive data from IoT devices, perform batching and compression. Large Scale Query: setup for visualizing IoT device metrics via Grafana, using AWS Athena for time-series data queries on S3. Cloud Infrastructure: Designed and implemented cloud infrastructure on AWS (Networking, Database, Security, Computing, ECS, SSL Certificates, Domains, Load Balancing, RBAC). Infrastructure as Code with Terraform. Developed CI/CD pipelines on GitLab to automate testing, building, and deployment. Implemented autoscaling strategies, backup solutions, and monitoring/alerting systems.",
    },
    {
        id: "3",
        title: "Cloud & AI Engineer",
        company: "Technology Reply",
        period: "January 2024 - January 2025",
        description:
            "Oracle Cloud Infrastructure: Management of Oracle Cloud environments with Terraform and Kubernetes, across four environments between production and development. GitLab & CI/CD: Development of pipelines for automatic deployment of infrastructures and applications, configuration and management of projects and permissions. Infrastructure Observability: Setup of an observability project for an infrastructure of ~1,000 servers with EasyVista Observe and Zabbix. Log Management: Evaluation of log management solutions (Datadog, Grafana, Elastic) for centralized monitoring and analysis. RAG Chains: Development of RAG chains with LangChain and OpenAI or Transformer backends, integrating internal documentation and email history. Q/A Bot: Development of a Q/A bot based on RAG on customer incident history, with cloud service on GPU and OpenAI-compatible APIs for greater privacy and performance.",
    },
    {
        id: "4",
        title: "Backend Developer / Cloud Engineer",
        company: "2hire",
        period: "March 2023 - January 2024",
        description:
            "AWS Infrastructure: Management of AWS infrastructure with CDK and DevOps practices (ECS, EC2, S3, Timestream). Backend TypeScript: Development and maintenance of backend services in TypeScript. IoT & MQTT: Management of MQTT data reception from edge devices, processing via gateway, and forwarding to AWS Timestream. Data consumption from backend services for charts and real-time visualization. Deployment and Monitoring: Setup of deployment pipelines and application monitoring with Grafana, AWS CloudWatch, and Prometheus. Agile: Working in an Agile context with Git, Jira, and Kanban, actively participating in Scrum ceremonies. Log Management: Contribution to a log compression system on Google Cloud Buckets and on-the-fly decompression via Elastic.",
    },
];

export const education: Education[] = [
    {
        id: "1",
        degree: "Master's Degree in Cloud and Network Infrastructure",
        institution: "Technische Universität Berlin",
        period: "2022 - 2023",
        description: "Cloud computing (Flink, Hadoop, OpenStack, Kubernetes, Ansible, AWS), Blockchain prototyping on Tezos Layer 2 Blockchain",
    },
    {
        id: "2",
        degree: "Master's Degree in Cloud and Network Infrastructure",
        institution: "Université de Rennes 1",
        period: "2021 - 2022",
        description: "Internet Networks, Microservices and container technologies, Multiprocessor Coordination, Performance evaluation models, Distributed architectures, Distributed services, Distributed and concurrent programming with OpenMP, Open MPI and CUDA",
    },
    {
        id: "3",
        degree: "Bachelor's Degree in Computer Science",
        institution: "Università di Padova",
        period: "2018 - 2021",
        description: "Fundamentals of Computer Science and Software Engineering",
    },
];

export const certifications = [
    {
        id: "1",
        name: "CKA: Certified Kubernetes Administrator",
        issuer: "Linux Foundation",
        date: "October 2025",
    },
    {
        id: "2",
        name: "AWS Certified Solutions Architect Professional",
        issuer: "AWS",
        date: "In progress",
    },
    {
        id: "3",
        name: "OCI Architect Associate",
        issuer: "Oracle",
        date: "April 2024",
    },
    {
        id: "4",
        name: "Cisco CCNA Routing and Switching",
        issuer: "CISCO",
        date: "Certified",
    },
    {
        id: "5",
        name: "IELTS Academy English C1",
        issuer: "IELTS",
        date: "Certified",
    },
];

export const projects: Project[] = [
    {
        id: "1",
        title: "Blockchain Layer 2 with Zero-Knowledge Rollups",
        description:
            "Complete design and implementation from scratch of a Layer 2 using zero-knowledge rollups for Tezos blockchain. Wrote and deployed the program and smart contracts to manage and verify rollups, achieving a 99% reduction in L1 transaction costs. Master's Thesis project at Technische Universität Berlin.",
        technologies: ["Blockchain", "Tezos", "Zero-Knowledge Proofs", "Smart Contracts", "Layer 2"],
    },
    {
        id: "2",
        title: "AWS IoT Infrastructure for Device Metrics",
        description:
            "Designed and implemented a complete IoT infrastructure on AWS for receiving, processing, and visualizing metrics from thousands of IoT devices. Utilized AWS IoT Core, MQTT, Timestream, Firehose for data ingestion, and Grafana with Athena for large-scale time-series queries on S3.",
        technologies: ["AWS IoT Core", "MQTT", "Timestream", "Firehose", "Athena", "Grafana", "S3", "Node-Red"],
    },
    {
        id: "3",
        title: "RAG-based Q/A Bot with LangChain",
        description:
            "Developed an intelligent Q/A bot based on Retrieval-Augmented Generation (RAG) using customer incident history. Implemented with LangChain and OpenAI-compatible APIs running on GPU cloud services for enhanced privacy and performance. Integrated internal documentation and email history for comprehensive knowledge base.",
        technologies: ["LangChain", "RAG", "OpenAI APIs", "Python", "GPU Computing", "NLP"],
    },
    {
        id: "4",
        title: "Multi-Environment Oracle Cloud Infrastructure",
        description:
            "Managed Oracle Cloud Infrastructure environments with Terraform and Kubernetes across four environments (production and development). Developed GitLab CI/CD pipelines for automatic deployment of infrastructures and applications. Set up observability for ~1,000 servers using EasyVista Observe and Zabbix.",
        technologies: ["OCI", "Terraform", "Kubernetes", "GitLab CI", "Zabbix", "EasyVista Observe"],
    },
];
