export type ContactFormValues = {
  name: string
  email: string
  message: string
}

export type ContactFormResult = {
  ok: boolean
  message: string
}

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
const CONTACT_EMAIL_TO = import.meta.env.VITE_CONTACT_EMAIL_TO || 'hello@hellenkerubo.dev'

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactFormResult> {
  if (!CONTACT_ENDPOINT) {
    const subject = encodeURIComponent(`Portfolio contact from ${values.name}`)
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`,
    )

    window.location.href = `mailto:${CONTACT_EMAIL_TO}?subject=${subject}&body=${body}`

    return {
      ok: true,
      message: 'Your email app is opening with the message ready to send.',
    }
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...values,
      to: CONTACT_EMAIL_TO,
    }),
  })

  if (!response.ok) {
    return {
      ok: false,
      message: 'Something went wrong while sending the message. Please try again shortly.',
    }
  }

  return {
    ok: true,
    message: 'Thanks for reaching out. Your message is ready to be forwarded by your email service.',
  }
}
