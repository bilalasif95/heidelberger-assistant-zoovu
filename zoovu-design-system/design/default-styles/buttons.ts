const commonButtonProps = {
    "position": "relative",
    "display": "block",
    "boxSizing": "border-box",
    "overflow": "hidden",
    "fontSize": "14px",
    "fontWeight": 600,
    "cursor": "pointer",
    "textTransform": "upperCase",
    "borderRadius": "4px",
    "padding": "8px 16px",
    "letterSpacing": "0.4px",
    "borderWidth": 0,
    "transition": "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&::after": {
        content: '""',
        display: "block",
        position: "absolute",
        left: "50%",
        top: "50%",
        borderRadius: "50%",
        padding: " 50%",
        width: "32px",
        /* Safari */
        height: "32px",
        /* Safari */
        backgroundColor: "white",
        opacity: 0,
        transform: "translate(-50%, -50%) scale(1)",
        transition: "opacity 1s, transform 0.5s"
    },
    "&:focus": {
        outline: 0
    },
};

const buttons = {
    raisedButton: {
        ...commonButtonProps,
        "color": "white",
        "backgroundColor": "#00D2B4",
        "borderWidth": 0,
        "boxShadow": "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
        "margin": "20px",
        "&:hover": {
            backgroundColor: "#00c1a5"
        },
        "&:active": {
            "&::after": {
                opacity: "0.5",
                transform: "translate(-50%, -50%) scale(0)",
                transition: "transform 0s"
            }
        },
    },
    flatButton: {
        ...commonButtonProps,
        "color": "#00D2B4",
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "boxShadow": 0,
        "&:hover": {
            backgroundColor: "#bcbcbc",
        },
        "&:active": {
            "&::after": {
                opacity: "0.5",
                transform: "translate(-50%, -50%) scale(0)",
                transition: "transform 0s"
            }
        },
    },
};

export default buttons;