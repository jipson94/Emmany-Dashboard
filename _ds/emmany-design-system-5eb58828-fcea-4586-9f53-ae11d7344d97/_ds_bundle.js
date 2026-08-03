/* @ds-bundle: {"format":4,"namespace":"EmmanyDesignSystem_5eb588","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"c3030da50321","components/feedback/Alert.jsx":"4e99b2ce37a5","components/feedback/Badge.jsx":"9f655683be08","components/forms/Button.jsx":"4f2e0c4563ff","components/forms/Checkbox.jsx":"e58f65a8694c","components/forms/IconButton.jsx":"99bb8f8b371a","components/forms/Input.jsx":"3b1308bf66e9","components/forms/Select.jsx":"2ee54001fbec","components/forms/Switch.jsx":"da13e1f36b23","components/surfaces/Card.jsx":"b7a32fc27db2","components/surfaces/StatCard.jsx":"204a5d21e1eb","ui_kits/website/components/layout.jsx":"131b9d05e29b","ui_kits/website/pages/Contact.jsx":"90e158878627","ui_kits/website/pages/Countries.jsx":"03676b5c5585","ui_kits/website/pages/Developers.jsx":"a9595971999d","ui_kits/website/pages/Documentation.jsx":"4c7a36d6ca6d","ui_kits/website/pages/Gateway.jsx":"8820cb5f3a81","ui_kits/website/pages/Home.jsx":"f4b26e32050b","ui_kits/website/pages/Pricing.jsx":"3aef0d77dd91","ui_kits/website/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EmmanyDesignSystem_5eb588 = window.EmmanyDesignSystem_5eb588 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Emmany lockup. Renders the brand mark (image) + "Emmany" wordmark in Montserrat.
 * Pass `markSrc` with the correct relative path to assets/emmany-mark-trim.png.
 */
function Logo({
  markSrc = 'assets/emmany-mark-trim.png',
  showWordmark = true,
  showMark = true,
  product,
  tone = 'dark',
  size = 40,
  style,
  ...rest
}) {
  const wordColor = tone === 'light' ? '#ffffff' : 'var(--navy-900)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.28,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), showMark && /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "Emmany",
    style: {
      height: size,
      width: 'auto',
      display: 'block'
    }
  }), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: size * 0.22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.82,
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: '-0.02em',
      color: wordColor,
      lineHeight: 1
    }
  }, "Emmany"), product && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-300)',
      fontWeight: 300,
      fontSize: size * 0.8,
      lineHeight: 1
    }
  }, "|"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.7,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '-0.01em',
      color: 'var(--color-primary)',
      lineHeight: 1
    }
  }, product))));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: 'var(--blue-50)',
    bd: 'var(--blue-100)',
    accent: 'var(--color-primary)',
    fg: 'var(--navy-800)'
  },
  success: {
    bg: 'var(--success-soft)',
    bd: '#bfe9d8',
    accent: 'var(--success)',
    fg: '#0a3d2e'
  },
  warning: {
    bg: 'var(--warning-soft)',
    bd: '#f4dca6',
    accent: 'var(--warning)',
    fg: '#5c3d00'
  },
  danger: {
    bg: 'var(--danger-soft)',
    bd: '#f3c2c4',
    accent: 'var(--danger)',
    fg: '#5c1517'
  }
};
function Alert({
  title,
  children,
  tone = 'info',
  icon,
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      border: `1px solid ${t.bd}`,
      fontFamily: 'var(--font-sans)',
      color: t.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: t.accent,
      flexShrink: 0,
      marginTop: 1
    }
  }, icon || /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: t.accent,
      padding: 0,
      display: 'flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-700)',
    bd: 'var(--gray-200)'
  },
  brand: {
    bg: 'var(--blue-50)',
    fg: 'var(--blue-700)',
    bd: 'var(--blue-100)'
  },
  accent: {
    bg: 'var(--cyan-50)',
    fg: 'var(--cyan-700)',
    bd: 'var(--cyan-100)'
  },
  success: {
    bg: 'var(--success-soft)',
    fg: '#00795a',
    bd: '#bfe9d8'
  },
  warning: {
    bg: 'var(--warning-soft)',
    fg: '#8a5a00',
    bd: '#f4dca6'
  },
  danger: {
    bg: 'var(--danger-soft)',
    fg: '#b4272b',
    bd: '#f3c2c4'
  }
};
const SOLID = {
  neutral: {
    bg: 'var(--navy-900)',
    fg: '#fff'
  },
  brand: {
    bg: 'var(--color-primary)',
    fg: '#fff'
  },
  accent: {
    bg: 'var(--color-accent)',
    fg: 'var(--navy-900)'
  },
  success: {
    bg: 'var(--success)',
    fg: '#fff'
  },
  warning: {
    bg: 'var(--warning)',
    fg: 'var(--navy-900)'
  },
  danger: {
    bg: 'var(--danger)',
    fg: '#fff'
  }
};
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  dot = false,
  style,
  ...rest
}) {
  const t = solid ? SOLID[tone] || SOLID.neutral : TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.01em',
      lineHeight: 1.4,
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg,
      border: solid ? 'none' : `1px solid ${t.bd}`,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: '0.875rem',
    padding: '0 14px',
    height: 36,
    gap: 6
  },
  md: {
    fontSize: '0.9375rem',
    padding: '0 20px',
    height: 44,
    gap: 8
  },
  lg: {
    fontSize: '1.0625rem',
    padding: '0 28px',
    height: 54,
    gap: 10
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-on-primary)',
    border: '1px solid var(--color-primary)',
    boxShadow: 'var(--shadow-brand)'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--text-on-accent)',
    border: '1px solid var(--color-accent)',
    boxShadow: 'var(--shadow-accent)'
  },
  secondary: {
    background: 'var(--navy-900)',
    color: '#fff',
    border: '1px solid var(--navy-900)',
    boxShadow: 'var(--shadow-sm)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1.5px solid var(--border-default)',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '1px solid transparent',
    boxShadow: 'none'
  }
};
const HOVER = {
  primary: 'var(--color-primary-hover)',
  accent: 'var(--color-accent-strong)',
  secondary: 'var(--navy-800)',
  outline: 'var(--blue-50)',
  ghost: 'var(--gray-100)'
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const hoverBg = HOVER[variant];
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--tracking-tight)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    transition: 'var(--transition-base)',
    opacity: disabled ? 0.45 : 1,
    transform: hover && !disabled ? 'translateY(-1px)' : 'none',
    ...v,
    ...(hover && !disabled ? {
      background: hoverBg,
      borderColor: variant === 'outline' ? 'var(--color-primary)' : hoverBg
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: base,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const reactId = React.useId();
  const cbId = id || reactId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--color-primary)' : '#fff',
      border: `1.5px solid ${on ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      transition: 'var(--transition-base)',
      color: '#fff'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 36,
  md: 44,
  lg: 54
};
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  'aria-label': ariaLabel,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff',
      border: '1px solid var(--color-primary)'
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--navy-900)',
      border: '1px solid var(--color-accent)'
    },
    outline: {
      background: '#fff',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid transparent'
    }
  };
  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    accent: 'var(--color-accent-strong)',
    outline: 'var(--gray-100)',
    ghost: 'var(--gray-100)'
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-base)',
      opacity: disabled ? 0.45 : 1,
      padding: 0,
      ...v,
      ...(hover && !disabled ? {
        background: hoverBg[variant]
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  iconLeft,
  size = 'md',
  id,
  style,
  disabled,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const inputId = id || reactId;
  const heights = {
    sm: 38,
    md: 46,
    lg: 54
  };
  const h = heights[size] || heights.md;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--color-primary)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 14px',
      background: disabled ? 'var(--gray-100)' : '#fff',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${borderColor}`,
      boxShadow: focus ? error ? '0 0 0 3px var(--danger-soft)' : 'var(--ring)' : 'none',
      transition: 'var(--transition-base)',
      opacity: disabled ? 0.6 : 1
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      height: '100%',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  size = 'md',
  id,
  style,
  disabled,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const selectId = id || reactId;
  const heights = {
    sm: 38,
    md: 46,
    lg: 54
  };
  const h = heights[size] || heights.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: h
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: '100%',
      padding: '0 40px 0 14px',
      appearance: 'none',
      fontFamily: 'inherit',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: disabled ? 'var(--gray-100)' : '#fff',
      borderRadius: 'var(--radius-md)',
      border: `1.5px solid ${focus ? 'var(--color-primary)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'var(--transition-base)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      outline: 'none'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled,
  size = 'md',
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const dims = size === 'sm' ? {
    w: 36,
    h: 20,
    k: 14
  } : {
    w: 46,
    h: 26,
    k: 20
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: dims.w,
      height: dims.h,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--color-primary)' : 'var(--gray-300)',
      transition: 'var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (dims.h - dims.k) / 2,
      left: on ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'var(--transition-base)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  elevated = false,
  interactive = false,
  accent = false,
  padding = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-subtle)',
      padding: pads[padding] ?? pads.md,
      boxShadow: hover ? 'var(--shadow-lg)' : elevated ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'var(--transition-base)',
      cursor: interactive ? 'pointer' : 'default',
      overflow: 'hidden',
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'var(--gradient-brand)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  value,
  label,
  delta,
  deltaTone = 'success',
  icon,
  dark = false,
  style,
  ...rest
}) {
  const fg = dark ? '#fff' : 'var(--text-strong)';
  const muted = dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  const deltaColors = {
    success: 'var(--success)',
    danger: 'var(--danger)',
    neutral: muted
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 'var(--space-6)',
      background: dark ? 'var(--surface-inverse)' : 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: dark ? '1px solid var(--navy-700)' : '1px solid var(--border-subtle)',
      boxShadow: dark ? 'none' : 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: dark ? 'rgba(255,255,255,0.08)' : 'var(--blue-50)',
      color: 'var(--color-primary)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-3xl)',
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: 'var(--tracking-tight)',
      color: fg,
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: muted
    }
  }, label), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      color: deltaColors[deltaTone]
    }
  }, delta)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components/layout.jsx
try { (() => {
// Shared website chrome: Icon, Container, Nav, Footer, StatusBadge, i18n, Particles, Hero.
const {
  useState,
  useEffect,
  useRef
} = React;
const MARK = '../../assets/emmany-mark-trim.png';

/* ---------------- i18n (FR / EN) ---------------- */
const I18N = window.__EM_I18N = window.__EM_I18N || {
  lang: 'fr',
  subs: new Set()
};
try {
  I18N.lang = localStorage.getItem('em-lang') || 'fr';
} catch (e) {}
function emSetLang(l) {
  I18N.lang = l;
  try {
    localStorage.setItem('em-lang', l);
  } catch (e) {}
  I18N.subs.forEach(f => f());
}
function useLang() {
  const [, r] = useState(0);
  useEffect(() => {
    const f = () => r(x => x + 1);
    I18N.subs.add(f);
    return () => I18N.subs.delete(f);
  }, []);
  return I18N.lang;
}
function t(fr, en) {
  return I18N.lang === 'en' ? en != null ? en : fr : fr;
}

/* ---------------- Particles (canvas) ---------------- */
function Particles({
  color = 'var(--cyan-400)',
  count = 46,
  connect = true,
  opacity = 0.5,
  speed = 0.35
}) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !canvas.parentElement) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0,
      h = 0,
      raf,
      parts = [];
    const probe = document.createElement('span');
    probe.style.color = color;
    probe.style.display = 'none';
    document.body.appendChild(probe);
    const rgb = getComputedStyle(probe).color.match(/\d+/g) || [1, 252, 233];
    document.body.removeChild(probe);
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const size = () => {
      const r = canvas.parentElement.getBoundingClientRect();
      w = canvas.width = Math.max(1, r.width * dpr);
      h = canvas.height = Math.max(1, r.height * dpr);
    };
    const init = () => {
      parts = Array.from({
        length: count
      }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - .5) * speed * dpr,
        vy: (Math.random() - .5) * speed * dpr,
        r: (Math.random() * 1.8 + 0.9) * dpr
      }));
    };
    const max = 118 * dpr;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 6.29);
        ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity})`;
        ctx.fill();
      }
      if (connect) for (let i = 0; i < parts.length; i++) for (let j = i + 1; j < parts.length; j++) {
        const a = parts[i],
          b = parts[j],
          dx = a.x - b.x,
          dy = a.y - b.y,
          d = Math.hypot(dx, dy);
        if (d < max) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity * 0.16 * (1 - d / max)})`;
          ctx.lineWidth = dpr;
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    size();
    init();
    if (reduce) {
      draw();
      cancelAnimationFrame(raf);
    } else draw();
    let ro;
    try {
      ro = new ResizeObserver(() => {
        size();
        init();
      });
      ro.observe(canvas.parentElement);
    } catch (e) {}
    return () => {
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
    };
  }, [color, count, connect, opacity, speed]);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    }
  });
}

/* ---------------- Hero (colored, with particles) ---------------- */
const HERO_TONES = {
  navy: {
    bg: 'linear-gradient(135deg,#041833 0%,#0a2244 46%,#0035c0 130%)',
    particle: 'var(--cyan-400)',
    mode: 'light'
  },
  blue: {
    bg: 'linear-gradient(135deg,#0035c0 0%,#0042ec 52%,#041833 135%)',
    particle: 'var(--cyan-300)',
    mode: 'light'
  },
  cyan: {
    bg: 'linear-gradient(135deg,#e2fffb 0%,#eaf0fe 100%)',
    particle: 'var(--cyan-500)',
    mode: 'dark'
  },
  sky: {
    bg: 'linear-gradient(135deg,#eaf0fe 0%,#e2fffb 100%)',
    particle: 'var(--blue-400)',
    mode: 'dark'
  },
  teal: {
    bg: 'linear-gradient(135deg,#d6fff8 0%,#cdd9fd 130%)',
    particle: 'var(--cyan-600)',
    mode: 'dark'
  },
  mint: {
    bg: 'linear-gradient(135deg,#e2fff7 0%,#e9fffb 50%,#eafbff 100%)',
    particle: 'var(--cyan-600)',
    mode: 'dark'
  }
};
function Hero({
  tone = 'navy',
  children,
  style,
  connect = true
}) {
  const c = HERO_TONES[tone] || HERO_TONES.navy;
  const light = c.mode === 'light';
  return /*#__PURE__*/React.createElement("section", {
    className: 'em-hero em-hero-' + c.mode,
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: c.bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Particles, {
    color: c.particle,
    opacity: light ? 0.55 : 0.42,
    count: light ? 52 : 40,
    connect: connect
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: light ? 'radial-gradient(1000px 420px at 78% -60px, rgba(1,252,233,.18), transparent)' : 'radial-gradient(1000px 420px at 80% -60px, rgba(0,66,236,.12), transparent)'
    }
  }), light && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -80,
      bottom: -120,
      width: 320,
      height: 320,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(1,252,233,.28),transparent 68%)',
      filter: 'blur(10px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, children));
}
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    if (window.lucide) window.lucide.createIcons();
    const svg = el.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('stroke-width', strokeWidth);
      svg.style.display = 'block';
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      color,
      ...style
    }
  });
}
function useLucide(dep) {
  useEffect(() => {
    if (!window.lucide) return;
    window.lucide.createIcons();
    document.querySelectorAll('i[data-stroke] svg').forEach(svg => svg.setAttribute('stroke-width', svg.parentElement.getAttribute('data-stroke')));
  }, [dep]);
}
function useCountUp(target, {
  duration = 2400,
  decimals = 0
} = {}) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf,
      started = false;
    const run = () => {
      const t0 = performance.now();
      const tick = t => {
        const p = Math.min(1, (t - t0) / duration);
        const e = 1 - Math.pow(1 - p, 3);
        setVal(target * e);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting && !started) {
        started = true;
        run();
        io.disconnect();
      }
    }), {
      threshold: 0.3,
      root: document.getElementById('site-scroll')
    });
    io.observe(node);
    const rect = node.getBoundingClientRect();
    if (!started && rect.top < (window.innerHeight || 900) && rect.bottom > 0) {
      started = true;
      run();
      io.disconnect();
    }
    const fb = setTimeout(() => {
      if (!started) {
        started = true;
        run();
        io.disconnect();
      }
    }, 600);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(fb);
    };
  }, [target]);
  return [ref, val];
}
function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  style
}) {
  const [ref, v] = useCountUp(value, {
    decimals
  });
  const txt = v.toLocaleString('fr-FR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).replace(/\u202f/g, ',');
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: style
  }, prefix, txt, suffix);
}
const Container = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: 'var(--container-xl)',
    margin: '0 auto',
    padding: '0 24px',
    boxSizing: 'border-box',
    ...style
  }
}, children);
const Eyebrow = ({
  children,
  tone = 'primary',
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: '.12em',
    textTransform: 'uppercase',
    color: tone === 'light' ? 'var(--cyan-400)' : 'var(--color-primary)',
    ...style
  }
}, children);
const STATUS = {
  actif: {
    label: () => t('Actif', 'Active'),
    bg: 'var(--success-soft)',
    fg: '#00795a'
  },
  bientot: {
    label: () => t('Bientôt disponible', 'Coming soon'),
    bg: 'var(--blue-50)',
    fg: 'var(--blue-700)'
  },
  maintenance: {
    label: () => t('En maintenance', 'Maintenance'),
    bg: 'var(--warning-soft)',
    fg: '#8a5a00'
  },
  sandbox: {
    label: () => t('Sandbox uniquement', 'Sandbox only'),
    bg: '#fde7d3',
    fg: '#b45309'
  }
};
function StatusBadge({
  kind,
  children
}) {
  const s = STATUS[kind] || STATUS.actif;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      background: s.bg,
      color: s.fg,
      whiteSpace: 'nowrap'
    }
  }, children || s.label());
}
function Logo({
  tone = 'dark',
  product,
  size = 30
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: "Emmany",
    style: {
      height: size,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: size * 0.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.8,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: tone === 'light' ? '#fff' : 'var(--ink)',
      lineHeight: 1
    }
  }, "Emmany"), product && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-300)',
      fontWeight: 300,
      fontSize: size * 0.72
    }
  }, "|"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.62,
      fontWeight: 500,
      color: 'var(--color-primary)',
      lineHeight: 1
    }
  }, product))));
}
function Nav({
  current,
  onNav
}) {
  const lang = useLang();
  const items = [['countries', t('Pays & frais', 'Countries & fees')], ['developers', t('Développeurs', 'Developers')], ['docs', t('Documentation', 'Documentation')], ['pricing', t('Tarifs', 'Pricing')]];
  const [menuOpen, setMenuOpen] = useState(false);
  const go = k => {
    setMenuOpen(false);
    onNav(k);
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    try {
      localStorage.setItem('em-theme', 'light');
    } catch (e) {}
  }, []);
  const otherLang = lang === 'fr' ? 'EN' : 'FR';
  const LangBtn = props => /*#__PURE__*/React.createElement("button", {
    onClick: () => emSetLang(lang === 'fr' ? 'en' : 'fr'),
    "aria-label": t('Changer de langue', 'Change language'),
    title: lang === 'fr' ? 'Switch to English' : 'Passer en français',
    className: "em-btn",
    style: {
      height: 40,
      padding: '0 12px',
      borderRadius: 8,
      background: 'var(--surface)',
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer',
      color: 'var(--ink-2)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13,
      ...(props && props.style)
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "languages",
    size: 16,
    color: "var(--color-primary)"
  }), otherLang);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--nav-bg)',
      backdropFilter: 'saturate(180%) blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 68
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      transition: 'transform .18s'
    },
    onMouseEnter: e => e.currentTarget.style.transform = 'scale(1.03)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 28
  })), /*#__PURE__*/React.createElement("nav", {
    className: "em-nav-links",
    style: {
      display: 'flex',
      gap: 2
    }
  }, items.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    className: 'em-navlink' + (current === k ? ' active' : ''),
    onClick: () => go(k),
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '22px 12px',
      fontSize: 14.5,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      color: current === k ? 'var(--color-primary)' : 'var(--ink-3)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(LangBtn, null), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('login'),
    className: "em-btn em-btn-ghost em-desktop-cta",
    style: {
      height: 40,
      padding: '0 16px',
      borderRadius: 8,
      background: 'var(--surface)',
      border: '1.5px solid var(--border-default)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14.5,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-in",
    size: 16
  }), t('Connexion', 'Sign in')), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contact'),
    className: "em-btn em-btn-primary em-desktop-cta",
    style: {
      height: 40,
      padding: '0 18px',
      borderRadius: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14.5,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-plus",
    size: 16,
    color: "#fff"
  }), t('Créer un compte', 'Create account')), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenuOpen(o => !o),
    "aria-label": "Menu",
    className: "em-btn em-hamburger",
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: 'var(--surface)',
      border: '1.5px solid var(--border-default)',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: menuOpen ? 'x' : 'menu',
    size: 18,
    color: "var(--ink-2)"
  })))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "em-mobile-menu",
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--nav-bg)',
      backdropFilter: 'saturate(180%) blur(10px)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: '10px 24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    onClick: () => go(k),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      minHeight: 46,
      fontSize: 15.5,
      fontWeight: 600,
      color: current === k ? 'var(--color-primary)' : 'var(--ink)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('login'),
    className: "em-btn em-btn-ghost",
    style: {
      flex: 1,
      height: 46,
      borderRadius: 8,
      background: 'var(--surface)',
      border: '1.5px solid var(--border-default)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-in",
    size: 16
  }), t('Connexion', 'Sign in')), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('contact'),
    className: "em-btn em-btn-primary",
    style: {
      flex: 1,
      height: 46,
      borderRadius: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-plus",
    size: 16,
    color: "#fff"
  }), t('Créer un compte', 'Create account'))))));
}
function Footer({
  onNav
}) {
  useLang();
  const cols = [[t('Produits', 'Products'), [t('Emmany Gateway', 'Emmany Gateway'), t('Fonctionnalités', 'Features'), t('Pays & frais', 'Countries & fees')]], [t('Ressources', 'Resources'), [t('Documentation', 'Documentation'), t('Guides', 'Guides'), t('API Status', 'API Status')]], [t('Société', 'Company'), [t('À propos', 'About'), t('Carrières', 'Careers'), t('Contact', 'Contact')]]];
  const route = l => {
    if (l === t('Emmany Gateway', 'Emmany Gateway') || l === t('Fonctionnalités', 'Features') || l === 'Emmany Gateway') return 'home';
    if (l === t('Pays & frais', 'Countries & fees')) return 'countries';
    if (l === t('Documentation', 'Documentation') || l === t('Guides', 'Guides') || l === t('API Status', 'API Status')) return 'docs';
    if (l === t('Contact', 'Contact')) return 'contact';
    return 'home';
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: 'var(--text-on-dark-muted)',
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.8fr 1fr 1fr 1fr 1.1fr',
      gap: 28,
      paddingBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/emmany-logo-footer.png",
    alt: "Emmany",
    style: {
      height: 34,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 13.5,
      lineHeight: 1.7,
      maxWidth: 240
    }
  }, t("Infrastructure de paiement sécurisée et évolutive pour l'Afrique et le monde.", 'Secure, scalable payment infrastructure for Africa and the world.'))), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#fff',
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    className: "em-footlink",
    onClick: () => onNav && onNav(route(l)),
    style: {
      cursor: 'pointer',
      fontSize: 13.5,
      color: '#9fb0cc'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#fff',
      marginBottom: 14
    }
  }, t('Suivez-nous', 'Follow us')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['at-sign', 'send', 'code'].map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "em-social",
    style: {
      cursor: 'pointer',
      width: 36,
      height: 36,
      borderRadius: 8,
      background: 'rgba(255,255,255,0.06)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 17,
    color: "#9fb0cc"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--navy-700)',
      padding: '20px 0 36px',
      fontSize: 13
    }
  }, "\xA9 2026 Emmany \u2014 ", t('Infrastructure de paiement · Orchestration sécurisée', 'Payment infrastructure · Secure orchestration'))));
}
Object.assign(window, {
  Icon,
  useLucide,
  Container,
  Eyebrow,
  Logo,
  Nav,
  Footer,
  StatusBadge,
  MARK,
  CountUp,
  Particles,
  Hero,
  useLang,
  t,
  emSetLang
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components/layout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Contact.jsx
try { (() => {
// Emmany — Connexion & Inscription : panneaux animés (au lieu de photos) + particules.
const {
  useState: useStateC
} = React;
const inputStyle = {
  height: 40,
  padding: '0 13px',
  border: '1.5px solid var(--border-default)',
  borderRadius: 'var(--radius-md)',
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  color: 'var(--ink)',
  outline: 'none',
  background: 'var(--surface)',
  width: '100%',
  boxSizing: 'border-box'
};
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, label), children);
}

// Animation d'inscription : carte compte en cours de création + orbites + succès.
function SignupArt() {
  const rings = [[230, 26, 'var(--cyan-300)'], [168, 18, '#fff']];
  const icons = [['mail', 250, 44], ['shield-check', 34, 70], ['headphones', 250, 244], ['sparkles', 30, 236]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 250,
      height: 250,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(1,252,233,.20), transparent 66%)'
    }
  }), rings.map(([d, dur, c], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      width: d,
      height: d,
      borderRadius: '50%',
      border: '1.5px dashed rgba(255,255,255,.35)',
      animation: `devOrbit ${dur}s linear infinite ${i % 2 ? 'reverse' : ''}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -5,
      left: '50%',
      width: 10,
      height: 10,
      borderRadius: 999,
      background: c,
      marginLeft: -5,
      boxShadow: '0 0 0 4px rgba(255,255,255,.12)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 216,
      background: '#fff',
      borderRadius: 16,
      boxShadow: 'var(--shadow-xl)',
      padding: '18px 18px 20px',
      zIndex: 2,
      animation: 'floatY 5s var(--ease-in-out) infinite'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 999,
      background: 'var(--gradient-brand)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    style: {
      height: 20,
      filter: 'brightness(0) invert(1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 4,
      background: 'var(--blue-100)',
      width: '70%',
      transformOrigin: 'left',
      animation: 'emFill 1.6s var(--ease-out) .1s both'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 4,
      background: 'var(--gray-200)',
      width: '45%',
      marginTop: 6,
      transformOrigin: 'left',
      animation: 'emFill 1.6s var(--ease-out) .35s both'
    }
  }))), [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 30,
      borderRadius: 8,
      border: '1.5px solid var(--border-subtle)',
      background: 'var(--gray-50)',
      marginBottom: 9,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: 'translateY(-50%) scaleX(0)',
      transformOrigin: 'left',
      height: 7,
      borderRadius: 4,
      width: `${60 - i * 12}%`,
      background: i === 2 ? 'var(--cyan-500)' : 'var(--color-primary)',
      animation: `emFill 1.1s var(--ease-out) ${0.6 + i * 0.4}s both`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      borderRadius: 8,
      background: 'var(--gradient-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      marginTop: 4,
      animation: 'fadeUp .5s var(--ease-out) 1.9s both'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#fff'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 7,
      width: 54,
      borderRadius: 4,
      background: 'rgba(255,255,255,.85)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -12,
      right: -12,
      width: 40,
      height: 40,
      borderRadius: 999,
      background: 'var(--success)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 6px 18px rgba(0,180,120,.5)',
      animation: 'devPulse 2.4s var(--ease-in-out) 2.1s infinite',
      transformOrigin: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 22,
    color: "#fff",
    strokeWidth: 3
  }))), icons.map(([ic, l, top], i) => /*#__PURE__*/React.createElement("span", {
    key: ic,
    style: {
      position: 'absolute',
      left: l,
      top: top,
      width: 40,
      height: 40,
      borderRadius: 11,
      background: 'rgba(255,255,255,.16)',
      border: '1px solid rgba(255,255,255,.28)',
      backdropFilter: 'blur(4px)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 4,
      animation: `floatY ${4 + i}s var(--ease-in-out) ${i * 0.4}s infinite`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--cyan-300)"
  }))));
}
const MODES = {
  login: {
    bg: 'linear-gradient(160deg,#041833 0%,#0a2244 45%,#0035c0 130%)',
    particle: 'var(--cyan-400)',
    Art: () => window.GatewayArt ? React.createElement(window.GatewayArt) : null,
    bullets: [['zap', () => t('Accédez à votre tableau de bord en direct', 'Access your live dashboard')], ['bar-chart-3', () => t('Suivez volumes et taux de succès', 'Track volumes and success rates')], ['bell', () => t('Alertes et webhooks en temps réel', 'Real-time alerts and webhooks')]],
    panelTitle: () => t('Vos paiements, en un coup d’œil', 'Your payments, at a glance'),
    panelText: () => t('Reconnectez-vous pour piloter vos transactions, versements et rapports.', 'Sign back in to manage your transactions, payouts and reports.'),
    formTitle: () => t('Bon retour', 'Welcome back'),
    formSub: () => t('Connectez-vous à votre espace Emmany.', 'Sign in to your Emmany workspace.'),
    cta: () => t('Se connecter', 'Sign in'),
    doneTitle: () => t('Connexion réussie', 'Signed in'),
    accent: 'var(--color-primary)'
  },
  signup: {
    bg: 'linear-gradient(160deg,#00776e 0%,#0042ec 60%,#041833 130%)',
    particle: 'var(--cyan-300)',
    Art: SignupArt,
    bullets: [['flask-conical', () => t('Accès instantané au sandbox', 'Instant sandbox access')], ['shield-check', () => t('Certifié PCI-DSS Niveau 1', 'PCI-DSS Level 1 certified')], ['headphones', () => t("Ingénieur d'onboarding dédié", 'Dedicated onboarding engineer')]],
    panelTitle: () => t('Passons à la production', 'Let’s ship to production'),
    panelText: () => t('Parlez-nous un peu de votre activité et lancez votre sandbox en quelques minutes.', 'Tell us a bit about your business and spin up your sandbox in minutes.'),
    formTitle: () => t('Créez votre compte', 'Create your account'),
    formSub: () => t('Gratuit pour commencer · sans carte bancaire.', 'Free to start · no credit card.'),
    cta: () => t('Créer mon compte', 'Create my account'),
    doneTitle: () => t('Compte créé !', 'Account created!'),
    accent: 'var(--cyan-500)'
  }
};
function Panel({
  m
}) {
  const Art = m.Art;
  return /*#__PURE__*/React.createElement("div", {
    className: "em-auth-panel",
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100%',
      background: '#fff'
    }
  }, [{
    x: '6%',
    y: '4%',
    s: 420,
    c: 'rgba(1,252,233,.20)',
    d: 0
  }, {
    x: '55%',
    y: '10%',
    s: 400,
    c: 'rgba(0,66,236,.18)',
    d: 1.2
  }, {
    x: '48%',
    y: '52%',
    s: 460,
    c: 'rgba(0,216,200,.16)',
    d: 0.6
  }, {
    x: '-4%',
    y: '48%',
    s: 380,
    c: 'rgba(0,66,236,.14)',
    d: 2
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "em-gw-blob",
    style: {
      position: 'absolute',
      left: b.x,
      top: b.y,
      width: b.s,
      height: b.s,
      borderRadius: '50%',
      background: `radial-gradient(circle at 40% 35%, ${b.c}, transparent 68%)`,
      filter: 'blur(20px)',
      pointerEvents: 'none',
      animation: `gwFloat ${6 + i}s var(--ease-in-out) ${b.d}s infinite`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "em-auth-panel-body",
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "em-auth-art",
    style: {
      width: '100%',
      maxWidth: 620,
      transform: 'scale(1.35)',
      transformOrigin: 'center'
    }
  }, Art ? /*#__PURE__*/React.createElement(Art, null) : null)));
}
function Contact({
  onNav,
  mode = 'signup'
}) {
  useLucide('contact' + mode);
  useLang();
  const m = MODES[mode];
  const [sent, setSent] = useStateC(false);
  const [form, setForm] = useStateC({
    name: '',
    email: '',
    company: '',
    password: '',
    volume: '0 – 50M XAF',
    agree: false
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
  }));
  const canSubmit = mode === 'login' ? form.email && form.password : form.agree;
  return /*#__PURE__*/React.createElement("section", {
    className: "em-auth-section",
    style: {
      height: 'calc(100vh - 80px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    m: m
  }), /*#__PURE__*/React.createElement("div", {
    className: "em-auth-form",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 6%',
      height: '100%',
      overflowY: 'auto',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 400,
      animation: 'fadeUp .4s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('home'),
    style: {
      display: 'flex',
      width: 'fit-content',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 50,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14,
    color: "var(--text-muted)"
  }), t("Retour à l'accueil", 'Back to home')), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '10px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 72,
      height: 72,
      borderRadius: 999,
      background: 'var(--success-soft)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 36,
    color: "var(--success)"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: 'var(--ink)',
      margin: 0
    }
  }, m.doneTitle()), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--ink-3)',
      margin: '12px 0 0',
      lineHeight: 1.6
    }
  }, mode === 'login' ? t(`Ravi de vous revoir${form.email ? ', ' + form.email : ''} !`, `Great to see you again${form.email ? ', ' + form.email : ''}!`) : t(`Merci ${form.name || ''} — vos clés sandbox arrivent par e-mail.`, `Thanks ${form.name || ''} — your sandbox keys are on their way by email.`)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('developers'),
    className: "em-btn em-btn-primary",
    style: {
      marginTop: 26,
      height: 48,
      padding: '0 26px',
      borderRadius: 999,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15.5
    }
  }, t('Ouvrir la console', 'Open the console'))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      color: m.accent,
      background: mode === 'login' ? 'var(--blue-50)' : 'var(--cyan-50)',
      borderRadius: 999,
      padding: '3px 11px',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: mode === 'login' ? 'log-in' : 'user-plus',
    size: 13,
    color: m.accent
  }), mode === 'login' ? t('Connexion', 'Sign in') : t('Nouveau compte', 'New account')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 23,
      fontWeight: 800,
      color: 'var(--ink)',
      margin: 0
    }
  }, m.formTitle()), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '5px 0 14px'
    }
  }, m.formSub()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, mode === 'signup' && /*#__PURE__*/React.createElement(Field, {
    label: t('Nom complet', 'Full name')
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: form.name,
    onChange: set('name'),
    placeholder: "Awa Diop"
  })), /*#__PURE__*/React.createElement(Field, {
    label: t('E-mail professionnel', 'Work email')
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "email",
    value: form.email,
    onChange: set('email'),
    placeholder: "awa@entreprise.com"
  })), mode === 'login' ? /*#__PURE__*/React.createElement(Field, {
    label: t('Mot de passe', 'Password')
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "password",
    value: form.password,
    onChange: set('password'),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: t('Entreprise', 'Company')
  }, /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    value: form.company,
    onChange: set('company'),
    placeholder: t("Nom de l'entreprise", 'Company name')
  })), /*#__PURE__*/React.createElement(Field, {
    label: t('Volume mensuel estimé', 'Estimated monthly volume')
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      ...inputStyle,
      appearance: 'none'
    },
    value: form.volume,
    onChange: set('volume')
  }, ['0 – 50M XAF', '50M – 500M XAF', '500M – 5 Md XAF', '5 Md+ XAF'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))))), mode === 'login' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      color: 'var(--ink-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: {
      width: 16,
      height: 16,
      accentColor: 'var(--color-primary)'
    }
  }), t('Se souvenir de moi', 'Remember me')), /*#__PURE__*/React.createElement("a", {
    style: {
      cursor: 'pointer',
      color: 'var(--color-primary)',
      fontWeight: 600
    }
  }, t('Mot de passe oublié ?', 'Forgot password?'))) : /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 14,
      color: 'var(--ink-3)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: form.agree,
    onChange: set('agree'),
    style: {
      width: 18,
      height: 18,
      accentColor: 'var(--color-primary)'
    }
  }), t("J'accepte les Conditions & la Politique de confidentialité", 'I agree to the Terms & Privacy Policy')), /*#__PURE__*/React.createElement("button", {
    disabled: !canSubmit,
    onClick: () => setSent(true),
    className: 'em-btn ' + (canSubmit ? 'em-btn-primary' : ''),
    style: {
      height: 48,
      borderRadius: 999,
      border: 'none',
      background: canSubmit ? 'var(--color-primary)' : 'var(--gray-300)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 15.5,
      cursor: canSubmit ? 'pointer' : 'not-allowed',
      marginTop: 4
    }
  }, m.cta())), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 13.5,
      color: 'var(--ink-3)',
      marginTop: 12
    }
  }, mode === 'login' ? /*#__PURE__*/React.createElement(React.Fragment, null, t('Pas encore de compte ?', 'No account yet?'), " ", /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('contact'),
    style: {
      cursor: 'pointer',
      color: 'var(--color-primary)',
      fontWeight: 600
    }
  }, t('Créer un compte', 'Create account'))) : /*#__PURE__*/React.createElement(React.Fragment, null, t('Déjà client ?', 'Already a customer?'), " ", /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('login'),
    style: {
      cursor: 'pointer',
      color: 'var(--color-primary)',
      fontWeight: 600
    }
  }, t('Se connecter', 'Sign in'))))))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Countries.jsx
try { (() => {
// Emmany — Pays & moyens de paiement (maquette).
const {
  useState: useStateCo
} = React;
function Globe() {
  // Réseau de paiement : hub Emmany relié aux marchés, avec flux animés (paiements en transit).
  const hub = {
    x: 150,
    y: 150
  };
  const nodes = [{
    x: 44,
    y: 60,
    code: 'SN',
    c: 'var(--color-primary)'
  }, {
    x: 250,
    y: 52,
    code: 'CI',
    c: 'var(--cyan-500)'
  }, {
    x: 276,
    y: 150,
    code: 'CM',
    c: 'var(--color-primary)'
  }, {
    x: 244,
    y: 250,
    code: 'CG',
    c: 'var(--cyan-500)'
  }, {
    x: 56,
    y: 250,
    code: 'GA',
    c: 'var(--color-primary)'
  }, {
    x: 26,
    y: 148,
    code: 'TG',
    c: 'var(--cyan-500)'
  }];
  const paths = nodes.map((n, i) => {
    const mx = (hub.x + n.x) / 2 + (n.y - hub.y) * 0.16;
    const my = (hub.y + n.y) / 2 - (n.x - hub.x) * 0.16;
    return {
      id: 'flow' + i,
      d: `M${n.x},${n.y} Q${mx.toFixed(0)},${my.toFixed(0)} ${hub.x},${hub.y}`,
      node: n,
      dur: 2.4 + i * 0.35
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "em-globe",
    style: {
      position: 'relative',
      width: 380,
      height: 380,
      flexShrink: 0
    }
  }, [300, 230, 150].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: d,
      height: d,
      marginLeft: -d / 2,
      marginTop: -d / 2,
      borderRadius: '50%',
      border: '1.5px dashed var(--blue-100)',
      animation: `devOrbit ${24 + i * 8}s linear infinite ${i % 2 ? 'reverse' : ''}`
    }
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 300",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, paths.map(p => /*#__PURE__*/React.createElement("path", {
    key: p.id,
    id: p.id,
    d: p.d,
    fill: "none"
  }))), paths.map(p => /*#__PURE__*/React.createElement("path", {
    key: 'l' + p.id,
    d: p.d,
    fill: "none",
    stroke: "var(--blue-200)",
    strokeWidth: "1.5",
    strokeDasharray: "3 5",
    opacity: "0.7"
  })), paths.map(p => /*#__PURE__*/React.createElement("circle", {
    key: 'd' + p.id,
    r: "4",
    fill: p.node.c
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: p.dur + 's',
    repeatCount: "indefinite",
    rotate: "0"
  }, /*#__PURE__*/React.createElement("mpath", {
    href: '#' + p.id
  })), /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0;1;1;0",
    keyTimes: "0;0.1;0.85;1",
    dur: p.dur + 's',
    repeatCount: "indefinite"
  })))), nodes.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: n.code,
    style: {
      position: 'absolute',
      left: `${n.x / 300 * 100}%`,
      top: `${n.y / 300 * 100}%`,
      transform: 'translate(-50%,-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 999,
      background: n.c,
      zIndex: 2,
      animation: `blinkDot 2.6s var(--ease-in-out) ${i * 0.3}s infinite`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 999,
      background: n.c,
      animation: `ping 2.6s var(--ease-out) ${i * 0.3}s infinite`
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      color: 'var(--ink-3)',
      background: 'var(--surface)',
      borderRadius: 5,
      padding: '1px 5px',
      boxShadow: 'var(--shadow-xs)'
    }
  }, n.code))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 130,
      height: 130,
      zIndex: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 122,
      height: 122,
      borderRadius: 999,
      border: '2px solid var(--cyan-400)',
      opacity: 0.4,
      animation: 'ping 3s var(--ease-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 999,
      overflow: 'hidden',
      background: 'var(--color-primary)',
      boxShadow: 'var(--shadow-xl)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'floatY 5s var(--ease-in-out) infinite'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    alt: "Emmany",
    style: {
      height: 42,
      filter: 'brightness(0) invert(1)'
    }
  }))));
}
const PROVIDERS = {
  Orange: {
    logo: '../../assets/op-orange.png'
  },
  Wave: {
    logo: '../../assets/op-wave.png'
  },
  MTN: {
    logo: '../../assets/op-mtn.png'
  },
  Airtel: {
    logo: '../../assets/op-airtel.png'
  },
  Moov: {
    logo: '../../assets/op-moov.png'
  },
  TMoney: {
    logo: '../../assets/op-tmoney.png'
  },
  Virement: {
    c: 'var(--ink-3)',
    fg: '#fff'
  },
  Cartes: {
    c: 'var(--gray-600)',
    fg: '#fff'
  }
};
function ProviderMark({
  p,
  icon
}) {
  const s = PROVIDERS[p] || PROVIDERS.Cartes;
  if (s.logo) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 58,
      height: 36,
      borderRadius: 8,
      overflow: 'hidden',
      flexShrink: 0,
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.logo,
    alt: p,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 8,
      background: s.c,
      color: s.fg,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17,
    color: s.fg
  }));
}

// Deux meilleurs opérateurs Mobile Money par pays + virement + cartes.
const COUNTRY_DATA = {
  SN: {
    name: 'Sénégal',
    rows: [['Orange', 'phone', 'Orange Money Sénégal', 'Mobile Money', 'actif', '1.50%', '0.65%', ['Production', 'Sandbox']], ['Wave', 'phone', 'Wave Sénégal', 'Mobile Money', 'actif', '1.00%', '0.60%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  CI: {
    name: "Côte d'Ivoire",
    rows: [['Orange', 'phone', 'Orange Money Côte d\'Ivoire', 'Mobile Money', 'actif', '1.50%', '0.65%', ['Production', 'Sandbox']], ['MTN', 'phone', 'MTN Mobile Money Côte d\'Ivoire', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  CM: {
    name: 'Cameroun',
    rows: [['Orange', 'phone', 'Orange Money Cameroun', 'Mobile Money', 'actif', '1.55%', '0.75%', ['Production', 'Sandbox']], ['MTN', 'phone', 'MTN Mobile Money Cameroun', 'Mobile Money', 'actif', '1.60%', '0.75%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'maintenance', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  CG: {
    name: 'République du Congo',
    rows: [['MTN', 'phone', 'MTN Mobile Money Congo', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']], ['Airtel', 'phone', 'Airtel Money Congo', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'maintenance', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard) via partenaires', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  GA: {
    name: 'Gabon',
    rows: [['Airtel', 'phone', 'Airtel Money Gabon', 'Mobile Money', 'actif', '1.60%', '0.75%', ['Production', 'Sandbox']], ['Moov', 'phone', 'Moov Money Gabon', 'Mobile Money', 'actif', '1.65%', '0.75%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  BJ: {
    name: 'Bénin',
    rows: [['MTN', 'phone', 'MTN Mobile Money Bénin', 'Mobile Money', 'actif', '1.50%', '0.70%', ['Production', 'Sandbox']], ['Moov', 'phone', 'Moov Money Bénin', 'Mobile Money', 'actif', '1.55%', '0.70%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  },
  TG: {
    name: 'Togo',
    rows: [['TMoney', 'phone', 'T-Money (Togocom)', 'Mobile Money', 'actif', '1.55%', '0.70%', ['Production', 'Sandbox']], ['Moov', 'phone', 'Moov Money (Flooz)', 'Mobile Money', 'actif', '1.55%', '0.70%', ['Production', 'Sandbox']], ['Virement', 'building-2', 'Virement bancaire (Banques locales)', 'Virement', 'actif', '—', '0.50%', ['Production']], ['Cartes', 'credit-card', 'Cartes (Visa/Mastercard)', 'Cartes', 'sandbox', '2.50%', '0.80%', ['Sandbox']]]
  }
};
function MethodsTable({
  rows
}) {
  const th = {
    textAlign: 'left',
    fontSize: 11.5,
    fontWeight: 600,
    letterSpacing: '.04em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    padding: '0 12px 12px'
  };
  const td = {
    padding: '14px 12px',
    fontSize: 13.5,
    color: 'var(--ink-3)',
    borderTop: '1px solid var(--border-subtle)',
    verticalAlign: 'middle'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '4px 0 16px'
    }
  }, rows.length, " ", t('moyens de paiement disponibles', 'payment methods available')), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: 720
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, t('Moyen de paiement', 'Payment method')), /*#__PURE__*/React.createElement("th", {
    style: th
  }, t('Type', 'Type')), /*#__PURE__*/React.createElement("th", {
    style: th
  }, t('Statut', 'Status')), /*#__PURE__*/React.createElement("th", {
    style: th
  }, t('Frais opérateur', 'Operator fee')), /*#__PURE__*/React.createElement("th", {
    style: th
  }, t('Frais PSP', 'PSP fee')), /*#__PURE__*/React.createElement("th", {
    style: th
  }, t('Environnement', 'Environment')))), /*#__PURE__*/React.createElement("tbody", null, rows.map(([p, ic, name, type, status, fo, fp, envs]) => /*#__PURE__*/React.createElement("tr", {
    key: name
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProviderMark, {
    p: p,
    icon: ic
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, name))), /*#__PURE__*/React.createElement("td", {
    style: td
  }, type), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: status
  })), /*#__PURE__*/React.createElement("td", {
    style: td
  }, fo), /*#__PURE__*/React.createElement("td", {
    style: td
  }, fp), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, envs.map(e => /*#__PURE__*/React.createElement("span", {
    key: e,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: e === 'Sandbox' ? 'var(--warning)' : 'var(--success)'
    }
  }), e)))))))));
}
function CountryRow({
  code,
  name,
  rows,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "em-card",
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      overflow: 'hidden',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    className: "em-row",
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.5,
      fontWeight: 700,
      color: open ? 'var(--color-primary)' : 'var(--ink)'
    }
  }, name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 500
    }
  }, "(", code, ")")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, rows.length, " ", t('moyens', 'methods'))), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 18,
    color: open ? 'var(--color-primary)' : 'var(--gray-400)',
    style: {
      transition: 'transform .25s var(--ease-out)',
      transform: open ? 'rotate(180deg)' : 'none'
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 22px',
      borderTop: '1px solid var(--border-subtle)',
      animation: 'fadeUp .3s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement(MethodsTable, {
    rows: rows
  })));
}
function Countries() {
  useLucide('countries');
  useLang();
  const list = ['SN', 'CI', 'CM', 'CG', 'GA', 'BJ', 'TG'];
  const [open, setOpen] = useStateCo('CG');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    tone: "blue",
    style: {
      padding: '40px 0 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal in em-countries-head",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gridTemplateAreas: '"intro globe" "stats globe"',
      columnGap: 24,
      rowGap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridArea: 'intro',
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, t('Couverture', 'Coverage')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: '#fff',
      margin: '12px 0 0'
    }
  }, t('Pays & moyens de paiement', 'Countries & payment methods')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.82)',
      margin: '12px 0 0'
    }
  }, t('Découvrez les moyens de paiement disponibles par pays, leurs statuts et les frais associés.', 'Explore the payment methods available by country, their statuses and associated fees.'))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridArea: 'globe',
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(Globe, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridArea: 'stats',
      display: 'flex',
      gap: 28
    }
  }, [[12, () => t('Marchés', 'Markets'), ''], [40, () => t('Moyens', 'Methods'), '+'], [6, () => t('Devises', 'Currencies'), '']].map(([v, l, suf], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    value: v,
    suffix: suf
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'rgba(255,255,255,.7)'
    }
  }, l())))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '32px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 22
    }
  }, [['actif', () => t('Disponible en production', 'Available in production')], ['bientot', () => t('Bientôt disponible', 'Coming soon')], ['maintenance', () => t('En maintenance', 'Maintenance')], ['sandbox', () => t('Sandbox uniquement', 'Sandbox only')]].map(([k, l], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12.5,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    kind: k
  }), l()))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, list.map(code => /*#__PURE__*/React.createElement(CountryRow, {
    key: code,
    code: code,
    name: COUNTRY_DATA[code].name,
    rows: COUNTRY_DATA[code].rows,
    open: open === code,
    onToggle: () => setOpen(open === code ? null : code)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      marginTop: 24,
      background: 'var(--blue-50)',
      border: '1px solid var(--blue-100)',
      borderRadius: 12,
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18,
    color: "var(--color-primary)",
    style: {
      marginTop: 1,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: 0
    }
  }, t("Les frais et disponibilités peuvent varier selon votre contrat marchand, l'opérateur et le pays. Contactez votre chargé de compte pour plus de détails.", 'Fees and availability may vary based on your merchant contract, the operator and the country. Contact your account manager for details.'))))));
}
Object.assign(window, {
  Countries
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Countries.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Developers.jsx
try { (() => {
// Emmany — Développeurs : hero à particules, parcours d'intégration, ressources.
function DevArt() {
  const rings = [[210, 22, 'var(--cyan-400)'], [160, 15, 'var(--cyan-300)'], [110, 40, '#fff']];
  const icons = [['webhook', 250, 55], ['key-round', 40, 90], ['smartphone', 250, 250], ['shield-check', 30, 240]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 260,
      height: 260,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(1,252,233,.18), transparent 65%)'
    }
  }), rings.map(([d, dur, c], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      width: d,
      height: d,
      borderRadius: '50%',
      border: '1.5px dashed rgba(255,255,255,.32)',
      animation: `devOrbit ${dur}s linear infinite ${i % 2 ? 'reverse' : ''}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -5,
      left: '50%',
      width: 10,
      height: 10,
      borderRadius: 999,
      background: c,
      marginLeft: -5,
      boxShadow: '0 0 0 4px rgba(255,255,255,.12)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 92,
      height: 92,
      borderRadius: 24,
      background: 'var(--gradient-flow)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'floatY 5s var(--ease-in-out) infinite',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    style: {
      height: 50,
      filter: 'brightness(0) invert(1)'
    }
  })), icons.map(([ic, l, top], i) => /*#__PURE__*/React.createElement("span", {
    key: ic,
    style: {
      position: 'absolute',
      left: l,
      top: top,
      width: 40,
      height: 40,
      borderRadius: 11,
      background: 'rgba(255,255,255,.16)',
      border: '1px solid rgba(255,255,255,.28)',
      backdropFilter: 'blur(4px)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: `floatY ${4 + i}s var(--ease-in-out) ${i * 0.4}s infinite`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--cyan-300)"
  }))));
}
function Stepper() {
  const steps = [() => t('Créer un compte', 'Create an account'), () => t('Activer la sandbox', 'Activate the sandbox'), () => t('Créer un projet', 'Create a project'), () => t('Générer une clé API', 'Generate an API key'), () => t('Initier un paiement', 'Initiate a payment'), () => t('Suivre une transaction', 'Track a transaction'), () => t('Configurer un webhook', 'Set up a webhook'), () => t('Passer en production', 'Go live')];
  const active = 3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      overflowX: 'auto',
      paddingBottom: 8
    }
  }, steps.map((s, i) => {
    const done = i < active,
      cur = i === active;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        flex: i < steps.length - 1 ? 1 : '0 0 auto',
        minWidth: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 96,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 34,
        height: 34,
        borderRadius: 999,
        fontWeight: 700,
        fontSize: 14,
        background: cur ? 'var(--success)' : done ? 'var(--color-primary)' : 'var(--surface)',
        color: cur || done ? '#fff' : 'var(--gray-500)',
        border: cur || done ? 'none' : '1.5px solid var(--border-default)',
        boxShadow: cur ? '0 0 0 5px var(--success-soft)' : 'none'
      }
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "#fff"
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        lineHeight: 1.35,
        textAlign: 'center',
        marginTop: 8,
        color: cur ? 'var(--ink)' : 'var(--text-muted)',
        fontWeight: cur ? 600 : 500
      }
    }, s())), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 2,
        background: i < active ? 'var(--color-primary)' : 'var(--border-default)',
        marginTop: 16
      }
    }));
  }));
}
function Developers({
  onNav
}) {
  useLucide('developers');
  useLang();
  const resources = [['book-open', () => t('Documentation API', 'API documentation'), () => t('Référence complète des endpoints, objets et statuts.', 'Full reference of endpoints, objects and statuses.'), 'blue'], ['compass', () => t("Guides d'intégration", 'Integration guides'), () => t('Tutoriels pas à pas, du premier paiement à la production.', 'Step-by-step tutorials, from first payment to production.'), 'cyan'], ['box', () => t('Bibliothèques & SDKs', 'Libraries & SDKs'), () => t('Node.js, Python, PHP et Go, prêts à installer.', 'Node.js, Python, PHP and Go, ready to install.'), 'blue'], ['activity', () => t('API Status', 'API status'), () => t('Disponibilité en temps réel et historique des incidents.', 'Real-time availability and incident history.'), 'cyan']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    tone: "navy",
    style: {
      padding: '52px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal in",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, t('Développeurs', 'Developers')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: '-.03em',
      color: '#fff',
      margin: '12px 0 0',
      lineHeight: 1.1
    }
  }, t('Intégrez en quelques étapes', 'Integrate in a few steps')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      color: 'rgba(255,255,255,.82)',
      margin: '14px 0 0',
      maxWidth: 440
    }
  }, t('Suivez notre parcours recommandé pour intégrer Emmany Gateway, du sandbox à la production.', 'Follow our recommended path to integrate Emmany Gateway, from sandbox to production.')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('docs'),
    className: "em-btn",
    style: {
      height: 46,
      padding: '0 22px',
      borderRadius: 8,
      border: 'none',
      background: '#fff',
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15
    }
  }, t('Lire la documentation', 'Read the docs')), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contact'),
    className: "em-btn",
    style: {
      height: 46,
      padding: '0 20px',
      borderRadius: 8,
      background: 'transparent',
      color: '#fff',
      border: '1.5px solid rgba(255,255,255,.55)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      backdropFilter: 'blur(4px)'
    }
  }, t('Obtenir mes clés', 'Get my keys')))), /*#__PURE__*/React.createElement(DevArt, null))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '44px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 14,
      padding: '28px 24px',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)',
      marginBottom: 18
    }
  }, t("Parcours d'intégration recommandé", 'Recommended integration path')), /*#__PURE__*/React.createElement(Stepper, null)), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 28px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t('Ressources', 'Resources')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '12px 0 0'
    }
  }, t('Tout pour démarrer vite', 'Everything to start fast'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 18
    }
  }, resources.map(([ic, tt, d, tone], i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    onClick: () => onNav('docs'),
    className: "reveal em-card",
    style: {
      cursor: 'pointer',
      display: 'flex',
      gap: 16,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 14,
      padding: 22,
      transitionDelay: `${i * 80}ms`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 46,
      borderRadius: 12,
      background: tone === 'cyan' ? 'var(--cyan-50)' : 'var(--blue-50)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: tone === 'cyan' ? 'var(--cyan-600)' : 'var(--color-primary)'
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16.5,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, tt()), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '6px 0 0'
    }
  }, d()))))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginTop: 24,
      background: 'var(--blue-50)',
      border: '1px solid var(--blue-100)',
      borderRadius: 12,
      padding: '14px 18px',
      fontSize: 13.5,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "life-buoy",
    size: 18,
    color: "var(--color-primary)",
    style: {
      flexShrink: 0
    }
  }), t("Besoin d'aide ? Consultez nos guides ou ouvrez un ticket sur notre support développeur.", 'Need help? Check our guides or open a ticket with our developer support.')))));
}
Object.assign(window, {
  Developers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Developers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Documentation.jsx
try { (() => {
// Emmany — Documentation (nouveau) : sidebar de navigation + contenu riche.
const {
  useState: useStateDoc
} = React;
const DOC_NAV = [['Démarrage', [['intro', 'Introduction'], ['auth', 'Authentification'], ['env', 'Environnements']]], ['Paiements', [['collect', 'Encaisser un paiement'], ['status', 'Statuts & cycle de vie'], ['webhooks', 'Webhooks']]], ['Ressources', [['errors', "Codes d'erreur"], ['sdks', 'SDKs & bibliothèques'], ['limits', 'Limites & quotas']]]];
const DOC_T = {
  'Démarrage': 'Getting started',
  'Introduction': 'Introduction',
  'Authentification': 'Authentication',
  'Environnements': 'Environments',
  'Paiements': 'Payments',
  'Encaisser un paiement': 'Collect a payment',
  'Statuts & cycle de vie': 'Statuses & lifecycle',
  'Webhooks': 'Webhooks',
  'Ressources': 'Resources',
  "Codes d'erreur": 'Error codes',
  'SDKs & bibliothèques': 'SDKs & libraries',
  'Limites & quotas': 'Limits & quotas'
};
const dt = s => t(s, DOC_T[s] || s);
function DocBlock({
  id,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    style: {
      scrollMarginTop: 90,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '0 0 14px'
    }
  }, title), children);
}
const P = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    lineHeight: 1.7,
    color: 'var(--ink-3)',
    margin: '0 0 14px'
  }
}, children);
function Code({
  children
}) {
  return /*#__PURE__*/React.createElement("pre", {
    style: {
      background: '#020c1f',
      color: '#e6ecf5',
      borderRadius: 12,
      padding: '16px 18px',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.75,
      overflowX: 'auto',
      margin: '0 0 18px'
    }
  }, children);
}
function Method({
  m,
  path
}) {
  const c = {
    GET: 'var(--success)',
    POST: 'var(--color-primary)',
    DELETE: 'var(--danger)'
  }[m];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 10,
      padding: '10px 14px',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      color: '#fff',
      background: c,
      borderRadius: 6,
      padding: '3px 9px',
      fontFamily: 'var(--font-mono)'
    }
  }, m), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, path));
}
function Documentation({
  onNav
}) {
  useLucide('docs');
  useLang();
  const [active, setActive] = useStateDoc('intro');
  const go = id => {
    setActive(id);
    const el = document.getElementById(id);
    const scr = document.getElementById('site-scroll');
    if (el && scr) scr.scrollTo({
      top: el.offsetTop - 80,
      behavior: 'smooth'
    });
  };
  const th = {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--text-muted)',
    padding: '0 12px 10px',
    textTransform: 'uppercase',
    letterSpacing: '.04em'
  };
  const td = {
    padding: '11px 12px',
    fontSize: 13.5,
    borderTop: '1px solid var(--border-subtle)',
    color: 'var(--ink-3)'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    tone: "blue",
    style: {
      padding: '44px 0 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal in"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, t('Documentation', 'Documentation')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      fontWeight: 800,
      letterSpacing: '-.03em',
      color: '#fff',
      margin: '12px 0 0'
    }
  }, t('Référence & guides Emmany Gateway', 'Emmany Gateway reference & guides')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      color: 'rgba(255,255,255,.82)',
      margin: '12px 0 0',
      maxWidth: 600
    }
  }, t("Tout ce qu'il faut pour intégrer les paiements Mobile Money, cartes et virements via une seule API PSP.", 'Everything you need to integrate Mobile Money, card and transfer payments through a single PSP API.')))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '36px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '230px 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 88,
      alignSelf: 'start'
    }
  }, DOC_NAV.map(([group, items]) => /*#__PURE__*/React.createElement("div", {
    key: group,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, dt(group)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      borderLeft: '2px solid var(--border-subtle)'
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    style: {
      cursor: 'pointer',
      fontSize: 13.5,
      padding: '6px 12px',
      marginLeft: -2,
      borderLeft: `2px solid ${active === id ? 'var(--color-primary)' : 'transparent'}`,
      color: active === id ? 'var(--color-primary)' : 'var(--ink-3)',
      fontWeight: active === id ? 600 : 500
    }
  }, dt(label))))))), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(DocBlock, {
    id: "intro",
    title: dt('Introduction')
  }, /*#__PURE__*/React.createElement(P, null, "L'API Emmany est organis\xE9e autour de REST. Elle utilise des URL orient\xE9es ressources, accepte des corps de requ\xEAte en JSON, renvoie des r\xE9ponses en JSON et s'appuie sur les codes de statut HTTP standards. Toutes les requ\xEAtes se font en HTTPS."), /*#__PURE__*/React.createElement(Method, {
    m: "POST",
    path: "https://api.emmany.com/v1/payments"
  }), /*#__PURE__*/React.createElement(P, null, "Chaque compte dispose de deux environnements totalement isol\xE9s : ", /*#__PURE__*/React.createElement("strong", null, "Sandbox"), " pour tester, et ", /*#__PURE__*/React.createElement("strong", null, "Production"), " pour les transactions r\xE9elles. Vos cl\xE9s d\xE9terminent l'environnement cibl\xE9.")), /*#__PURE__*/React.createElement(DocBlock, {
    id: "auth",
    title: dt('Authentification')
  }, /*#__PURE__*/React.createElement(P, null, "Authentifiez vos requ\xEAtes avec votre cl\xE9 secr\xE8te dans l'en-t\xEAte ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      background: 'var(--gray-100)',
      padding: '1px 6px',
      borderRadius: 5
    }
  }, "Authorization"), ". Ne partagez jamais vos cl\xE9s de production c\xF4t\xE9 client."), /*#__PURE__*/React.createElement(Code, null, `Authorization: Bearer emy_live_••••••••••••••••`)), /*#__PURE__*/React.createElement(DocBlock, {
    id: "env",
    title: dt('Environnements')
  }, /*#__PURE__*/React.createElement("table", {
    className: "em-doc-tbl",
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Environnement"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Base URL"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Pr\xE9fixe de cl\xE9"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: td
  }, "Sandbox"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)'
    }
  }, "sandbox.api.emmany.com"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)'
    }
  }, "emy_test_")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: td
  }, "Production"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)'
    }
  }, "api.emmany.com"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)'
    }
  }, "emy_live_"))))), /*#__PURE__*/React.createElement(DocBlock, {
    id: "collect",
    title: dt('Encaisser un paiement')
  }, /*#__PURE__*/React.createElement(P, null, "Cr\xE9ez un paiement en envoyant le montant, la devise, le pays et le moyen de paiement. Le client re\xE7oit une demande de validation (par ex. push Mobile Money) puis vous \xEAtes notifi\xE9 via webhook."), /*#__PURE__*/React.createElement(Code, null, `curl -X POST https://api.emmany.com/v1/payments \\
  -H "Authorization: Bearer emy_live_••••" \\
  -d '{ "amount": 10000, "currency": "XAF",
        "country": "CG", "paymentMethod": "MTN_MOMO_CG",
        "customerPhone": "+242000000000" }'`)), /*#__PURE__*/React.createElement(DocBlock, {
    id: "status",
    title: dt('Statuts & cycle de vie')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 14
    }
  }, [['pending', 'bientot'], ['succeeded', 'actif'], ['failed', 'maintenance'], ['refunded', 'sandbox']].map(([s, k]) => /*#__PURE__*/React.createElement(StatusBadge, {
    key: s,
    kind: k
  }, s))), /*#__PURE__*/React.createElement(P, null, "Un paiement passe de ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "pending"), " \xE0 ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "succeeded"), " ou ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "failed"), ". Ne consid\xE9rez jamais un paiement comme r\xE9gl\xE9 tant que le webhook ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "payment.succeeded"), " n'est pas re\xE7u.")), /*#__PURE__*/React.createElement(DocBlock, {
    id: "webhooks",
    title: dt('Webhooks')
  }, /*#__PURE__*/React.createElement(P, null, "Emmany envoie des \xE9v\xE9nements sign\xE9s \xE0 votre ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "callbackUrl"), ". V\xE9rifiez la signature ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "Emmany-Signature"), " avant de traiter l'\xE9v\xE9nement."), /*#__PURE__*/React.createElement(Code, null, `{ "event": "payment.succeeded",
  "id": "pay_8f2c1a", "status": "succeeded" }`)), /*#__PURE__*/React.createElement(DocBlock, {
    id: "errors",
    title: dt("Codes d'erreur")
  }, /*#__PURE__*/React.createElement("table", {
    className: "em-doc-tbl",
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Code"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Signification"))), /*#__PURE__*/React.createElement("tbody", null, [['400', 'Requête invalide — paramètre manquant ou mal formé'], ['401', 'Clé API invalide ou absente'], ['402', 'Paiement refusé par l\'opérateur'], ['429', 'Trop de requêtes — limite de débit atteinte'], ['500', 'Erreur serveur Emmany']].map(([c, m]) => /*#__PURE__*/React.createElement("tr", {
    key: c
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, c), /*#__PURE__*/React.createElement("td", {
    style: td
  }, m)))))), /*#__PURE__*/React.createElement(DocBlock, {
    id: "sdks",
    title: dt('SDKs & bibliothèques')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 12,
      marginBottom: 14
    }
  }, [['Node.js', 'terminal'], ['Python', 'terminal'], ['PHP', 'terminal'], ['Go', 'terminal']].map(([n, ic]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "em-card",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: '1px solid var(--border-subtle)',
      borderRadius: 10,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "box",
    size: 18,
    color: "var(--color-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, n))))), /*#__PURE__*/React.createElement(DocBlock, {
    id: "limits",
    title: dt('Limites & quotas')
  }, /*#__PURE__*/React.createElement(P, null, "Par d\xE9faut : 100 requ\xEAtes/seconde en production, 25 en sandbox. Contactez-nous pour relever ces limites selon votre volume."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('developers'),
    className: "em-btn em-btn-primary",
    style: {
      height: 46,
      padding: '0 22px',
      borderRadius: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15
    }
  }, "Ouvrir la console d\xE9veloppeur"))))))));
}
Object.assign(window, {
  Documentation
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Documentation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Gateway.jsx
try { (() => {
// Emmany — Page produit Gateway (maquette).
function GatewayArt() {
  const rails = [{
    ic: 'smartphone',
    label: 'Mobile Money',
    top: '20%',
    y: 70,
    d: 0
  }, {
    ic: 'credit-card',
    label: 'Cartes',
    top: '50%',
    y: 150,
    d: 0.5
  }, {
    ic: 'building-2',
    label: 'Virement',
    top: '80%',
    y: 230,
    d: 1
  }];
  const paths = [{
    id: 'gw1',
    d: 'M40,150 L150,150 Q210,150 250,72',
    dur: 2.4,
    delay: 0,
    c: 'var(--cyan-400)'
  }, {
    id: 'gw2',
    d: 'M40,150 L250,150',
    dur: 2.4,
    delay: 0.5,
    c: 'var(--color-primary)'
  }, {
    id: 'gw3',
    d: 'M40,150 L150,150 Q210,150 250,228',
    dur: 2.4,
    delay: 1,
    c: 'var(--cyan-400)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "em-gateway-art",
    style: {
      position: 'relative',
      height: 300,
      overflow: 'hidden'
    }
  }, [{
    x: 20,
    y: 10,
    s: 190,
    c: 'rgba(1,252,233,.20)',
    d: 0
  }, {
    x: 200,
    y: 30,
    s: 180,
    c: 'rgba(0,66,236,.18)',
    d: 1.2
  }, {
    x: 180,
    y: 160,
    s: 200,
    c: 'rgba(0,216,200,.16)',
    d: 0.6
  }, {
    x: 0,
    y: 150,
    s: 170,
    c: 'rgba(0,66,236,.14)',
    d: 2
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "em-gw-blob",
    style: {
      position: 'absolute',
      left: b.x,
      top: b.y,
      width: b.s,
      height: b.s,
      borderRadius: '50%',
      background: `radial-gradient(circle at 40% 35%, ${b.c}, transparent 68%)`,
      filter: 'blur(8px)',
      animation: `gwFloat ${6 + i}s var(--ease-in-out) ${b.d}s infinite`
    }
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 300",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, paths.map(p => /*#__PURE__*/React.createElement("path", {
    key: p.id,
    id: p.id,
    d: p.d,
    fill: "none"
  }))), paths.map(p => /*#__PURE__*/React.createElement("path", {
    key: 'l' + p.id,
    d: p.d,
    fill: "none",
    stroke: "var(--blue-200)",
    strokeWidth: "2",
    strokeDasharray: "3 5",
    opacity: "0.7"
  })), paths.map(p => /*#__PURE__*/React.createElement("circle", {
    key: 't' + p.id,
    r: "5",
    fill: p.c
  }, /*#__PURE__*/React.createElement("animateMotion", {
    dur: p.dur + 's',
    begin: p.delay + 's',
    repeatCount: "indefinite"
  }, /*#__PURE__*/React.createElement("mpath", {
    href: '#' + p.id
  })), /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0;1;1;0",
    keyTimes: "0;0.12;0.8;1",
    dur: p.dur + 's',
    begin: p.delay + 's',
    repeatCount: "indefinite"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--navy-900)',
      color: '#fff',
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      fontWeight: 600,
      padding: '6px 10px',
      borderRadius: 8,
      boxShadow: 'var(--shadow-md)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'var(--cyan-400)'
    }
  }), "POST /payments")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 120,
      height: 120,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 112,
      height: 112,
      borderRadius: 999,
      border: '2px solid var(--cyan-400)',
      opacity: 0.35,
      animation: 'ping 3s var(--ease-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 999,
      overflow: 'hidden',
      background: 'var(--color-primary)',
      boxShadow: 'var(--shadow-xl)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'gwFloat 5s var(--ease-in-out) infinite'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: MARK,
    style: {
      height: 40,
      filter: 'brightness(0) invert(1)'
    }
  }))), rails.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      position: 'absolute',
      right: 0,
      top: r.top,
      transform: 'translateY(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 10,
      padding: '7px 10px',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: 7,
      background: 'var(--blue-50)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.ic,
    size: 15,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 16,
      height: 16,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 999,
      background: 'var(--success)',
      opacity: 0.18,
      animation: `ping 2.4s var(--ease-out) ${r.d}s infinite`
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    color: "var(--success)"
  })))));
}
function Gateway({
  onNav
}) {
  useLucide('gateway');
  const feats = [['wallet', 'Collecte de paiements', 'Initiez des paiements simples et sécurisés sur tous les canaux.'], ['git-branch', 'Orchestration Mobile Money', 'Routez automatiquement vers le meilleur canal pour maximiser le succès.'], ['list-checks', 'Suivi transactionnel', 'Suivez chaque transaction en temps réel avec des statuts détaillés.'], ['webhook', 'Webhooks marchands', 'Recevez des notifications en temps réel sur les événements clés.'], ['key-round', 'API Keys', 'Générez et gérez vos clés API en toute sécurité par projet et environnement.'], ['target', 'Sandbox', 'Testez vos intégrations sans risque dans un environnement dédié.'], ['layout-dashboard', 'Dashboard', 'Visualisez vos indicateurs clés avec des tableaux de bord intuitifs.'], ['download', 'Historique et exports', 'Exportez vos transactions et réconciliations en quelques clics.'], ['radar', 'Monitoring', 'Surveillez la performance de vos paiements et alertes en temps réel.']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '32px 0 56px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13.5,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer',
      color: 'var(--color-primary)',
      fontWeight: 600
    }
  }, "Produits")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal in"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      letterSpacing: '-.03em',
      lineHeight: 1.1,
      margin: 0,
      color: 'var(--ink)'
    }
  }, "Emmany Gateway, une API PSP pour orchestrer vos paiements num\xE9riques."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--ink-3)',
      margin: '20px 0 0',
      maxWidth: 460
    }
  }, "Une plateforme compl\xE8te et modulaire pour collecter, router, suivre et r\xE9concilier les paiements \xE0 grande \xE9chelle.")), /*#__PURE__*/React.createElement(GatewayArt, null)))), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, feats.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "reveal em-card",
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 14,
      padding: 24,
      transitionDelay: `${i % 3 * 70}ms`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'var(--blue-50)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16.5,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '8px 0 0'
    }
  }, d)))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: 'var(--ink)',
      margin: 0
    }
  }, "S\xE9curit\xE9 et tra\xE7abilit\xE9"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '10px 0 0'
    }
  }, "Donn\xE9es chiffr\xE9es, journalisation compl\xE8te et conformit\xE9 aux exigences r\xE9glementaires. Vos paiements sont entre de bonnes mains.")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 72,
      height: 72,
      borderRadius: 18,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 34,
    color: "var(--cyan-500)"
  })))), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: '40px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: 0
    }
  }, "Pr\xEAt \xE0 int\xE9grer Emmany Gateway ?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'center',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contact'),
    className: "em-btn em-btn-primary",
    style: {
      height: 48,
      padding: '0 24px',
      borderRadius: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15.5
    }
  }, "Cr\xE9er un compte"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('docs'),
    className: "em-btn em-btn-ghost",
    style: {
      height: 48,
      padding: '0 22px',
      borderRadius: 8,
      background: 'var(--surface)',
      color: 'var(--ink)',
      border: '1.5px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15.5
    }
  }, "Explorer la documentation")))));
}
Object.assign(window, {
  Gateway,
  GatewayArt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Gateway.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Home.jsx
try { (() => {
// Emmany — Accueil : hero à particules (copie Gateway), fonctionnalités Gateway fusionnées,
// partenaires, carte de couverture Afrique, sections colorées.
const {
  useState: useStateH
} = React;
const RANGES = {
  '24 heures': {
    pts: [60, 30, 68, 26, 72, 34, 80, 28, 62, 40, 74, 44, 88, 50, 82],
    vol: 8420600,
    dv: 4.2,
    tx: 1204,
    dtx: 3.1,
    sr: 98.9,
    dsr: 0.4,
    axis: ['-24 h', '-12 h', () => t('Maintenant', 'Now')],
    tip: () => t('Maintenant', 'Now')
  },
  '7 derniers jours': {
    pts: [34, 20, 46, 30, 52, 28, 60, 42, 55, 38, 70, 50, 64, 74, 88],
    vol: 256780300,
    dv: 18.6,
    tx: 24763,
    dtx: 16.2,
    sr: 98.6,
    dsr: 2.1,
    axis: ['J-7', 'J-4', () => t("Auj.", 'Today')],
    tip: () => t("Auj.", 'Today')
  },
  '30 derniers jours': {
    pts: [30, 34, 40, 38, 48, 52, 60, 58, 66, 70, 76, 80, 84, 90, 96],
    vol: 1024300000,
    dv: 22.4,
    tx: 98420,
    dtx: 19.8,
    sr: 98.4,
    dsr: 1.7,
    axis: ['J-30', 'J-15', () => t("Auj.", 'Today')],
    tip: () => t("Auj.", 'Today')
  },
  '90 derniers jours': {
    pts: [20, 48, 26, 60, 34, 70, 30, 78, 44, 86, 40, 92, 56, 96, 74],
    vol: 3180900000,
    dv: 31.2,
    tx: 291540,
    dtx: 27.5,
    sr: 98.1,
    dsr: 3.4,
    axis: ['J-90', 'J-45', () => t("Auj.", 'Today')],
    tip: () => t("Auj.", 'Today')
  }
};
const RANGE_LABELS = {
  '24 heures': () => t('24 heures', '24 hours'),
  '7 derniers jours': () => t('7 derniers jours', 'Last 7 days'),
  '30 derniers jours': () => t('30 derniers jours', 'Last 30 days'),
  '90 derniers jours': () => t('90 derniers jours', 'Last 90 days')
};
function LineChart({
  pts,
  k,
  tip,
  axis
}) {
  const w = 380,
    h = 150;
  const max = Math.max(...pts),
    min = Math.min(...pts),
    span = max - min || 1;
  const x = i => i / (pts.length - 1) * w;
  const y = v => 18 + (1 - (v - min) / span) * (h - 42);
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${w},${h} L0,${h} Z`;
  const lx = x(pts.length - 1),
    ly = y(pts[pts.length - 1]);
  return /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "lc",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "var(--color-primary)",
    stopOpacity: "0.26"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "var(--color-primary)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: ly,
    x2: w,
    y2: ly,
    stroke: "var(--border-default)",
    strokeWidth: "1",
    strokeDasharray: "4 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#lc)",
    style: {
      animation: 'fadeUp .8s var(--ease-out) both'
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    pathLength: "100",
    fill: "none",
    stroke: "var(--color-primary)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      strokeDasharray: 100,
      animation: 'drawLine 1.4s var(--ease-out) forwards'
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: lx,
    cy: ly,
    r: "11",
    fill: "var(--color-primary)",
    opacity: "0.18",
    style: {
      animation: 'devPulse 2s var(--ease-in-out) infinite',
      transformOrigin: `${lx}px ${ly}px`
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: lx,
    cy: ly,
    r: "5",
    fill: "var(--color-primary)",
    stroke: "var(--surface)",
    strokeWidth: "2"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '84%',
      top: -4,
      transform: 'translateX(-50%)',
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      borderRadius: 8,
      padding: '3px 9px',
      fontSize: 11.5,
      fontWeight: 600,
      color: 'var(--ink)',
      animation: 'fadeUp .5s var(--ease-out) .3s both'
    }
  }, typeof tip === 'function' ? tip() : tip), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8,
      fontSize: 11,
      letterSpacing: '.02em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, axis.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, typeof a === 'function' ? a() : a))));
}
function TxOverview() {
  const [range, setRange] = useStateH('7 derniers jours');
  const [open, setOpen] = useStateH(false);
  const d = RANGES[range];
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal in",
    style: {
      background: 'var(--surface)',
      borderRadius: 18,
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xl)',
      padding: 26,
      aspectRatio: '1 / 1',
      display: 'flex',
      flexDirection: 'column',
      animation: 'floatY 7s var(--ease-in-out) infinite'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, t('Aperçu des transactions', 'Transactions overview')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    onBlur: () => setTimeout(() => setOpen(false), 150),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--ink-3)',
      border: '1px solid var(--border-default)',
      borderRadius: 8,
      padding: '6px 11px',
      background: 'var(--surface)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, RANGE_LABELS[range](), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--gray-400)"
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '110%',
      right: 0,
      zIndex: 20,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 10,
      boxShadow: 'var(--shadow-lg)',
      padding: 6,
      minWidth: 180,
      animation: 'fadeUp .18s var(--ease-out) both'
    }
  }, Object.keys(RANGES).map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onMouseDown: () => {
      setRange(r);
      setOpen(false);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '8px 12px',
      borderRadius: 7,
      border: 'none',
      background: r === range ? 'var(--blue-50)' : 'transparent',
      color: r === range ? 'var(--color-primary)' : 'var(--ink-2)',
      fontSize: 13.5,
      fontWeight: r === range ? 600 : 500,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)'
    }
  }, RANGE_LABELS[r]()))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, t('Volume total', 'Total volume')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    key: range + 'v',
    value: d.vol
  }), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "XAF")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--success)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 13,
    color: "var(--success)"
  }), d.dv, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      margin: '16px 0 16px'
    }
  }, /*#__PURE__*/React.createElement(LineChart, {
    pts: d.pts,
    k: range,
    tip: d.tip,
    axis: d.axis
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, t('Transactions réussies', 'Successful transactions')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 21,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    key: range + 't',
    value: d.tx
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--success)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 12,
    color: "var(--success)"
  }), d.dtx, "%"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, t('Taux de succès', 'Success rate')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 21,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    key: range + 's',
    value: d.sr,
    decimals: 1,
    suffix: "%"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--success)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 12,
    color: "var(--success)"
  }), d.dsr, "%")))));
}
function HomeHero({
  onNav
}) {
  return /*#__PURE__*/React.createElement(Hero, {
    tone: "navy",
    style: {
      padding: '68px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal in"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12.5,
      fontWeight: 600,
      color: '#fff',
      background: 'rgba(255,255,255,.10)',
      border: '1px solid rgba(255,255,255,.18)',
      borderRadius: 999,
      padding: '5px 12px',
      marginBottom: 18,
      backdropFilter: 'blur(4px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--cyan-400)'
    }
  }), t('En service dans 12 marchés · 40+ moyens de paiement', 'Live in 12 markets · 40+ payment methods')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 46,
      fontWeight: 800,
      letterSpacing: '-.03em',
      lineHeight: 1.1,
      margin: 0,
      color: '#fff'
    }
  }, t('Emmany Gateway, une API PSP pour orchestrer vos ', 'Emmany Gateway, a PSP API to orchestrate your '), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--gradient-brand)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, t('paiements numériques', 'digital payments')), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,.82)',
      margin: '20px 0 0',
      maxWidth: 490
    }
  }, t('Une plateforme complète et modulaire pour collecter, router, suivre et réconcilier les paiements à grande échelle.', 'A complete, modular platform to collect, route, track and reconcile payments at scale.')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contact'),
    className: "em-btn em-btn-primary",
    style: {
      height: 48,
      padding: '0 24px',
      borderRadius: 8,
      border: 'none',
      background: 'var(--color-primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15.5
    }
  }, t('Créer un compte', 'Create account')), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('docs'),
    className: "em-btn",
    style: {
      height: 48,
      padding: '0 22px',
      borderRadius: 8,
      background: 'rgba(255,255,255,.08)',
      color: '#fff',
      border: '1.5px solid rgba(255,255,255,.28)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15.5,
      backdropFilter: 'blur(4px)'
    }
  }, t('Explorer la documentation', 'Explore the docs')))), /*#__PURE__*/React.createElement("div", {
    className: "em-hero-visual",
    style: {
      position: 'relative'
    }
  }, [{
    ic: 'receipt',
    left: -34,
    top: 40,
    d: 0
  }, {
    ic: 'file-text',
    left: -42,
    top: 330,
    d: 1.1
  }, {
    ic: 'banknote',
    right: -34,
    top: 60,
    d: 0.6
  }, {
    ic: 'file-check',
    right: -42,
    top: 310,
    d: 1.7
  }].map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: f.ic,
    style: {
      position: 'absolute',
      left: f.left,
      right: f.right,
      top: f.top,
      width: 46,
      height: 46,
      borderRadius: 13,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 3,
      animation: `floatY ${4.5 + i}s var(--ease-in-out) ${f.d}s infinite`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.ic,
    size: 21,
    color: "var(--color-primary)"
  }))), /*#__PURE__*/React.createElement(TxOverview, null))));
}
function StatBand() {
  const stats = [[240000000, () => t('Volume traité par an', 'Volume processed per year'), 'XAF', 0], [24763, () => t('Transactions / jour', 'Transactions / day'), '', 0], [40, () => t('Moyens de paiement', 'Payment methods'), '+', 0], [99.9, () => t('Disponibilité SLA', 'SLA uptime'), '%', 1]];
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 40,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      borderRadius: 16,
      overflow: 'hidden'
    }
  }, stats.map(([v, l, suf, dec], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface)',
      padding: '26px 22px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--color-primary)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    value: v,
    decimals: dec,
    suffix: suf === 'XAF' ? '' : suf
  }), suf === 'XAF' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, " XAF")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, l())))));
}

// Fonctionnalités Emmany Gateway (fusionnées depuis l'ancienne page produit).
function GatewayFeatures({
  onNav
}) {
  const feats = [['wallet', () => t('Collecte de paiements', 'Payment collection'), () => t('Initiez des paiements simples et sécurisés sur tous les canaux.', 'Initiate simple, secure payments across every channel.')], ['git-branch', () => t('Orchestration Mobile Money', 'Mobile Money orchestration'), () => t('Routez automatiquement vers le meilleur canal pour maximiser le succès.', 'Automatically route to the best channel to maximise success.')], ['list-checks', () => t('Suivi transactionnel', 'Transaction tracking'), () => t('Suivez chaque transaction en temps réel avec des statuts détaillés.', 'Track every transaction in real time with detailed statuses.')], ['webhook', () => t('Webhooks marchands', 'Merchant webhooks'), () => t('Recevez des notifications en temps réel sur les événements clés.', 'Receive real-time notifications on key events.')], ['key-round', () => t('Clés API', 'API keys'), () => t('Générez et gérez vos clés API en toute sécurité par projet.', 'Generate and manage your API keys securely per project.')], ['layout-dashboard', () => t('Dashboard', 'Dashboard'), () => t('Visualisez vos indicateurs clés avec des tableaux de bord intuitifs.', 'Visualise your key metrics with intuitive dashboards.')], ['download', () => t('Historique & exports', 'History & exports'), () => t('Exportez vos transactions et réconciliations en quelques clics.', 'Export your transactions and reconciliations in a few clicks.')], ['radar', () => t('Monitoring', 'Monitoring'), () => t('Surveillez la performance de vos paiements et alertes en temps réel.', 'Monitor payment performance and alerts in real time.')], ['shield-check', () => t('Sécurité & conformité', 'Security & compliance'), () => t('Données chiffrées, journalisation complète et conformité réglementaire.', 'Encrypted data, full logging and regulatory compliance.')]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '54px 0',
      background: 'linear-gradient(180deg,rgba(240,245,255,.35),rgba(255,255,255,.30)), url(../../assets/platform-bg.jpg) center/cover no-repeat'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 36px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t('La plateforme', 'The platform')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '12px 0 0'
    }
  }, t('Tout ce qu\'il faut pour orchestrer vos paiements', 'Everything you need to orchestrate payments'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, feats.map(([ic, tt, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal em-card",
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 14,
      padding: 24,
      transitionDelay: `${i % 3 * 70}ms`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 12,
      background: i % 2 ? 'var(--cyan-50)' : 'var(--blue-50)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: i % 2 ? 'var(--cyan-600)' : 'var(--color-primary)'
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16.5,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, tt()), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '8px 0 0'
    }
  }, d()))))));
}
function WhyEmmany() {
  const feats = [['network', () => t('Connectivité africaine', 'African connectivity'), () => t('Accédez aux principaux moyens de paiement locaux à travers le continent.', 'Access the main local payment methods across the continent.')], ['git-branch', () => t('Orchestration intelligente', 'Smart orchestration'), () => t('Routage dynamique pour maximiser le succès de chaque paiement.', 'Dynamic routing to maximise the success of every payment.')], ['shield-check', () => t('Sécurité & conformité', 'Security & compliance'), () => t('Données chiffrées, API sécurisées, et conformité réglementaire.', 'Encrypted data, secure APIs and regulatory compliance.')], ['activity', () => t('Traçabilité complète', 'Full traceability'), () => t('Suivez chaque transaction en temps réel avec des rapports détaillés.', 'Track every transaction in real time with detailed reports.')]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '54px 0',
      background: 'var(--gray-50)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    style: {
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '0 0 36px'
    }
  }, t('Pourquoi choisir Emmany ?', 'Why choose Emmany?')), /*#__PURE__*/React.createElement("div", {
    className: "em-whyemmany",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 0
    }
  }, feats.map(([ic, tt, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal",
    style: {
      padding: '4px 28px',
      borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)',
      transitionDelay: `${i * 90}ms`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'var(--blue-50)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 21,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16.5,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, tt()), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '8px 0 0'
    }
  }, d()))))));
}

// Logos partenaires (bandeau défilant droite → gauche).
const PARTNERS = ['rhema', 'odellya', 'fonea', 'congo', 'momo', 'airtel', 'congotelecom', 'arpce', 'gaddigital', 'emiai'];
function Partners() {
  const loop = [...PARTNERS, ...PARTNERS];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 0',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 30px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t('Ils nous font confiance', 'Trusted by')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '12px 0 0'
    }
  }, t('Nos partenaires', 'Our partners')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--ink-3)',
      margin: '10px 0 0'
    }
  }, t('Banques, opérateurs et plateformes qui bâtissent sur Emmany.', 'Banks, operators and platforms building on Emmany.')))), /*#__PURE__*/React.createElement("div", {
    className: "em-marquee-mask",
    style: {
      position: 'relative',
      overflow: 'hidden',
      WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)',
      maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "em-marquee",
    style: {
      display: 'flex',
      width: 'max-content',
      gap: 8,
      alignItems: 'center',
      animation: 'emMarquee 40s linear infinite'
    }
  }, loop.map((name, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flexShrink: 0,
      width: 150,
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/partner-${name}.png`,
    alt: name,
    style: {
      maxHeight: 52,
      maxWidth: 120,
      width: 'auto',
      height: 'auto',
      objectFit: 'contain'
    }
  }))))));
}

// Carte de couverture : pays représentés sur l'Afrique selon leur position réelle + drapeaux.
const COVERAGE = [{
  cc: 'sn',
  fr: 'Sénégal',
  en: 'Senegal',
  lon: -15.5,
  lat: 14.7,
  c: 'var(--color-primary)'
}, {
  cc: 'ci',
  fr: "Côte d'Ivoire",
  en: 'Ivory Coast',
  lon: -5.3,
  lat: 6.9,
  c: 'var(--cyan-500)'
}, {
  cc: 'tg',
  fr: 'Togo',
  en: 'Togo',
  lon: 1.0,
  lat: 8.2,
  c: 'var(--color-primary)'
}, {
  cc: 'bj',
  fr: 'Bénin',
  en: 'Benin',
  lon: 2.5,
  lat: 9.5,
  c: 'var(--cyan-500)'
}, {
  cc: 'cm',
  fr: 'Cameroun',
  en: 'Cameroon',
  lon: 12.4,
  lat: 5.7,
  c: 'var(--color-primary)'
}, {
  cc: 'ga',
  fr: 'Gabon',
  en: 'Gabon',
  lon: 11.6,
  lat: -0.6,
  c: 'var(--cyan-500)'
}, {
  cc: 'cg',
  fr: 'Congo',
  en: 'Congo',
  lon: 15.3,
  lat: -2.8,
  c: 'var(--color-primary)'
}];
function AfricaCoverage() {
  const lang = useLang();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 0',
      background: 'linear-gradient(160deg,var(--cyan-50) 0%,var(--surface) 55%,var(--cyan-50) 120%)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 36px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t('Couverture', 'Coverage')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '12px 0 0'
    }
  }, t('Les pays couverts par Emmany', 'Countries covered by Emmany')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--ink-3)',
      margin: '10px 0 0'
    }
  }, t('Une infrastructure déployée à travers l\'Afrique de l\'Ouest et centrale.', 'Infrastructure deployed across West and Central Africa.'))), /*#__PURE__*/React.createElement("div", {
    className: "em-coverage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal em-cov-row",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px 30px'
    }
  }, COVERAGE.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.cc,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://flagcdn.com/w80/${c.cc}.png`,
    alt: c[lang] || c.fr,
    style: {
      width: 40,
      height: 27,
      objectFit: 'cover',
      borderRadius: 4,
      boxShadow: '0 0 0 1px var(--border-subtle)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: c.c,
      flexShrink: 0
    }
  }), c[lang] || c.fr), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, c.cc.toUpperCase()))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      color: 'var(--ink-3)',
      textAlign: 'center',
      margin: '26px 0 0'
    }
  }, t('+5 marchés bientôt', '+5 markets soon')))));
}

// Opérateurs partenaires + notation MMO.
const OPERATORS = [['../../assets/op-orange.png', 'Orange Money'], ['../../assets/op-mtn.png', 'MTN MoMo'], ['../../assets/op-airtel.png', 'Airtel Money'], ['../../assets/op-wave.png', 'Wave'], ['../../assets/op-moov.png', 'Moov Money'], ['../../assets/op-tmoney.png', 'T-Money']];
function Operators() {
  const ratings = [['9/10', () => t('Support', 'On support')], ['9/10', () => t('Fiable comme PSP', 'Trustworthy as a payment provider')], ['9,5/10', () => t('Relation partenaire', 'Partner relationship')]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 0',
      background: 'linear-gradient(160deg,rgba(234,240,254,.18),rgba(255,255,255,.12)), url(../../assets/operators-bg.jpg) center/cover no-repeat'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "em-operators",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t('Opérateurs', 'Operators')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 27,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: '#000',
      margin: '12px auto 26px',
      lineHeight: 1.2,
      maxWidth: 620
    }
  }, t('Connectez-vous à tous les grands opérateurs Mobile Money avec une seule intégration', 'Connect to all the leading mobile money operators with one single integration')), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: '16px 18px'
    }
  }, OPERATORS.map(([src, name], i) => /*#__PURE__*/React.createElement("li", {
    key: name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    title: name,
    className: "em-op-logo",
    style: {
      width: 86,
      height: 86,
      objectFit: 'contain',
      flexShrink: 0,
      borderRadius: 16
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: '#000'
    }
  }, name))))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: '#000',
      margin: '0 0 26px'
    }
  }, t('Comment ces opérateurs nous notent', "How these operators rate us")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18,
      maxWidth: 620,
      margin: '0 auto'
    }
  }, ratings.map(([score, l], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 84,
      height: 84,
      margin: '0 auto 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 999,
      background: 'radial-gradient(circle at 40% 35%, var(--cyan-300), var(--cyan-600))',
      boxShadow: '0 10px 24px rgba(0,168,155,.28)',
      animation: `floatY ${4 + i}s var(--ease-in-out) ${i * 0.3}s infinite`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      fontSize: score.length > 4 ? 19 : 22,
      fontWeight: 800,
      color: 'var(--navy-900)',
      letterSpacing: '-.02em'
    }
  }, score)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.4,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, l())))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      margin: '24px 0 0'
    }
  }, t('Retours de plus de 30 opérateurs Mobile Money.', 'Feedback from over 30 mobile money operators.'))))));
}
function PaymentMethods() {
  const m = [['smartphone', () => t('Mobile Money', 'Mobile Money'), 'MTN, Airtel, Moov…'], ['credit-card', () => t('Cartes & Wallets', 'Cards & Wallets'), 'Visa, Mastercard, Wave'], ['building-2', () => t('Virements bancaires', 'Bank transfers'), () => t('Comptes bancaires locaux', 'Local bank accounts')], ['ellipsis', () => t('Autres méthodes', 'Other methods'), () => t('USSD, QR, et plus', 'USSD, QR, and more')]];
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 40,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      background: 'linear-gradient(135deg,var(--cyan-50),var(--blue-50))',
      border: '1px solid var(--blue-100)',
      borderRadius: 16,
      padding: '28px 24px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: '0 0 22px'
    }
  }, t('Moyens de paiement disponibles', 'Available payment methods')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, m.map(([ic, tt, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "em-card",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'var(--blue-50)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--color-primary)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, tt()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, typeof d === 'function' ? d() : d)))))));
}
function UseCases() {
  const cases = [['shopping-bag', () => t('E-commerce & marketplaces', 'E-commerce & marketplaces'), () => t('Encaissez en mobile money et carte, gérez les remboursements et les paiements fractionnés.', 'Collect via mobile money and card, handle refunds and split payments.')], ['repeat', () => t('Abonnements & SaaS', 'Subscriptions & SaaS'), () => t('Prélèvements récurrents, relances automatiques et gestion fine des échecs.', 'Recurring charges, automatic retries and fine-grained failure handling.')], ['banknote', () => t('Versements & payouts', 'Disbursements & payouts'), () => t('Payez marchands, chauffeurs et fournisseurs en masse, en temps réel.', 'Pay merchants, drivers and suppliers in bulk, in real time.')], ['landmark', () => t('Banques & institutions', 'Banks & institutions'), () => t('Connectez de nouveaux canaux de paiement sans refondre votre core banking.', 'Connect new payment channels without re-platforming your core banking.')]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '16px 0 48px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 32px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t("Cas d'usage", 'Use cases')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '12px 0 0'
    }
  }, t('Une seule intégration, tous vos flux', 'One integration, all your flows'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: '28px 40px'
    }
  }, cases.map(([ic, tt, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal",
    style: {
      display: 'flex',
      gap: 16,
      transitionDelay: `${i * 80}ms`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 46,
      borderRadius: 12,
      background: 'var(--gradient-brand)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16.5,
      fontWeight: 700,
      color: 'var(--ink)',
      margin: 0
    }
  }, tt()), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '6px 0 0'
    }
  }, d())))))));
}
function DevBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--gradient-flow)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -30,
      bottom: -30,
      width: 180,
      height: 180,
      backgroundImage: `url(${MARK})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      opacity: .1,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      padding: '40px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: '#fff',
      margin: 0
    }
  }, t('Conçue pour les développeurs', 'Built for developers')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 20
    }
  }, [() => t('API RESTful simple et documentée', 'Simple, documented RESTful API'), () => t('Webhooks en temps réel', 'Real-time webhooks'), () => t('SDKs et bibliothèques disponibles', 'SDKs and libraries available')].map((tt, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      color: '#eaf3ff',
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--cyan-400)"
  }), tt())))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'rgba(2,12,31,.72)',
      border: '1px solid rgba(255,255,255,.14)',
      borderRadius: 12,
      padding: '16px 18px',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.8,
      color: '#e6ecf5',
      backdropFilter: 'blur(4px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#7ee3d8'
    }
  }, "POST ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "/v1/payments")), /*#__PURE__*/React.createElement("div", null, '{'), /*#__PURE__*/React.createElement("div", null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"amount\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ffd479'
    }
  }, "10000"), ","), /*#__PURE__*/React.createElement("div", null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"currency\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7ee3d8'
    }
  }, "\"XAF\""), ","), /*#__PURE__*/React.createElement("div", null, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#9fb0cc'
    }
  }, "\"country\""), ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7ee3d8'
    }
  }, "\"CG\"")), /*#__PURE__*/React.createElement("div", null, '}')))));
}
function Home({
  onNav
}) {
  useLucide('home');
  useLang();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HomeHero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(StatBand, null), /*#__PURE__*/React.createElement(GatewayFeatures, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(WhyEmmany, null), /*#__PURE__*/React.createElement(Partners, null), /*#__PURE__*/React.createElement(Operators, null), /*#__PURE__*/React.createElement(AfricaCoverage, null), /*#__PURE__*/React.createElement(PaymentMethods, null), /*#__PURE__*/React.createElement(UseCases, null), /*#__PURE__*/React.createElement(DevBand, null));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages/Pricing.jsx
try { (() => {
// Emmany — Tarifs & frais : hero coloré + onglets (Frais PSP / opérateur) + estimateur.
const {
  useState: useStatePr
} = React;

// { n: nom, op: frais opérateur (%), psp: frais PSP Emmany (%) }. op:0 = frais fixe (virement).
const COUNTRY_METHODS = {
  'République du Congo (CG)': [{
    n: 'MTN Mobile Money Congo',
    op: 1.50,
    psp: 0.70
  }, {
    n: 'Airtel Money Congo',
    op: 1.50,
    psp: 0.70
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  'Cameroun (CM)': [{
    n: 'Orange Money Cameroun',
    op: 1.55,
    psp: 0.75
  }, {
    n: 'MTN Mobile Money Cameroun',
    op: 1.60,
    psp: 0.75
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  'Gabon (GA)': [{
    n: 'Airtel Money Gabon',
    op: 1.60,
    psp: 0.75
  }, {
    n: 'Moov Money Gabon',
    op: 1.65,
    psp: 0.75
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  'Bénin (BJ)': [{
    n: 'MTN Mobile Money Bénin',
    op: 1.50,
    psp: 0.70
  }, {
    n: 'Moov Money Bénin',
    op: 1.55,
    psp: 0.70
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  'Togo (TG)': [{
    n: 'T-Money (Togocom)',
    op: 1.55,
    psp: 0.70
  }, {
    n: 'Moov Money (Flooz)',
    op: 1.55,
    psp: 0.70
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  'Sénégal (SN)': [{
    n: 'Orange Money Sénégal',
    op: 1.50,
    psp: 0.65
  }, {
    n: 'Wave Sénégal',
    op: 1.00,
    psp: 0.60
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }],
  "Côte d'Ivoire (CI)": [{
    n: 'Orange Money Côte d\'Ivoire',
    op: 1.50,
    psp: 0.65
  }, {
    n: 'MTN Mobile Money Côte d\'Ivoire',
    op: 1.50,
    psp: 0.70
  }, {
    n: 'Virement bancaire (Banques locales)',
    op: 0,
    psp: 0.50
  }, {
    n: 'Cartes (Visa/Mastercard)',
    op: 2.50,
    psp: 0.80
  }]
};
function Estimator({
  bg
}) {
  const [amount, setAmount] = useStatePr(100000);
  const [country, setCountry] = useStatePr('République du Congo (CG)');
  const [method, setMethod] = useStatePr(COUNTRY_METHODS['République du Congo (CG)'][0].n);
  const methods = COUNTRY_METHODS[country] || [];
  const onCountry = e => {
    const c = e.target.value;
    setCountry(c);
    setMethod((COUNTRY_METHODS[c] || [{}])[0].n);
  };
  const sel = methods.find(m => m.n === method) || methods[0] || {
    op: 0,
    psp: 0
  };
  const opRate = sel.op / 100,
    pspRate = sel.psp / 100;
  const pct = v => v.toFixed(2) + '%';
  const fmt = n => Math.round(n).toLocaleString('fr-FR').replace(/\u202f/g, ',');
  const op = amount * opRate,
    psp = amount * pspRate,
    net = amount - op - psp;
  const inp = {
    width: '100%',
    height: 44,
    padding: '0 12px',
    border: '1.5px solid var(--border-default)',
    borderRadius: 8,
    fontFamily: 'var(--font-sans)',
    fontSize: 14.5,
    color: 'var(--ink)',
    outline: 'none',
    background: 'var(--surface)',
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg || 'var(--gradient-flow)',
      border: 'none',
      borderRadius: 16,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: '#fff',
      marginBottom: 18
    }
  }, t('Estimez vos frais', 'Estimate your fees')), /*#__PURE__*/React.createElement("div", {
    className: "em-estimator",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'rgba(255,255,255,.9)'
    }
  }, t('Pays', 'Country')), /*#__PURE__*/React.createElement("select", {
    value: country,
    onChange: onCountry,
    style: {
      ...inp,
      appearance: 'none'
    }
  }, Object.keys(COUNTRY_METHODS).map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'rgba(255,255,255,.9)'
    }
  }, t('Moyen de paiement', 'Payment method')), /*#__PURE__*/React.createElement("select", {
    value: method,
    onChange: e => setMethod(e.target.value),
    style: {
      ...inp,
      appearance: 'none'
    }
  }, methods.map(m => /*#__PURE__*/React.createElement("option", {
    key: m.n
  }, m.n)))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'rgba(255,255,255,.9)'
    }
  }, t('Montant de transaction', 'Transaction amount')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: amount,
    onChange: e => setAmount(Number(e.target.value) || 0),
    style: inp
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 34,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, "XAF")))), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 22,
    color: "rgba(255,255,255,.6)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.7)'
    }
  }, t('Frais opérateur', 'Operator fee')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: '#fff'
    }
  }, fmt(op), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'rgba(255,255,255,.7)'
    }
  }, "XAF"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'rgba(255,255,255,.7)'
    }
  }, sel.op ? '(' + pct(sel.op) + ')' : t('(frais fixe)', '(flat fee)')))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.7)'
    }
  }, t('Commission Emmany', 'Emmany commission')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: '#fff'
    }
  }, fmt(psp), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'rgba(255,255,255,.7)'
    }
  }, "XAF"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#fff'
    }
  }, "(", pct(sel.psp), ")"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.25)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.7)'
    }
  }, t('Montant net estimé', 'Estimated net amount')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: '#fff'
    }
  }, fmt(net), " XAF")))));
}
function Pricing() {
  useLucide('pricing');
  useLang();
  const TABS = [{
    label: () => t('Commission Emmany', 'Emmany commission'),
    pct: '0.50% – 0.80%',
    cap: () => t('Selon le moyen de paiement · plafond min. 50 XAF', 'By payment method · min. 50 XAF cap'),
    color: 'var(--color-primary)',
    desc: () => t('La commission Emmany prélevée sur chaque transaction réussie. Le taux varie entre 0.50% et 0.80% selon le moyen de paiement.', 'The Emmany commission charged on each successful transaction. The rate ranges from 0.50% to 0.80% depending on the payment method.'),
    bullets: [() => t('Appliqué sur le montant de la transaction', 'Applied on the transaction amount'), () => t('Pas de frais cachés', 'No hidden fees'), () => t('Facturation en XAF', 'Billed in XAF')]
  }, {
    label: () => t('Frais opérateur', 'Operator fees'),
    pct: '1.50% – 2.50%',
    cap: () => t("Selon l'opérateur & le canal", 'By operator & channel'),
    color: 'var(--cyan-600)',
    desc: () => t('Frais reversés aux opérateurs Mobile Money et réseaux de cartes. Variables par pays.', 'Fees passed on to Mobile Money operators and card networks. Vary by country.'),
    bullets: [() => t('Mobile Money : 1.50% en moyenne', 'Mobile Money: 1.50% on average'), () => t('Cartes Visa/Mastercard : 2.50%', 'Visa/Mastercard cards: 2.50%'), () => t('Virement bancaire : frais fixes', 'Bank transfer: flat fees')]
  }];
  const [tab, setTab] = useStatePr(0);
  const tb = TABS[tab];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    tone: "teal",
    style: {
      padding: '52px 0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal in",
    style: {
      textAlign: 'center',
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t('Tarifs', 'Pricing')), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 36,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: '12px 0 0'
    }
  }, t('Tarification transparente, sans surprise', 'Transparent pricing, no surprises')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      color: 'var(--ink-3)',
      margin: '12px 0 0'
    }
  }, t('Des frais clairs et compétitifs pour tous vos paiements.', 'Clear, competitive fees for all your payments.')))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 36,
      flexWrap: 'wrap'
    }
  }, TABS.map((x, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "em-navlink",
    onClick: () => setTab(i),
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      fontWeight: 600,
      padding: '12px 18px',
      color: tab === i ? 'var(--color-primary)' : 'var(--ink-3)',
      borderBottom: `2px solid ${tab === i ? 'var(--color-primary)' : 'transparent'}`,
      marginBottom: -1
    }
  }, x.label()))), /*#__PURE__*/React.createElement("div", {
    key: tab,
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 24,
      alignItems: 'start',
      animation: 'fadeUp .35s var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 16,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, tb.label(), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, t('(par transaction)', '(per transaction)'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: '-.03em',
      color: tb.color,
      margin: '8px 0 4px'
    }
  }, tb.pct), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag",
    size: 14,
    color: "var(--text-muted)"
  }), tb.cap()), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--ink-3)',
      margin: '0 0 18px'
    }
  }, tb.desc()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, tb.bullets.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 14,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    color: "var(--success)"
  }), b())))), /*#__PURE__*/React.createElement(Estimator, {
    bg: tab === 1 ? 'linear-gradient(150deg, var(--cyan-500) 0%, var(--cyan-600) 55%, var(--cyan-700) 120%)' : 'var(--gradient-flow)'
  })), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      marginTop: 24,
      background: 'var(--gray-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 12,
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18,
    color: "var(--gray-500)",
    style: {
      marginTop: 1,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, t("Ces frais sont indicatifs et peuvent varier selon votre contrat marchand, l'opérateur et le pays. Les frais opérateur peuvent également inclure la TVA le cas échéant.", 'These fees are indicative and may vary based on your merchant contract, the operator and the country. Operator fees may also include VAT where applicable.'))))));
}
Object.assign(window, {
  Pricing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
