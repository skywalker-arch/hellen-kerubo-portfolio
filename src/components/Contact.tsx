import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Code2, Mail, Send } from 'lucide-react'
import { submitContactForm, type ContactFormValues } from '../services/contactService'

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  })

  const validate = (nextValues: ContactFormValues) => {
    const nextErrors: Partial<Record<keyof ContactFormValues, string>> = {}

    if (!nextValues.name.trim()) {
      nextErrors.name = 'Please add your name.'
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = 'Please add your email.'
    } else if (!emailPattern.test(nextValues.email)) {
      nextErrors.email = 'Please use a valid email address.'
    }

    if (!nextValues.message.trim()) {
      nextErrors.message = 'Please add a short message.'
    } else if (nextValues.message.trim().length < 10) {
      nextErrors.message = 'Your message should be a bit more detailed.'
    }

    return nextErrors
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }))
    setStatus({ type: 'idle', message: '' })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const result = await submitContactForm(values)

      if (!result.ok) {
        setStatus({ type: 'error', message: result.message })
        return
      }

      setStatus({ type: 'success', message: result.message })
      setValues(initialValues)
      setErrors({})
    } catch {
      setStatus({
        type: 'error',
        message: 'There was a problem sending your message. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container contact-shell">
        <div className="section-label">Contact</div>

        <div className="contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Let’s build something.</p>
            <h3>Open to junior frontend opportunities and thoughtful product work.</h3>
            <div className="contact-links">
              <a href="https://github.com/skywalker-arch" target="_blank" rel="noreferrer">
                <Code2 size={16} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/hellen-kerubo-b7b619352?" target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={16} />
                LinkedIn
              </a>
              <a href="mailto:hkerubo247@gmail.com">
                <Mail size={16} />
                hello@hellenkerubo.dev
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="button primary submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={16} />
            </button>

            {status.message && (
              <p
                className={`status-message ${status.type}`}
                aria-live="polite"
              >
                {status.type === 'success' ? <ArrowRight size={16} /> : null}
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  )
}
