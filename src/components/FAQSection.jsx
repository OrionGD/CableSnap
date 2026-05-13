import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQSection.css';

const faqs = [
  {
    question: "How does CABLESNAP know when to disconnect?",
    answer: "CABLESNAP monitors your battery percentage and physically disconnects power when it reaches your preset threshold."
  },
  {
    question: "Is it compatible with all fast chargers?",
    answer: "Yes! CABLESNAP is compatible with standard USB charging adapters and is currently optimized for smartphone charging."
  },
  {
    question: "Does it work with both iPhone and Android?",
    answer: "Absolutely. CABLESNAP sits between your power brick and your cable, so it works with USB-C, Lightning, and Micro-USB cables alike."
  },
  {
    question: "Will it wear out my battery?",
    answer: "Quite the opposite. By preventing your phone from sitting at 100% for hours (trickle charging), CABLESNAP extends your battery's chemical lifespan."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="text-center">
          <div className="section-label">
            <HelpCircle size={12} fill="currentColor" /> Common Questions
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">QUESTIONS</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about CABLESNAP and how it protects your tech.
          </p>
          <div className="glow-divider" />
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass-card ${openIndex === index ? 'active' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <ChevronDown size={20} className="faq-icon" />
              </div>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
