import React, { useState } from 'react';
import { Mail, Check, Copy, Send, ExternalLink } from 'lucide-react';
import { SOCIAL_PLATFORMS } from '../data/socials.ts';
import { PlatformIcon } from '../components/SocialIcons.tsx';

const ARTIST_EMAIL = 'estiaqmehedi@gmail.com';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name or organization.';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      errs.email = 'Please provide a valid contact email address.';
    }
    if (!message.trim() || message.length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Prepare mailto URI
    const mailSubject = encodeURIComponent(
      subject.trim() ? `[Portfolio Inquiry] ${subject}` : `Inquiry from ${name}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n— Sent from estiaqmehedi.pages.dev`
    );

    const mailtoUrl = `mailto:${ARTIST_EMAIL}?subject=${mailSubject}&body=${mailBody}`;

    // Trigger user mail client
    window.location.href = mailtoUrl;

    // Show transparent success state
    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(ARTIST_EMAIL);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = ARTIST_EMAIL;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="relative min-h-screen pt-28 pb-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E2B52C] uppercase tracking-widest">
            <Mail className="w-4 h-4 text-[#087F5B]" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F7F7F2]">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-[#F7F7F2]/70 leading-relaxed">
            For music licensing, photographic prints, creative technology inquiries, or artistic collaborations.
          </p>
        </div>

        {/* 2-Column Layout: Form & Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass-surface p-8 sm:p-10 rounded-3xl border border-white/[0.08]">
              
              {submitted ? (
                <div className="space-y-6 py-6 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#087F5B]/20 text-[#36A852] flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#F7F7F2]">
                    Email Client Launched
                  </h2>
                  <p className="text-sm text-[#F7F7F2]/70 leading-relaxed">
                    A prefilled message draft has been opened in your default email client addressed to <strong className="text-[#E2B52C]">{ARTIST_EMAIL}</strong>.
                  </p>
                  <p className="text-xs text-[#F7F7F2]/50">
                    If your email client did not automatically launch, you can copy the address below and send your message directly.
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-[#F7F7F2] inline-flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-[#36A852]" /> : <Copy className="w-4 h-4 text-[#E2B52C]" />}
                      <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#F7F7F2]/60 hover:text-[#F7F7F2] transition-colors"
                    >
                      Edit Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold text-[#F7F7F2]/80 uppercase tracking-wider">
                        Your Name <span className="text-[#EF684F]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Jane Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                          errors.name ? 'border-[#EF684F]' : 'border-white/[0.08]'
                        } focus:border-[#087F5B] focus:ring-1 focus:ring-[#087F5B] text-sm text-[#F7F7F2] placeholder-[#F7F7F2]/30 outline-none transition-colors`}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-[#EF684F]">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold text-[#F7F7F2]/80 uppercase tracking-wider">
                        Email Address <span className="text-[#EF684F]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                          errors.email ? 'border-[#EF684F]' : 'border-white/[0.08]'
                        } focus:border-[#087F5B] focus:ring-1 focus:ring-[#087F5B] text-sm text-[#F7F7F2] placeholder-[#F7F7F2]/30 outline-none transition-colors`}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-[#EF684F]">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#F7F7F2]/80 uppercase tracking-wider">
                      Subject (Optional)
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Music Licensing / Photo Commission"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-[#087F5B] focus:ring-1 focus:ring-[#087F5B] text-sm text-[#F7F7F2] placeholder-[#F7F7F2]/30 outline-none transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold text-[#F7F7F2]/80 uppercase tracking-wider">
                      Message <span className="text-[#EF684F]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your inquiry, project timeline, or ideas..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                        errors.message ? 'border-[#EF684F]' : 'border-white/[0.08]'
                      } focus:border-[#087F5B] focus:ring-1 focus:ring-[#087F5B] text-sm text-[#F7F7F2] placeholder-[#F7F7F2]/30 outline-none transition-colors resize-y`}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-[#EF684F]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="px-7 py-3.5 rounded-xl bg-[#087F5B] hover:bg-[#075B46] text-[#F7F7F2] text-sm font-semibold inline-flex items-center gap-2 transition-all shadow-lg shadow-[#087F5B]/30 hover:shadow-xl cursor-pointer"
                    >
                      <span>Send Direct Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-[#F7F7F2]/50 max-w-xs">
                      Opens an email draft directly to {ARTIST_EMAIL}.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Contact & Platform Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Direct Address */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#E2B52C]">
                Direct Mail
              </h2>
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="font-mono text-sm text-[#F7F7F2] select-all truncate">
                  {ARTIST_EMAIL}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg hover:bg-white/[0.08] text-[#F7F7F2]/70 hover:text-[#E2B52C] transition-colors shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-[#36A852]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-[#F7F7F2]/60 leading-relaxed">
                Primary contact address for professional inquiries, collaborations, and media requests.
              </p>
            </div>

            {/* Instant Messaging & Social Channels */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#159A91]">
                Live Channels
              </h2>
              <div className="space-y-2">
                <a
                  href="https://t.me/Saadnoxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] flex items-center justify-between text-xs text-[#F7F7F2] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <PlatformIcon id="telegram" className="w-4 h-4 text-[#E2B52C]" />
                    <div>
                      <span className="font-semibold block">Telegram</span>
                      <span className="text-[#F7F7F2]/50 text-[11px]">@Saadnoxx · Connect directly</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F7F7F2]/40 group-hover:text-[#E2B52C] transition-colors" />
                </a>

                <a
                  href="https://www.instagram.com/estiaq_mehedi?dlrf=MWU3YXo5YzhldnlxYQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] flex items-center justify-between text-xs text-[#F7F7F2] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <PlatformIcon id="instagram" className="w-4 h-4 text-[#EF684F]" />
                    <div>
                      <span className="font-semibold block">Instagram</span>
                      <span className="text-[#F7F7F2]/50 text-[11px]">@estiaq_mehedi · Photography & moments</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F7F7F2]/40 group-hover:text-[#EF684F] transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Profiles Overview */}
            <div className="glass-card p-6 rounded-3xl space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#F7F7F2]/60">
                All Verified Platforms
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {SOCIAL_PLATFORMS.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-[#F7F7F2]/70 hover:text-[#F7F7F2] border border-white/[0.04] transition-colors flex items-center gap-1.5"
                  >
                    <PlatformIcon id={platform.id} className="w-3 h-3" />
                    <span>{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;
