import { YStack, YStackProps } from '@app/shared/components/layout/YStack';
import { Ref, forwardRef } from 'react';
import { ScrollView as RNScrollView, ScrollViewProps } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type ScrollableContainerProps = Omit<YStackProps, 'children'> & Pick<ScrollViewProps, 'contentContainerStyle'>;

const styles = { flex: 1 };

const ScrollableContainer = forwardRef(
  (props: React.PropsWithChildren<ScrollableContainerProps>, ref?: Ref<RNScrollView> | undefined) => {
    const { children, contentContainerStyle, ...rest } = props;

    return (
      <YStack flex={1} backgroundColor="background">
        <KeyboardAwareScrollView
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
          ref={ref as any}
          enableOnAndroid
          extraHeight={150}
          style={styles}
          contentContainerStyle={contentContainerStyle}
        >
          <YStack flex={1} justifyContent="center" paddingHorizontal="xl" paddingTop="m" paddingBottom="l" {...rest}>
            {children}
          </YStack>
        </KeyboardAwareScrollView>
      </YStack>
    );
  }
);

export { ScrollableContainer };
