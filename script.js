var qrcode = select("img") ;
var qrtext = select("textarea");
var qrbtn = select("button");

qrbtn.addEventListener("click",generateQR);

function generateQR() {
   var size = "100x100";
   var data = qrtext.value;
   //let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

   //let url = '${baseURL}?size=100x100&data=${data.value}';
   var url =`https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}`;
   qrcode.src = url; 
}

function select(el) {
   return document.querySelector(el);
}