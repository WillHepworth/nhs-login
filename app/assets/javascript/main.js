// ES6 or Vanilla JavaScript


// reveal password script

function setUpButton(button, input) {
  var form = document.createElement('form');
  if ('checkValidity' in form && 'querySelector' in document && 'classList' in document.documentElement) {

      // toggle password field between type="text" and type="password"
      var togglePasswordButton = document.querySelector(button);

      if (togglePasswordButton) {
          var togglePasswordButtonText = togglePasswordButton.querySelector('b');
          var passwordField = document.querySelector(input);
          togglePasswordButton.removeAttribute('hidden');


          togglePasswordButton.addEventListener('click', function() {
              var isPressed = JSON.parse(this.getAttribute('aria-pressed'));

              if (isPressed) {
                  passwordField.setAttribute('type', 'password');
                  this.setAttribute('aria-pressed', false);
                  togglePasswordButtonText.textContent = "Show"
              } else {
                  passwordField.setAttribute('type', 'text');
                  this.setAttribute('aria-pressed', true);
                  togglePasswordButtonText.textContent = "Hide"
              }
          });
      }
  }
}

setUpButton('[data-toggle-password]', '[data-toggle-password-field]')
setUpButton('[data-toggle-password-confirm]', '[data-toggle-password-field-confirm]')

// function toggleDevMode(){
//     const devModeButton = document.querySelector('#nhsuk-footer ul li a[href*="#"]');
//     devModeButton.addEventListener('click', function (event) {
//         event.preventDefault();
//         //window.location.href = window.location.href + '?devMode=1'; 
//     }, false);
// }

// toggleDevMode();

function getGuthuibData () {

    // let commitDate = {};
    // request('https://api.github.com/repos/wshepworth/nhs-login/commits/master', { json: true, headers: { 'User-Agent': 'wshepworth' } }, (err, res, body) => {
    //   if (err) { 
    //     console.error(err);
    //    }
    //   commitDate = body.commit.author.date; 
      
    //   var commitDateCell =  document.querySelectorAll('.commit-date');
  
    //    setTimeout(function () {
    //      if(commitDateCell) {
    //        console.log('yey');
           
    //      } else {
     
    //        console.log('ney');
    //      }
    //    }, 2000)
          
    // });

    fetch('https://api.github.com/repos/wshepworth/nhs-login/commits/master')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });

}

getGuthuibData();