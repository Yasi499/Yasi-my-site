export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Мінімалістичний Dark Landing</h1>
        <p>Сучасний сайт на Next.js App Router без зайвих залежностей та кастомного CSS.</p>
        <a href="#features" className="btn">Дізнатися більше</a>
      </section>

      <section id="features" className="features">
        <div className="card">
          <h3>Швидкість</h3>
          <p>Оптимізована продуктивність завдяки серверним компонентам Next.js.</p>
        </div>
        <div className="card">
          <h3>Чистий код</h3>
          <p>Мінімальний запуск без додаткових бібліотек стилізації чи складних конфігурацій.</p>
        </div>
        <div className="card">
          <h3>Темна тема</h3>
          <p>Вбудована адаптивна темна палітра для комфортного перегляду.</p>
        </div>
      </section>
    </main>
  );
}
