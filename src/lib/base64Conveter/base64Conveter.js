function base64Conveter(url, callback) {
  const img = new Image();
  img.crossOrigin = "anonymous"; // Needed for CORS
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const base64 = canvas.toDataURL("image/png"); // You can change format
    callback(base64);
  };
  img.src = url;
}

export default base64Conveter;
