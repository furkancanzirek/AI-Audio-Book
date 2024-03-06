function getEdgeColors(img) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  // Sol kenar renkleri
  const leftEdge = ctx.getImageData(0, 0, 1, img.height);
  const leftColor = averageColor(leftEdge);

  // Sağ kenar renkleri
  const rightEdge = ctx.getImageData(img.width - 1, 0, 1, img.height);
  const rightColor = averageColor(rightEdge);

  const topEdge = ctx.getImageData(0, 0, img.width, 1);
  const topColor = averageColor(topEdge);

  const bottomEdge = ctx.getImageData(0, img.height - 1, img.width, 1);
  const bottomColor = averageColor(bottomEdge);

  return { leftColor, rightColor , topColor, bottomColor};
}

function averageColor(data) {
  let r = 0,
    g = 0,
    b = 0;
  for (let i = 0; i < data.data.length; i += 4) {
    r += data.data[i];
    g += data.data[i + 1];
    b += data.data[i + 2];
  }
  r = Math.round(r / (data.data.length / 4));
  g = Math.round(g / (data.data.length / 4));
  b = Math.round(b / (data.data.length / 4));
  return `rgb(${r}, ${g}, ${b})`;
}

export default function getImageGradient(img) {
  return getEdgeColors(img);
}
