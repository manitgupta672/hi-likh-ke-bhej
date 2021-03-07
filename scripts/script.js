var WA = (function () {
  el = {
    cc: document.getElementById('cc'),
    phone: document.getElementById('phone'),
    submitBtn: document.getElementById('submit-btn')
  };
  
  methods = {};

  scope = {
    products: [],
  };

  constants = {
      API_URL: 'https://api.whatsapp.com/send/?phone='
  }
  
  methods.submit = function (event) {
    event.preventDefault();
    console.log('yo')
    let cc = document.getElementById('cc').value;
    let phone = document.getElementById('phone').value;

    if (cc !== undefined && cc.length > 0){
        cc = cc.replaceAll("+", "");
    } else {
        alert("Please fill country code.")
        return
    }

    if (phone !== undefined && phone.length > 0){
        phone = phone.replaceAll("+", "")
    } else {
        alert("Please fill up the Mobile Number.")
        return
    }

    return methods.callAPI(cc+phone)
  };

  methods.callAPI = function (phoneWithCountryCode){
    console.log({phoneWithCountryCode});

    location.href = constants.API_URL + phoneWithCountryCode;
  }

  var init2 = function () {
    var jevent_list = [
      {
        event_target: el.submitBtn,
        event_type: "click",
        event_handler: methods.submit,
      },
    ];

    for (var index in jevent_list) {
      var item = jevent_list[index];
      var event_target = item["event_target"];
      var event_type = item["event_type"];
      var event_handler = item["event_handler"];
    //   event_target.bind(event_type, event_handler);
      event_target.addEventListener(event_type, event_handler)
    }
  };

  init2();

  return {
    el: el,
    methods: methods,
    scope: scope,
  };
})();
