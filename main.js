    function myFunction() {
        setTimeout(function handlers() {

            //Get modal element
            var modal = document.getElementsByClassName('modal');

            //Get open modal button
            var modalBtn = document.querySelectorAll('.content');
            //get close button
            var closeBtn = document.querySelectorAll('.closeBtn');
    
            modalBtn[0].onclick = function() {
                modal[0].style.display = "block";
            }
            closeBtn[0].onclick = function() {
                modal[0].style.display='none';
            }
            modalBtn[1].onclick = function() {
                modal[1].style.display = "block";
            }
            closeBtn[1].onclick = function() {
                modal[1].style.display='none';
            }
            modalBtn[2].onclick = function() {
                modal[2].style.display = "block";
            }
            closeBtn[2].onclick = function() {
                modal[2].style.display='none';
            }
            modalBtn[3].onclick = function() {
                modal[3].style.display = "block";
            }
            closeBtn[3].onclick = function() {
                modal[3].style.display='none';
            }
            modalBtn[4].onclick = function() {
                modal[4].style.display = "block";
            }
            closeBtn[4].onclick = function() {
                modal[4].style.display='none';
            }
            modalBtn[5].onclick = function() {
                modal[5].style.display = "block";
            }
            closeBtn[5].onclick = function() {
                modal[5].style.display='none';
            }
            modalBtn[6].onclick = function() {
                modal[6].style.display = "block";
            }
            closeBtn[6].onclick = function() {
                modal[6].style.display='none';
            } 
        }, 200);

        var days = [
            {day:"Monday",temperature:'13 <span id="C">&#8451;</span>', windDirection:'Wind direction: <span class="iconify" data-icon="wi:direction-up-right" data-inline="false"></span>', windSpeed:'10m/s', type:'Mostly Sunny <span class="iconify icon" data-icon="wi:day-sunny" data-inline="false"></span>'},
            {day:"Tuesday", temperature:'10 <span id="C">&#8451;</span>', windDirection:'Wind direction: <span class="iconify" data-icon="wi:direction-down" data-inline="false"></span>', windSpeed:'12m/s', type:'Cloudy<span class="iconify icon" data-icon="wi:cloud" data-inline="false"></span>'},
            {day:"Wednesday", temperature:'9<span id="C">&#8451;</span>',windDirection:'Wind direction: <span class="iconify" data-icon="wi:direction-down" data-inline="false"></span>', windSpeed:'13m/s',  type:'Rainy<span class="iconify icon" data-icon="wi:showers" data-inline="false"></span>'},
            {day:"Thursday", temperature:'11<span id="C">&#8451;</span>', windDirection:'Wind direction: <span class="iconify" data-icon="wi:direction-down" data-inline="false"></span>', windSpeed:'20m/s', type:'Thunderstorm<span class="iconify icon" data-icon="wi:thunderstorm" data-inline="false"></span>'},
            {day:"Friday", temperature:'8<span id="C">&#8451;</span>', windDirection: 'Wind direction: <span class="iconify" data-icon="wi:direction-left" data-inline="false"></span>', windSpeed:'15m/s', type:'Partly Sunny<span class="iconify icon" data-icon="wi:day-sunny-overcast" data-inline="false"></span>'},
            {day:"Saturday", temperature:'12<span id="C">&#8451;</span>', windDirection:'Wind direction: <span class="iconify" data-icon="wi:direction-up-right" data-inline="false"></span>', windSpeed:'10m/s', type:'Mostly Sunny<span class="iconify icon" data-icon="wi:day-sunny" data-inline="false"></span>'},
            {day:"Sunday", temperature:'14<span id="C">&#8451;</span>',windDirection:'Wind direction: <span class="iconify" data-icon="wi:direction-left" data-inline="false"></span>', windSpeed:'10m/s', type:'Mostly Sunny<span class="iconify icon" data-icon="wi:day-sunny" data-inline="false"></span>'}
        ];

    document.getElementsByClassName('dataContent')[0].innerHTML = days.map(day => {
        var code = '<div class="col-sm-12"><div class="background">'
        code += '<div class="content" id="modalBtn">'
        code += '<h2 class="day">' + day.day + '</h2>'
        code += '<h2 class="Condition">' + day.type + '</h2>'
        code += '<h2 class="Temp">' + day.temperature + '</h2>'
        code += '</div></div>'
        code += '<div id="weatherModal" class="modal"> <div class="modal-content"> <span class="closeBtn">&times;</span><div class="data">'
        code += '<h3 class="modal-day">' + day.day + '</h3>'
        code += '<h3 class="modal-Temp">' + day.temperature +'</h3>'
        code += '<h3 class=modal-Condition">' + day.type + '</h3>'
        code += '<h3 class=modal-wind-direction">' + day.windDirection +  '</h3>'
        code += '<h3 class=modal-wind-speed>' + day.windSpeed + '</h3>'
        code += '</div></div></div></div>'
        return code
    }).join('')

    }

