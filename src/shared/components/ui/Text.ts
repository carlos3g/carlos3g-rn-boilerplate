import { Theme } from '@app/packages/restyle';
import { createText } from '@shopify/restyle';

export const Text = createText<Theme>();

export type TextProps = React.ComponentProps<typeof Text>;
