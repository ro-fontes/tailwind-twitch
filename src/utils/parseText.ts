interface parseTextProps {
  text: string;
  max?: number;
}
export function parseText({ text, max = 18 }: parseTextProps) {
  if (text.length > max) {
    text = text.substring(0, max) + "...";
  }
  return text;
}
