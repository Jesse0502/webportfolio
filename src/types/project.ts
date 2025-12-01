export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  techStack: string[];
  skills: string[];
  demoUrl?: string;
  githubUrl?: string;
  usePlaceholder?: boolean;
  // New fields for solutions-focused approach
  problemStatement?: string;
  solution?: string;
  issuesFaced?: string[];
  solutionsApplied?: string[];
  results?: string;
  categories: string[]; // Filter categories
}

export const projectCategories = ["All", "N8N", "LangChain", "RAG", "AI SaaS"] as const;
export type ProjectCategory = typeof projectCategories[number];

export const projects: Project[] = [
  {
    id: "ai-automation-workflow",
    title: "AI-Powered Business Automation",
    summary: "End-to-end automation solution using N8N and AI to streamline client operations and reduce manual work by 80%.",
    description: "Developed a comprehensive automation system that integrates multiple business tools using N8N workflows, AI agents, and custom APIs. The solution processes customer inquiries, generates responses using LangChain and GPT-4, and automatically updates CRM systems.",
    problemStatement: "Client was spending 15+ hours weekly on repetitive customer support tasks, data entry, and follow-ups across multiple platforms.",
    solution: "Built an intelligent automation pipeline using N8N that captures inquiries, processes them with AI, updates databases, and sends personalized responses - all without human intervention.",
    thumbnail: "/placeholder-ai.jpg",
    images: [
      "/placeholder-ai-1.jpg",
      "/placeholder-ai-2.jpg",
      "/placeholder-ai-3.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    issuesFaced: [
      "Complex integration between legacy CRM and modern automation tools",
      "AI responses needed context from multiple data sources",
      "Rate limiting on API calls during peak hours",
      "Maintaining conversation context across multiple channels",
    ],
    solutionsApplied: [
      "Built custom middleware to translate between API formats",
      "Implemented RAG (Retrieval Augmented Generation) for context-aware responses",
      "Added intelligent queue system with retry logic and caching",
      "Used LangChain memory components to maintain conversation state",
    ],
    results: "Reduced response time from 4 hours to 2 minutes. Saved client 15 hours/week. Improved customer satisfaction by 45%.",
    techStack: ["N8N", "LangChain", "OpenAI GPT-4", "RAG", "PostgreSQL", "Redis"],
    skills: ["AI Integration", "Workflow Automation", "API Development", "System Architecture"],
    demoUrl: "https://demo.example.com",
    usePlaceholder: true,
    categories: ["N8N", "LangChain", "RAG", "AI SaaS"],
  },
  {
    id: "rag-knowledge-base",
    title: "RAG-Powered Knowledge Management",
    summary: "Intelligent document search and Q&A system using RAG technology for a 10,000+ document enterprise knowledge base.",
    description: "Created a sophisticated knowledge management system that uses Retrieval Augmented Generation (RAG) to help employees find information instantly from thousands of documents, reducing time spent searching from hours to seconds.",
    problemStatement: "Enterprise client had 10,000+ documents scattered across drives. Employees spent hours searching for information, often never finding what they needed.",
    solution: "Implemented RAG system that embeds all documents into a vector database, allowing natural language queries to retrieve precise information with source citations.",
    thumbnail: "/placeholder-rag.jpg",
    images: [
      "/placeholder-rag-1.jpg",
      "/placeholder-rag-2.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    issuesFaced: [
      "Documents in various formats (PDF, Word, Excel, Scans)",
      "Maintaining accuracy while providing fast responses",
      "Handling different languages and technical jargon",
      "Updating embeddings when documents change",
    ],
    solutionsApplied: [
      "Built custom parsers for each document type with OCR for scans",
      "Implemented hybrid search combining vector similarity and keyword matching",
      "Used multilingual embeddings model and custom preprocessing",
      "Created webhook system to auto-update vector store on file changes",
    ],
    results: "95% query accuracy. Reduced search time from 2 hours to under 30 seconds. Employees now use system 50+ times daily.",
    techStack: ["LangChain", "Pinecone", "OpenAI Embeddings", "FastAPI", "React", "PostgreSQL"],
    skills: ["RAG Implementation", "Vector Databases", "NLP", "Full Stack Development"],
    githubUrl: "https://github.com/example/project",
    usePlaceholder: true,
    categories: ["RAG", "LangChain", "AI SaaS"],
  },
  {
    id: "langchain-chatbot",
    title: "Intelligent Customer Support Chatbot",
    summary: "LangChain-based conversational AI that handles 1000+ customer queries daily with 90% accuracy.",
    description: "Developed an advanced chatbot using LangChain that understands complex customer queries, accesses multiple data sources, and provides accurate, context-aware responses. Integrated with existing help desk for seamless escalation.",
    problemStatement: "Support team overwhelmed with 1000+ daily queries. 60% were repetitive questions, causing burnout and long wait times.",
    solution: "Built intelligent chatbot with LangChain agents that can query databases, call APIs, and provide step-by-step solutions. Automatically escalates complex issues to human agents.",
    thumbnail: "/placeholder-chatbot.jpg",
    images: [
      "/placeholder-chatbot-1.jpg",
      "/placeholder-chatbot-2.jpg",
      "/placeholder-chatbot-3.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    issuesFaced: [
      "Handling ambiguous queries and follow-up questions",
      "Knowing when to escalate to human support",
      "Integration with legacy ticketing system",
      "Managing conversation memory for long interactions",
    ],
    solutionsApplied: [
      "Implemented LangChain agents with custom tools for clarification",
      "Built confidence scoring system to trigger escalations",
      "Created REST API wrapper around legacy system",
      "Used Redis for conversation state with automatic cleanup",
    ],
    results: "Handles 70% of queries autonomously. Reduced ticket queue by 40%. Support team now focuses on complex issues only.",
    techStack: ["LangChain", "Python", "FastAPI", "Redis", "PostgreSQL", "React"],
    skills: ["Conversational AI", "LangChain Agents", "API Integration", "System Design"],
    demoUrl: "https://demo.example.com",
    usePlaceholder: true,
    categories: ["LangChain", "AI SaaS"],
  },
  {
    id: "n8n-integration-platform",
    title: "Multi-Platform Integration Hub",
    summary: "N8N-based integration platform connecting 15+ business tools for seamless data flow and automation.",
    description: "Built a central integration hub using N8N that connects CRM, email marketing, accounting software, and project management tools. Automated workflows handle data synchronization, notifications, and business logic.",
    problemStatement: "Client used 15+ disconnected tools. Manual data entry across platforms took 20 hours weekly and caused sync errors.",
    solution: "Created N8N workflows that automatically sync data bi-directionally, trigger actions based on events, and maintain data consistency across all platforms.",
    thumbnail: "/placeholder-integration.jpg",
    images: [
      "/placeholder-integration-1.jpg",
      "/placeholder-integration-2.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    issuesFaced: [
      "Different API rate limits and authentication methods",
      "Data format inconsistencies between platforms",
      "Handling failed syncs and rollbacks",
      "Monitoring workflow health across 50+ active workflows",
    ],
    solutionsApplied: [
      "Built rate-limiting queue system with intelligent backoff",
      "Created data transformation layer with validation",
      "Implemented transaction logs with automatic retry and alerts",
      "Developed custom N8N dashboard with Grafana for monitoring",
    ],
    results: "Eliminated 20 hours/week of manual work. Zero sync errors in 3 months. Connected 15 tools with 50+ automated workflows.",
    techStack: ["N8N", "Node.js", "PostgreSQL", "Docker", "Grafana", "Redis"],
    skills: ["Integration Architecture", "N8N Workflows", "DevOps", "Monitoring"],
    githubUrl: "https://github.com/example/project",
    usePlaceholder: true,
    categories: ["N8N"],
  },
];
