const Input = ({ ...props }) => {
  return (
    <input
      css={({ backgroundsColors, colors }) => ({
        width: "100%",
        color: colors.primary,
        background: backgroundsColors.secondary,
        padding: 10,
        border: 0,
        borderRadius: 5,
        fontSize: "inherit"
      })}
      {...props}
    />
  );
};

export default Input;
