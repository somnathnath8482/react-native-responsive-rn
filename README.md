# react-native-responsive-rn

Minimal responsive utility for React Native using breakpoint-based values.

---

## Features

* Breakpoint-based responsive values
* Mobile-first fallback
* Simple API (`r` and `t`)
* Works with rotation and screen resize
* Strict TypeScript support

---

## Installation

```bash
npm install react-native-responsive-rn
```

---

## Usage

### Spacing / Layout

```ts
import { useR } from 'react-native-responsive-rn';

const r = useR();

<View style={{ padding: r({ base: 10, md: 20 }) }} />
```

---

### Typography

```ts
import { useT } from 'react-native-responsive-rn';

const t = useT();

<Text style={t({ size: { base: 12, md: 16 }, line: 1.4 })}>
  Hello
</Text>
```

---

### Responsive Info

```ts
import { useResponsive } from 'react-native-responsive-rn';

const { width, breakpoint, isTablet } = useResponsive();
```

---

## Default Breakpoints

```ts
{
  xs: 0,
  sm: 360,
  md: 600,
  lg: 768,
  xl: 1024
}
```

---

## Custom Breakpoints

```ts
import { setConfig } from 'react-native-responsive-rn';

setConfig({
  breakpoints: {
    xs: 0,
    sm: 400,
    md: 700,
    lg: 900,
    xl: 1200,
  },
});
```

---

## Philosophy

* No blind scaling (like SDP)
* Responsive by breakpoints
* Minimal and predictable

---

## License

MIT
