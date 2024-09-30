function toggleNav() {
    const navbar = document.getElementById('nav');
    navbar.classList.toggle('open');
  }
  function redirectTo(url) {
    window.location.href = url;
  }
  document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace "path_to_your_pdf_document.pdf" with the actual path to your PDF document
    var pdfUrl = 'Assets/Nandini Cv.pdf';
    
    // Create a new anchor element
    var anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Nandini Cv.pdf'; // Replace "filename.pdf" with the desired name of the downloaded PDF file
  
    // Append the anchor to the document body and trigger the click event
    document.body.appendChild(anchor);
    anchor.click();
  
    // Remove the anchor from the document body after download
    document.body.removeChild(anchor);
  });
  
  function sendEmail() {
    var email = 'nandinipingalkar@gmail.com';
    var subject = 'Subject Here';
    var body = 'Hello World';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
  }
  // function scrollToSection(sectionId) {
  //   var section = document.querySelector(sectionId);
  //   if (section) {
  //       section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
  // function scrollToSection(sectionId) {
  //   var section = document.querySelector(sectionId);
  //   if (section) {
  //       section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  document.addEventListener("DOMContentLoaded", function() {
    // Get all links in the navigation bar
    var navLinks = document.querySelectorAll('.nav_bar a[data-target]');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            var targetId = this.getAttribute('data-target');
            var targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});




  

  