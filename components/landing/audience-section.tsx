'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { AnimatedScale } from '../animated-fade-up'

export function AudienceSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-16 md:px-10 lg:grid-cols-2">
      {/* Women */}
      <AnimatedScale>
      <article className="relative overflow-hidden rounded-2xl">
        <Image
          src="/images/women.png"
          alt="Для мам и женщин"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        <div className="relative max-w-sm p-8 text-primary-foreground md:p-10">
          <h3 className="font-serif text-2xl font-medium md:text-3xl">
            Для мам и женщин
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
            Мы передаём детям не только любовь, но и свои страхи, ограничения и
            установки. Работая с собой сегодня, вы создаёте для ребёнка будущее,
            полное свободы, уверенности и выбора.
          </p>
          <a
            href="#contact"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium"
          >
            Подробнее
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </article>
      </AnimatedScale>

      {/* Men */}
      <AnimatedScale>
      <article className="relative overflow-hidden rounded-2xl">
        <Image
          src="/images/men.png"
          alt="Для мужчин"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        <div className="relative max-w-sm p-8 text-primary-foreground md:p-10">
          <h3 className="font-serif text-2xl font-medium md:text-3xl">
            Для мужчин
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
            Современный мужчина ежедневно сталкивается с высоким уровнем
            ответственности и стресса. Сессии Access Bars помогают разгрузить
            голову, принимать решения яснее и видеть новые возможности.
          </p>
          <a
            href="#contact"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium"
          >
            Подробнее
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </article>
      </AnimatedScale>
    </section>
  )
}
