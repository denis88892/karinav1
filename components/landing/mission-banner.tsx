import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function MissionBanner() {
  return (
    <section className="relative bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="px-5 py-16 md:px-10 lg:py-24">
          <h2 className="font-serif text-3xl font-medium italic leading-tight md:text-[2.6rem] text-balance">
            Моя миссия — создавать пространство, в котором человек снова начинает
            слышать себя.
          </h2>
          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-primary-foreground/70">
            Я знаю, что каждый обладает уникальной мудростью, красотой и
            внутренней опорой. Иногда достаточно убрать шум, сомнения и чужие
            ожидания, чтобы вновь услышать себя.
          </p>
          <a
            href="#about"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Подробнее обо мне
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="relative min-h-[360px] self-stretch lg:min-h-[560px]">
          <Image
            src="/images/mission-portrait.png"
            alt="Карина Кашина"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}
