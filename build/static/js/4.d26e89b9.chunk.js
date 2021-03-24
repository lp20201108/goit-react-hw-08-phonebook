(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{107:function(t,e,n){t.exports={spinner:"Spinner_styled_spinner__wEcea"}},110:function(t,e,n){"use strict";n.r(e);var a=n(33),c=n(34),r=n(36),o=n(35),s=n(0),i=n(9),u=n(3),l=n(16),b=n.n(l),m=n(22),h=n(18),p=n.n(h),j=n(8),f=function(t){return t.contacts.items},d=function(t){return t.contacts.filter},O=function(t){return t.contacts.loading},v=function(t){var e=f(t),n=d(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},x=n(83),_=n.n(x),g=n(1),N=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(u.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state.name,t.state.number);var n=t.props.contacts.find((function(e){return e.name===t.state.name})),a=t.props.contacts.find((function(e){return e.number===t.state.number}));n?alert("This contact NAME already exists\n         as Name:".concat(n.name," Tel:").concat(n.number)):a?alert("This contact NUMBER already exists as\n         Tel:".concat(a.number," Name:").concat(a.name)):t.state.name?t.state.number?(t.props.onSubmit({name:t.state.name,number:t.state.number}),t.setState({name:"",number:""})):alert("Please, enter the contact number"):alert("Please, enter the contact name")},t}return Object(c.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:_.a.contactForm,children:[Object(g.jsxs)("label",{htmlFor:"name",className:_.a.label,children:["Name",Object(g.jsx)("input",{name:"name",type:"text",className:_.a.contactInput,placeholder:"insert name",onChange:this.handleChange,value:this.state.name})]}),Object(g.jsxs)("label",{htmlFor:"number",className:_.a.label,children:["Number",Object(g.jsx)("input",{name:"number",type:"text",className:_.a.contactInput,placeholder:"insert number",onChange:this.handleChange,value:this.state.number})]}),Object(g.jsx)("button",{type:"submit",className:_.a.btn,children:"Add contact"})]})}}]),n}(s.Component),C={onSubmit:function(t){var e=t.name,n=t.number;return function(){var t=Object(m.a)(b.a.mark((function t(a){var c,r,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={name:e,number:n},console.log(c),a(Object(j.b)()),t.prev=3,t.next=6,p.a.post("/contacts",c);case 6:r=t.sent,o=r.data,console.log(o),a(Object(j.c)(o)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),a(Object(j.a)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}()}},y=Object(i.b)((function(t){return{contacts:f(t)}}),C)(N),F=n(84),k=n.n(F),w=function(t){var e=t.id,n=t.name,a=t.number,c=t.handleRemove;return Object(g.jsxs)("li",{className:k.a.contactListItem,children:[Object(g.jsx)("span",{className:"contactName",children:n}),Object(g.jsxs)("span",{className:"contactNumber",children:[" ",a]}),Object(g.jsx)("button",{onClick:function(){return c(e)},className:k.a.btnRemove,children:"Delete"})]})},L=(n(85),{handleRemove:function(t){return function(){var e=Object(m.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(j.i)()),e.prev=1,e.next=4,p.a.delete("/contacts/".concat(t));case 4:n(Object(j.j)(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(Object(j.h)(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}}),I=Object(i.b)(null,L)((function(t){var e=t.contacts,n=t.handleRemove;return Object(g.jsx)("ul",{className:"contactsList",children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(g.jsx)(w,{id:c,name:e,number:a,handleRemove:n},c)}))})})),S=n(86),R=n.n(S),A=Object(i.b)((function(t){return{filter:d(t)}}),(function(t){return{handleChange:function(e){return t(Object(j.d)(e.target.value))}}}))((function(t){var e=t.filter,n=t.handleChange;return Object(g.jsxs)("label",{className:R.a.label,children:["Find contacts by name",Object(g.jsx)("input",{className:R.a.inputFilter,name:"filter",type:"text",placeholder:"search contact",onChange:n,value:e})]})})),M=(n(82),n(87)),P=n.n(M),T=n(88),D=n.n(T),E=n(107),V=n.n(E),J=function(t){var e=t.loading;return Object(g.jsx)(D.a,{className:V.a.spinner,visible:e,type:"ThreeDots",color:"white",height:80,width:80,timeout:1800})},B=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.fecthContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.loading;return Object(g.jsxs)("div",{className:P.a.container,children:[Object(g.jsx)("h1",{className:"titlePhonebook",children:"Phonebook"}),Object(g.jsx)(y,{}),Object(g.jsx)("h2",{className:"title",children:"Contacts list"}),!!e.length&&Object(g.jsx)(A,{}),Object(g.jsx)(I,{contacts:this.props.contacts}),Object(g.jsx)(J,{loading:n})]})}}]),n}(s.Component),K={fecthContacts:function(){return function(){var t=Object(m.a)(b.a.mark((function t(e){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(j.f)()),t.prev=1,t.next=4,p.a.get("/contacts");case 4:n=t.sent,a=n.data,console.log(a),e(Object(j.g)(a)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e(Object(j.e)(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}};e.default=Object(i.b)((function(t){return{contacts:v(t),loading:O(t)}}),K)(B)},83:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__150xc",label:"ContactForm_label__2gpFP",contactInput:"ContactForm_contactInput__2MLNL",btn:"ContactForm_btn__1nM5V"}},84:function(t,e,n){t.exports={btnRemove:"ContactListItem_btnRemove__234gb",contactListItem:"ContactListItem_contactListItem__2iFaZ"}},85:function(t,e,n){t.exports={contactList:"ContactsList_contactList__eV1Kl",message:"ContactsList_message__24IMA"}},86:function(t,e,n){t.exports={label:"Filter_label__1vSV0",inputFilter:"Filter_inputFilter__2XhuF"}},87:function(t,e,n){t.exports={container:"App_container__30QSs",root:"App_root__2LaLo"}}}]);
//# sourceMappingURL=4.d26e89b9.chunk.js.map