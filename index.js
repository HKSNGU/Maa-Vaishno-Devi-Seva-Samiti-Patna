function generate() {
  var input1 = document.getElementById("input_name");
  var input2 = document.getElementById("input_mob");
  if (input1.value !== "" && input2.value !== "") {
    ecard();
  } else {
    alert("Input field is empty.");
  }

  $("#download_btn").click();
}
function ecard() {
  var x = document.getElementById("e-card");
  x.style.display = "block";

  var a = document.getElementById("download_btn");
  var b = document.getElementById("form_head");
  var c = document.getElementById("input_name");
  var e = document.getElementById("input_mob");
  var f = document.getElementById("input_btn");
  var g = document.getElementById("generate_btn");

  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  e.style.display = "none";
  f.style.display = "none";
  g.style.display = "none";

  // $("#download_btn").style.display = "block";
  // $("#form_head").style.display = "none";
  // $("#input_name").style.display = "none";
  // $("#input_mob").style.display = "none";
  // $("#input_img").style.display = "none";

  var name = document.getElementById("input_name").value;
  var mob = document.getElementById("input_mob").value;
  document.getElementById("user_full_name").innerHTML = name;
  document.getElementById("user_mob_num").innerHTML = mob;
  const d = new Date();
  const card_id =
    d.getDate().toString() +
    d.getHours().toString() +
    d.getMinutes().toString() +
    d.getSeconds().toString();
  document.getElementById("user_card_id").innerHTML = card_id;
}
