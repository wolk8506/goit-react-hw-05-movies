"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{1518:function(e,t,a){a.r(t),a.d(t,{Movies:function(){return d}});var n=a(1413),c=a(885),s=a(4569),r=a.n(s),o=a(2791),u=a(6871),i=a(3504),l=a(8494),h=a(6409),f=a(1084),m=a(184),d=function(e){var t=e.onClick,a=e.BASE_URL,s=e.API_KEY,d=(0,o.useState)(""),p=(0,c.Z)(d,2),v=p[0],k=p[1],x=(0,o.useState)(""),j=(0,c.Z)(x,2),_=j[0],g=j[1],w=(0,o.useState)(""),C=(0,c.Z)(w,2),E=C[0],S=C[1],b=(0,u.TH)(),y=(0,u.s0)(),Z="".concat(a,"search/movie").concat(_,"&api_key=").concat(s,"&language=en-EN&page=1&include_adult=false");(0,o.useEffect)((function(){g(b.search)}),[b.search]);return(0,o.useEffect)((function(){t("".concat(b.pathname).concat(b.search))})),(0,o.useEffect)((function(){""!==_&&r().get(Z).then((function(e){S(e.data.results)}))}),[Z,b.pathname,b.search,_]),(0,m.jsxs)("div",{className:f.default.movies_block,children:[(0,m.jsxs)("form",{className:f.default.form,children:[(0,m.jsx)("input",{type:"text",placeholder:"Search images and photos",value:v,onChange:function(e){k(e.currentTarget.value.toLowerCase())}}),(0,m.jsxs)("button",{type:"submit",onClick:function(e){e.preventDefault(),""!==v.trim()?(y((0,n.Z)((0,n.Z)({},b),{},{search:"query=".concat(v)})),g("?query=".concat(v)),k("")):h.Am.warn("There is nothing for this request!")},children:[(0,m.jsx)(l.Yfv,{}),(0,m.jsx)("span",{children:"Search"})]})]}),(0,m.jsx)("ul",{className:f.default.moviesList,children:E&&E.map((function(e){return(0,m.jsx)("li",{children:(0,m.jsx)(i.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=518.edc4f59e.chunk.js.map