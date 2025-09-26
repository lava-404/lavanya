import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function RevealOnScroll({ children }){
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return children;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RevealOnScroll>
      <App />
    </RevealOnScroll>
  </StrictMode>,
)
