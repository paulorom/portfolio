export default (content = "Slide") => {
  const data = [
    {
      idx: 0,
      plano: "HTML",
      investimento: "31",
      bonus: "⭐⭐⭐⭐⭐",
      image: "https://devstickers.com/assets/img/pro/iqm9.png",
      whatsApp:
        "https://wa.me/5569984629007?text=Tenho%20interesse%20no%20plano%20Capital%20Wave"
    },
    {
      idx: 1,
      plano: "CSS",
      investimento: "33",
      bonus: "⭐⭐⭐⭐⭐",
      image: "https://devstickers.com/assets/img/pro/8pnd.png",
      whatsApp:
        "https://wa.me/5569984629007?text=Tenho%20interesse%20no%20plano%20Capital%20Highrise"
    },
    {
      idx: 2,
      plano: "UI Design",
      investimento: "30",
      bonus: "⭐⭐⭐⭐⭐",
      image: "https://i.imgur.com/9BbQaax.png",
      whatsApp:
        "https://wa.me/5569984629007?text=Tenho%20interesse%20no%20plano%20Capital%20Everest"
    },
    {
      idx: 3,
      plano: "JavaScript",
      investimento: "15",
      bonus: "⭐⭐⭐⭐",
      image: "https://devstickers.com/assets/img/cat/javascript.png",
      whatsApp:
        "https://wa.me/5569984629007?text=Tenho%20interesse%20no%20plano%20Capital%20Everest"
    },
    {
      idx: 4,
      plano: "React",
      investimento: "3",
      bonus: "⭐⭐⭐⭐",
      image: "https://devstickers.com/assets/img/cat/react-js.png",
      whatsApp:
        "https://wa.me/5569984629007?text=Tenho%20interesse%20no%20plano%20Capital%20Sky"
    },
    {
      idx: 5,
      plano: "Angular",
      investimento: "2",
      bonus: "⭐⭐⭐⭐",
      image: "https://devstickers.com/assets/img/cat/angular2.png",
      whatsApp:
        "https://wa.me/5569984629007?text=Tenho%20interesse%20no%20plano%20Capital%20Moon"
    },
    {
      idx: 6,
      plano: "PORTUGUESE",
      investimento: "--",
      bonus: "⭐⭐⭐⭐⭐",
      image: "images/portugues.png",
      whatsApp:
        "https://wa.me/5569984629007?text=Tenho%20interesse%20no%20plano%20Capital%20Wave"
    },
    {
      idx: 7,
      plano: "ENGLISH",
      investimento: "FLUENTE",
      bonus: "⭐⭐⭐⭐⭐",
      image: "images/ingles.png",
      whatsApp:
        "https://wa.me/5569984629007?text=Tenho%20interesse%20no%20plano%20Capital%20Wave"
    }
  ];

  return data.map(data => ({
    idx: data.idx,
    plano: data.plano,
    investimento: data.investimento,
    bonus: data.bonus,
    image: data.image,
    whatsApp: data.whatsApp
  }));
};
