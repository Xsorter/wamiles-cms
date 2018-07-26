(function() {
  initApp = function() {
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          // User is signed in.
        
          let email = user.email;
          user.getIdToken().then(function(accessToken) {
            document.getElementById("sign-in-status").innerHTML = `
              <span>Вы вошли как: ${email}</span>
            `;
          });
        } else {
          // User is signed out.
          document.querySelector("#wrapper").style.display = "none";
          document.getElementById("sign-in-status").innerHTML = `
              <span>
                Вы не авторизованы, 
                <a class="link__transition js-link" href="index.html">
                  <span class="link__text">войдите для работы </span>
                  <span class="link__layout"></span>
                </a>
              </span>
          `;
        }
      },
      function(error) {
          //TODO pemission denied
        console.log(error);
      }
    );
  };

  window.addEventListener("load", function() {
    initApp();
  });
})();
