'use client'

import Image from 'next/image'
import { AnimatedScale, AnimatedFadeUp } from '../animated-fade-up'

export function AboutBars() {
  return (
    <section id="bars" className="bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
        <AnimatedScale>
          <div className="relative min-h-[360px] lg:min-h-[620px]">
            <Image
              src="/images/access-bars-session.png"
              alt="Сессия Access Bars"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </AnimatedScale>

        <AnimatedFadeUp className="flex flex-col justify-center bg-secondary px-5 py-16 md:px-12 lg:py-24">
          <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Что такое Access Bars
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-foreground md:text-[2.6rem] text-balance">
            Что происходит, когда ум наконец перестаёт шуметь?
          </h2>

          <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Access Bars — это мягкая энергетическая техника, во время которой
              происходит лёгкое прикосновение к 32 точкам на голове.
            </p>
            <p>
              Каждая точка связана с определёнными сферами жизни: деньги,
              отношения, творчество, здоровье, контроль, радость, осознанность и
              многими другими.
            </p>
            <p>
              Во время сессии ум расслабляется, тело отпускает напряжение, а
              привычные ограничения перестают управлять вашим выбором.
            </p>
          </div>

          <blockquote className="mt-9 border-l-2 border-accent pl-5 font-serif text-xl italic leading-snug text-foreground/90 md:text-2xl">
            «Иногда ясность приходит не через усилие, а через расслабление.»
          </blockquote>
        </AnimatedFadeUp>
      </div>
    </section>
  )
}
