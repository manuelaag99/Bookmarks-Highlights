/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    colors: {
      "var-1": "#fff",
      "var-2": "#F8FBFF",
      "var-3": "#E2F0FF",
      "var-4": "#5D748E",
      "var-4-hovered": "#8badd4",
      "var-5": "#001",
      "var-6": "#6E85A0",
      "facebook": "#1877F2",
    },
    borderRadius: {
      "circle": "50%"
    },
    fontSize: {
      "dsk-profile-name": "1.3rem",
      "dsk-profile-bio": "1rem",
      "dsk-breaker": "1.15rem",
      "dsk-options": "1rem",
      "dsk-card-title": "1.3rem",
      "dsk-card-text": "1rem",
      "dsk-card-button": "1.3rem",
      "dsk-add-command": "1rem",
      "tbl-profile-name": "",
      "tbl-profile-bio": "",
      "tbl-breaker": "",
      "tbl-options": "",
      "tbl-card-title": "",
      "tbl-card-text": "",
      "tbl-card-button": "",
      "tbl-add-command": "1rem",
      "mob-profile-name": "",
      "mob-profile-bio": "",
      "mob-breaker": "",
      "mob-options": "",
      "mob-card-title": "",
      "mob-card-text": "",
      "mob-card-button": "",
      "mob-add-command": "3rem"
    },
    extend: {
      height: {
        "13": "32rem",
        "76": "19rem",
        "102": "26rem",
      },
      width: {
        "66": "17rem",
        "76": "20rem",
        "88": "22rem"
      }
    }
  },
  plugins: [],
}
