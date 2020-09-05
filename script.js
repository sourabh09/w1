
var fetched_location = "";

function get_location(){
  var location = $("#location").val();

  if(location==""){
    alert("Enter your city first!")
    return false;
  }
  //alert(location);
  fetched_location = location;
  abc();
  
}

function abc(){
 var place =  fetched_location;
 $(".dummy").css("display","block");
$.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?appid=d320935067c3352386361492f27995eb&units=metric&q="+place,
      dataType: "jsonp",

                success: function(data){

                console.log(data);
                
            
        //Get condition
        var currently = data.weather[0].main;
        $('.currently').html(currently);
        //Get city & country
        var city  = data.name;
        var country = data.sys.country;
        $('.city').html("<i class='material-icons'>room</i> "+city+", "+country);
        //Get temprature
        var temprature = parseInt(data.main.temp);
        $('.temp').html(temprature+"&#176");
        //Get feels like
        var feels_like = parseInt(data.main.feels_like);
        $('.feels_like').html("Feels like "+" &#183; "+feels_like+"&#176");
        //Get humidity
        var humidity = data.main.humidity+"%";
        var wind = data.wind.speed+"km/h";
        $('.humi_wind').html("<i class='wi wi-raindrop'></i> "+humidity+'</div>'+" &#183; "+"<i class='wi wi-strong-wind'></i> "+wind+'</div>');
        

        //Get icon
        var icon = data.weather[0].icon;
        //$('.icon').html(icon);

                 switch (icon)
                  {
               
               case '01d': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/sunny.png";
               break;
               case '01n': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/sunny.png";
               break;
               case '02d': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png";
               break;
               case '02n': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png";
               break;
               case '03d': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png";
               break;
               case '03n': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png";
               break;
               case '04d': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/cloudy.png";
               break;
               case '04n': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/cloudy.png";
               break;
               case '09d': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/rain.png";
               break;
               case '09n': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/rain.png";
               case '10d': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/rain.png";
               break;
               case '10n': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/rain.png";
               case '11d': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/thunderstorms.png";
               break;
               case '11n': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/thunderstorms.png";
               case '13d': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/snow.png";
               break;
               case '13n': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/snow.png";
               case '50d': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/fog.png";
               break;
               case '50n': document.getElementById("imgthumb").src = "https://ssl.gstatic.com/onebox/weather/256/fog.png";
               break;


               default:  document.getElementById("imgthumb").src = "http://nextlink.5gbfree.com/graphweather/images/notavailable.png";
            }    

    }
    });
      //showdata()
      fetchquote_wallpaper()
      $('.mdl-spinner').css("display","none");
      $('.input_box').css("display","none");
      $('.container>.material-icons').css("display","block");
      $("body").css("background","linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('https://picsum.photos/1920/1080')");
}

function fetchquote_wallpaper(){

        $.ajax({
            url: 'https://programming-quotes-api.herokuapp.com/quotes/random/lang/en',
            
            success: function(data) {

              console.log(data);

              $('#quote').html('"'+data.en+'"'+"<br>"+"<span>"+"- "+data.author+"</span>");

              setTimeout(fetchquote_wallpaper, 30000);
              
            }
         
     })

  /*$("body").css("background-image","url('https://picsum.photos/1920/1080')");*/

}

function display_input(){

  $('.input_box').css("display","block");
}