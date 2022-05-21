window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let index = 0,
        chevron = document.querySelectorAll(".chevron"),
        nawCarusel = document.querySelector('.naw-carusel'),
        dotsWrap = document.querySelector('.dots'),
        image = document.querySelectorAll('.image');


        nawCarusel.addEventListener('click', function(event) {

        let tar = event.target;
        if(tar && tar.id === 'next') {
            showImage(1);
            }
        else if (tar && tar.id === 'prev') {
            showImage(-1);
            }
    });
    
    function imageLenght(i){
        i = image.length;
        for (i = 0; i < image.length; i++ ) {
            let dot = document.createElement('span');
            dot.className = "dot";
            dotsWrap.append(dot);

        }
    }
    
    

    imageLenght();

    function showImage(i) {
        let dot = document.querySelectorAll('.dot');
        index += i;
        for (i = 0; i < image.length; i++ ) {
            // let dots = document.querySelectorAll('.dot');
            image[i].style.display = "none";
        }  
        for(i = 0; i < dot.length; i++) {
            dot[i].className = dot[i].className.replace(" active", "");
        }
        if(index > image.length - 1) {
            index = 0;
        }
        if(index < 0) {
            index = image.length - 1;
        }
        image[index].style.display = "block";
        dot[index].className += " active";
    
    }
    showImage(index);
});


    
    
