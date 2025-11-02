"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown, Send } from "lucide-react";
import { Button } from "../ui/stateful-button";
import {ContactForm} from "@/components/landing/ContactFAQ";

const ContactContent = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    appointmentDate: "",
    appointmentTime: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your appointment request has been submitted. We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      appointmentDate: "",
      appointmentTime: ""
    });
    setShowForm(false);
  };

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h1>
          <p className="text-14px md:text-[1rem] text-slate-600 max-w-2xl mx-auto">
            Ready to find your dream property? Our expert team is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Map and Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-lg h-96">
                <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0750232365517!2d77.52396927406835!3d28.47728719111628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebaea7aa3543%3A0xf131ebfc14143327!2sElevate%20Sphere%20Ventures%20(Best%20Property%20Deals%20in%20Greater%20Noida)!5e0!3m2!1sen!2sin!4v1761588346058!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-8">Visit Our Office</h2>
                
                <div className="space-y-6 text-14px md:text-[1rem]">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className=" p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                      <p className="text-slate-600 leading-relaxed ">
                        F-50 Suntwilight Commercial Complex,<br />
                        Near Delta Metro Station,<br />
                        Greater Noida, 201310
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className=" p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                      <p className="text-slate-600">+91 9761118300</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className=" p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                      <p className="text-slate-600">realtyedition@gmail.com</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className=" p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                      <p className="text-slate-600">
                        Mon - Sat: 8:00 AM - 5:30 PM<br />
                        Sunday: Open
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
            >
              <span>Book Your Appointment</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${showForm ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Contact Form - Slides Down */}
          <div className={`overflow-hidden md:w-[40rem] transition-all duration-500 ease-in-out ${showForm ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
         
              <ContactForm />
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;