# Portfolio
Personal portfolio website showcasing my side projects, technical skills and academic achievements during my Computer Science degree.

## Capstone Project

### EduMap 

Interactive web application designed to support incoming students and high school graduates. It provides a data-driven platform for making informed decisions regarding degree paths and university life.

Tech Stack: JavaScript, React.js, TailwindCSS, ASP.NET, PostgreSQL, Microsoft Azure

Key Feature: Interactive mapping and decision support tools for academic planning.

## Projects

### MemeSOL
A crypto wallet iOS app for managing Solana tokens, sending and receiving transfers, and tracking transaction history. 

Built end-to-end with a SwiftUI client and an ASP.NET backend deployed on a VPS.

Tech Stack: Swift, SwiftUI (iOS 17+), Observation framework (@Observable, @Bindable), async/await, Keychain Services, CodeScanner, ASP.NET (backend)

Architecture: MVVM with one-directional dependency flow (View → ViewModel → Service → Model). Models are pure Codable data types, ViewModels hold state and business logic, and a shared DesignSystem layer holds colors, typography and layout constants.

Key Features:

- Email/password auth with strong password validation and persistent sessions stored securely in Keychain
- Portfolio dashboard with live balance, gain/loss indicators and percentage change tracking
- Token management: browse all tokens, view detailed price and mint info, create new tokens and purchase via an in-app buy flow
- Send tokens to any wallet address; receive via auto-generated QR codes; scan QR codes to auto-fill recipients
- Full transaction history with status indicators
- First-launch onboarding flow

Repo: https://memesol.daniel-liu.dev/

### Soleri
A Spotify analytics dashboard that turns your listening history into clear, visual insights. Deployed on Vercel.

Tech Stack: React 19, TypeScript, Tailwind CSS v4, Recharts, Vercel Serverless Functions, Spotify Web API

Key Features:
- Listening Stats: top tracks, artists, genre breakdown and recent play counts
- Listening Clock: heatmap of when you listen across hours and days, with work-focus vs wind-down patterns
- Discovery Rate: weekly breakdown of new tracks and artists vs replayed favourites
- Listening Marathons: longest uninterrupted sessions ranked by duration
- Artist Obsession Phases: detects periods of heavy listening to a single artist
- Billboard Comparison: compares your top artists and average track popularity against the Billboard Hot 100
- Spotify OAuth 2.0 authentication with real-time data fetching from the Spotify Web API

Live: https://soleri.vercel.app/

### BubblePop

Casual and interactive iOS game developed in Swift. The game challenges players to pop randomly appearing bubbles of various colors to achieve the highest score within a set timeframe.

Tech Stack: Swift, UIKit/SwiftUI, XCode

Key Feature: Implemented weighted probability logic for bubble spawning (e.g., Red: 40% chance, Pink: 30% chance).

Focus: Core gameplay mechanics, UI/UX design, and performance benchmarking.

Demo: https://www.youtube.com/watch?v=WRwgMMRJDdI

## Research Projects

### TimeLLM-vs-LSTM-Benchmarking

Comparative study and performance benchmarking of Large Language Models (Time-Series LLMs) versus Long Short-Term Memory (LSTM) networks for predictive modeling.

Tools: Python, Jupyter Notebook, TensorFlow/PyTorch
