(this.webpackJsonproman_celebrities=this.webpackJsonproman_celebrities||[]).push([[0],[,,,,,,,,,,,,,function(e,a,n){e.exports=n(32)},,,,,function(e,a,n){},function(e,a,n){e.exports=n.p+"static/media/julius_caesar.e605b6ca.png"},function(e,a,n){e.exports=n.p+"static/media/marcus_aurelius.fa81d08d.png"},function(e,a,n){e.exports=n.p+"static/media/octavius_augustus.545d4c2a.png"},function(e,a,n){e.exports=n.p+"static/media/carcalla.5c43258f.png"},function(e,a,n){e.exports=n.p+"static/media/marcus_cicero.0287ab6a.png"},function(e,a,n){e.exports=n.p+"static/media/marcus_traianus.6c92a2ed.png"},function(e,a,n){e.exports=n.p+"static/media/antoninus_pius.97f30d3b.png"},,,,,,,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),s=n.n(i),o=n(3),c=n(4),u=n(7),l=n(6),m=(n(18),{julius_caesar:n(19),marcus_aurelius:n(20),octavius_augustus:n(21),carcalla:n(22),marcus_cicero:n(23),marcus_traianus:n(24),antoninus_pius:n(25)}),d=function(e){e.id;var a=e.name,n=e.info,t=e.image;return r.a.createElement("div",{className:"roman-card"},r.a.createElement("img",{className:"bust",alt:t,src:m[t]}),r.a.createElement("h2",null,a),r.a.createElement("p",null,n))},h=function(e){var a=e.romans;return r.a.createElement("div",{className:"container"},a.map((function(e,n){return r.a.createElement(d,{key:n,id:a[n].id,name:a[n].name,info:a[n].info,image:a[n].image})})))},p=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"roman-input"},r.a.createElement("label",null,"Search"),r.a.createElement("input",{className:"roman-textbox",type:"search",onChange:a}))},f=function(e){return r.a.createElement("div",{className:"scroll-bar"},e.children)},g=function(e){Object(u.a)(n,e);var a=Object(l.a)(n);function n(e){var t;return Object(o.a)(this,n),(t=a.call(this,e)).state={hasError:!1},t}return Object(c.a)(n,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"container"},"Error loading page..."):this.props.children}}]),n}(t.Component),v=n(5),b=function(e){Object(u.a)(n,e);var a=Object(l.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,a=e.romanCelebrities,n=e.searchField,t=e.onSearchChange,i=a.romans.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",{className:"roman-header"},"Roman Celebrities"),r.a.createElement(p,{className:"roman-textbox",searchChange:t}),r.a.createElement(f,null,r.a.createElement(g,null,r.a.createElement(h,{romans:i}))))}}]),n}(r.a.Component),E=Object(v.b)((function(e){return{romanCelebrities:e.romanCelebrities,searchField:e.searchRomans.searchField}}),(function(e){return{onSearchChange:function(a){return e({type:"CHANGE_SEARCH_FIELD",payload:a.target.value})}}}))(b),C=n(1),_=[{id:1,name:"Gaius Julius Caesar",info:"Conqueror of Gaul. Roman general and dictator during the first century B.C.",image:"julius_caesar"},{id:2,name:"Marcus Aurelius",info:"The wise. Roman emperor and philosopher during the second century A.C.",image:"marcus_aurelius"},{id:3,name:"Gaius Octavius Turinus",info:"First emperor of Rome. Grandson of Julius Caesar. His reign initiated the Pax Romana during 40 years and ending on 14 A.D.",image:"octavius_augustus"},{id:4,name:"Lucius Septimius Bassianus",info:"Roman emperor of the Severus dinasty. Better known as Carcalla after the Gallic hooded tunic that he wore and made fashionable. ",image:"carcalla"},{id:5,name:"Marcus Tullius Cicero",info:"Roman statesman, lawyer and Academic Skeptic philosopher. He played an important role in late Republic politics. He had an immense influence on Latin lenguage.",image:"marcus_cicero"},{id:6,name:"Marcus Ulpius Traianus",info:"First hispanic emperor. Famous for his civilian administration. Built the Trajan's Column and Forum. Expanded the empirte to its greatest territorial extent.",image:"marcus_traianus"},{id:7,name:"Titus Aurelius Antoninus",info:"Roman emperor. Adoptive father of Marcus Aurelius after being adopted by Adrianus. His reign was pacific and he never left Rome during it.",image:"antoninus_pius"}],y={romans:_,searchField:""},j=Object(C.b)({romanCelebrities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object.assign({},e,{romans:_})},searchRomans:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:a.payload});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=Object(C.c)(j);s.a.render(r.a.createElement(v.a,{store:w},r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.32f974ac.chunk.js.map