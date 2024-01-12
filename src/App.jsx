import { useState, useEffect } from "react";
import diceIcon from "/images/icon-dice.svg";
import patternDesktop from "/images/pattern-divider-desktop.svg";
import patternMobile from "/images/pattern-divider-mobile.svg";

function App() {
  const [adviceId, setAdviceId] = useState("117");
  const [advice, setAdvice] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action"
  );

  const generateAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    const { slip } = data;
    setAdviceId(slip.id);
    setAdvice(slip.advice);
  };

  useEffect(() => {
    generateAdvice();
  }, []);

  return (
    <main className="min-h-screen grid place-content-center px-4 text-center bg-dark-blue">
      <section className="w-[344px] px-6 pt-[42px] bg-dark-grayish-blue rounded-[8px] sm:w-[540px] sm:px-[50px] sm:pt-[50px]">
        <p className="mb-8 text-neon-green text-sm tracking-[0.25em] shadow-2xl shadow-black">
          ADVICE # {adviceId}
        </p>
        <h1 className="text-quote-font text-light-cyan block before:content-['\201C'] after:content-['\201D'] mb-[22px] sm:mb-9">
          {advice}
        </h1>

        <figure>
          <picture>
            <source
              srcSet={patternDesktop}
              media="(min-width:600px)"
              className=" min-w-full"
            />
            <img src={patternMobile} alt="pattern" className=" min-w-full" />
          </picture>
        </figure>

        <button
          onClick={generateAdvice}
          className="block bg-neon-green p-5 rounded-full max-w-max mx-auto translate-y-2/4"
        >
          <img
            src={diceIcon}
            alt="dice button"
            className="bg-neon-green h-6 w-6"
          />
        </button>
      </section>
    </main>
  );
}

export default App;
