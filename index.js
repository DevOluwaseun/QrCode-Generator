const input = document.getElementsByTagName("input")[0];
const generateBtn = document.getElementsByClassName("generate-btn")[0];
const downloadBtn = document.getElementsByClassName("download-btn")[0];
const shareBtn = document.getElementsByClassName("share-btn")[0];

const urlContainer = document.getElementsByClassName("url-container")[0];

const qrcodeContainer = document.getElementsByClassName("qrcode-container")[0];

// Event Listener
generateBtn.addEventListener("click", generateQrcode);

downloadBtn.addEventListener("click", download);

shareBtn.addEventListener("click", share);

// Generate Qr Code
function generateQrcode(e) {
  e.preventDefault();

  if (input.value) {
    document.getElementById("qrcode").innerHTML = "";
    const qrCode = new QRCode(document.getElementById("qrcode"), {
      text: input.value,
      width: 210,
      height: 210,
    });
    urlContainer.classList.add("hidden");
    qrcodeContainer.classList.remove("hidden");
  }
}

// Download the QrCode
function download(e) {
  e.preventDefault();

  const qrcodeImg = document.querySelector("#qrcode img");
  const qrcodeLink = qrcodeImg.src;
  const anchor = document.createElement("a");
  anchor.href = qrcodeLink;
  anchor.download = "qrcode";

  anchor.click();
}

// Copy the QrCode Png link to the clipboard
function share(e) {
  e.preventDefault();
  const qrcodeImg = document.querySelector("#qrcode img");
  const qrcodeLink = qrcodeImg.src;

  navigator.clipboard.writeText(qrcodeLink);
}
