function showPara(val) {
    // check if the value is not empty or undefined
    if (val !== undefined && val !== "") {
      // then selelct all the p element which have a common class and add the coass which hide the element
      document.querySelectorAll(".pClass").forEach(function(item) {
        item.classList.add("hidePara");
        // remove the class hide element where the id of p matches with the selected value
        document.getElementById(val).classList.remove('hidePara')
      })
    }
  }