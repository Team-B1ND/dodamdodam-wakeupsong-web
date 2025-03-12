class TextTransform {
  public ellipsis(text: string, length: number): string {
    if (text.length > length) {
      return text.slice(0, length) + "...";
    }
    return text;
  }
}

const textTransform = new TextTransform();
export default textTransform;
