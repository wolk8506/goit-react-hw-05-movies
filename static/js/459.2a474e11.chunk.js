"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[459],{3459:function(e,t,n){n.r(t),n.d(t,{Reviews:function(){return u}});var a=n(885),r=n(4569),s=n.n(r),i=n(2791),c=n(6871),o=n(184),u=function(){var e=(0,c.UO)().movieId,t=(0,i.useState)([]),n=(0,a.Z)(t,2),r=n[0],u=n[1],h=(0,i.useState)(!1),d=(0,a.Z)(h,2),f=d[0],l=d[1],p="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=a8df323e9ca157a6f58df54190ee006c&language=en-US&page=1");return(0,i.useEffect)((function(){u([]),l(!1),s().get(p).then((function(e){u(e.data.results),0===e.data.results.length&&l(!0)}))}),[p]),(0,o.jsxs)(o.Fragment,{children:[f&&(0,o.jsx)("p",{children:"We don't have any reviews for this movie."}),r&&r.map((function(e){return(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.author)}))]})}}}]);
//# sourceMappingURL=459.2a474e11.chunk.js.map