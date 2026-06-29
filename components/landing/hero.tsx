'use client'

import { ArrowUpRight, ArrowRight, BadgeCheck, Clock, UserRound } from 'lucide-react'
import Image from 'next/image'
import { AnimatedFadeUp, AnimatedScale, AnimatedContainer, AnimatedItem } from '../animated-fade-up'

const stats = [
  { icon: BadgeCheck, title: 'Сертифицированный', sub: 'фасилитатор' },
  { icon: Clock, title: 'Более 5 лет', sub: 'практики' },
  { icon: UserRound, title: 'Индивидуальная', sub: 'работа и обучение' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Mobile-first layout: portrait first, then content */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:max-w-7xl lg:mx-auto">
        
        {/* Hero Image - Priority on mobile */}
        <div className="relative order-first lg:order-last min-h-[45vh] lg:min-h-[100vh]">
          <AnimatedScale>
            <Image
              src="/images/hero-portrait.png"
              alt="Карина Кашина — фасилитатор Access Consciousness"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            {/* Soft gradient fade at bottom for mobile */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent lg:hidden" style={{ paddingRight: '-1px' }} />
          </AnimatedScale>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-5 py-12 md:px-10 lg:py-44 lg:pr-12">
          
          {/* Expert Label */}
          <AnimatedFadeUp>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Сертифицированный фасилитатор Access Consciousness
            </span>
          </AnimatedFadeUp>

          {/* Main Headline */}
          <AnimatedFadeUp delay={0.1}>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground text-balance lg:text-5xl" style={{ fontSize: '37px' }}>
              Что ещё возможно для вашей жизни, если убрать шум?
            </h1>
            <div className="mt-4 h-0.5 w-12 bg-accent" />
          </AnimatedFadeUp>

          {/* Supporting Text */}
          <AnimatedFadeUp delay={0.2}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base">
              Помогаю освободиться от тревоги, внутренних ограничений и
              постоянного напряжения, чтобы жить легче, увереннее и с большим
              количеством возможностей.
            </p>
          </AnimatedFadeUp>

          {/* CTAs */}
          <AnimatedFadeUp delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Записаться на сессию
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#training"
              className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-medium text-foreground"
            >
              Узнать про обучение
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </AnimatedFadeUp>

          {/* Benefits */}
          <AnimatedContainer className="mt-10 space-y-6 border-t border-border/50 pt-10 lg:space-y-8" staggerDelay={0.08}>
            {stats.map((s) => (
              <AnimatedItem key={s.title}>
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/70 text-foreground/70">
                    <s.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div className="flex-1">
                    <span className="block text-sm font-medium text-foreground">
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
      </div>
    </section>
  )
}
