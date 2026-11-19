"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { FORM_ENDPOINT } from "@/data/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name (at least 2 characters).";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed

  function handleChange(e) {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    // re-check a field live once it has shown an error
    if (errors[name]) setErrors({ ...errors, [name]: validate(next)[name] });
  }

  function handleBlur(e) {
    const { name } = e.target;
    setErrors({ ...errors, [name]: validate(values)[name] });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
      }
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className="card form-success fade-up" role="status">
        <CheckCircle2 size={40} />
        <h3>Thank you!</h3>
        <p className="muted">Your message has been submitted.</p>
        <button type="button" className="btn btn-outline" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="card form fade-up" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.name)}
          placeholder="Your name"
        />
        {errors.name ? <p className="error">{errors.name}</p> : null}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.email)}
          placeholder="you@example.com"
        />
        {errors.email ? <p className="error">{errors.email}</p> : null}
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.message)}
          placeholder="How can I help you?"
        />
        {errors.message ? <p className="error">{errors.message}</p> : null}
      </div>

      {status === "failed" ? (
        <p className="error">Something went wrong. Please try again, or use the links on this page.</p>
      ) : null}

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        <Send size={18} aria-hidden="true" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
