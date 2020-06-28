export const styles = theme => (
  {
    iconWrapper: {
      borderRadius: theme.shape.borderRadius,
      textAlign: "center",
      marginBottom: theme.spacing(3),
      padding: theme.spacing(1) * 1.5,
      borderRadius: "2px",
      borderStyle: "solid"
    },
    LargeButton: {
      fontSize: theme.typography.body1.fontSize,
    },
    extraLargeButton: {
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
    },
    Button: {
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
    },
    card: {
      boxShadow: theme.shadows[4],
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      padding: theme.spacing(6),
    },
    wrapper: {
      marginBottom: theme.spacing(2),
      position: "relative",
      backgroundImage: "url(/main_bg.jpg)",
      backgroundSize: "cover",
      paddingBottom: theme.spacing(2)
    },
    footerwrapper: {
      marginTop: theme.spacing(3),
      position: "relative",
      backgroundImage: "url(/main_bg.jpg)",
      backgroundSize: "cover",
      paddingBottom: theme.spacing(2)
    },
    container: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(12),
    },
    containerFix: {
      maxWidth: "none !important"
    },
    footerInner: {
      backgroundColor: theme.palette.common.darkBlack,
      paddingTop: theme.spacing(8),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(6),
    },
    BigFont: {
      fontWeight: 400,
      color: theme.palette.common.white
    },
    paragraph: {
      fontWeight: 400,
      color: theme.palette.common.white
    },
    whiteBg: {
      backgroundColor: theme.palette.common.white
    }
  });
