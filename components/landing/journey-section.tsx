import Image from 'next/image'

const timeline = [
  {
    title: '2018 год',
    text: 'Работа в офисе. Постоянные вопросы: «Кто я? Почему я здесь? Кем мечтала стать?»',
  },
  {
    title: 'Первые сессии Access',
    text: 'Коллега предложила попрактиковать на мне непонятную технику.',
  },
  {
    title: 'Ушла тревога, осталась без работы',
    text: 'И приняла решение уволиться.',
  },
  {
    title: 'Обучение ораторскому мастерству',
    text: 'Мечта детства о телеведении стала ближе.',
  },
  {
    title: 'Кастинг на телевидение',
    text: 'Прошла кастинг и стала диктором новостей.',
  },
  {
    title: 'Осознание',
    text: 'Только через полгода я увидела, как всё изменилось после первых сессий.',
  },
]

export function JourneySection() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 min-h-[420px] overflow-hidden rounded-2xl lg:order-1 lg:min-h-[620px]">
          <Image
            src="/images/coffee-lifestyle.png"
            alt="Карина Кашина"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 flex flex-col justify-center lg:order-2">
          <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Мой путь
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium italic leading-tight text-foreground md:text-[2.4rem] text-balance">
            От сотрудника полиции до фасилитатора Access Consciousness
          </h2>

          <ol className="mt-9 border-l border-border">
            {timeline.map((item) => (
              <li key={item.title} className="relative pb-7 pl-7 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-background" />
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-xl border border-border bg-secondary p-6">
            <p className="text-[15px] leading-relaxed text-foreground/90">
              Сегодня моя миссия — создавать пространство, где люди могут снова
              услышать себя и выбрать больше для своей жизни.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
