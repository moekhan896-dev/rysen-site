"use client";

/**
 * FORMSPREE SETUP — Session 52 update.
 *
 * The endpoint is now read from the public env var
 * NEXT_PUBLIC_FORMSPREE_ENDPOINT. Steps to wire it in production:
 *
 *   1. Go to https://formspree.io and sign up using marketing@rysengrowth.com.
 *   2. Create a new form named "Rysen Contact".
 *   3. In Vercel project settings, add the env var
 *      NEXT_PUBLIC_FORMSPREE_ENDPOINT with the full endpoint URL
 *      (eg https://formspree.io/f/abcd1234).
 *   4. Redeploy. Submissions will then land in the Rysen inbox.
 *
 *   5. AUTO-REPLY: In the Formspree dashboard, turn on Autoresponder for
 *      this form with the copy:
 *
 *      "Thanks for reaching out. We received your inquiry and will be in
 *       touch within one business day to set up an audit conversation.
 *
 *       — Art Khan
 *       Founder, Rysen Growth"
 *
 *      Reference:
 *      https://help.formspree.io/hc/en-us/articles/360013179914-Sending-an-Autoresponse-Email
 *
 * Until the env var is set, the form falls back to a stub URL so the
 * dev experience does not break.
 */
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/YOUR_FORM_ID_HERE";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { track } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  firm: string;
  website: string;
  practiceArea: string;
  revenue: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  firm: "",
  website: "",
  practiceArea: "",
  revenue: "",
  message: "",
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = (k: keyof FormState, v: string) => {
    setState((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!state.name.trim()) next.name = "Required.";
    if (!state.email.trim()) next.email = "Required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
      next.email = "Enter a valid email address.";
    if (!state.firm.trim()) next.firm = "Required.";
    if (!state.website.trim()) next.website = "Required.";
    else if (!/^https?:\/\/.+\..+/.test(state.website))
      next.website = "Include https:// and a valid domain.";
    if (!state.practiceArea) next.practiceArea = "Required.";
    if (!state.message.trim()) next.message = "Required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(state),
      });
      if (res.ok) {
        setStatus("success");
        // Session 52 — fire conversion event (gated on consent).
        track("contact_form_submit", { source: "contact_page" });
      } else {
        setStatus("error");
      }
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
        <h3>Thanks. We’ll respond within 24 hours.</h3>
        <p>
          A confirmation will land in your inbox shortly. Email us anytime at{" "}
          <a href="mailto:marketing@rysengrowth.com">marketing@rysengrowth.com</a>.
        </p>
      </motion.div>
    );
  }

  return (
    <form className="rysen-form" onSubmit={onSubmit} noValidate>
      <div className="form-row form-row-2">
        <Field
          label="Name"
          name="name"
          required
          value={state.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          value={state.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
        />
      </div>

      <div className="form-row form-row-2">
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={state.phone}
          onChange={(v) => update("phone", v)}
          placeholder="(optional)"
        />
        <Field
          label="Firm / Practice"
          name="firm"
          required
          value={state.firm}
          onChange={(v) => update("firm", v)}
          error={errors.firm}
        />
      </div>

      <Field
        label="Firm website"
        name="website"
        type="url"
        required
        value={state.website}
        onChange={(v) => update("website", v)}
        error={errors.website}
        placeholder="https://"
      />

      <div className="form-row form-row-2">
        <SelectField
          label="Practice area"
          name="practiceArea"
          required
          value={state.practiceArea}
          onChange={(v) => update("practiceArea", v)}
          error={errors.practiceArea}
          options={[
            { value: "", label: "Select one…" },
            { value: "legal", label: "Legal" },
            { value: "medical", label: "Medical" },
            { value: "both", label: "Both" },
            { value: "other", label: "Other" },
          ]}
        />
        <SelectField
          label="Monthly revenue range"
          name="revenue"
          value={state.revenue}
          onChange={(v) => update("revenue", v)}
          options={[
            { value: "", label: "Prefer not to say" },
            { value: "<50k", label: "Under $50K" },
            { value: "50-200k", label: "$50K, $200K" },
            { value: "200-500k", label: "$200K, $500K" },
            { value: "500k+", label: "$500K+" },
          ]}
        />
      </div>

      <TextAreaField
        label="What’s your biggest challenge right now?"
        name="message"
        required
        value={state.message}
        onChange={(v) => update("message", v)}
        error={errors.message}
      />

      <div className="form-actions">
        <button
          type="submit"
          className="form-submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send message"}{" "}
          {status !== "submitting" && <span className="arrow">→</span>}
        </button>
        {status === "error" && (
          <p className="form-error-banner" role="alert">
            Something went wrong. Try emailing us directly at{" "}
            <a href="mailto:marketing@rysengrowth.com">marketing@rysengrowth.com</a>.
          </p>
        )}
      </div>
    </form>
  );
}

interface FieldProps {
  readonly label: string;
  readonly name: string;
  readonly value: string;
  readonly onChange: (v: string) => void;
  readonly type?: string;
  readonly required?: boolean;
  readonly error?: string;
  readonly placeholder?: string;
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required,
  error,
  placeholder,
}: FieldProps) {
  return (
    <label className={`form-field${error ? " has-error" : ""}`}>
      <span className="form-field-label">
        {label}
        {required && <span className="form-field-required">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-err` : undefined}
      />
      {error && (
        <span id={`${name}-err`} className="form-field-error">
          {error}
        </span>
      )}
    </label>
  );
}

interface SelectFieldProps {
  readonly label: string;
  readonly name: string;
  readonly value: string;
  readonly onChange: (v: string) => void;
  readonly options: ReadonlyArray<{ value: string; label: string }>;
  readonly required?: boolean;
  readonly error?: string;
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required,
  error,
}: SelectFieldProps) {
  return (
    <label className={`form-field${error ? " has-error" : ""}`}>
      <span className="form-field-label">
        {label}
        {required && <span className="form-field-required">*</span>}
      </span>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-invalid={Boolean(error)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <span className="form-field-error">{error}</span>}
    </label>
  );
}

interface TextAreaFieldProps {
  readonly label: string;
  readonly name: string;
  readonly value: string;
  readonly onChange: (v: string) => void;
  readonly required?: boolean;
  readonly error?: string;
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  required,
  error,
}: TextAreaFieldProps) {
  return (
    <label className={`form-field${error ? " has-error" : ""}`}>
      <span className="form-field-label">
        {label}
        {required && <span className="form-field-required">*</span>}
      </span>
      <textarea
        name={name}
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-invalid={Boolean(error)}
      />
      {error && <span className="form-field-error">{error}</span>}
    </label>
  );
}
