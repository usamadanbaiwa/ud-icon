(
  () => {
    //Object.entries(iconObject).forEach(([key, value])=> {
    var iElement = document.querySelectorAll("i");

    for (let j = 0; j < iElement.length; j++) {
      /* is the i tag is for icon
        /*
        */
      var isForIcon = iElement[j].getAttribute("icon-name");

      if (isForIcon) {
        /* get the icon setting
        /* attribute
        /* icon-width
        /* icon-height
        /* icon-color
        /*
        */
        const widthAttribute = iElement[j].getAttribute("icon-width");
        const heightAttribute = iElement[j].getAttribute("icon-height");
        const colorAttribute = iElement[j].getAttribute("icon-color");

        var iconWidth;
        var iconHeight;
        var iconColor;
        /* assign the getAttribute value to
        /* the variables
        /* and add it to the icon function
        /*
        */
        widthAttribute ? iconWidth = widthAttribute: iconWidth = null;
        heightAttribute ? iconHeight = heightAttribute: iconHeight = null;
        colorAttribute ? iconColor = colorAttribute: iconColor = null;
        /* call the icons and add
        /* the params
        /*
        */
        iElement[j].innerHTML = window[isForIcon]({
          height: iconHeight, width: iconWidth, color: iconColor
        })
      }
    }
    //})
  }
)()
/* all icons functions array are here
    /*
    */
function homepage(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="-5.04 -5.04 38.08 38.08" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="'+color+'" stroke-width="0.00028"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.8400000000000001"></g><g id="SVGRepo_iconCarrier"><path clip-rule="evenodd" d="M16.3382 1.94393L25.9705 9.82424L26.0201 9.8788C26.1701 10.0437 26.3998 10.3064 26.5943 10.6198C26.7798 10.9189 27 11.3686 27 11.8956V24.9976C27 26.1013 26.1068 27 25 27H18.7601C17.9317 27 17.2601 26.3284 17.2601 25.5V20.7939C17.2601 18.9948 15.8058 17.5405 14.0168 17.5405C12.2279 17.5405 10.7735 18.9948 10.7735 20.7939V25.5C10.7735 26.3284 10.102 27 9.27354 27H3C1.89318 27 1 26.1013 1 24.9976V11.7425C1 11.0901 1.36299 10.564 1.56986 10.3028C1.69049 10.1505 1.80873 10.0264 1.89631 9.94036C1.9407 9.89677 1.97877 9.86147 2.0074 9.83565C2.02175 9.8227 2.03384 9.81204 2.0433 9.80382L2.05551 9.79329L2.06007 9.7894L2.06278 9.7871C2.06278 9.7871 2.06356 9.78646 2.7075 10.5515L2.06356 9.78646L2.07352 9.77807L11.6288 1.94617C12.9452 0.685478 15.0206 0.684487 16.3382 1.94393ZM3.35246 11.3159L3.3468 11.3209C3.33673 11.33 3.31953 11.3459 3.29759 11.3674C3.25251 11.4117 3.19388 11.4736 3.13764 11.5446C3.07966 11.6178 3.038 11.6834 3.01374 11.7344C3.00661 11.7494 3.00238 11.7602 3 11.767V24.9976L3.00006 24.9992L3.0007 25H8.77354V20.7939C8.77354 17.8948 11.1188 15.5405 14.0168 15.5405C16.9149 15.5405 19.2601 17.8948 19.2601 20.7939V25H24.9993L24.9999 24.9992L25 24.9976V11.8956C25 11.8989 25.0008 11.8992 25 11.8956C24.9966 11.8812 24.9788 11.8095 24.8948 11.6742C24.8108 11.5389 24.7005 11.4037 24.588 11.2772L15.004 3.43645L14.9714 3.40439C14.4228 2.86484 13.5451 2.86525 12.997 3.40534L12.9644 3.43744L3.35246 11.3159Z" fill="'+color+'" fill-rule="evenodd"></path></g></svg>';
}
function notification(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.53 16.25C20.44 16.25 18.42 15.89 18.42 10C18.42 5.84 16 3.25 12 3.25C8 3.25 5.58 5.84 5.58 10C5.58 16 3.49 16.25 3.5 16.25C3.30109 16.25 3.11032 16.329 2.96967 16.4697C2.82902 16.6103 2.75 16.8011 2.75 17C2.75 17.1989 2.82902 17.3897 2.96967 17.5303C3.11032 17.671 3.30109 17.75 3.5 17.75H8.33C8.49694 18.6007 8.95423 19.367 9.62366 19.9178C10.2931 20.4686 11.1331 20.7698 12 20.7698C12.8669 20.7698 13.7069 20.4686 14.3763 19.9178C15.0458 19.367 15.5031 18.6007 15.67 17.75H20.51C20.7089 17.75 20.8997 17.671 21.0403 17.5303C21.181 17.3897 21.26 17.1989 21.26 17C21.26 16.8011 21.181 16.6103 21.0403 16.4697C20.8997 16.329 20.7089 16.25 20.51 16.25H20.53ZM12 19.25C11.5363 19.2491 11.0843 19.1044 10.7064 18.8357C10.3284 18.567 10.0432 18.1877 9.89 17.75H14.11C13.9568 18.1877 13.6716 18.567 13.2936 18.8357C12.9157 19.1044 12.4637 19.2491 12 19.25ZM5.76 16.25C6.48 15.16 7.08 13.25 7.08 10C7.08 6.75 8.88 4.75 12 4.75C15.12 4.75 16.92 6.66 16.92 10C16.92 13.34 17.52 15.16 18.24 16.25H5.76Z" fill="'+color+'"/></svg>';
}
function chat(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="-4.5 -4.5 34.00 34.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.1631 5H15.8381C17.8757 5.01541 19.5151 6.67943 19.5001 8.717V13.23C19.5073 14.2087 19.1254 15.1501 18.4384 15.8472C17.7515 16.5442 16.8158 16.9399 15.8371 16.947H9.1631L5.5001 19V8.717C5.49291 7.73834 5.8748 6.79692 6.56175 6.09984C7.24871 5.40276 8.18444 5.00713 9.1631 5Z" stroke="'+color+'" stroke-width="0.825" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';
}
function repost(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg fill="#000000" width="'+width+'" height="'+height+'" viewBox="-5.28 -5.28 34.56 34.56" id="bottom-right-circle" xmlns="http://www.w3.org/2000/svg" class="icon line"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M5.64,18.36a9,9,0,1,1,12.72,0A9,9,0,0,1,5.64,18.36ZM9,9l6,6m0-4v4H11" style="fill: none; stroke: '+color+'; stroke-linecap: round; stroke-linejoin: round; stroke-width:0.9600000000000002;"></path></g></svg>';
}
function launch1(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg fill="'+color+'" width="'+width+'" height="'+height+'" viewBox="-71.68 -71.68 399.36 399.36" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="'+color+'" stroke-width="0.00256"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M97.85352,185.8335c-5.04,15.11914-17.16211,26.26318-35.05664,32.228a88.27924,88.27924,0,0,1-25.30665,4.44825,4.0002,4.0002,0,0,1-4-4,88.27688,88.27688,0,0,1,4.44825-25.30665C43.90332,175.30859,55.04785,163.186,70.167,158.14648a3.99987,3.99987,0,1,1,2.5293,7.58936c-24.91016,8.30371-29.93945,37.49268-30.95215,48.52,11.02344-1.01172,40.21582-6.04,48.51953-30.95215a4.00018,4.00018,0,0,1,7.58985,2.52979ZM198.71,108.20117l-10.1416,10.1416v62.91211a11.92374,11.92374,0,0,1-3.51367,8.48487L152.71191,222.082A11.99995,11.99995,0,0,1,132.46,215.9502l-8.14429-40.72315-43.54223-43.542L40.05078,123.54a11.99947,11.99947,0,0,1-6.13281-20.252l32.3418-32.3418a11.925,11.925,0,0,1,8.48535-3.51465h62.91162l10.14209-10.14258c27.30078-27.30078,55.10351-26.54,65.78906-24.94531a11.90048,11.90048,0,0,1,10.06836,10.06738C225.251,53.09766,226.01172,80.89941,198.71,108.20117ZM41.61914,115.69531l39.81152,7.9624,48.2262-48.22607H74.74512a3.97492,3.97492,0,0,0-2.8291,1.17188l-32.3418,32.3413a4.00043,4.00043,0,0,0,2.04492,6.75049Zm138.94922,10.64746-48.22669,48.227,7.962,39.811a4.00088,4.00088,0,0,0,6.75195,2.04394l32.3418-32.34179a3.97415,3.97415,0,0,0,1.1709-2.82813ZM193.05371,102.544c24.72852-24.729,24.10547-49.46436,22.69043-58.95118a3.946,3.946,0,0,0-3.33594-3.33691c-9.48925-1.415-34.22461-2.03809-58.95312,22.69043l-11.31262,11.3125-.00135.00146L88.40234,128,128,167.59814l53.73962-53.73974.00086-.001Z"></path> </g></svg>';
}
function launch(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="-10.32 -10.32 44.64 44.64" id="three-dots" xmlns="http://www.w3.org/2000/svg" fill="'+color+'" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_20x20_three-dots--grey" data-name="20x20/three-dots--grey" transform="translate(24) rotate(90)"> <rect id="Rectangle" width="24" height="24" fill="none"></rect> <circle id="Oval" cx="1" cy="1" r="1" transform="translate(5 11)" stroke="'+color+'" stroke-miterlimit="10" stroke-width="0.00024000000000000003"></circle> <circle id="Oval-2" data-name="Oval" cx="1" cy="1" r="1" transform="translate(11 11)" stroke="'+color+'" stroke-miterlimit="10" stroke-width="0.00024000000000000003"></circle> <circle id="Oval-3" data-name="Oval" cx="1" cy="1" r="1" transform="translate(17 11)" stroke="'+color+'" stroke-miterlimit="10" stroke-width="0.00024000000000000003"></circle> </g> </g></svg>';
}
function search(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Search_Magnifying_Glass"> <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="'+color+'" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>';
}
function write(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="-26.88 -26.88 117.76 117.76" xmlns="http://www.w3.org/2000/svg" stroke-width="3.2" stroke="'+color+'" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M55.5,23.9V53.5a2,2,0,0,1-2,2h-43a2,2,0,0,1-2-2v-43a2,2,0,0,1,2-2H41.64"></path><path d="M19.48,38.77l-.64,5.59a.84.84,0,0,0,.92.93l5.56-.64a.87.87,0,0,0,.5-.24L54.9,15.22a1.66,1.66,0,0,0,0-2.35L51.15,9.1a1.67,1.67,0,0,0-2.36,0L19.71,38.28A.83.83,0,0,0,19.48,38.77Z"></path><line x1="44.87" y1="13.04" x2="50.9" y2="19.24"></line></g></svg>';
}
function link(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="30px" height="30px" viewBox="-15.6 -15.6 55.20 55.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="#000000" stroke-width="1.248" stroke-linecap="round"></path> </g></svg>';
}
function atsign(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg fill="'+color+'" width="'+width+'" height="'+height+'" viewBox="-18.24 -18.24 68.48 68.48" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="'+color+'" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>at</title> <path d="M16.375 8.688h1.656s-1.219 6.906-1.844 10.375c-0.531 3 3.375 0.438 4.531-0.906 1.125-1.281 3.688-6.969-0.844-11.5-4.094-4.063-10.281-2.938-12.969-1.375-3.156 1.844-6 6.156-5.063 11.125 1.031 5.563 4.938 8.094 7.281 8.688 5.094 1.281 8.438 0.063 11.625-3.219 0.531 0 1-0.031 1.625-0.031-2.156 3.281-5.813 5.063-8.875 5.125-2.688 0.031-5.969-0.063-9.344-3.188-3.406-3.156-4.531-7.875-3.438-12.156 1.094-4.25 4.313-7.719 8.719-8.781s10.219 0.063 13.156 5.25c2.5 4.406 0.438 8.969-1.188 10.781-2.5 2.813-7.719 5.094-6.969 0.938 0.031-0.156 0.063-0.375 0.094-0.563-1.219 1.125-2.75 1.844-4.344 1.844-3.156 0-5.5-2.75-4.969-6.156s3.781-6.156 6.938-6.156c1.656 0 3 0.781 3.875 2 0.219-1.25 0.344-2.094 0.344-2.094zM10.375 19.563c1.969 0 3.875-1.438 4.688-3.406 0.156-0.75 0.313-1.531 0.438-2.313-0.125-2.063-1.563-3.531-3.625-3.531-2.375 0-4.188 2.063-4.594 4.625s0.719 4.625 3.094 4.625z"></path> </g></svg>';
}
function cancel(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="-23.68 -23.68 111.36 111.36" xmlns="http://www.w3.org/2000/svg" stroke-width="2.816" stroke="'+color+'" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line><line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line></g></svg>';
}
function people(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="-11.2 -11.2 50.40 50.40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="'+color+'"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <title>ic_fluent_people_team_28_regular</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke-width="0.9799999999999999" fill="none" fill-rule="evenodd"> <g id="ic_fluent_people_team_28_regular" fill="#212121" fill-rule="nonzero"> <path d="M17.2540247,11 C18.4966654,11 19.5040247,12.0073593 19.5040247,13.25 L19.5040247,19.4989513 C19.5040247,22.5370966 17.0411213,25 14.002976,25 C10.9648308,25 8.50192738,22.5370966 8.50192738,19.4989513 L8.50192738,13.25 C8.50192738,12.0073593 9.5092867,11 10.7519274,11 L17.2540247,11 Z M17.2540247,12.5 L10.7519274,12.5 C10.3377138,12.5 10.0019274,12.8357864 10.0019274,13.25 L10.0019274,19.4989513 C10.0019274,21.7086695 11.7932579,23.5 14.002976,23.5 C16.2126942,23.5 18.0040247,21.7086695 18.0040247,19.4989513 L18.0040247,13.25 C18.0040247,12.8357864 17.6682382,12.5 17.2540247,12.5 Z M4.25,11 L8.40645343,11.000271 C8.01177565,11.4116389 7.72426829,11.9266236 7.58881197,12.5003444 L4.25,12.5 C3.83578644,12.5 3.5,12.8357864 3.5,13.25 L3.5,18.49876 C3.5,20.1562991 4.8437009,21.5 6.50123996,21.5 C6.94210796,21.5 7.36077379,21.4049412 7.73785924,21.2342019 C7.87129592,21.7236075 8.06231805,22.1898881 8.30186513,22.6257307 C7.75085328,22.8662539 7.14166566,23 6.50123996,23 C4.01527377,23 2,20.9847262 2,18.49876 L2,13.25 C2,12.0073593 3.00735931,11 4.25,11 Z M23.75,11 C24.9926407,11 26,12.0073593 26,13.25 L26,18.5 C26,20.9852814 23.9852814,23 21.5,23 C20.8609276,23 20.2529701,22.8667819 19.7023824,22.6266008 L19.7581025,22.5253735 C19.9721624,22.119151 20.1444731,21.6875096 20.2693267,21.2361575 C20.6437791,21.4056508 21.0608713,21.5 21.5,21.5 C23.1568542,21.5 24.5,20.1568542 24.5,18.5 L24.5,13.25 C24.5,12.8357864 24.1642136,12.5 23.75,12.5 L20.4171401,12.5003444 C20.2816838,11.9266236 19.9941764,11.4116389 19.5994986,11.000271 L23.75,11 Z M14,3 C15.9329966,3 17.5,4.56700338 17.5,6.5 C17.5,8.43299662 15.9329966,10 14,10 C12.0670034,10 10.5,8.43299662 10.5,6.5 C10.5,4.56700338 12.0670034,3 14,3 Z M22.0029842,4 C23.6598384,4 25.0029842,5.34314575 25.0029842,7 C25.0029842,8.65685425 23.6598384,10 22.0029842,10 C20.3461299,10 19.0029842,8.65685425 19.0029842,7 C19.0029842,5.34314575 20.3461299,4 22.0029842,4 Z M5.99701582,4 C7.65387007,4 8.99701582,5.34314575 8.99701582,7 C8.99701582,8.65685425 7.65387007,10 5.99701582,10 C4.34016157,10 2.99701582,8.65685425 2.99701582,7 C2.99701582,5.34314575 4.34016157,4 5.99701582,4 Z M14,4.5 C12.8954305,4.5 12,5.3954305 12,6.5 C12,7.6045695 12.8954305,8.5 14,8.5 C15.1045695,8.5 16,7.6045695 16,6.5 C16,5.3954305 15.1045695,4.5 14,4.5 Z M22.0029842,5.5 C21.1745571,5.5 20.5029842,6.17157288 20.5029842,7 C20.5029842,7.82842712 21.1745571,8.5 22.0029842,8.5 C22.8314113,8.5 23.5029842,7.82842712 23.5029842,7 C23.5029842,6.17157288 22.8314113,5.5 22.0029842,5.5 Z M5.99701582,5.5 C5.16858869,5.5 4.49701582,6.17157288 4.49701582,7 C4.49701582,7.82842712 5.16858869,8.5 5.99701582,8.5 C6.82544294,8.5 7.49701582,7.82842712 7.49701582,7 C7.49701582,6.17157288 6.82544294,5.5 5.99701582,5.5 Z" id="🎨-Color"> </path> </g> </g> </g></svg>';
}
function ask(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.9532 13V12.995M19 7.4C19.2608 6.58858 20.0366 6 20.9531 6C22.0836 6 23 6.89543 23 8C23 9.60675 21.2825 8.81678 21 10.5M8 15H16C18.2091 15 20 16.7909 20 19V21H4V19C4 16.7909 5.79086 15 8 15ZM16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="'+color+'" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';
}
function space(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="2"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.36655 10.2421C4.28985 8.4221 3.75151 7.51211 4.11106 6.78804C4.4706 6.06397 5.48992 6.00535 7.52857 5.88812L8.05599 5.85779C8.63531 5.82448 8.92497 5.80782 9.17756 5.67305C9.43014 5.53828 9.61705 5.30066 9.99088 4.82542L10.3312 4.39274C11.6467 2.72034 12.3045 1.88413 13.0606 2.01293C13.8167 2.14173 14.1705 3.15023 14.8779 5.16723M5.80455 13.5087C5.25206 15.5982 4.97582 16.6429 5.50972 17.2192C6.04363 17.7955 7.0341 17.5217 9.01504 16.9741L9.99088 16.5M17.048 7.50967C18.9378 8.29605 19.8826 8.68925 19.9904 9.49292C20.0823 10.1786 19.513 10.7756 18.3493 11.7831" stroke="'+color+'" stroke-width="1.5" stroke-linecap="round"></path> <path d="M16.2387 19.57C17.7244 19.9565 18.4673 20.1498 18.8677 19.743C19.2681 19.3362 19.061 18.5987 18.6466 17.1238L18.5394 16.7422C18.4216 16.3231 18.3628 16.1135 18.3924 15.9057C18.422 15.6979 18.5367 15.5154 18.7662 15.1503L18.9751 14.818C19.7826 13.5332 20.1864 12.8909 19.9167 12.3798C19.647 11.8687 18.8826 11.8273 17.3536 11.7446L16.958 11.7231C16.5235 11.6996 16.3063 11.6879 16.1168 11.5927C15.9274 11.4976 15.7872 11.3299 15.5068 10.9944L15.2516 10.689C14.265 9.50847 13.7716 8.91821 13.2045 9.00913C12.6375 9.10004 12.3722 9.81193 11.8416 11.2357L11.7043 11.604C11.5535 12.0086 11.4781 12.2109 11.3314 12.3599C11.1848 12.509 10.9834 12.5878 10.5806 12.7456L10.214 12.8892C8.79667 13.4443 8.08803 13.7218 8.00721 14.2891C7.92639 14.8564 8.52692 15.3378 9.72797 16.3004L10.0387 16.5495C10.38 16.8231 10.5507 16.9599 10.6494 17.1471C10.7482 17.3343 10.7639 17.5508 10.7954 17.9837L10.824 18.3779C10.9347 19.9015 10.9901 20.6633 11.5072 20.923C12.0244 21.1827 12.6608 20.7683 13.9337 19.9395" stroke="'+color+'" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>';
}
function write(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="-10.88 -10.88 85.76 85.76" xmlns="http://www.w3.org/2000/svg" stroke-width="4.096" stroke="'+color+'" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M55.5,23.9V53.5a2,2,0,0,1-2,2h-43a2,2,0,0,1-2-2v-43a2,2,0,0,1,2-2H41.64"></path><path d="M19.48,38.77l-.64,5.59a.84.84,0,0,0,.92.93l5.56-.64a.87.87,0,0,0,.5-.24L54.9,15.22a1.66,1.66,0,0,0,0-2.35L51.15,9.1a1.67,1.67,0,0,0-2.36,0L19.71,38.28A.83.83,0,0,0,19.48,38.77Z"></path><line x1="44.87" y1="13.04" x2="50.9" y2="19.24"></line></g></svg>';
}
function more(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg xmlns="http://www.w3.org/2000/svg" height="'+height+'" viewBox="0 96 960 960" width="'+width+'"><path fill="'+color+'" d="M207.858 624Q188 624 174 609.858q-14-14.141-14-34Q160 556 174.142 542q14.141-14 34-14Q228 528 242 542.142q14 14.141 14 34Q256 596 241.858 610q-14.141 14-34 14Zm272 0Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm272 0Q732 624 718 609.858q-14-14.141-14-34Q704 556 718.142 542q14.141-14 34-14Q772 528 786 542.142q14 14.141 14 34Q800 596 785.858 610q-14.141 14-34 14Z"/></svg>';
}
function report(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '<svg width="'+width+'" height="'+height+'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 22V14M5 14V4M5 14L7.47067 13.5059C9.1212 13.1758 10.8321 13.3328 12.3949 13.958C14.0885 14.6354 15.9524 14.7619 17.722 14.3195L17.9364 14.2659C18.5615 14.1096 19 13.548 19 12.9037V5.53669C19 4.75613 18.2665 4.18339 17.5092 4.3727C15.878 4.78051 14.1597 4.66389 12.5986 4.03943L12.3949 3.95797C10.8321 3.33284 9.1212 3.17576 7.47067 3.50587L5 4M5 4V2" stroke="'+color+'" stroke-width="1.248" stroke-linecap="round"></path> </g></svg>';
}
function empty(data = {}) {
  let width;
  let height;
  let color;
  /* check if the data
      /* has paramter.
      /*
      */
  data.width ? width = data.width: width = "30px";
  data.height ? height = data.height: height = "30px";
  data.color ? color = data.color: color = "black";

  return '';
}
