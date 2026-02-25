# 🔐 SecureAuthentication

A comprehensive web-based user authentication system with login, signup, and quiz functionalities. Built with modern web technologies to provide a secure and interactive user experience.

## 📋 Description

SecureAuthentication is a full-stack authentication system featuring CAPTCHA-protected login, password validation on signup, and an interactive quiz module. The system uses localStorage for client-side data persistence and includes an Express.js backend for scalable authentication services.

## ✨ Features

### 🔑 User Authentication
- **Secure Login System**: Username/email and password-based authentication
- **CAPTCHA Verification**: 4-character random CAPTCHA to prevent automated attacks
- **Dynamic CAPTCHA Refresh**: Users can regenerate CAPTCHA as needed
- **Input Validation**: Real-time validation of user credentials
- **Error Handling**: Clear error messages for invalid login attempts

### 📝 User Registration
- **Signup Form**: Easy-to-use registration interface
- **Password Confirmation**: Ensures password accuracy with confirm password field
- **Password Validation**: Client-side validation for password matching
- **Local Storage Integration**: User data persistence using browser localStorage
- **Auto-redirect**: Automatic redirection to login page after successful signup

### 🎯 Quiz Module
- **Interactive Quiz**: Engaging quiz interface with multiple-choice questions
- **Real-time Scoring**: Live score tracking during quiz
- **Multiple Questions**: Variety of questions covering different topics
- **Progress Tracking**: Users can track their progress through the quiz
- **Result Display**: Final score presentation upon completion

### 🎨 User Interface
- **Responsive Design**: Mobile-friendly and adaptive layouts
- **Modern CSS Styling**: Clean and professional appearance
- **User-friendly Forms**: Intuitive form designs with clear labels
- **Visual Feedback**: Interactive elements with hover and click effects

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with responsive design
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **Body-Parser**: Middleware for parsing request bodies
- **dotenv**: Environment variable management

## 📁 Project Structure

```
SecureAuthentication/
│
├── index.html           # Main login page
├── signup.html          # User registration page
├── Quiz.html            # Interactive quiz page
├── page.html            # Additional page
│
├── styles.css           # Login page styles
├── signup.css           # Signup page styles
├── Quiz.css             # Quiz page styles
├── page.css             # Additional page styles
│
├── script.js            # Login functionality
├── signup.js            # Signup functionality  
├── Quiz.js              # Quiz functionality
│
├── server.js            # Express.js server configuration
│
└── quiz completion.avif # Quiz completion image asset
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (v14 or higher) - for backend functionality
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohankathole-svg/SecureAuthentication.git
   cd SecureAuthentication
   ```

2. **Install dependencies** (if using backend)
   ```bash
   npm install express body-parser dotenv
   ```

3. **Run the application**
   
   **Option A: Using a simple HTTP server (Frontend only)**
   ```bash
   # Using Python
   python -m http.server 3000
   
   # Or using Node.js http-server
   npx http-server -p 3000
   ```
   
   **Option B: Using Express server (Full-stack)**
   ```bash
   node server.js
   ```

4. **Access the application**
   - Open your browser and navigate to: `http://localhost:3000`
   - Start with the login page: `http://localhost:3000/index.html`

## 💻 Usage

### Login Process
1. Navigate to the login page (`index.html`)
2. Enter your username/email and password
3. Enter the CAPTCHA text displayed on screen
4. Click "Refresh CAPTCHA" if the text is unclear
5. Click "Login" to authenticate
6. If you don't have an account, click "Sign Up"

### Signup Process
1. Click "Sign Up" from the login page
2. Fill in your desired username/email
3. Enter a secure password
4. Confirm your password in the second field
5. Click "Sign Up" to create your account
6. You'll be automatically redirected to the login page

### Quiz Features
1. Navigate to the quiz page
2. Read each question carefully
3. Select your answer from the multiple choices
4. Your score updates in real-time
5. Click "Next" to proceed to the next question
6. View your final score at the end

## 🔒 Security Features

- **CAPTCHA Protection**: Prevents automated bot attacks
- **Password Validation**: Ensures password integrity during signup
- **Local Storage Encryption**: Secure client-side data storage
- **Input Sanitization**: Protection against injection attacks
- **Error Message Handling**: Prevents information leakage

## 🎨 Customization

### Styling
You can customize the appearance by modifying the CSS files:
- `styles.css` - Login page styling
- `signup.css` - Signup page styling
- `Quiz.css` - Quiz interface styling

### Functionality
Extend the functionality by editing the JavaScript files:
- `script.js` - Login logic and CAPTCHA generation
- `signup.js` - Registration validation
- `Quiz.js` - Quiz questions and scoring system

## 🌐 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📝 Future Enhancements

- [ ] Database integration (MySQL/MongoDB)
- [ ] Password encryption (bcrypt)
- [ ] JWT token-based authentication
- [ ] Email verification
- [ ] Forgot password functionality
- [ ] Social media login integration
- [ ] Two-factor authentication (2FA)
- [ ] User profile management
- [ ] Advanced quiz analytics
- [ ] Leaderboard system

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rohan Kathole**
- GitHub: [@rohankathole-svg](https://github.com/rohankathole-svg)

## 🙏 Acknowledgments

- Inspired by modern authentication systems
- Built with web development best practices
- Designed for learning and educational purposes

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
