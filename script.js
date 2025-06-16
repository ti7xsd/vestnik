let flipped = false;

function nextPage() {
  const page2 = document.getElementById("page2");
  if (!flipped) {
    page2.style.transform = "rotateY(0deg)";
    flipped = true;
  } else {
    page2.style.transform = "rotateY(180deg)";
    flipped = false;
  }
}

function previewImage(event, imgId) {
  const reader = new FileReader();
  reader.onload = function() {
    document.getElementById(imgId).src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
