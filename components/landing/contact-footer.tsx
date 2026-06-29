'use client'

import { useState } from 'react'
import { ShieldCheck, Send, MessageCircle, Phone } from 'lucide-react'
import { AnimatedFadeUp } from '../animated-fade-up'

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <AnimatedFadeUp>
              <h2 className="font-serif text-3xl font-medium leading-tight md:text-[2.6rem] text-balance">
                Возможно, именно сейчас начинается новая глава вашей жизни.
              </h2>
            </AnimatedFadeUp>
            <AnimatedFadeUp delay={0.2}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-primary-foreground/70">
                Каждая перемена начинается с одного вопроса: что ещё возможно для
                вас? Оставьте контакты — и я свяжусь с вами, чтобы подобрать формат
                работы.
              </p>
            </AnimatedFadeUp>
          </div>

          <div>
            {submitted ? (
              <div className="flex h-full min-h-44 flex-col items-center justify-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 text-center">
                <ShieldCheck className="size-8 text-gold" />
                <p className="mt-3 font-serif text-xl">Спасибо!</p>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  Я свяжусь с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="Ваше имя"
                    aria-label="Ваше имя"
                    className="w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold focus:outline-none"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Телефон / WhatsApp"
                    aria-label="Телефон или WhatsApp"
                    className="w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-gold focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gold px-6 py-4 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
                >
                  Записаться на сессию
                </button>
                <p className="flex items-start gap-2 text-xs leading-relaxed text-primary-foreground/55">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0" />
                  Нажимая на кнопку, вы соглашаетесь с политикой
                  конфиденциальности.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-primary-foreground/15 pt-8 sm:flex-row sm:items-center">
          <div className="text-sm text-primary-foreground/60">
            <p>© Карина Кашина, 2024</p>
            <p>Access Consciousness</p>
          </div>
          <div className="flex items-center gap-3">
            {[Send, MessageCircle, Phone].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Связаться"
                className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
