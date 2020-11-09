export const year = () => {
    var data = [];
    var groupedByDecade = {};
    dataJSON(1973,2021);

    function dataJSON(min, max) {
      let c = 0;
      for (let i = min; i <= max; i++) {
        data[c] = i;
        c++;
      }
      data.forEach(function(item, i, arr) {
        let year = arr[i];
        let decade = Math.floor(year/10)*10;
        if(decade < 2000) {
          decade += '';
          let decade_sub = decade.substr(2,3);
          let sum = decade_sub+'-ые';
          groupedByDecade[sum] = $.merge(groupedByDecade[sum] || [], [year]);
        } else if(decade == 2000){
          decade += '';
          let decade_sub = decade.substr(2,3);
          let str_dec = '2k';
          groupedByDecade[str_dec] = $.merge(groupedByDecade[str_dec] || [], [year]);
        } else {
          decade += '';
          let decade_sub = decade.substr(2,3);
          let str_dec = '2k'+decade_sub ;
          groupedByDecade[str_dec] = $.merge(groupedByDecade[str_dec] || [], [year]);
        }
      });
      appendToYear('year');
    }
    function appendToYear(target) {
      var select = document.getElementById(target);

      for (let key in groupedByDecade) {
        let optg = document.createElement('optgroup');
        let arr = groupedByDecade[key];
        optg.setAttribute('label' , key);
        select.appendChild(optg);
        arr.forEach((item, i, arr) => {
          let opt = document.createElement('option');
            opt.value = item;
            opt.innerHTML = item;
            optg.appendChild(opt);
        });
      }
    }

  };
