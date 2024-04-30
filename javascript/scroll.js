jan = document.getElementById("jan-fill");
feb = document.getElementById("feb-fill");
mar = document.getElementById("mar-fill");
apr = document.getElementById("apr-fill");
may = document.getElementById("may-fill");
june = document.getElementById("june-fill");
july = document.getElementById("july-fill");
aug = document.getElementById("aug-fill");
sept = document.getElementById("sept-fill");
oct = document.getElementById("oct-fill");
nov = document.getElementById("nov-fill");
dec = document.getElementById("dec-fill");

box = document.getElementById("box");
calendar = document.getElementById("calendar");
backgroundFill = document.getElementById('backgroundFill');

var interiorchecker = 0;//1=big, 0=small
var globalchecker = 0;

var myScrollFunc = function () {
    var y = window.scrollY;
    if(globalchecker==0){
        if((y<=600)&&(interiorchecker==1)){
            jan.classList.remove("active");
            box.classList.add("box-animation-up");
            box.classList.remove("box-animation-down");

            calendar.classList.add("calendar-animation-up");
            calendar.classList.remove("calendar-animation-down");
            backgroundFill.classList.add("background-fill-up");
            backgroundFill.classList.remove("background-fill-down");

            interiorchecker=0;
        }

        if((y<=600)&&(interiorchecker!=0)){
            jan.classList.remove("active");
            box.classList.add("box-animation-up");

            calendar.classList.add("calendar-animation-up");
            backgroundFill.classList.add("background-fill-up");
            backgroundFill.classList.remove("background-fill-down");

            interiorchecker=0;
        }

        if (y>=601) {
            interiorchecker=1;
            box.classList.remove("box-animation-up");
            box.classList.add("box-animation-down");

            calendar.classList.remove("calendar-animation-up");
            calendar.classList.add("calendar-animation-down");

            backgroundFill.classList.add("background-fill-down");

            jan.classList.add("active");
            feb.classList.remove("active");
            mar.classList.remove("active");
            apr.classList.remove("active");
            may.classList.remove("active");
            june.classList.remove("active");
            july.classList.remove("active");
            aug.classList.remove("active");
            sept.classList.remove("active");
            oct.classList.remove("active");
            nov.classList.remove("active");
            dec.classList.remove("active");
        }
        if (y>=1100) {
            jan.classList.remove("active");
            feb.classList.add("active");
            mar.classList.remove("active");
            apr.classList.remove("active");
            may.classList.remove("active");
            june.classList.remove("active");
            july.classList.remove("active");
            aug.classList.remove("active");
            sept.classList.remove("active");
            oct.classList.remove("active");
            nov.classList.remove("active");
            dec.classList.remove("active");
        }
        if (y>=1900){
            jan.classList.remove("active");
            feb.classList.remove("active");
            mar.classList.add("active");
            apr.classList.remove("active");
            may.classList.remove("active");
            june.classList.remove("active");
            july.classList.remove("active");
            aug.classList.remove("active");
            sept.classList.remove("active");
            oct.classList.remove("active");
            nov.classList.remove("active");
            dec.classList.remove("active");
        }
        if (y>=2350){
            jan.classList.remove("active");
            feb.classList.remove("active");
            mar.classList.remove("active");
            apr.classList.add("active");
            may.classList.remove("active");
            june.classList.remove("active");
            july.classList.remove("active");
            aug.classList.remove("active");
            sept.classList.remove("active");
            oct.classList.remove("active");
            nov.classList.remove("active");
            dec.classList.remove("active");
        }
        if (y>=3000){
            jan.classList.remove("active");
            feb.classList.remove("active");
            mar.classList.remove("active");
            apr.classList.remove("active");
            may.classList.add("active");
            june.classList.remove("active");
            july.classList.remove("active");
            aug.classList.remove("active");
            sept.classList.remove("active");
            oct.classList.remove("active");
            nov.classList.remove("active");
            dec.classList.remove("active");
        }
        if (y>=3300){
            jan.classList.remove("active");
            feb.classList.remove("active");
            mar.classList.remove("active");
            apr.classList.remove("active");
            may.classList.remove("active");
            june.classList.add("active");
            july.classList.remove("active");
            aug.classList.remove("active");
            sept.classList.remove("active");
            oct.classList.remove("active");
            nov.classList.remove("active");
            dec.classList.remove("active");
        }
        if (y>=3600){
            jan.classList.remove("active");
            feb.classList.remove("active");
            mar.classList.remove("active");
            apr.classList.remove("active");
            may.classList.remove("active");
            june.classList.remove("active");
            july.classList.add("active");
            aug.classList.remove("active");
            sept.classList.remove("active");
            oct.classList.remove("active");
            nov.classList.remove("active");
            dec.classList.remove("active");
        }
        if (y>=4100){
            jan.classList.remove("active");
            feb.classList.remove("active");
            mar.classList.remove("active");
            apr.classList.remove("active");
            may.classList.remove("active");
            june.classList.remove("active");
            july.classList.remove("active");
            aug.classList.add("active");
            sept.classList.remove("active");
            oct.classList.remove("active");
            nov.classList.remove("active");
            dec.classList.remove("active");
        }
        if (y>=4600){
            jan.classList.remove("active");
            feb.classList.remove("active");
            mar.classList.remove("active");
            apr.classList.remove("active");
            may.classList.remove("active");
            june.classList.remove("active");
            july.classList.remove("active");
            aug.classList.remove("active");
            sept.classList.add("active");
            oct.classList.remove("active");
            nov.classList.remove("active");
            dec.classList.remove("active");
        }
        if (y>=4900){
            jan.classList.remove("active");
            feb.classList.remove("active");
            mar.classList.remove("active");
            apr.classList.remove("active");
            may.classList.remove("active");
            june.classList.remove("active");
            july.classList.remove("active");
            aug.classList.remove("active");
            sept.classList.remove("active");
            oct.classList.add("active");
            nov.classList.remove("active");
            dec.classList.remove("active");
        }
        if (y>=5450){
            jan.classList.remove("active");
            feb.classList.remove("active");
            mar.classList.remove("active");
            apr.classList.remove("active");
            may.classList.remove("active");
            june.classList.remove("active");
            july.classList.remove("active");
            aug.classList.remove("active");
            sept.classList.remove("active");
            oct.classList.remove("active");
            nov.classList.add("active");
            dec.classList.remove("active");
        }

        if (y>=5800){
            jan.classList.remove("active");
            feb.classList.remove("active");
            mar.classList.remove("active");
            apr.classList.remove("active");
            may.classList.remove("active");
            june.classList.remove("active");
            july.classList.remove("active");
            aug.classList.remove("active");
            sept.classList.remove("active");
            oct.classList.remove("active");
            nov.classList.remove("active");
            dec.classList.add("active");
        }

        if (y>=7000){
            jan.classList.remove("active");
            feb.classList.remove("active");
            mar.classList.remove("active");
            apr.classList.remove("active");
            may.classList.remove("active");
            june.classList.remove("active");
            july.classList.remove("active");
            aug.classList.remove("active");
            sept.classList.remove("active");
            oct.classList.remove("active");
            nov.classList.remove("active");
            dec.classList.remove("active");

            // box.classList.remove("box-animation-down");
            // box.classList.add("box-animation-up");

            // calendar.classList.remove("calendar-animation-down");
            // calendar.classList.add("calendar-animation-up");
            // checker = 1;
        }
    }

    // if((y<=7000) && (checker == 1)){
    //     box.classList.remove("box-animation-up");
    //     box.classList.add("box-animation-down");

    //     calendar.classList.remove("calendar-animation-up");
    //     calendar.classList.add("calendar-animation-down");
    //     checker = 0;
    // }
};

window.addEventListener("scroll", myScrollFunc);
