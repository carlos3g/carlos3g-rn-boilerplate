import { DateTime } from 'luxon';
import type { Address } from '@app/types';

export class FormatterHelper {
  public static formatDate(date: Date): string {
    return DateTime.fromJSDate(date).toFormat('d LLLL yyyy', { locale: 'pt-BR' });
  }

  public static formatCurrency(value: number): string {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  public static formatAddress(address: Address): string {
    let formattedAddress = `${address.street}, ${address.number}`;

    if (address.complement) {
      formattedAddress += ` - ${address.complement}`;
    }

    formattedAddress += ` - ${address.neighborhood}`;

    if (address.cityId && address.state) {
      formattedAddress += ` - ${address.cityId}/${address.state}`;
    } else if (address.cityId) {
      formattedAddress += ` - ${address.cityId}`;
    } else if (address.state) {
      formattedAddress += ` - ${address.state}`;
    }

    formattedAddress += ` - CEP ${address.postalCode}`;

    return formattedAddress;
  }
}
