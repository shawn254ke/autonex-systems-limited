"use client";

import React, { useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  serviceType: string;
  projectDescription: string;
  budget: string;
  timeline: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  serviceType: "",
  projectDescription: "",
  budget: "",
  timeline: "",
};

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace this with actual API POST request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        "Your inquiry has been submitted! Our team will contact you shortly."
      );

      setFormData(initialFormData);
    } catch (err) {
      toast.error("Submission failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="john@company.com"
          />
        </div>
      </div>

      {/* Company & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Company *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your Company Ltd."
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+254 222 123 456"
          />
        </div>
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-brand-gray-600 mb-1">
          Service Type *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          value={formData.serviceType}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="industry40">Industry 4.0 Transformation</option>
          <option value="iiot">IIoT Solutions</option>
          <option value="customIT">Custom IT Services</option>
          <option value="homeAutomation">Home Automation</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium text-brand-gray-600 mb-1">
          Project Description *
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          required
          rows={5}
          value={formData.projectDescription}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Please describe your project requirements and goals..."
        />
      </div>

      {/* Budget & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="" disabled>
              Select budget range
            </option>
            <option value="under500k">Under KES 500,000</option>
            <option value="500k-1m">KES 500,000 - KES 1,000,000</option>
            <option value="1m-5m">KES 1,000,000 - KES 5,000,000</option>
            <option value="over5m">Over KES 5,000,000</option>
            <option value="notSure">Not sure / To be determined</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-brand-gray-600 mb-1">
            Project Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="" disabled>
              Select timeline
            </option>
            <option value="immediate">Immediate start</option>
            <option value="1-3months">1-3 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="6months+">6+ months</option>
            <option value="notSure">Not sure / To be determined</option>
          </select>
        </div>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center py-4 text-lg"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Request for Quote"
          )}
        </button>
      </div>
    </form>
  );
}
