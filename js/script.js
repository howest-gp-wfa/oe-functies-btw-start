"use strict";

var txtPrijsExcl, txtBtw, divFeedBack;

window.addEventListener('load', Initieer);

function Initieer() {
  KoppelElementen();
  ToonStandaardwaarden();
  let btnBereken = document.querySelector("#btnBereken");
  btnBereken.addEventListener("click", ToonBerekeningPrijsIncl);
}

function KoppelElementen() {
  txtPrijsExcl = document.getElementById("txtPrijsExcl");
  txtBtw = document.getElementById("txtBtw");
  divFeedBack = document.getElementById("divFeedBack");
}

function ToonStandaardwaarden() {
  txtPrijsExcl.value = '100';
  txtBtw.value = '6';
}

function ToonBerekeningPrijsIncl() {

}

function BerekenDeBtw() {

}
