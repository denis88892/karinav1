'use client'

import { Lightbulb, Zap, Brain, Gift, User, Heart, Wallet, MessageCircle, CheckCircle, Cpu } from 'lucide-react'
import { AnimatedFadeUp, AnimatedContainer, AnimatedItem } from '../animated-fade-up'

const points = [
  { n: '01', text: 'Постоянная усталость и отсутствие энергии', icon: Lightbulb },
  { n: '02', text: 'Тревога, стресс, бессонница', icon: Zap },
  { n: '03', text: 'Навязчивые мысли и невозможность «выключить голову»', icon: Brain },
  { n: '04', text: 'Неуверенность в себе и своих решениях', icon: Gift },
  { n: '05', text: 'Страх перемен и будущего', icon: User },
  { n: '06', text: 'Сложности в отношениях с партнёром, родителями или детьми', icon: Heart },
  { n: '07', text: 'Денежные ограничения и страх за финансовое будущее', icon: Wallet },
  { n: '08', text: 'Ощущение, что жизнь идёт не так, как хочется', icon: MessageCircle },
  { n: '09', text: 'Желание выйти из повторяющихся сценариев', icon: CheckCircle },
  { n: '10', text: 'Желание освободиться от ограничивающих убеждений', icon: Cpu },
]

export function RecognizeSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <AnimatedFadeUp>
          <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl text-balance mb-12">
            Знакомо ли вам это состояние?
          </h2>
        </AnimatedFadeUp>

        <AnimatedContainer className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5" staggerDelay={0.05}>
          {points.map((p) => {
            const IconComponent = p.icon
            return (
              <AnimatedItem key={p.n}>
                <div className="flex flex-col items-center text-center">
                  <IconComponent className="h-8 w-8 text-accent mb-3" strokeWidth={1.5} />
                  <span className="font-serif text-2xl font-semibold text-accent mb-2">{p.n}</span>
                  <p className="text-sm leading-snug text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </AnimatedItem>
            )
          })}
        </AnimatedContainer>

        <AnimatedFadeUp delay={0.3} className="mt-16 flex flex-col items-center text-center">
          <p className="max-w-2xl text-base leading-relaxed text-foreground/90 text-pretty">
            Если вы узнали себя хотя бы в одном пункте — возможно, пришло время
            посмотреть на ситуацию иначе.
          </p>
          <div className="mt-6 h-0.5 w-16 bg-accent" />
        </AnimatedFadeUp>
      </div>
    </section>
  )
}
