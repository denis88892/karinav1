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
            
            {/* Powerful misty dissolve mask - left and bottom edges */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                maskImage: 'radial-gradient(ellipse 120% 100% at 100% 50%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 90%)',
                WebkitMaskImage: 'radial-gradient(ellipse 120% 100% at 100% 50%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 90%)',
                background: 'linear-gradient(to top, rgb(251, 249, 246) 0%, rgba(251, 249, 246, 0.6) 20%, transparent 40%), linear-gradient(to right, rgb(251, 249, 246) 0%, rgba(251, 249, 246, 0.8) 15%, rgba(251, 249, 246, 0.5) 30%, transparent 50%)',
              }}
            />
          </AnimatedScale>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-5 py-12 md:px-10 lg:py-32 lg:pr-12">
          
          {/* Expert Label */}
          <AnimatedFadeUp>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Сертифицированный фасилитатор Access Consciousness
            </span>
          </AnimatedFadeUp>

          {/* Main Headline - Elegant serif italic */}
          <AnimatedFadeUp delay={0.1}>
            <h1 className="mt-6 font-serif text-4xl italic font-medium leading-[1.15] tracking-tight text-foreground text-balance lg:text-5xl">
              Что ещё станет возможным в вашей жизни, если убрать ограничения в голове?
            </h1>
          </AnimatedFadeUp>

          {/* Supporting Text - Uppercase description block */}
          <AnimatedFadeUp delay={0.2}>
            <p className="mt-8 max-w-xl text-xs uppercase leading-relaxed tracking-wide text-muted-foreground font-medium">
              Я знаю, что каждый обладает внутренней силой и потенциалом и часто это спрятано под навязанными убеждениями.
            </p>
          </AnimatedFadeUp>

          {/* CTAs */}
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

          {/* Features Bottom Bar */}
          <AnimatedContainer className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-border/40 pt-8 lg:pt-12" staggerDelay={0.08}>
            {stats.map((s) => (
              <AnimatedItem key={s.title}>
                <div className="flex flex-col items-start gap-3 text-center sm:text-left">
                  <span className="flex size-8 items-center justify-center text-accent/70">
                    <s.icon className="size-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="block text-xs font-semibold text-foreground">
                      {s.title}
                    </span>
                    <span className="block text-xs text-muted-foreground mt-1">
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
