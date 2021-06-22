var temperature = [
    { district: "tvm", temprature: 36 },
    { district: "kollam", temprature: 27 },
    { district: "kottayam", temprature: 24 },
    { district: "ekm", temprature: 27 },
    { district: "tsr", temprature: 25 },
    { district: "pkd", temprature: 30 },
    { district: "tvm", temprature: 27 },
    { district: "kollam", temprature: 25 },
    { district: "kottayam", temprature: 28 },
    { district: "ekm", temprature: 29 },
    { district: "tsr", temprature: 30 },
    { district: "pkd", temprature: 18 },
]

var weather = {};
for (let data of temperature) {
    let district = data["district"];
    let temp = data["temprature"];
    //console.log(district);
    //console.log(temp);
    //console.log(weather);
    if (district in weather) {
        let oldTemp = weather[district];
        if (oldTemp < temp) {
            weather[district] = temp;
        }
        else {
            weather[district] = oldTemp;
        }

    }
    else {
        weather[district] = temp;
    }
}
console.log(weather);

//key value
//tvm 25


//Task

//sort weather according to temp desc
function compare(val1, val2){
    
    if(val1.temprature < val2.temprature){  //
            return -1;
    
    }else if(val1.temprature > val2.temprature){
            return 1;
    
    }else{
            return 0;
    }
}
console.log(temperature.sort(compare));



// high temp dist


