"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{1518:function(e,t,a){a.r(t),a.d(t,{Movies:function(){return d}});var c=a(1413),n=a(885),s=a(4569),o=a.n(s),r=a(2791),u=a(6871),i=a(3504),l=a(8494),h=a(6409),f=a(1084),m=a(184),d=function(e){var t=e.onClick,a=e.BASE_URL,s=e.API_KEY,d=(0,r.useState)(""),p=(0,n.Z)(d,2),v=p[0],g=p[1],k=(0,r.useState)(""),x=(0,n.Z)(k,2),j=x[0],_=x[1],w=(0,r.useState)(""),C=(0,n.Z)(w,2),E=C[0],S=C[1],b=(0,u.TH)(),y=(0,u.s0)(),Z="".concat(a,"search/movie").concat(j,"&api_key=").concat(s,"&language=en-EN&page=1&include_adult=false");(0,r.useEffect)((function(){_(b.search)}),[b.search]);return(0,r.useEffect)((function(){t("".concat(b.pathname).concat(b.search)),console.log("".concat(b.pathname).concat(b.search))})),(0,r.useEffect)((function(){""!==j&&(console.log("".concat(b.pathname).concat(b.search)),o().get(Z).then((function(e){S(e.data.results)})))}),[Z,b.pathname,b.search,j]),(0,m.jsxs)("div",{className:f.default.movies_block,children:[(0,m.jsxs)("form",{className:f.default.form,children:[(0,m.jsx)("input",{type:"text",placeholder:"Search images and photos",value:v,onChange:function(e){g(e.currentTarget.value.toLowerCase())}}),(0,m.jsxs)("button",{type:"submit",onClick:function(e){e.preventDefault(),""!==v.trim()?(y((0,c.Z)((0,c.Z)({},b),{},{search:"query=".concat(v)})),_("?query=".concat(v)),g("")):h.Am.warn("There is nothing for this request!")},children:[(0,m.jsx)(l.Yfv,{}),(0,m.jsx)("span",{children:"Search"})]})]}),(0,m.jsx)("ul",{className:f.default.moviesList,children:E&&E.map((function(e){return(0,m.jsx)("li",{children:(0,m.jsx)(i.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=518.756915ca.chunk.js.map