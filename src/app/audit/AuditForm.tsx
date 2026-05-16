"use client";

/**
 * FORMSPREE SETUP, REQUIRED FOR AUDIT FORM TO WORK IN PRODUCTION
 *
 * 1. Go to https://formspree.io and sign in with marketing@rysengrowth.com.
 * 2. Create a new form named "Rysen Audit" (separate from the contact form).
 * 3. Copy that form's endpoint URL.
 * 4. Replace YOUR_AUDIT_FORM_ID_HERE below with the real ID.
 * 5. Commit and push. Audit requests will then deliver to your inbox.
 */
const AUDIT_FORMSPREE_ENDPOINT =
  "https://formspree.io/f/YOUR_AUDIT_FORM_ID_HERE";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  website: string;
  name: string;
  email: string;
  practiceArea: string;
}

const INITIAL: FormState = {
  website: "",
  name: "",
  email: "",
  practiceArea: "",
};

export function AuditForm() {
  const [state, setState] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );

  const update = (k: keyof FormState, v: string) => {
    setState((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!state.website.trim()) next.website = "Required.";
    else if (!/^https?:\/\/.+\..+/.test(state.website))
      next.website = "Include https:// and a valid domain.";
    if (!state.name.trim()) next.name = "Required.";
    if (!state.email.trim()) next.email = "Required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
      next.email = "Enter a valid email address.";
    if (!state.practiceArea) next.practiceArea = "Required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch(AUDIT_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(state),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        className="form-success"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="form-success-mark">✓</div>
        <h3>Got it. Your audit is on the way.</h3>
        <p>
          We’ll send the 12-page PDF to{" "}
          <strong>{state.email}</strong> within 48 hours. No sales call, no
          pressure. Email{" "}
          <a href="mailto:marketing@rysengrowth.com">
            marketing@rysengrowth.com
          </a>{" "}
          if you need to reach us sooner.
        </p>
      </motion.div>
    );
  }

  return (
    <form className="rysen-form audit-form-card" onSubmit={onSubmit} noValidate>
      <label className={`form-field${errors.website ? " has-error" : ""}`}>
        <span className="form-field-label">
          Firm website <span className="form-field-required">*</span>
        </span>
        <input
          type="url"
          name="website"
          value={state.website}
          onChange={(e) => update("website", e.target.value)}
          placeholder="https://yourfirm.com"
          aria-invalid={Boolean(errors.website)}
          required
        />
        {errors.website && (
          <span className="form-field-error">{errors.website}</span>
        )}
      </label>

      <div className="form-row form-row-2">
        <label className={`form-field${errors.name ? " has-error" : ""}`}>
          <span className="form-field-label">
            Your name <span className="form-field-required">*</span>
          </span>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            required
          />
          {errors.name && (
            <span className="form-field-error">{errors.name}</span>
          )}
        </label>

        <label className={`form-field${errors.email ? " has-error" : ""}`}>
          <span className="form-field-label">
            Email <span className="form-field-required">*</span>
            <span className="form-field-hint">(will receive the audit)</span>
          </span>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            required
          />
          {errors.email && (
            <span className="form-field-error">{errors.email}</span>
          )}
        </label>
      </div>

      <label className={`form-field${errors.practiceArea ? " has-error" : ""}`}>
        <span className="form-field-label">
          Practice area <span className="form-field-required">*</span>
        </span>
        <select
          name="practiceArea"
          value={state.practiceArea}
          onChange={(e) => update("practiceArea", e.target.value)}
          required
          aria-invalid={Boolean(errors.practiceArea)}
        >
          <option value="">Select one…</option>
          <option value="legal">Legal</option>
          <option value="medical">Medical</option>
          <option value="both">Both</option>
        </select>
        {errors.practiceArea && (
          <span className="form-field-error">{errors.practiceArea}</span>
        )}
      </label>

      <div className="form-actions">
        <button
          type="submit"
          className="form-submit form-submit-large"
          disabled={status === "submitting"}
        >
          {status === "submitting"
            ? "Sending…"
            : "Send me my free audit"}{" "}
          {status !== "submitting" && <span className="arrow">→</span>}
        </button>
        {status === "error" && (
          <p className="form-error-banner" role="alert">
            Something went wrong. Try emailing us directly at{" "}
            <a href="mailto:marketing@rysengrowth.com">
              marketing@rysengrowth.com
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
