export default function getOperatingSystem() {
  const ua = navigator.userAgent;

  if (/android/i.test(ua)) {
    return "Android";
    // @ts-expect-error may not work
  } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    return "iOS";
  } else if (/Macintosh/i.test(ua)) {
    return "Mac OS";
  } else if (/windows nt/i.test(ua)) {
    return "Windows";
  }

  return "Unknown OS";
}

console.log(getOperatingSystem());
