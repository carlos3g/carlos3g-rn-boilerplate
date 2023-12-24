import { FormatterHelper } from '@app/shared/helpers/Formatter.helper';

export class InputTransformerHelper {
  public static number(input: string): number {
    const sanitizedValue = InputTransformerHelper.removeCharacters(input);
    return Number(sanitizedValue);
  }

  public static timeString(input: Date): string {
    const hours = input.getHours().toString().padStart(2, '0');
    const minutes = input.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  public static timeStringToDate(input: string): Date {
    const [hours, minutes] = input.split(':');
    const date = new Date();
    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));
    return date;
  }

  public static dateString(input: Date): string {
    const day = input.getDate().toString().padStart(2, '0');
    const month = (input.getMonth() + 1).toString().padStart(2, '0');
    const year = input.getFullYear().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
  }

  public static dateTimeString(input: Date): string {
    const day = input.getDate().toString().padStart(2, '0');
    const month = (input.getMonth() + 1).toString().padStart(2, '0');
    const year = input.getFullYear().toString().padStart(4, '0');
    const hours = input.getHours().toString().padStart(2, '0');
    const minutes = input.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  public static percentToDecimal(percent: string): number {
    const cleanedPercent = percent.replace('%', '').replace(',', '.');
    const decimal = parseFloat(cleanedPercent);
    const decimalValue = decimal / 100;
    return Number(decimalValue.toFixed(2));
  }

  public static currencyToDecimal(percent: string): number {
    const cleaned = percent.replace('R$', '').replace(',', '.');
    const decimal = parseFloat(cleaned);
    return Number(decimal.toFixed(2));
  }

  public static currency(_: string, unformatted?: string): string {
    const decimal = unformatted ? Number(InputTransformerHelper.removeCharacters(unformatted || '')) / 100 : 0;

    return FormatterHelper.formatCurrency(decimal);
  }

  public static removeCharacters(input: string): string {
    return input.replace(/\D/g, '');
  }

  public static toValidePhone(input: string): string {
    const phone = this.removeCharacters(input);
    return `+${phone}`;
  }
}
