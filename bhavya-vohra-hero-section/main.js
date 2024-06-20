const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 300,
})

sr.reveal('.hero_section_left')
sr.reveal('.hero_section_right', {delay: 600, scale: .5});

