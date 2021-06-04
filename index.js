


let finalTime;


startQuiz = () => {
    document.getElementById('landing').setAttribute('style', 'display: none');
    document.getElementById('high-scores').setAttribute('style', 'display: none');
    document.getElementById('timer-container').setAttribute('style', 'display: block');
    document.getElementById('q1').setAttribute('style', 'display: block');


    let initTime = 60;

    setInterval(function() {
        initTime = initTime - 1;
        if (initTime >= 0) {
            document   
                .getElementById('timer')
                .textContent = String(initTime);
            
            loseTime = () => {
                initTime = initTime - 10;
                return initTime;
            }

            toQ2 = () => {
                document.getElementById('q1').setAttribute('style', 'display: none');
                document.getElementById('q2').setAttribute('style', 'display: block');
            }

            toQ3 = () => {
                document.getElementById('q2').setAttribute('style', 'display: none');
                document.getElementById('q3').setAttribute('style', 'display: block');
            }

            toQ4 = () => {
                document.getElementById('q3').setAttribute('style', 'display: none');
                document.getElementById('q4').setAttribute('style', 'display: block');
            }

            toQ5 = () => {
                document.getElementById('q4').setAttribute('style', 'display: none');
                document.getElementById('q5').setAttribute('style', 'display: block');
            }

            endQuiz = () => {
                document.getElementById('q5').setAttribute('style', 'display: none');
                document.getElementById('save-hs').setAttribute('style', 'display: block');
                document.getElementById('timer-container').setAttribute('style', 'display: none');
                document.getElementById('high-scores').setAttribute('style', 'display: block');

                
                finalTime = initTime;

                initTime = 100000000;
                console.log(initTime);
                
            }
            

            saveHS = () => {
                localStorage.setItem(document.getElementById('hs-name').value, String(finalTime));
                viewHS();
            }
        }

        else if (initTime < 0) {

           

            
            document.getElementById('timer-container').setAttribute('style', 'display: none');
            document.getElementById('high-scores').setAttribute('style', 'display: block');
            document.getElementById('failed').setAttribute('style', 'display: block');
            document.getElementById('q1').setAttribute('style', 'display: none');
            document.getElementById('q2').setAttribute('style', 'display: none');
            document.getElementById('q3').setAttribute('style', 'display: none');
            document.getElementById('q4').setAttribute('style', 'display: none');
            document.getElementById('q5').setAttribute('style', 'display: none');
            
        
            




        }



        console.log(initTime);
    }, 1000)



}





viewHS = () => {

    document.getElementById('view-hs').setAttribute('style', 'display: block');
    document.getElementById('start-button').setAttribute('style', 'display: none');
    document.getElementById('landing').setAttribute('style', 'display: none');
    document.getElementById('q1').setAttribute('style', 'display: none');
    document.getElementById('q2').setAttribute('style', 'display: none');
    document.getElementById('q3').setAttribute('style', 'display: none');
    document.getElementById('q4').setAttribute('style', 'display: none');
    document.getElementById('q5').setAttribute('style', 'display: none');
    document.getElementById('failed').setAttribute('style', 'display: none');
    document.getElementById('save-hs').setAttribute('style', 'display: none');
    

    for (let i = 0; i < localStorage.length; i++) {
        let hsSpan = document.createElement('h3');
        hsSpan.innerText = `${localStorage.key(i)}: ${localStorage.getItem(localStorage.key(i))}\n`;
        hsSpan.className = 'hs';
        document.getElementById('view-hs').appendChild(hsSpan);
    }

    // document.getElementById('view-hs').appendChild(document.createElement('button', {onclick: location.reload()}))

    let playAgain = document.createElement('button');
    playAgain.innerText = 'Play Again';
    playAgain.setAttribute('onclick', 'location.reload()');
    playAgain.setAttribute('id', 'play-again-btn');
    document.getElementById('view-hs').appendChild(playAgain);

}


