const types = {
  text: {
    background: "transparent",
    padding: 0
  }
};
const Button = ({ children, version, ...props }) => (
  <button
    css={({ backgroundsColors, colors }) => ({
      color: colors.primary,
      background: backgroundsColors.secondary,
      border: 0,
      fontSize: "inherit",
      padding: 10,
      borderRadius: 5,
      cursor: "pointer",
      ...(version && types[version])
    })}
    {...props}
  >
    {children}
  </button>
);

export default Button;
