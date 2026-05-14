import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);
import './ContactSection.css';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // User should replace this
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Message from CableSnap: ${form.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to connect. Please check your internet.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="text-center">
          <div className="section-label">📬 Get in Touch</div>
          <h2 className="section-title">
            Let's Talk <span className="gradient-text">CABLESNAP</span>
          </h2>
          <p className="section-subtitle">
            Questions, bulk orders, partnerships, or just want to say hello?
            We'd love to hear from you.
          </p>
          <div className="glow-divider" />
        </div>

        <div className="contact-inner">
          {/* Info column */}
          <div className="contact-info">
            <div className="contact-info__block glass-card">
              <h3 className="contact-info__heading">Contact Details</h3>

              <a href="mailto:cablesnap@gmail.com" className="contact-item">
                <div className="contact-item__icon contact-item__icon--blue">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-item__label">Email Us</div>
                  <div className="contact-item__value">cablesnap@gmail.com</div>
                </div>
              </a>

              <a
                href="https://instagram.com/cablesnap_official"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-item__icon contact-item__icon--pink">
                  <InstagramIcon />
                </div>
                <div>
                  <div className="contact-item__label">Instagram</div>
                  <div className="contact-item__value">@cablesnap_official</div>
                </div>
              </a>

              <div className="contact-info__note">
                <span>⚡</span>
                We typically respond within 24 hours.
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-wrapper glass-card">
            {submitted ? (
              <div className="contact-success">
                <CheckCircle size={48} className="contact-success__icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you shortly.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form__title">Send a Message</h3>

                {error && <div className="form-error">{error}</div>}

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="cs-name">Name</label>
                    <input
                      id="cs-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="cs-email">Email</label>
                    <input
                      id="cs-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="cs-message">Message</label>
                  <textarea
                    id="cs-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your interest in CABLESNAP..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary contact-form__submit ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
