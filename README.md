**KafkaLink**
KafkaLink is a microservice-based URL shortener platform with real-time analytics using Kafka. It demonstrates modern system design concepts such as microservices, event-driven architecture, OAuth2 authentication, JWT, and live click tracking.

🚀 **Features**
Authentication & Authorization
1. JWT-based authentication
2. Password hashing with bcrypt
3. OAuth2.0 support (Google sign-in)
URL Management
1. Shorten URLs
2. CRUD operations (Create, Read, Update, Delete)
3. Real-Time Analytics
4. Track URL clicks in real time using Kafka
5. Live update dashboard for users
6. Microservices Architecture
7. Separate auth_service and url_service
8. Event-driven communication via Kafka

**Database**
1. MySQL for persistent storage
2. ORMs for easy schema management

**Scalable & Production Ready**

**Docker & Docker Compose for containerized deployment**
**Nginx as reverse proxy and load balancer**

🧩 **Tech Stack**
Layer	Technology / Library
Backend	Node.js + Express.js
Authentication	JWT, bcrypt, OAuth2.0 (Google)
Database	MySQL + Sequelize / mysql2
Messaging / Event Streaming	Kafka (kafkajs)
Caching / Real-Time	Redis (optional for caching & pub/sub)
Frontend	React / Angular
Deployment	Docker, Docker Compose, Nginx, Render / Railway
🏗️ Architecture
             ┌───────────────┐
             │ Auth Service  │
             │ (JWT, OAuth) │
             └───────┬──────┘
                     │
         ┌───────────┴───────────┐
         │        API Gateway     │ (Nginx)
         └───────────┬───────────┘
                     │
       ┌─────────────┴─────────────┐
       │      URL Service           │
       │ (CRUD + Kafka Producer)    │
       └───────┬───────────┬───────┘
               │           │
               │           │
        Kafka Broker   MySQL Database
   (Event Streaming for  Persistent Storage)
      URL Clicks & Creation

🔧 Microservices
1. auth_service

Handles user registration and login

JWT authentication

Password hashing with bcrypt

OAuth2 login (Google)

2. url_service

CRUD operations for URLs

Generates short URLs

Publishes click events to Kafka

Tracks analytics in MySQL

🗃️ Database Schema
Users Table
Column	Type	Description
id	INT PK	Unique user ID
email	VARCHAR	User email
password	VARCHAR	Hashed password
provider	VARCHAR	Local / Google OAuth
created_at	TIMESTAMP	Registration date
URLs Table
Column	Type	Description
id	INT PK	URL ID
user_id	INT FK	Reference to Users
original_url	VARCHAR	Full URL
short_code	VARCHAR	Generated short code
created_at	TIMESTAMP	Creation date
URL Clicks Table (Analytics)
Column	Type	Description
id	INT PK	Click ID
url_id	INT FK	Reference to URLs
timestamp	TIMESTAMP	Click time
ip	VARCHAR	Visitor IP address
user_agent	VARCHAR	Visitor browser info
⚡ Real-Time Click Tracking

User clicks short link → URL Service publishes link_visited event to Kafka

Analytics Service consumes event → updates MySQL

Optional: Redis Pub/Sub → Frontend Dashboard updates live

🐳 Docker & Nginx Setup

KafkaLink uses Docker and Nginx to simplify running multiple services and make the app production-ready.

Why Docker?

Environment Consistency: All services (auth_service, url_service, MySQL, Kafka) run the same on any machine.

Isolation: Each service has its own container with dedicated ports and dependencies.

Simplified Setup: Spin up all services with a single docker-compose up command.

Scalability: Easily scale services (e.g., multiple URL Service instances).

Why Nginx?

Acts as a reverse proxy to forward requests to the correct microservice:

/auth → auth_service (port 3000)
/url  → url_service (port 3001)


Single Entry Point for users and frontend.

Handles SSL/HTTPS termination.

Optional load balancing for multiple service instances.

Can enable caching, compression, and routing rules.

How It Works Together

Nginx listens on port 80/443 for all incoming requests.

Based on the URL path, it forwards requests to the respective Docker container (auth_service or url_service).

Backend services don’t expose their internal ports to the public network.

Docker Compose manages all containers (Node services, Kafka, MySQL, Redis).

🎯 Getting Started
Prerequisites

Node.js (v18+)

Docker & Docker Compose

Kafka (or Redpanda)

MySQL

Install & Run Services
# Clone repository
git clone https://github.com/yourusername/KafkaLink.git
cd KafkaLink

# Start all services
docker-compose up --build

Access Services
http://localhost/auth → Auth Service
http://localhost/url  → URL Service
Kafka, MySQL, Redis run inside containers automatically.

🔗 API Endpoints
Auth Service
Endpoint	Method	Description
/auth/register	POST	Register a new user
/auth/login	POST	Login with email/password
/auth/google	GET	OAuth2 login with Google
URL Service
Endpoint	Method	Description
/urls	POST	Create short URL
/urls	GET	Get user URLs
/urls/:id	PUT	Update URL
/urls/:id	DELETE	Delete URL
/:short_code	GET	Redirect to original URL
📦 Project Structure
KafkaLink/
│
├── auth_service/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
│
├── url_service/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── kafka/
│   ├── app.js
│   └── package.json
│
├── docker-compose.yml
├── nginx/
│   └── nginx.conf
└── README.md

🛡️ Security & Best Practices

Passwords hashed with bcrypt

JWT for session handling

OAuth2.0 for secure third-party login

Input validation (Joi / express-validator)

Rate limiting and CORS configured at API gateway
