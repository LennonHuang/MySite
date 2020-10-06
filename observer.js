const faders = document.querySelectorAll(".fade-in");
const options = {
  threshold: 0.7
};

const fade_observer = new IntersectionObserver(function(entries,fade_observer){
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return;
    }else{
      entry.target.classList.add("appear");
      fade_observer.unobserve(entry.target);
    };
  });
},options);

faders.forEach(fader =>{
  fade_observer.observe(fader);
});
