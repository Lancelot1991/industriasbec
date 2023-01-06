    //CREATE AN ACCORDION THAT SCROLLS THE VIEW TO THE TOP AND JUST OPENS ONE TAB
    const accordionTitles = document.querySelectorAll('.product');
    const accordionPanels = document.querySelectorAll('.panel');
    
    // THIS HAS BEEN MOVED WITHIN window.onload() FUNCTION BECOUSE I WAS COUSING PROBLEM IN ELEMENTOR
    // Close all the panels when the page loads
    // accordionPanels.forEach(panel => {
    //   panel.style.display = 'none';
    // }) 
    
    accordionTitles.forEach(title => {
      title.addEventListener('click', function() {
        const panel = this.nextElementSibling;
        if (panel.style.display === 'grid') {
          // If the panel is already open, close it
          position = title.getBoundingClientRect().top
          panel.style.display = 'none';
          this.classList.remove('active');
          //keep the top of the clossed title at the top of page when the content colapses. Just if its sticky to the top as we don't want to reposition the elemtent if its at the middle of the page
          if(position < 50){
            const y = title.getBoundingClientRect().top + window.pageYOffset - 45;/*accordion title height*/
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        } else {
          // If the panel is closed, close all the other panels and open this one
          accordionPanels.forEach(p => {
            p.style.display = 'none';
          });
          panel.style.display = 'grid';

          // Remove the active class from all the titles
          accordionTitles.forEach(t => {
            t.classList.remove('active');
          });

          // Replace scrollIntoView with window.scrollTo
          const y = panel.getBoundingClientRect().top + window.pageYOffset - 90; /*header + accordion title height*/
          window.scrollTo({ top: y, behavior: 'smooth' });

          // Add the active class to the clicked title
          this.classList.add('active');

          // Update the URL hash with the title ID
          window.history.pushState({}, '', '#' + this.id); 
        }
      });
    });


// JavaScript to open the panel from the URL hash
window.onload = function() {

  //close all the panels
  const accordionPanels = document.querySelectorAll('.panel');
  accordionPanels.forEach(panel => {
    panel.style.display = 'none';
  })


  var hash = window.location.hash; // Get the URL hash
  if (hash) {
    var title = document.getElementById(hash.substring(1)); // Get the title element with the ID specified in the URL hash
    var panel = title.nextElementSibling; // Get the panel element for the title
    panel.style.display = 'grid';
    // if we're within a nested panel, we'll need to select the parent and display it too
    if (panel.className == 'panel-nested'){
      var outer_panel = panel.closest('.panel');
      outer_panel.style.display = 'grid';
      var outer_title = outer_panel.previousElementSibling;
      outer_title.classList.add('active');
    }
    // Scroll the page to the top of the panel
    const y = panel.getBoundingClientRect().top + window.pageYOffset - 80; /*header + active accordion title height*/
    window.scrollTo({ top: y, behavior: 'smooth' });
    title.classList.add('active');
  }
};
    

    
    
    //CREATE A NESTED ACCORDION THAT SCROLLS THE VIEW TO THE TOP AND JUST OPENS ONE TAB
    //MODIFIED TO OPEN AS MANY TABS AS WANTED
    const accordionTitlesN = document.querySelectorAll('.accordion-nested h5');
    const accordionPanelsN = document.querySelectorAll('.panel-nested');
    
    // Close all the panels when the page loads
    accordionPanelsN.forEach(panel => {
      panel.style.display = 'none';
    });
    
    accordionTitlesN.forEach(title => {
      title.addEventListener('click', function() {
        const panel = this.nextElementSibling;
        if (panel.style.display === 'grid') {
          // If the panel is already open, close it
          panel.style.display = 'none';
          this.classList.remove('active');
        } else {
          // If the panel is closed, close all the other panels and open this one
        //   accordionPanelsN.forEach(p => {
        //     p.style.display = 'none';
        //   });
          panel.style.display = 'grid';
          // Replace scrollIntoView with window.scrollTo
        //   const y = panel.getBoundingClientRect().top + window.pageYOffset - 120;
        //   window.scrollTo({ top: y, behavior: 'smooth' });
    
          // Remove the active class from all the titles
        //   accordionTitlesN.forEach(t => {
        //     t.classList.remove('active');
        //   });
          // Add the active class to the clicked title
          this.classList.add('active');
          window.history.pushState({}, '', '#' + this.id); // Update the URL hash with the title ID
        }
      });
    });