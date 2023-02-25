/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    colors: {
      "var-1": "#fff",
      "var-1-hovered": "#efefef",
      "var-2": "#F8FBFF",
      "var-3": "#E2F0FF",
      "var-4": "#5D748E",
      "var-4-hovered": "#8badd4",
      "var-5": "#001",
      "var-6": "#6E85A0",
      "var-7": "#93a6bb",
      "red-btn": "#CC4455",
      "red-hvr": "#f07f8c",
      "facebook": "#1877D0",
      "facebook-hovered": "#4592f4"
    },
    borderRadius: {
      "circle": "50%",
      "tag": "13px"
    },
    fontSize: {
      "settings-size": "3rem",
      "logo-big-ltr": "6rem",
      "logo-sml-ltr": "2rem",
      "tagline": "1.3rem",
      "mob-addBandHbtns": "1.2rem",
      "dsk-addBandHbtns": "1.7rem",
      "dsk-profile-name": "1.3rem",
      "dsk-profile-bio": "1rem",
      "dsk-breaker": "1.15rem",
      "dsk-options": "1rem",
      "dsk-card-title": "1.1rem",
      "mob-card-title": "1.3rem",
      "dsk-card-text": "1rem",
      "dsk-card-button": "1.3rem",
      "dsk-add-command": "1rem",
      "add-or-update-p": "1.2rem",
      "tbl-add-command": "1rem",
      "mob-add-command": "3rem"
    },
    extend: {
      minWidth: {
        "3/10": "30%",
        "88": "22rem",
        "9/10": "90%"
      },
      minHeight: {
        "7": "1.75rem",
        "24": "6rem",
        "44": "11rem",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "2/3": "66%",
        "7/10": "70%",
        "8/10": "80%",
        "800": "800px",
        "30": "4rem",
        "102": "26rem"
      },
      maxHeight: {
        "96": "24rem",
        "104": "26rem"
      },
      height: {
        "13": "32rem",
        "76": "19rem",
        "88": "22rem",
        "102": "26rem",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "95": "95%",
        "10th": "10vh",
        "30vh": "30vh",
        "1/9": "11%",
        "8/9": "88%"
      },
      width: {
        "1/12": "8.3%",
        "1/10": "10%",
        "15": "15%",
        "2/10": "20%",
        "22": "22%",
        "3/10": "30%",
        "6/10": "60%",
        "66": "17rem",
        "76": "20rem",
        "88": "22rem",
        "7/10": "70%",
        "8/10": "80%",
        "85": "85%",
        "9/10": "90%",
        "95": "95%"
      },
      boxShadow: {
        "card": "1px 1px 2px rgb(179, 179, 179)",
        "addbtn": "1px 1px 4px #111"
      }
    }
  },
  plugins: [],
}
