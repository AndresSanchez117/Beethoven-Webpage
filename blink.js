// Make icons blink
function blink() 
{
    let arrow1 = document.querySelector('#arrow1');
    let arrow2 = document.querySelector('#arrow2');

    if(arrow1.style.visibility === 'hidden')
    {
        arrow1.style.visibility = 'visible';
        arrow2.style.visibility = 'visible';
    }
    else
    {
        arrow1.style.visibility = 'hidden';
        arrow2.style.visibility = 'hidden';
    }
}

window.setInterval(blink, 800);