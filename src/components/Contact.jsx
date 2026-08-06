import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const initialForm = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: '',
  botcheck: '',
}

const projectTypes = [
  {
    value: 'AI System',
    label: 'AI system or assistant',
  },
  {
    value: 'Automation',
    label: 'Business automation',
  },
  {
    value: 'Website',
    label: 'Website development',
  },
  {
    value: 'Web Application',
    label: 'Web application',
  },
  {
    value: 'CRM Integration',
    label: 'CRM integration',
  },
  {
    value: 'Technical Support',
    label: 'Technical operations',
  },
  {
    value: 'Other',
    label: 'Other',
  },
]

const suitableProjects = [
  'AI assistants and internal tools',
  'CRM and workflow automation',
  'Custom websites and web applications',
  'API, webhook and platform integrations',
  'Technical system troubleshooting',
]

function Contact() {
  const [formData, setFormData] =
    useState(initialForm)

  const [status, setStatus] =
    useState('idle')

  function handleChange(event) {
    const {
      name,
      value,
    } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))

    if (
      status === 'error' ||
      status === 'success'
    ) {
      setStatus('idle')
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (status === 'sending') {
      return
    }

    if (formData.botcheck) {
      return
    }

    const accessKey =
      import.meta.env
        .VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      console.error(
        'Missing VITE_WEB3FORMS_ACCESS_KEY. Add it to your local .env file and Cloudflare production environment variables.',
      )

      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New portfolio enquiry from ${formData.name.trim()}`,
            from_name:
              'J Patrick Portfolio',

            name: formData.name.trim(),
            email:
              formData.email.trim(),
            company:
              formData.company.trim() ||
              'Not provided',
            project_type:
              formData.projectType,
            message:
              formData.message.trim(),

            botcheck:
              formData.botcheck,
          }),
        },
      )

      const result =
        await response.json()

      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ||
            'The contact form submission failed.',
        )
      }

      setStatus('success')
      setFormData(initialForm)

      window.setTimeout(() => {
        setStatus('idle')
      }, 6000)
    } catch (error) {
      console.error(
        'Contact form error:',
        error,
      )

      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[160px]" />

        <div className="absolute bottom-[-8rem] right-[-6rem] h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            <MessageSquare size={16} />
            Contact
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Have a product, workflow or
            system that needs
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              to work better?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            Tell me what you are trying to
            build, automate or improve. I will
            review the problem and determine
            the most practical technical
            approach.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-semibold text-white">
                Contact information
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                Available for freelance
                development, automation
                projects, technical operations
                and long-term remote
                opportunities.
              </p>

              <div className="mt-7 space-y-5">
                <ContactDetail
                  icon={<Mail size={20} />}
                  label="Email"
                  value="j.patrickmagadia28@gmail.com"
                  href="mailto:j.patrickmagadia28@gmail.com"
                />

                <ContactDetail
                  icon={
                    <MapPin size={20} />
                  }
                  label="Location"
                  value="Philippines · Available remotely"
                />

                <ContactDetail
                  icon={
                    <Clock3 size={20} />
                  }
                  label="Availability"
                  value="Remote projects and opportunities"
                />
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Connect with me
                </p>

                <div className="mt-4 flex gap-3">
                  <SocialLink
                    href="https://github.com/jpatrick28"
                    label="Open GitHub profile"
                    icon={
                      <FaGithub size={20} />
                    }
                  />

                  <SocialLink
                    href="https://www.linkedin.com/in/jpatrickmagadia/"
                    label="Open LinkedIn profile"
                    icon={
                      <FaLinkedin
                        size={20}
                      />
                    }
                  />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-blue-500/5 p-7">
              <p className="text-sm font-semibold text-violet-300">
                Good projects to contact me
                about
              </p>

              <ul className="mt-5 space-y-4">
                {suitableProjects.map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-violet-400"
                      />

                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Tell me about your project
                </h3>

                <p className="mt-2 text-sm leading-7 text-zinc-500">
                  Include the current problem,
                  the result you need and the
                  platforms already involved.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 sm:flex">
                <Send size={22} />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
              >
                <label htmlFor="botcheck">
                  Leave this field empty
                </label>

                <input
                  id="botcheck"
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Your name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />

                <FormField
                  label="Email address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Company"
                  name="company"
                  type="text"
                  placeholder="Company or organisation"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />

                <div>
                  <label
                    htmlFor="projectType"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Project type
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    value={
                      formData.projectType
                    }
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-sm text-white outline-none transition focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select a project type
                    </option>

                    {projectTypes.map(
                      (projectType) => (
                        <option
                          key={
                            projectType.value
                          }
                          value={
                            projectType.value
                          }
                        >
                          {
                            projectType.label
                          }
                        </option>
                      ),
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-300"
                >
                  Project details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  minLength="20"
                  maxLength="3000"
                  placeholder="Describe what you are currently doing, what is not working and what result you want."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-sm leading-7 text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
                />

                <p className="mt-2 text-right text-xs text-zinc-700">
                  {
                    formData.message.length
                  }
                  /3000
                </p>
              </div>

              <div
                aria-live="polite"
                aria-atomic="true"
              >
                {status === 'success' && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0"
                    />

                    <p>
                      Your enquiry was sent
                      successfully. I will
                      respond as soon as
                      possible.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm leading-6 text-red-300"
                  >
                    The message could not be
                    sent. Please try again or
                    contact me directly by
                    email.
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                <p className="max-w-md text-xs leading-6 text-zinc-600">
                  Your information will only be
                  used to respond to your
                  project enquiry.
                </p>

                <button
                  type="submit"
                  disabled={
                    status === 'sending'
                  }
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending'
                    ? 'Sending...'
                    : 'Send project enquiry'}

                  {status !== 'sending' && (
                    <ArrowRight size={17} />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}) {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">
          {label}
        </p>

        <p className="mt-1 break-words text-sm font-medium text-zinc-300">
          {value}
        </p>
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-4 rounded-xl transition hover:opacity-80"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex items-center gap-4">
      {content}
    </div>
  )
}

function SocialLink({
  href,
  label,
  icon,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
    >
      {icon}
    </a>
  )
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-medium text-zinc-300"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
      />
    </div>
  )
}

export default Contact