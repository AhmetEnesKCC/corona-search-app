(this["webpackJsonpcorona-info-app"]=this["webpackJsonpcorona-info-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/coronaImage.323906f7.png"},function(e,t,a){e.exports=a.p+"static/media/world-1303628_1920.a9018b41.png"},function(e,t,a){e.exports=a.p+"static/media/UK.441c24e4.jpg"},function(e,t,a){e.exports=a.p+"static/media/Iran.40a16200.png"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t){window.onscroll=function(){document.body.scrolltop>10||document.documentElement.scrollTop>10?document.getElementById("topbtn").className="show":document.getElementById("topbtn").className="hide"}},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(7),r=a.n(c),o=(a(18),a(5)),l=a.n(o),i=a(8),m=a(1),u=a(2),p=a(3),d=a(4),h=a(9),E=a.n(h),g=(a(20),a(21),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"goDown",value:function(){document.body.scrollUp=0,document.documentElement.scrollUp=0}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"searchBar"},n.a.createElement("div",{className:"search"},n.a.createElement("form",{onSubmit:this.props.get},n.a.createElement("input",{autoComplete:"off",spellCheck:"false",className:"searchInput",type:"search",name:"country",placeholder:"enter the country name"}),n.a.createElement("button",{className:"btn"},n.a.createElement("p",null,"SEARCH"))))))}}]),a}(n.a.Component)),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"result"},this.props.Flags&&n.a.createElement("img",{className:"flags",src:this.props.Flags,alt:"flags"}),n.a.createElement("div",{className:"left"},this.props.Case&&n.a.createElement("p",null,"Cases: ",n.a.createElement("span",{className:"yellow"},this.props.Case)),this.props.Recovered&&n.a.createElement("p",null,"Recovered: ",n.a.createElement("span",{className:"green"},this.props.Recovered)),this.props.Deaths&&n.a.createElement("p",null,"Deaths: ",n.a.createElement("span",{className:"red"},this.props.Deaths)),this.props.NewCases&&n.a.createElement("p",null,"New cases: ",n.a.createElement("span",{className:"yellow"},this.props.Deaths)),this.props.NewDeaths&&n.a.createElement("p",null,"New deaths: ",n.a.createElement("span",{id:"newdeaths",className:"red"},this.props.NewDeaths))))}}]),a}(n.a.Component),y=a(10),N=a.n(y),v=a(11),w=a.n(v),b=a(12),C=a.n(b);alert("\u25cb Type the first letter Uppercase\n\u25cb Expect!!! USA and UK\n\u25cb Like Italy\n\u25cb TYPE 'World' FOR GLOBAL RESULT\n Added DARK MODE");var D=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={Case:void 0,Recovered:void 0,Deaths:void 0,Error:void 0,Flags:void 0,NewCases:void 0,NewDeaths:void 0,LIGHTMODE:"Light Mode"},e.get=function(){var t=Object(i.a)(l.a.mark((function t(a){var s,n,c,r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),s=a.target.elements.country.value,t.next=4,fetch("https://restcountries.eu/rest/v2/name/".concat(s));case 4:return n=t.sent,t.next=7,fetch("https://api.collectapi.com/corona/countriesData?country=".concat(s),{method:"POST",headers:{"content-type":"application/json",authorization:"apikey 29lHC5ootLf5GzS3pSCfAX:5OrAtMfecMxflAjdItazUG"}});case 7:if(c=t.sent,""===s){t.next=13;break}return t.next=11,n.json();case 11:1===(r=t.sent).length?("World"!==s&&console.log(r),e.setState({Flags:r[0].flag})):"World"===s?e.setState({Flags:N.a}):"UK"===s?e.setState({Flags:w.a}):"Iran"===s&&e.setState({Flags:C.a});case 13:return t.next=15,c.json();case 15:1===(o=t.sent).result.length?(console.log(o),e.setState({Case:o.result[0].totalCases,Recovered:o.result[0].totalRecovered,Deaths:o.result[0].totalDeaths,NewCases:o.result[0].newCases,NewDeaths:o.result[0].newDeaths,error:""})):0===o.result.length&&("First Letter must be Uppercase",alert("First Letter must be Uppercase")),""===o.result[0].newCases&&e.setState({NewCases:"-"}),""===o.result[0].newDeaths&&e.setState({NewDeaths:"-"});case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"goTop",value:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},{key:"goDown",value:function(){document.body.scrollDown=0,document.documentElement.scrollDown=0}},{key:"darkMode",value:function(){var e=document.getElementById("switch");!0===e.checked?(document.body.style.backgroundColor="black",document.getElementsByClassName("switcher")[0].style.color="white",document.getElementsByClassName("info")[0].style.color="white",document.getElementsByClassName("searchInput")[0].style.backgroundColor="white",document.getElementsByClassName("result")[0].style.color="black",document.getElementsByClassName("switcher")[0].style.content="DARK MODE",this.setState({LIGHTMODE:"Dark Mode"})):!1===e.checked&&(document.body.style.backgroundColor="white",document.getElementsByClassName("switcher")[0].style.color="#707070",document.getElementsByClassName("info")[0].style.color="#707070",document.getElementsByClassName("searchInput")[0].style.backgroundColor="rgb(252, 252, 252)",document.getElementsByClassName("result")[0].style.color="white",this.setState({LIGHTMODE:"Light Mode"}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"cover"},n.a.createElement("div",{className:"darkMode"},n.a.createElement("div",{className:"makeMiddle"},n.a.createElement("p",{className:"switcher"},this.state.LIGHTMODE),n.a.createElement("label",{className:"globalSwitch"},n.a.createElement("input",{onClick:function(){return e.darkMode()},className:"switch",type:"checkbox",id:"switch"}),n.a.createElement("span",{className:"slider"})))),n.a.createElement("div",{className:"top"},n.a.createElement("div",{className:"imageContainer"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:E.a,alt:"corona"}))),n.a.createElement("div",{className:"textContainer"},n.a.createElement("div",{className:"text"},n.a.createElement("h1",{className:"info"},"CORONAVIRUS")))),n.a.createElement(g,{get:this.get}),n.a.createElement("button",{id:"topbtn",onClick:function(){return e.goTop()}}),n.a.createElement(f,{className:"Down",Case:this.state.Case,Recovered:this.state.Recovered,Deaths:this.state.Deaths,NewCases:this.state.NewCases,NewDeaths:this.state.NewDeaths,Error:this.state.Errors,Flags:this.state.Flags}))}}]),a}(n.a.Component);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(D,null)),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.79c52785.chunk.js.map