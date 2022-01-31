"use strict";

class Calculator {
  constructor() {}

  clearF() {
    // document.querySelector("#clear").addEventListener("click", function () {
    document.querySelector("#display").value = "";
    // });
  }
  backspaceF() {
    const num = document.querySelector("#display").value.slice(0, -1);

    // document.querySelector("#backspace").addEventListener("click", function () {
    document.querySelector("#display").value = num;
    // });
  }

  percentF() {
    document.querySelector("#display").value += "%";
  }
  divF() {
    document.querySelector("#display").value += "/";
  }
  multiplyF() {
    document.querySelector("#display").value += "*";
  }
  minusF() {
    document.querySelector("#display").value += "-";
  }
  plusF() {
    document.querySelector("#display").value += "+";
  }

  zeroF() {
    document.querySelector("#display").value += "0";
  }

  dblzeroF() {
    document.querySelector("#display").value += "00";
  }
  pointF() {
    document.querySelector("#display").value += ".";
  }
  oneF() {
    if (document.querySelector("#display").value == "") {
      document.querySelector("#display").value = "1";
    } else {
      document.querySelector("#display").value =
        document.querySelector("#display").value + "1";
    }
  }

  twoF() {
    if (document.querySelector("#display").value == "") {
      document.querySelector("#display").value = "2";
    } else {
      document.querySelector("#display").value =
        document.querySelector("#display").value + "2";
    }
  }
  // three
  threeF() {
    if (document.querySelector("#display").value == "") {
      document.querySelector("#display").value = "3";
    } else {
      document.querySelector("#display").value =
        document.querySelector("#display").value + "3";
    }
  }

  fourF() {
    if (document.querySelector("#display").value == "") {
      document.querySelector("#display").value = "4";
    } else {
      document.querySelector("#display").value =
        document.querySelector("#display").value + "4";
    }
  }

  fiveF() {
    if (document.querySelector("#display").value == "") {
      document.querySelector("#display").value = "5";
    } else {
      document.querySelector("#display").value =
        document.querySelector("#display").value + "5";
    }
  }
  sixF() {
    if (document.querySelector("#display").value == "") {
      document.querySelector("#display").value = "6";
    } else {
      document.querySelector("#display").value =
        document.querySelector("#display").value + "6";
    }
  }
  sevenF() {
    if (document.querySelector("#display").value == "") {
      document.querySelector("#display").value = "7";
    } else {
      document.querySelector("#display").value =
        document.querySelector("#display").value + "7";
    }
  }
  eightF() {
    if (document.querySelector("#display").value == "") {
      document.querySelector("#display").value = "8";
    } else {
      document.querySelector("#display").value =
        document.querySelector("#display").value + "8";
    }
  }
  nineF() {
    if (document.querySelector("#display").value == "") {
      document.querySelector("#display").value = "9";
    } else {
      document.querySelector("#display").value =
        document.querySelector("#display").value + "9";
    }
  }
  equalF() {
    document.querySelector("#display").value = eval(
      document.querySelector("#display").value
    );
  }
}

const cal = new Calculator();
document.querySelector("#clear").addEventListener("click", function () {
  cal.clearF();
});
document.querySelector("#backspace").addEventListener("click", function () {
  cal.backspaceF();
});

document.querySelector("#percentile").addEventListener("click", function () {
  cal.percentF();
});
document.querySelector("#division").addEventListener("click", function () {
  cal.divF();
});
document.querySelector("#multiply").addEventListener("click", function () {
  cal.multiplyF();
});
document.querySelector("#minus").addEventListener("click", function () {
  cal.minusF();
});
document.querySelector("#plus").addEventListener("click", function () {
  cal.plusF();
});
document.querySelector("#zero").addEventListener("click", function () {
  cal.zeroF();
});
document.querySelector("#dblzero").addEventListener("click", function () {
  cal.dblzeroF();
});
document.querySelector("#point").addEventListener("click", function () {
  cal.pointF();
});
document.querySelector("#one").addEventListener("click", function () {
  cal.oneF();
});
document.querySelector("#two").addEventListener("click", function () {
  cal.twoF();
});
//three
document.querySelector("#three").addEventListener("click", function () {
  cal.threeF();
});
//four
document.querySelector("#four").addEventListener("click", function () {
  cal.fourF();
});
// five
document.querySelector("#five").addEventListener("click", function () {
  cal.fiveF();
});
// six
document.querySelector("#six").addEventListener("click", function () {
  cal.sixF();
});
// seven
document.querySelector("#seven").addEventListener("click", function () {
  cal.sevenF();
});
// eight
document.querySelector("#eight").addEventListener("click", function () {
  cal.eightF();
});
// nine
document.querySelector("#nine").addEventListener("click", function () {
  cal.nineF();
});
document.querySelector("#equal").addEventListener("click", function () {
  cal.equalF();
});
