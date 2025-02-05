# AI Form Generator

An AI-powered form generator built using Gemini, Docker, Supabase, Next.js, and Clerk for authentication.

## Features
- **AI-Powered Form Generation**: Uses Gemini AI to generate dynamic forms based on user input.
- **Authentication**: Secure authentication and user management using Clerk.
- **Database & Storage**: Powered by Supabase for real-time database management.
- **Frontend**: Built with Next.js for fast and efficient rendering.
- **Containerized Deployment**: Easily deployable using Docker.

## Tech Stack
- **Frontend**: Next.js, TailwindCSS
- **Backend**: Node.js (API routes)
- **AI**: Gemini API
- **Database**: Supabase
- **Authentication**: Clerk
- **Deployment**: Docker

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Supabase Account](https://supabase.io/)
- [Clerk Account](https://clerk.dev/)

### Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/ai-form-generator.git
   cd ai-form-generator
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env.local` file and add:
   ```sh
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   GEMINI_API_KEY=your-gemini-api-key
   ```

4. **Run the Development Server**
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

5. **Run with Docker**
   ```sh
   docker build -t ai-form-generator .
   docker run -p 3000:3000 ai-form-generator
   ```

## Usage
- Sign up/login using Clerk authentication.
- Provide input prompts to generate AI-powered forms.
- Store and manage form data in Supabase.
- Deploy easily using Docker.

## Deployment
To deploy the application, you can use platforms like Vercel, Docker, or a cloud provider of your choice.

## Contributing
Contributions are welcome! Feel free to submit a pull request.

## License
MIT License
