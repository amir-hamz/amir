const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");
downloadBtn.addEventListener("click", e => {
  e.preventDefault();//there is a problem
  downloadBtn.innerTect = "Dowloadin file...";
  fetchFile(fileInput.value);
});
//No 
function fetchFile(url) {
    fetch(url).then(res => res.blob()).then (file =>{
      let tempUrl = createObjectURL(file)
      let aTag = document.createElement("a")
      aTag.href = tempUrl;
      aTag.download = "filename";
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove;
      URL.revokeObjectURL(tempUrl);
      downloadBtn.innerText = "Dowload File";
  }).catch(() => {
    downloadBtn.innerText = "Dowload File";
   // alert("Failed to download file!");
  });
}
//from here it works fantastic(^.*[\\\/]/, '');*/