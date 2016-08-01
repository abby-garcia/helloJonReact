import React from 'react';



var randomQuoteGenrator extends React.Component {
  getInitialState: function(){ // setting inital state for the component
    return{
      currentQuote:this.getRandomQuote()
    }
  }

getRandomQuote: function(){
  var quotes=[
  {
    quote: "Why fit in when you were born to stand out?",
    name:"Dr.Seuss"
    },
    {
      quote:"My greatest pain in life is that I will never be able to see myself perform live.",
      name:"Kanye West"
    },
    {
      quote:"It's never too late - never to late to start over, never too late to be happy.",
      name:"Jane Fonda"
    },
    {
      quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
      name:"Dr.Seuss"
    },
    {
      quote:"You're off to Great Places! Today is your day! Your mountain is waiting, So... get on your way!",
      name:"Dr.Seuss"
    },
    {
      quote:"The only person you should try to be better than is the person you were yesterday.",
      name:"Anonymous"
    },
    {
      quote:"Never be bullied into silence. Never allow yourself to be made a victim. Accept no one’s definition of your life; define yourself.",
      name:"Harvey Fierstein"
    },
    {
      quote:"I can be changed by what happens to me but I refuse to be reduced by it.",
      name:"Maya Angelou"
    },
    {
      quote:"Expect problems and eat them for breakfast.",
      name:"Alfred A. Montapert"
    },
    {
      quote:"Start where you are. Use what you have. Do what you can.",
      name:"Arthur Ashe"
    },
    {
      quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
      name:"Samuel Beckett"
    },
    {
      quote:"Be yourself; everyone else is already taken.",
      name:"Oscar Wilde"
    },
    {
      quote:"Believe you can and you’re halfway there.",
      name:"T. Roosevelt"
    },
    {
      quote:"There is no elevator to success — you have to take the stairs.",
      name:"Anonymous"
    },
    {
      quote:"Do not take life too seriously. You will never get out of it alive.",
      name:"Elbert Hubbard"
    },
    {
      quote:"It does not do to dwell on dreams and forget to live.",
      name:"Albus Dumbledore"
    },
    {
      quote:"Procrastination is the art of keeping up with yesterday.",
      name:"Don Marquis"
    },
    {
      quote:"Get your facts first, then you can distort them as you please.",
      name:"Mark Twain"
    },
    {
      quote:"A day without sunshine is like, you know, night.",
      name:"Steve Martin"
    },
    {
      quote:"“Do what you feel in your heart to be right, for you’ll be criticized anyway.",
      name:"Eleanor Roosevelt"
    },
    {
      quote:"Don't sweat the petty things and don't pet the sweaty things.",
      name:"George Carlin"
    },
    {
      quote:"Always do whatever's next.",
      name:"George Carlin"
    },
    {
      quote:"Atheism is a non-prophet organization.",
      name:"George Carlin"
    },
    {
      quote:"Hapiness is not something ready made. It comes from your own actions.",
      name:"Dalai Lama"
    }

];

  var random = randomGen(0, quotes.length -1);
  return quotes[random];

  function randomGen(max,min){
    return Math.floor(Math.random() * max - min)) + min;

  }
},


render: function(){
    return(
      <div className = "main-container">
      


      </div>




    )

}


export default randomQuoteGenrator;
