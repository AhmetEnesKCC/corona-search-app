(this["webpackJsonpcorona-info-app"]=this["webpackJsonpcorona-info-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/coronaImage.323906f7.png"},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t){window.onscroll=function(){document.body.scrolltop>10||document.documentElement.scrollTop>10?document.getElementById("topbtn").className="show":document.getElementById("topbtn").className="hide"}},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),o=(a(15),a(5)),l=a.n(o),i=a(8),u=a(1),m=a(2),p=a(3),d=a(4),h=a(9),f=a.n(h),v=(a(17),a(18),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"goDown",value:function(){document.body.scrollUp=0,document.documentElement.scrollUp=0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"searchBar"},r.a.createElement("div",{className:"search"},r.a.createElement("form",{onSubmit:this.props.get},r.a.createElement("input",{autoComplete:"off",spellCheck:"false",className:"searchInput",type:"search",name:"country",placeholder:"enter the country name"}),r.a.createElement("button",{className:"btn"},r.a.createElement("p",null,"SEARCH"))))))}}]),a}(r.a.Component)),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"result"},this.props.Flags&&r.a.createElement("img",{className:"flags",src:this.props.Flags,alt:"flags"}),r.a.createElement("div",{className:"left"},this.props.Case&&r.a.createElement("p",null,"Cases: ",r.a.createElement("span",{className:"yellow"},this.props.Case)),this.props.Recovered&&r.a.createElement("p",null,"Recovered: ",r.a.createElement("span",{className:"green"},this.props.Recovered)),this.props.Deaths&&r.a.createElement("p",null,"Deaths: ",r.a.createElement("span",{className:"red"},this.props.Deaths))))}}]),a}(r.a.Component);alert("\u25cb Type the first letter Uppercase\n\u25cb Expect!!! USA and UK\n\u25cb Like Italy\n\u25cb TYPE 'World' FOR GLOBAL RESULT");var g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={Case:void 0,Recovered:void 0,Deaths:void 0,Error:void 0,Flags:void 0},e.get=function(){var t=Object(i.a)(l.a.mark((function t(a){var n,r,s,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=a.target.elements.country.value,t.next=4,fetch("https://restcountries.eu/rest/v2/name/".concat(n));case 4:return r=t.sent,t.next=7,fetch("https://api.collectapi.com/corona/countriesData?country=".concat(n),{method:"POST",headers:{"content-type":"application/json",authorization:"apikey 29lHC5ootLf5GzS3pSCfAX:5OrAtMfecMxflAjdItazUG"}});case 7:return s=t.sent,t.next=10,r.json();case 10:return 1===(c=t.sent).length&&(console.log(c),e.setState({Flags:c[0].flag})),t.next=14,s.json();case 14:1===(o=t.sent).result.length?(console.log(o),e.setState({Case:o.result[0].totalCases,Recovered:o.result[0].totalRecovered,Deaths:o.result[0].totalDeaths,error:""})):0===o.result.length&&("First Letter must be Uppercase",alert("First Letter must be Uppercase"));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"goTop",value:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},{key:"goDown",value:function(){document.body.scrollDown=0,document.documentElement.scrollDown=0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cover"},r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"imageContainer"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:f.a,alt:"corona"}))),r.a.createElement("div",{className:"textContainer"},r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,"CORONAVIRUS")))),r.a.createElement(v,{get:this.get}),r.a.createElement("button",{id:"topbtn",onClick:function(){return e.goTop()}}),r.a.createElement(E,{className:"Down",Case:this.state.Case,Recovered:this.state.Recovered,Deaths:this.state.Deaths,Error:this.state.Errors,Flags:this.state.Flags}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.16ead7ce.chunk.js.map