//login fonction
var inscriptoId = document.getElementById("inscriptoId");
var connecto = document.getElementById("connecto");
var exampleModalLabel = document.getElementById("exampleModalLabel");
var connectoId = document.getElementById("connectoId");
var inscripto = document.getElementById("inscripto");

inscriptoId.addEventListener("click", function () {
  exampleModalLabel.style.display = "block";
  connecto.style.display = "none";
});

// function pour payer sur KKiapay
var payerMa = document.querySelectorAll(".payerMaformationId");
payerMa.forEach((p) => {
  p.addEventListener("click", function () {
    openKkiapayWidget({
      amount: "4500",
      position: "center",
      callback: "javascript:sendmycommandinCentremodale()",
      data: "",
      theme: "blue",
      key: "deb48fc468f8e7fcc35aee7ae721254a3427f5e5",
    });
    //la reponse du payement kkiapay
    addSuccessListener((response) => {
      console.log(response);
      var trans = response.transactionId;
      //  console.log(trans);
      if (trans) {
        localStorage.setItem("storageName", trans);
        window.location.href = "formation.html";
      } else {
        alert(`quelque chose s'est mal passé`);
      }
    });
  });
});
