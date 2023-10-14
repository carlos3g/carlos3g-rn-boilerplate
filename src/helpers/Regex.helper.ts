const DIGIT = '9';
const ALPHA = 'A';
const ALPHANUM = 'S';

export class RegexHelper {
  public static toPattern(value: string, pattern: string): string {
    const resultArray = pattern.split('');
    const values = value.split('');
    let index = 0;
    let i = 0;

    for (i; i < resultArray.length; i++) {
      if (index >= values.length) {
        if (resultArray.length === values.length) {
          return resultArray.join('');
        }

        break;
      }

      const charMatchDigit = resultArray[i] === DIGIT && values[index].match(/[0-9]/);
      const charMatchAlpha = resultArray[i] === ALPHA && values[index].match(/[a-zA-Z]/);
      const charMatchAlphanum = resultArray[i] === ALPHANUM && values[index].match(/[0-9a-zA-Z]/);

      if (charMatchDigit || charMatchAlpha || charMatchAlphanum) {
        resultArray[i] = values[index];
        index++;
        // eslint-disable-next-line no-continue
        continue;
      }

      if (resultArray[i] === DIGIT || resultArray[i] === ALPHA || resultArray[i] === ALPHANUM) {
        return resultArray.slice(0, i).join('');
      }

      if (resultArray[i] === values[index]) {
        index++;
        // eslint-disable-next-line no-continue
        continue;
      }
    }

    return resultArray.slice(0, i).join('');
  }
}
