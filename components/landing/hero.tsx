'use client'

import { ArrowRight, BadgeCheck, Clock, UserRound } from 'lucide-react'
import Image from 'next/image'
import { AnimatedFadeUp, AnimatedScale, AnimatedContainer, AnimatedItem } from '../animated-fade-up'

const stats = [
  { icon: BadgeCheck, title: 'Сертифицированный', sub: 'фасилитатор' },
  { icon: Clock, title: 'Более 5 лет', sub: 'практики' },
  { icon: UserRound, title: 'Индивидуальный', sub: 'подход' },
  { icon: UserRound, title: 'Реальные', sub: 'изменения' },
]

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#FBF9F6] overflow-hidden pt-32">
      {/* Background Image - Right side only */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none">
        <Image
          src="/images/hero-portrait.png"
          alt="Карина Кашина — фасилитатор Access Consciousness"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Perfect fade transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF9F6] via-[#FBF9F6]/60 to-transparent w-full h-full" />
      </div>

      {/* Foreground Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-screen flex flex-col justify-between">
        
        {/* Top Content Section */}
        <div className="w-1/2 flex flex-col justify-center">
          
          {/* Expert Label */}
          <AnimatedFadeUp>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Сертифицированный фасилитатор Access Consciousness
            </span>
          </AnimatedFadeUp>

          {/* Main Headline - Elegant serif italic */}
          <AnimatedFadeUp delay={0.1}>
            <h1 className="mt-6 font-serif text-5xl italic font-medium leading-[1.15] tracking-tight text-foreground max-w-xl">
              Что ещё станет возможным в вашей жизни, если убрать ограничения в голове?
            </h1>
          </AnimatedFadeUp>

          {/* Supporting Text - Uppercase description block */}
          <AnimatedFadeUp delay={0.2}>
            <p className="mt-8 max-w-lg text-xs uppercase leading-relaxed tracking-wide text-muted-foreground font-medium">
              Я знаю, что каждый обладает внутренней силой и потенциалом и часто это спрятано под навязанными убеждениями.
            </p>
          </AnimatedFadeUp>

          {/* CTAs - Horizontal buttons */}
          <AnimatedFadeUp delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Записаться на сессию
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#training"
              className="group inline-flex items-center justify-center sm:justify-start gap-2 rounded-full border border-accent/60 px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5"
            >
              Узнать про обучение
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </AnimatedFadeUp>
        </div>

        {/* Bottom Features Bar */}
        <AnimatedContainer className="w-1/2 flex items-center justify-start gap-0 border-t border-border/40 pt-8 pb-16 lg:gap-8" staggerDelay={0.08}>
          {stats.map((s, idx) => (
            <AnimatedItem key={s.title} className="flex items-start gap-4 flex-1 lg:flex-initial pl-0">
              {idx > 0 && <div className="h-12 w-px bg-border/30" />}
              <div className="flex flex-col items-start gap-3">
                <span className="flex size-6 items-center justify-center text-accent/70 shrink-0">
                  <s.icon className="size-4" strokeWidth={1.5} />
                </span>
                <div>
                  <span className="block text-xs font-semibold text-foreground">
                    {s.title}
                  </span>
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    {s.sub}
                  </span>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  )
}
