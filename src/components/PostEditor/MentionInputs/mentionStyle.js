export default {
  control: {
    backgroundColor: "#fff",

    fontSize: "14px",
    lineHeight: 1.5,
    fontWeight: "normal",
    borderRadius: "6px",

    marginTop: "10px",
    marginBottom: "20px",
    width: "500px",
    height: "97px",
  },

  highlighter: {
    overflow: "hidden",
  },

  input: {
    margin: 0,
  },

  "&singleLine": {
    control: {
      display: "block",
      height: "34px",
    },

    highlighter: {
      padding: 9,
      // border: "2px inset transparent",
    },

    input: {
      padding: 9,
      outline: 0,
      border: "1px solid silver",
      borderRadius: "6px",
    },
  },

  "&multiLine": {
    control: {
      border: "1px solid silver",
    },

    highlighter: {
      padding: 9,
    },

    input: {
      padding: 9,
      minHeight: 20,
      outline: 0,
      border: 0,
    },
  },

  suggestions: {
    list: {
      backgroundColor: "white",
      border: "1px solid rgba(0,0,0,0.15)",
      fontSize: 12,
      borderRadius: 6,
      boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.1)",
    },

    item: {
      padding: "5px 15px",
      borderBottom: "1px solid rgba(0,0,0,0.15)",

      "&focused": {
        backgroundColor: "#cee4e5",
      },
    },
  },
};
