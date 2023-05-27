const shimmer = (h?: number | string) => `
<svg width="100%" height="${
  h || "100%"
}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="100%" height="${h || "100%"}" fill="#0009dc11" />
  <rect id="r" width="100%" height="${h || "100%"}" fill="#0009ba11" />
  <animate xlink:href="#r" attributeName="x" from="-100%" to="100%" dur="1s" repeatCount="indefinite"  />
</svg>`;

const shimmer2 = (h?: number | string) => `
<svg width="100%" height="${
  h || "100%"
}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="100%" height="${h || "100%"}" fill="black" />
  <rect id="r" width="100%" height="${h || "100%"}" fill="#0f0f0f" />
  <animate xlink:href="#r" attributeName="x" from="-100%" to="100%" dur="2s" repeatCount="indefinite"  />
</svg>`;

const shimmer3 = (h?: number | string) => `
<svg width="100%" height="${
  h || "100%"
}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="100%" height="${h || "100%"}" fill="#0009dc11" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window !== "undefined" ? window.btoa(str) : "";

export const blurImage = (h?: number | string) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(h))}`;

export const stillImage = (h?: number | string) =>
  `data:image/svg+xml;base64,${toBase64(shimmer3(h))}`;

export const blurVideo = (h?: number | string) =>
  `data:image/svg+xml;base64,${toBase64(shimmer2(h))}`;

export const fileToBase64 = (file: any): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject("");
  });
