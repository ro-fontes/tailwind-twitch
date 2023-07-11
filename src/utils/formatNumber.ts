export function formatNumber(number: number) {
  if (number >= 1000) {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixNum = Math.floor(("" + number).length / 3);
    let shortValue = parseFloat(
      (suffixNum != 0 ? number / Math.pow(1000, suffixNum) : number).toFixed(1)
    );
    if (shortValue % 1 !== 0) {
      return shortValue + suffixes[suffixNum];
    }
    return shortValue.toString().replace(".", "") + suffixes[suffixNum];
  }
  return number.toFixed(1);
}
