(function(){


    window.addEventListener('load', ()=>{
        firebaseInit();
    })

    document.querySelectorAll('.js-button').forEach(el => {
        el.addEventListener('click', ()=>{
            setTimeout(()=>{
                document.querySelector('.popup').classList.add('active');
            }, 700);
            setTimeout(()=>{
                document.querySelector('.popup').classList.remove('active');
            }, 3000);
        });
    })

    function firebaseInit(){
        let elements = {
            buttonDate: document.querySelector('#submit-button-date'),
            buttonDateWord: document.querySelector('#submit-button-date-word'),
            buttonAdress: document.querySelector('#submit-button-adress'),
            dateTextArea: document.querySelector('#date-word'),
            adressTextArea: document.querySelector('#adress'),
            dateInput: document.querySelector('#date'),
        }
    
        let databaseInfo = {
            date: '',
        }
    
        elements.buttonDateWord.addEventListener('click', ()=>{
            changeDateWord(elements.dateTextArea.value);
        });
    
        elements.buttonAdress.addEventListener('click', ()=>{
            changeAdress(elements.adressTextArea.value);
        });
    
        elements.buttonDate.addEventListener('click', ()=>{
            changeDate(elements.dateInput.value);
        });
    
        function changeDateWord(dateWord) {
            firebase.database().ref('info/dateWord').set({
              dateWord: dateWord,
            });
        };
    
        function changeAdress(adress) {
            firebase.database().ref('info/adress').set({
              adress: adress,
            });
        };
    
        function changeDate(date) {
            firebase.database().ref('info/date').set({
              date: date,
            });
        };
    
        databaseInfo.date = firebase.database().ref('info');
        databaseInfo.date.on('value', function(snapshot) {
            elements.dateInput.value = snapshot.val().date.date;
            elements.adressTextArea.value = snapshot.val().adress.adress;
            elements.dateTextArea.value = snapshot.val().dateWord.dateWord;
        });
    }

    

})()