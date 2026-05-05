
import { View, Text, StyleSheet } from 'react-native';
import { useR, useT, useResponsive } from 'react-native-responsive-rn';

export default function App() {
  const r = useR();
  const t = useT();
  const { width, breakpoint, isTablet } = useResponsive();

  return (
    <View style={[styles.container, { padding: r({ base: 10, md: 20, lg: 30,sm:44 }) }]}>
      
      <Text style={t({ size: { base: 12, md: 16, lg: 20,sm:55 }, line: 1.4 })}>
        Responsive Text
      </Text>

      <Text style={{ marginTop: 20 }}>
        Width: {width}
      </Text>

      <Text>
        Breakpoint: {breakpoint}
      </Text>

      <Text>
        isTablet: {isTablet ? 'YES' : 'NO'}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});