document.getElementById('convert').addEventListener('submit', function(event){
    event.preventDefault();

    let distance = parseFloat(document.getElementById('distance').value);
    // alert(distance);

    if(distance)
    {
        let conversion = (distance * 1000).toFixed(0);
        let answer = document.getElementById('answer');
        answer.innerHTML = `<h2>${distance} kilometers converts to ${conversion} Meters`;

    
        // let roundedConversion = conversion.toFixed(3); 
        // alert(`Your distance in kilometers is : ${conversion}`);
        //display
    }
    else
    {
        answer.innerHTML = '<h2>Please provid a valid number</h2>'
        //display error
    }
});
