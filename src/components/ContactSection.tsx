import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/paintsData.ts';
import { Phone, MessageCircle, Mail, Navigation, AlertCircle, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Interior Wall Paints',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    'Interior Wall Paints',
    'Exterior Wall Paints',
    'Primers & Wall Preparation',
    'Wood & Metal Paints',
    'Waterproofing Solutions',
    'Wall Textures & Decorative Finishes',
    'Full Home Painting Service',
    'Colour & Shade Consultation',
    'General Inquiry',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your name (at least 2 characters).';
    }

    // Clean phone of spaces/dashes
    const cleanPhone = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number.';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select a product or service interest.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct formatted WhatsApp message
    const lines = [
      'Hello Nafees Paints, I am submitting an enquiry from your website:',
      `• Name: ${formData.name.trim()}`,
      `• Phone: ${formData.phone.trim()}`,
      `• Interest: ${formData.interest}`,
    ];

    if (formData.message.trim()) {
      lines.push(`• Notes / Requirements: ${formData.message.trim()}`);
    }

    const encodedMessage = encodeURIComponent(lines.join('\n'));
    const waUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodedMessage}`;

    setSubmitted(true);

    // Open WhatsApp in new tab / application
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#17191B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A6A9AD] block mb-2">
            Direct Communication
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-4">
            Contact & Enquiries
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Reach out directly by phone, WhatsApp, or email, or submit your project details below to start a conversation with Nafees Paints.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Touch Points */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Action Buttons Grid */}
            <div className="space-y-4">
              {/* WhatsApp Button */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 sm:p-5 bg-[#303438] border border-white/10 hover:border-emerald-400/50 hover:bg-[#383d42] transition-all group min-w-0 gap-2"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#A6A9AD] block truncate">
                      WhatsApp / Call
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white truncate block">
                      {BUSINESS_INFO.whatsappDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform shrink-0 whitespace-nowrap">
                  Chat →
                </span>
              </a>

              {/* Call Now Button */}
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full flex items-center justify-between p-3.5 sm:p-5 bg-[#303438] border border-white/10 hover:border-white/40 hover:bg-[#383d42] transition-all group min-w-0 gap-2"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#A6A9AD] block truncate">
                      Store Telephone
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white truncate block">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-white group-hover:translate-x-1 transition-transform shrink-0 whitespace-nowrap">
                  Call →
                </span>
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="w-full flex items-center justify-between p-3.5 sm:p-5 bg-[#303438] border border-white/10 hover:border-white/40 hover:bg-[#383d42] transition-all group min-w-0 gap-2"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 truncate">
                    <span className="text-[10px] uppercase tracking-wider text-[#A6A9AD] block truncate">
                      Official Email
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-white group-hover:translate-x-1 transition-transform shrink-0 whitespace-nowrap">
                  Email →
                </span>
              </a>

              {/* Get Directions Button */}
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 sm:p-5 bg-[#303438] border border-white/10 hover:border-amber-300/50 hover:bg-[#383d42] transition-all group min-w-0 gap-2"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                    <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#A6A9AD] block truncate">
                      Location
                    </span>
                    <span className="text-xs font-semibold text-white block truncate">
                      {BUSINESS_INFO.address}
                    </span>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-300 group-hover:translate-x-1 transition-transform shrink-0 whitespace-nowrap">
                  Map →
                </span>
              </a>
            </div>

            {/* Store Note */}
            <div className="p-5 bg-white/5 border border-white/10 text-xs text-neutral-300 leading-relaxed">
              <span className="font-semibold text-white block mb-1">Serving Banswara & Surrounding Areas:</span>
              Visit our store at Nai Abadi Gol Chouraha for colour selection, computerized tinting, or schedule an on-site visit for major painting works.
            </div>
          </div>

          {/* Right Column: Honest WhatsApp Connected Enquiry Form */}
          <div className="lg:col-span-7 bg-[#303438] p-5 sm:p-8 lg:p-10 border border-white/15 max-w-full">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                Send a Direct Project Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Submit your project specifications below. Your details will be formatted and sent directly to our team via WhatsApp for immediate response.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-[#A6A9AD] mb-1.5">
                  Your Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. Rajesh Sharma"
                  className={`w-full px-4 py-3 bg-[#17191B] text-white border text-sm placeholder:text-neutral-500 focus:outline-none transition-colors ${
                    errors.name ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-white'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-[#A6A9AD] mb-1.5">
                  Phone Number <span className="text-amber-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  placeholder="e.g. 98290 12345"
                  className={`w-full px-4 py-3 bg-[#17191B] text-white border text-sm placeholder:text-neutral-500 focus:outline-none transition-colors ${
                    errors.phone ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-white'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Interest Selector */}
              <div>
                <label htmlFor="interest" className="block text-xs uppercase tracking-wider font-semibold text-[#A6A9AD] mb-1.5">
                  Product or Service Interest <span className="text-amber-400">*</span>
                </label>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 bg-[#17191B] text-white border border-white/20 text-sm focus:border-white focus:outline-none"
                >
                  {interestOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#17191B] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-[#A6A9AD] mb-1.5">
                  Project Notes or Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g., Exterior repainting for a 2-story house in Banswara, looking for weather-shield options..."
                  className="w-full px-4 py-3 bg-[#17191B] text-white border border-white/20 text-sm placeholder:text-neutral-500 focus:border-white focus:outline-none resize-none"
                />
              </div>

              {submitted && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-500/30 flex items-center gap-2.5 text-xs text-emerald-300">
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Enquiry formatted. Opening WhatsApp to chat directly with Nafees Paints.</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#17191B] bg-white hover:bg-neutral-200 active:scale-[0.99] transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Submit & Open in WhatsApp</span>
              </button>

              {/* Honest Delivery Disclaimer */}
              <div className="pt-2 text-center">
                <p className="text-[11px] text-[#A6A9AD]">
                  * This form connects directly to WhatsApp (+91 86902 19213) with your details prefilled. No automated spam or database delays.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
