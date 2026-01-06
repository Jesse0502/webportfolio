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
  "id": "ai-rea",
  "title": "AI Real Estate Assistant",
  "summary": "An N8N workflow that automates the process of a Real Estate Agent by handling tasks such as appraisals, booking services, handling payments, and more.",
  "description": "A close to production-ready N8N workflow that automates the process of a Real Estate Agent by handling tasks such as appraisals, booking services, handling payments, and more.",
  "problemStatement": "Real Estate Agents spend hours manually handling tasks such as appraisals, booking services, handling payments, and more. This is a time-consuming and repetitive process that can be automated.",
  "solution": "I built an N8N workflow that automates the process of a Real Estate Agent by handling tasks such as appraisals, booking services, handling payments, and more.",
  "results": "Successfully built a close to production-ready N8N workflow that automates the process of a Real Estate Agent by handling tasks such as appraisals, booking services, handling payments, and more.",
  "videoUrl": "",
  "techStack": [
    "N8N",
    "Grok 3.5",
    "Stripe",
    "Documentero",
    "Gmail",
    "Supabase",
  ],
  "skills": [
    "N8N Automation",
    "AI Integration & Orchestration",
    "RAG (Retrieval Augmented Generation)",
    "Document Generation",
    "Payment Processing",
    "Email Automation",
    "API Integration",
    "Workflow Automation",
  ],
  "demoUrl": "",
  "githubUrl": "",
  "usePlaceholder": false,
  "thumbnail": "/n8n2.png",
  "images": [
    "/projects/ai-rea/1.png",
  ],
  "categories": [
    "RAG",
    "Vector Database",
    "N8N"
  ]
},
  {
  "id": "yield-ai-memory-assistant",
  "title": "yield · AI Memory Assistant",
  "summary": "Full-stack second brain that unifies streaming AI chat, persistent memory management, file-based RAG, and smart reminders. Built with FastAPI, Next.js, xAI Grok-3, and Supabase vector store.",
  "description": "A production-ready AI-powered memory assistant that serves as a personal second brain. The system features a streaming chat interface powered by xAI's Grok-3 model, intelligent memory extraction and storage using Google Generative AI embeddings, file upload RAG pipeline for document ingestion, and a background scheduler for smart reminders. The architecture separates concerns with a FastAPI backend handling AI orchestration, memory processing, and background tasks, while a Next.js frontend provides a responsive dashboard with Redux state management. All data is user-scoped with JWT authentication, ensuring privacy and security. The system proactively retrieves relevant memories to provide context-aware responses, and includes a background memory processor that sanitizes and extracts facts from conversations automatically.",
  "problemStatement": "Users need a centralized system to store, retrieve, upload documents and have the AI understand their content, schedule reminders, and maintain a searchable knowledge base of facts about themselves.",
  "solution": "I built a full-stack AI memory assistant that functions as a proactive 'second brain' by integrating streaming chat, long-term memory, and document analysis into a single cohesive platform. Powered by xAI Grok-3 and LangChain, the system uses a background processor to analyze conversations in real-time, extracting atomic facts and resolving pronouns to build a persistent third-person memory profile for the user.",
  "issuesFaced": [
    "Memory consistency issues where contradictory facts were stored without resolution",
    "LLM storing both raw and sanitized text, creating duplicate memories",
    "LLM not executing multi-step tool calls (search-then-delete) requiring agentic loop implementation",
    "Frontend refetching data on every page navigation causing redundant API calls",

    "File upload errors when Supabase Storage expected raw bytes instead of BytesIO objects",
    "Memory processor needing conversation context to resolve pronouns and extract meaningful facts",
    "Deep linking to specific chat messages, notifications, and memories from global search results"
  ],
  "solutionsApplied": [ 
    "Implemented timestamp-based memory history strategy where AI prioritizes most recent facts and acknowledges changes over time",
    "Decoupled memory operations by removing add_memory from main chat model tools, centralizing all memory writes in background MemoryProcessor service",
    "Implemented agentic loop in AI service that detects tool calls, executes them, feeds results back to model, and generates final response",
    "Added client-side caching with hasLoaded flags in Redux slices to prevent redundant API calls when navigating between pages",
    "Changed file upload to pass raw file_bytes directly to Supabase Storage instead of BytesIO wrapper",
    "Modified memory processor system prompt to explicitly instruct JSON output with intent classification (SAVE/DELETE/NONE) and fact extraction",
    "Added message IDs, notification IDs, and file IDs to search results with URL hash-based deep linking and scroll-to-message functionality"
  ],
  "results": "Successfully built a production-ready AI memory assistant with full authentication, user-scoped data access, streaming chat responses, automatic memory extraction, file-based RAG, and smart reminders. The system handles multi-format file uploads, provides context-aware AI responses through proactive memory retrieval. Background processing ensures memory operations don't block chat responses, and the architecture supports horizontal scaling. ",
  "videoUrl": "https://youtu.be/k8e4hRdOhrA",
  "techStack": [
    "FastAPI",
    "Next.js 14",
    "TypeScript",
    "xAI Grok-3",
    "LangChain",
    "Supabase (PostgreSQL + Vector Store + Storage)",
  ],
  "skills": [
    "Full-Stack Development",
    "AI Integration & Orchestration",
    "RAG (Retrieval Augmented Generation)",
    "Vector Database Management",
    "State Management (Redux)",
    "File Processing & Text Extraction",
    "Semantic Search Implementation",
    "Real-time Data Synchronization",
  ],
  "demoUrl": "",
  "githubUrl": "https://github.com/Jesse0502/yield",
  "usePlaceholder": false,
  "thumbnail": "/projects/yield-ai-memory-assistant/thumbnail.png",
  "images": [
    "/projects/yield-ai-memory-assistant/1.png",
    "/projects/yield-ai-memory-assistant/2.png",
  ],
  "categories": [
    "RAG",
    "LangChain",
    "AI SaaS",
    "Full-Stack",
    "Vector Database",
    "FastAPI",
    "Next.js"
  ]
},
  {
  "id": "rumi-ai-networking",
  "title": "RUMI - AI-Powered Professional Networking Platform",
  "summary": "An AI-powered networking platform that connects people based on skills, services, and synergies rather than just titles or companies. Features semantic matching, interactive AI chat, letter writing, and event management.",
  "description": "RUMI is a comprehensive AI-driven networking platform that revolutionizes how professionals connect. The system uses Google Gemini AI to analyze user profiles from resumes, extracting skills, industries, interests, and personality traits. It employs a hybrid matching algorithm combining semantic similarity (Sentence Transformers embeddings) with weighted boosts for shared skills, industries, and location. The platform features an interactive AI chat interface where users describe who they're looking for, and the AI asks clarifying questions before finding matches.",
  "problemStatement": "Users spend hours manually searching for people with specific expertise or services, and there's no intelligent way to discover connections beyond keyword matching. The networking process is time-consuming, lacks context awareness, and doesn't leverage AI to understand user intent and preferences.",
  "solution": "Built an AI-powered networking platform that uses natural language processing and semantic embeddings to understand user profiles and preferences at a deeper level. The system extracts meaningful attributes from resumes using Google Gemini AI, creates vector embeddings for semantic search, and uses a hybrid matching algorithm that combines semantic similarity with weighted boosts for shared attributes.",
  "thumbnail": "/projects/rumi-ai-networking/5.png",
  "images": [
    "/projects/rumi-ai-networking/1.png",
    "/projects/rumi-ai-networking/2.png",
    "/projects/rumi-ai-networking/3.png",
    "/projects/rumi-ai-networking/4.png",
  ],
  "videoUrl": "https://youtu.be/qS_q9Eeppks",
  "issuesFaced": [
    "Integrating multiple AI services (Gemini API, Sentence Transformers) with proper error handling and fallbacks",
    "Handling real-time WebSocket connections for chat, notifications, and presence tracking across multiple users",
    "Processing large PDF resumes and extracting structured data reliably using AI",
    "Managing asynchronous AI operations (letter matching, event matching) without blocking the main API",
    "Implementing proper timezone-aware timestamps across frontend and backend",
    "Coordinating file uploads to Google Cloud Storage with proper CORS configuration",
  ],
  "solutionsApplied": [
    "Used ThreadPoolExecutor for CPU-intensive AI operations (letter/event matching) to prevent blocking the FastAPI event loop",
    "Built WebSocket router with connection management, presence tracking, and real-time message broadcasting to online users",
    "Created robust JSON extraction utilities with multiple fallback strategies for parsing AI responses with marker delimiters",
    "Implemented user embedding system that generates and stores vector embeddings in MongoDB for fast semantic search",
    "Implemented Redux store for managing chat state, matches, and WebSocket connections across the React app",
    "Created comprehensive error handling with try-catch blocks, logging, and graceful degradation for offline scenarios",
  ],
  "results": "Successfully built a production-ready AI networking platform with intelligent matching that goes beyond keyword search. The system can extract meaningful attributes from resumes, understand user intent through conversational AI, and provide contextually relevant matches. Real-time messaging and notifications enable seamless communication. The hybrid matching algorithm provides more accurate results than pure semantic search or pure attribute matching alone. The platform is deployed on Google Cloud Run (backend) and Netlify (frontend) with proper CI/CD pipelines.",
  "techStack": [
    "React",
    "TypeScript",
    "FastAPI",
    "Python",
    "MongoDB",
    "Google Gemini AI",
    "Sentence Transformers",
  ],
  "skills": [
    "AI Integration",
    "Semantic Search",
    "Vector Embeddings",
    "WebSocket Development",
    "Full-Stack Development",
    "Cloud Deployment",
    "Database Design",
  ],
  "demoUrl": "",
  "githubUrl": "",
  "usePlaceholder": false,
  "categories": [
    "AI SaaS",
    "Networking Platform",
    "Semantic Search",
    "Real-time Communication",
    "Full-Stack Application"
  ]
},
{
  "id": "faq-support-bot-rag",
  "title": "RAG-Powered FAQ Support Bot",
  "summary": "Full-stack intelligent document Q&A system using RAG (Retrieval-Augmented Generation) that enables users to query PDF and text documents with AI-powered responses, featuring automatic document indexing, vector search, and source citation.",
  "description": "A production-ready FAQ support bot built with FastAPI and LangChain that implements RAG architecture for intelligent document question-answering. The system automatically processes and indexes PDF and text documents into a Qdrant vector database using Google Gemini embeddings. Users can upload documents, browse them in a sidebar, and ask questions through a modern chat interface. The bot retrieves relevant document chunks using semantic similarity search, augments them with context, and generates accurate answers using Google Gemini 2.5 Flash LLM.",
  "problemStatement": "Organizations struggle to efficiently search and extract information from large document collections. Manual document review is time-consuming, and traditional keyword search often misses semantically related content. Users need an intelligent system that understands context, provides accurate answers with source citations, and can handle multiple document formats seamlessly.",
  "solution": "Built a RAG-powered system that combines vector embeddings with LLM generation. Documents are automatically chunked, embedded and stored in Qdrant vector database. When users ask questions, the system performs semantic similarity search to retrieve the most relevant document chunks, then uses Google Gemini to generate contextually accurate answers. The solution includes a complete document management system with upload/delete capabilities, automatic re-indexing, and clickable source references that jump to original documents.",
  "videoUrl": "https://youtu.be/C1O2T8V0qCM",
  "thumbnail": "/placeholder-rag-bot.jpg",
  "images": [
   
  ],
  "issuesFaced": [
    "Integrating multiple LangChain components (embeddings, vector store, LLM) with proper initialization order",
    "Handling document chunking with appropriate overlap to maintain context across boundaries",
    "Managing Qdrant collection creation and payload indexing for efficient document deletion",
    "Handling PDF and text file processing with different loaders and display methods",
    "Implementing automatic document re-indexing on startup and after uploads",
    "Preventing duplicate references from the same document while maintaining page-level granularity",
  ],
  "solutionsApplied": [
    "Created a RAGService singleton class that initializes embeddings, LLM, and vector store in proper sequence with environment variable management",
    "Used RecursiveCharacterTextSplitter with 1000-character chunks and 200-character overlap, with intelligent separators for natural breaks",
    "Implemented collection existence checking with automatic creation using embedding dimension detection, plus payload index creation for filename-based filtering",
    "Created separate API endpoints for PDF (FileResponse) and text (JSON) retrieval, with blob URL generation for PDF embedding",
    "Implemented FastAPI lifespan events to trigger document indexing on startup, plus automatic re-indexing after file uploads",
    "Used filename-based deduplication in reference generation while preserving page numbers for user context",

  ],
  "results": "Successfully created a production-ready RAG system that processes documents automatically, provides accurate AI-powered answers with source citations, and offers seamless document management. The system handles multiple document formats, maintains conversation context, and provides instant access to source materials through clickable references. Deployed on Railway with zero-configuration startup indexing.",
  "techStack": [
    "FastAPI",
    "LangChain",
    "Qdrant",
  ],
  "skills": [
    "RAG Architecture",
    "Vector Database Integration",
    "Semantic Search",
    "Embedding Generation",
  ],
  "demoUrl": "",
  "githubUrl": "",
  "usePlaceholder": true,
  "categories": [
    "LangChain",
    "RAG",
    "AI SaaS",
  ]
},
{
  "id": "ai-quiz-study-notes",
  "title": "AI-Powered Study Quiz with RAG",
  "summary": "Intelligent quiz application that generates personalized questions from study materials using RAG (Retrieval Augmented Generation), providing real-time feedback and source references to enhance learning efficiency.",
  "description": "A full-stack AI-powered quiz platform that transforms study materials into interactive learning experiences. The application uses RAG architecture to ingest PDF and text documents, generate context-aware quiz questions using LangChain and xAI Grok, and provides detailed feedback with page-specific source references. Built with FastAPI backend serving a modern HTML/CSS/JS frontend, the system leverages Qdrant vector database for semantic search and HuggingFace embeddings for local, cost-effective document processing. Features include document upload management, book-specific quiz generation, real-time topic tracking, and intelligent answer validation with AI-generated explanations.",
  "problemStatement": "Students struggle to effectively test their knowledge from study materials. Traditional methods require manual question creation, lack context-aware feedback, and don't provide direct references to source material when answers are incorrect. This leads to inefficient study sessions and difficulty identifying knowledge gaps.",
  "solution": "Built an intelligent RAG-powered quiz system that automatically ingests study documents, generates contextual multiple-choice questions using AI, and provides instant feedback with direct page references. The system uses semantic search to retrieve relevant document chunks, filters questions by specific books/documents, and tracks topic mastery with visual indicators. Students can upload their own materials, get personalized quizzes, and receive AI explanations pointing to exact source locations for incorrect answers.",
  "thumbnail": "/placeholder-rag-bot.jpg",
  "images": [
    
  ],
  "issuesFaced": [
    "Book-specific question filtering not working correctly - questions were generated from all documents instead of selected book",
    "Missing Qdrant payload index for metadata.source field required for MatchText filtering, causing Bad Request errors",
    "Inconsistent UI feedback timing - explanations appearing late or showing 'null' for correct answers",
    "SSL certificate verification errors when pushing to GitHub from sandboxed environments",

  ],
  "solutionsApplied": [

    "Implemented MatchText filter on metadata.source field in Qdrant retriever to ensure book-specific document retrieval, with debug logging to verify filtered sources",
    "Added automatic payload index creation for metadata.source field using Qdrant's create_payload_index with TEXT index type and WORD tokenizer",
    "Synchronized frontend UI updates with backend API responses - added loading spinners, disabled submit button during processing, and added null checks to prevent 'null' text display",
    "Configured git to handle SSL verification issues and provided manual push instructions for authenticated environments",

  ],
  "results": "Successfully deployed production-ready AI quiz application. Reduced quiz generation time from manual creation (hours) to automated AI generation (seconds). Students can now upload study materials, receive instant personalized quizzes, and get contextual feedback with direct source references. Deployed on Railway with Qdrant Cloud integration for persistent vector storage.",
  "videoUrl": "https://youtu.be/8Uj98IN_oDs",
  "techStack": [
    "FastAPI",
    "LangChain",
    "RAG (Retrieval Augmented Generation)",
    "Qdrant",
    "xAI Grok",
  ],
  "skills": [
    "RAG Architecture",
    "Vector Database Integration",
    "FastAPI",
    "Semantic Search",
  ],
  "demoUrl": "",
  "githubUrl": "https://github.com/Jesse0502/AI-Quiz-App.git",
  "usePlaceholder": true,
  "categories": [
    "LangChain",
    "RAG",
    "AI SaaS",
    "FastAPI",
    "Vector Databases"
  ]
},
  {
    "id": "intelligent-outfit-advisor",
    "title": "Context-Aware Outfit Suggestion Agent",
    "summary": "A multi-modal morning assistant that determines your location, checks the weather, and generates funny, art-inspired outfit advice sent via Telegram and Email.",
    "description": "This workflow acts as a personal stylist agent. It dynamically resolves the user's location using IP geolocation APIs, fetches granular weather data from wttr.in, and uses an LLM to generate a humorous, personality-driven outfit recommendation. Uniquely, it also queries the Art Institute of Chicago API to find an artwork matching the weather mood to include in the email.",
    "problemStatement": "Decision fatigue in the mornings regarding what to wear based on fluctuating weather conditions, leading to wasted time.",
    "solution": "Built a location-aware pipeline that chains three different APIs (IP, Location, Weather) to provide context to an AI agent. The agent generates a 'Subject' and 'Body' for email, and a concise summary for Telegram, ensuring the user gets the info regardless of their preferred platform.",
    "thumbnail": "/n8n2.png",
    "images": [
      "/projects/intelligent-outfit-advisor/1.png",
    ],
    "issuesFaced": [
      "Ensuring accurate weather data without hardcoding user location",
      "Reliably parsing JSON from the LLM to split content between Email (HTML) and Telegram (Text)",
      "Finding relevant visual assets dynamically based on weather conditions"
    ],
    "solutionsApplied": [
      "Chained `api.ipify.org` and `ip-api.com` to auto-detect location on every run",
      "Implemented a custom Tool within the workflow to query the Art Institute API for weather-matching imagery",
      "Added a robust `If` node and loop logic to handle validation errors and retry processing if the LLM output is malformed"
    ],
    "results": "Saved approximately 10 minutes per day by automating the 'check weather -> decide outfit' cognitive loop.",
    "techStack": ["N8N", "Ollama", "Telegram API", "Gmail", "OpenWeather/Wttr.in", "Art Institute API"],
    "skills": ["Complex Logic Loops", "API Chaining"],
    "demoUrl": "",
    "usePlaceholder": false,
    "categories": ["N8N"]
  },
{
    "id": "ai-news-curator",
    "title": "AI-Powered Tech News Aggregator",
    "summary": "Automated morning digest that scrapes top tech news, filters for AI/SaaS relevance using LLMs, and delivers actionable summaries via email.",
    "description": "A sophisticated content curation workflow that automates the daily intake of technology news. It pulls headlines from NewsAPI, filters them for relevance to AI and automation using a local LLM (Ollama), and reformats the content into a structured HTML email. The AI is prompted specifically to identify business opportunities and 'pain points' within the news to inspire new product ideas.",
    "problemStatement": "Staying updated with the fast-paced AI and SaaS landscape leads to information overload, making it difficult to identify genuine business opportunities vs. noise.",
    "solution": "Created a 'Schedule Trigger' workflow that runs daily at 9 AM. It fetches raw headlines, passes them to a 120b parameter model via Ollama to synthesize insights, and formats a clean HTML email with key takeaways specifically tailored for freelancers and founders.",
    "thumbnail": "/n8n2.png",
    "images": [
"/projects/ai-news-curator/1.png",
    ],
    "issuesFaced": [
      "LLM hallucinations when outputting strict JSON formats for email rendering",
      "Filtering out irrelevant 'noise' from general technology feeds",
      "Handling API rate limits from news providers"
    ],
    "solutionsApplied": [
      "Implemented a custom JavaScript parsing node with error throwing to validate LLM JSON output",
      "Used prompt engineering to force 'Key Takeaway + Why it Matters' structure",
      "Integrated NewsAPI with specific category filters (AI, automation) before LLM processing to reduce token usage"
    ],
    "results": "Automated the daily research process, delivering high-value product ideation insights directly to the inbox every morning.",
    "techStack": ["N8N", "Ollama", "NewsAPI", "Gmail", "JavaScript"],
    "skills": ["Prompt Engineering", "API Integration", "Automated Content Curation", "Error Handling"],
    "demoUrl": "",
    "usePlaceholder": false,
    "categories": ["N8N"]
  },

  {
    "id": "beta-onboarding-automation",
    "title": "Automated Beta User Onboarding & CRM",
    "summary": "Streamlined user registration system that captures form data, normalizes it via code, syncs to Google Sheets, and uses an AI persona to send personalized welcome emails.",
    "description": "An end-to-end CRM automation for a beta software launch. When a user submits a registration form, the workflow sanitizes the input (standardizing name/email casing), logs the entry into a Google Sheet for record-keeping, and triggers an AI 'HR Manager' persona.",
    "problemStatement": "Managing manual beta signups and sending generic, impersonal welcome emails reduces user engagement and slows down the onboarding process.",
    "solution": "Integrated n8n Form Triggers with Google Sheets for instant data persistence. Employed an LLM with a specific 'HR Manager' persona to dynamically draft content, ensuring every user receives a unique interaction immediately upon signup.",
    "thumbnail": "/n8n2.png",
    "images": [
      "/projects/beta-onboarding-automation/1.png",
    ],
    "issuesFaced": [
      "LLM failing to return valid JSON when asked to draft creative emails",
      "Need for a fallback mechanism if the AI generation fails entirely"
    ],
    "solutionsApplied": [
      "Implemented a try/catch block in JavaScript to attempt JSON parsing, with a hardcoded fallback email body if parsing fails",
      "Used 'Prompt Engineering' to instruct the model to return empty fields rather than hallucinated errors if it cannot generate content"
    ],
    "results": "Achieved zero-touch onboarding for new beta users while maintaining a high level of personalization and data accuracy.",
    "techStack": ["N8N", "Google Sheets", "Ollama", "Gmail", "Form Triggers"],
    "skills": ["CRM Automation"],
    "demoUrl": "",
    "usePlaceholder": false,
    "categories": ["N8N"]
  }
];