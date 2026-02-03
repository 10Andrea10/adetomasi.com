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
    bio: "Cloud Architect and DevOps Engineer focused on scalable, secure, and maintainable infrastructures. I transform complex problems into simple solutions following the KISS principle. Passionate about automation, cost optimization, and cloud security.",
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
            "Design and implementation of scalable cloud infrastructures with focus on cost optimization and security.\n\n• Achieved 30-50% AWS cost reductions through FinOps implementations and autoscaling\n• Conducted cloud architecture security audits identifying critical vulnerabilities\n• Implemented monitoring systems preventing downtime through proactive alerting\n• Designed cloud solutions with Terraform and DevOps automation\n\n**Tech:** AWS, Terraform, FinOps, Security Auditing, Monitoring",
    },
    {
        id: "2",
        title: "Cloud Architect",
        company: "Icaro",
        period: "January 2025 - January 2026",
        description:
            "End-to-end cloud infrastructure design for IoT product handling thousands of devices.\n\n• Built AWS IoT infrastructure with MQTT, Timestream, and Firehose for device data ingestion\n• Configured Grafana dashboards with Athena for large-scale time-series queries on S3\n• Designed complete AWS infrastructure: Networking, RDS, ECS, Load Balancing, RBAC\n• Developed GitLab CI/CD pipelines for automated testing and deployment\n• Implemented autoscaling, backup strategies, and comprehensive monitoring\n\n**Tech:** AWS IoT Core, MQTT, Timestream, Athena, Grafana, Terraform, GitLab CI, Node-Red",
    },
    {
        id: "3",
        title: "Cloud & AI Engineer",
        company: "Technology Reply",
        period: "January 2024 - January 2025",
        description:
            "Multi-cloud infrastructure management and AI/ML solution development.\n\n• Managed Oracle Cloud environments with Terraform and Kubernetes (4 environments)\n• Built observability platform for ~1,000 servers using Zabbix and EasyVista\n• Developed RAG chains with LangChain integrating documentation and email history\n• Created Q/A bot with OpenAI-compatible APIs on GPU for enhanced privacy\n• Evaluated and implemented log management solutions (Datadog, Grafana, Elastic)\n\n**Tech:** OCI, Kubernetes, Terraform, LangChain, RAG, OpenAI APIs, Zabbix, GitLab CI",
    },
    {
        id: "4",
        title: "Backend Developer / Cloud Engineer",
        company: "2hire",
        period: "March 2023 - January 2024",
        description:
            "Full-stack cloud infrastructure and backend development with IoT integration.\n\n• Managed AWS infrastructure with CDK (ECS, EC2, S3, Timestream)\n• Built TypeScript backend services and RESTful APIs\n• Implemented MQTT data pipeline from IoT devices to AWS Timestream\n• Configured monitoring with Grafana, CloudWatch, and Prometheus\n• Developed log compression system on Google Cloud with Elastic\n\n**Tech:** AWS CDK, TypeScript, IoT MQTT, Timestream, Grafana, Prometheus, Elastic",
    },
];

export const education: Education[] = [
    {
        id: "1",
        degree: "Master's Degree in Cloud and Network Infrastructure",
        institution: "Technische Universität Berlin",
        period: "2022 - 2023",
        description: "Cloud computing, Kubernetes, Ansible, AWS, Blockchain prototyping on Tezos Layer 2",
    },
    {
        id: "2",
        degree: "Master's Degree in Cloud and Network Infrastructure",
        institution: "Université de Rennes 1",
        period: "2021 - 2022",
        description: "Microservices, Distributed systems, Concurrent programming (OpenMP, MPI, CUDA)",
    },
    {
        id: "3",
        degree: "Bachelor's Degree in Computer Science",
        institution: "Università di Padova",
        period: "2018 - 2021",
        description: "Computer Science and Software Engineering fundamentals",
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
            "Master's thesis: Designed and implemented a Layer 2 solution for Tezos blockchain using zero-knowledge rollups. Achieved 99% reduction in L1 transaction costs through custom smart contracts and rollup verification.",
        technologies: ["Blockchain", "Tezos", "Zero-Knowledge Proofs", "Smart Contracts", "Layer 2"],
    },
    {
        id: "2",
        title: "AWS IoT Infrastructure for Device Metrics",
        description:
            "Complete IoT infrastructure for thousands of devices. Built data ingestion pipeline with AWS IoT Core, MQTT, and Timestream. Implemented large-scale visualization using Grafana and Athena for time-series queries on S3.",
        technologies: ["AWS IoT Core", "MQTT", "Timestream", "Firehose", "Athena", "Grafana", "S3", "Node-Red"],
    },
    {
        id: "3",
        title: "RAG-based Q/A Bot with LangChain",
        description:
            "Intelligent Q/A bot using Retrieval-Augmented Generation on customer incident history. Deployed with OpenAI-compatible APIs on GPU cloud for enhanced privacy and performance. Integrated documentation and email history.",
        technologies: ["LangChain", "RAG", "OpenAI APIs", "Python", "GPU Computing", "NLP"],
    },
    {
        id: "4",
        title: "Multi-Environment Oracle Cloud Infrastructure",
        description:
            "Managed OCI environments with Terraform and Kubernetes across 4 environments. Built GitLab CI/CD pipelines for automated infrastructure deployment. Implemented observability for ~1,000 servers with Zabbix.",
        technologies: ["OCI", "Terraform", "Kubernetes", "GitLab CI", "Zabbix", "EasyVista Observe"],
    },
];
