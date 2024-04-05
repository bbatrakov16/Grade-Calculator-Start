// CS10 Grade Calculator

document.getElementById("btn").addEventListener("click", btncalc);

function btncalc() {
  let mrk1 = +document.getElementById("mrk-1").value;
  let mrk2 = +document.getElementById("mrk-2").value;
  let mrk3 = +document.getElementById("mrk-3").value;
  let mrk4 = +document.getElementById("mrk-4").value;
  let mrk5 = +document.getElementById("mrk-5").value;

  let avGrade = (mrk1 + mrk2 + mrk3 + mrk4 + mrk5) / 5;

  document.getElementById("result").innerHTML = avGrade;
}
