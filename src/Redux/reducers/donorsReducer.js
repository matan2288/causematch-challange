const donors = [
  { name: "Zisi Reifer", amount: "$36", key: 8 },
  { name: "Yehoshua & Rachel", amount: "$100", key: 6 },
  { name: "Yechezel Gershbaum", amount: "$360", key: 5 },
  { name: "Tzippy Protovin", amount: "$167", key: 4 },
  { name: "Tzipporah Bishop", amount: "$18", key: 3 },
  { name: "Yosef Struman", amount: "$10", key: 7 },
  { name: "Simi snow ", amount: "$50", key: 2 },
  { name: "Shya Hershkovits", amount: "$7", key: 1 },
  { name: "Shlomo Muller", amount: "$18", key: 0 },
];

const donorsReducer = (state = donors, action) => {
  switch (action.type) {
    case "FILTER1":
      return [
        //by key
        ...state.sort((a, b) => a.key - b.key),
      ];

    case "FILTER2":
      return [
        //by  reverse alphabet
        ...state.reverse(),
      ];

    default:
      return state;
  }
};

export default donorsReducer;
