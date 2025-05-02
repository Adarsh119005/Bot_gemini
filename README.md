# Gemini Chatbot Web App

A simple web-based chatbot UI that interacts with Google's Gemini API using Flask. The frontend mimics ChatGPT's dark-themed interface with a responsive layout, message bubbles, and a sidebar for navigation.

---

## 🚀 Features

- ✨ ChatGPT-style UI with Tailwind CSS  
- 🌙 Dark theme with 70% width main chat area  
- 📚 Left sidebar for navigation or branding  
- 💬 Real-time conversation with Gemini 1.5 model  
- 🔁 Scrollable chat window  
- ⚡ Built using Flask + Google Generative AI Python SDK  

---

## 📁 Project Structure

```
your_project/
│
├── app.py                  # Flask backend
├── templates/
│   └── index.html          # Chatbot UI
├── static/
│   └── (optional) style.css
└── README.md               # Project readme
```

---

## 🧰 Prerequisites

- Python 3.8+
- A Google Gemini API Key ([get one here](https://makersuite.google.com/app/apikey))
- Packages: `Flask`, `google-generativeai`

---

## 🔧 Installation

1. **Clone the repo**:

   ```bash
   git clone https://github.com/yourusername/gemini-chatbot.git
   cd gemini-chatbot
   ```

2. **Install dependencies**:

   ```bash
   pip install Flask google-generativeai
   ```

3. **Add your API key**:

   Edit `app.py`:

   ```python
   genai.configure(api_key="YOUR_API_KEY")
   ```

4. **Run the app**:

   ```bash
   python app.py
   ```

5. **Open in browser**:

   ```
   http://127.0.0.1:5000
   ```

---

## 🖼 Preview

*(Include a screenshot named `preview.png` here if available)*

---

## 🧠 Powered By

- [Flask](https://flask.palletsprojects.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Generative AI](https://ai.google.dev/)

---

## 📃 License

This project is licensed under the MIT License.
