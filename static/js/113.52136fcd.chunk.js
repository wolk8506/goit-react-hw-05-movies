"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[113],{8113:function(e,t,n){n.r(t),n.d(t,{MovieDetails:function(){return v}});var i=n(885),s=n(4569),c=n.n(s),a=n(2791),r=n(6871),o=n(501),l=n(705),d=n(729),h=n(1084),u=n(184),v=function(e){var t,n=e.BASE_URL,s=e.API_KEY,v=(0,r.UO)().movieId,f="".concat(n,"movie/").concat(v,"?api_key=").concat(s,"&language=en-EN"),j=(0,a.useState)([]),m=(0,i.Z)(j,2),x=m[0],p=m[1],k=(0,r.TH)(),g=(0,a.useState)("/"),_=(0,i.Z)(g,2),w=_[0],b=_[1],S=(0,a.useState)(!0),U=(0,i.Z)(S,2),E=U[0],N=U[1];return(0,a.useEffect)((function(){p([]),c().get(f).then((function(e){p(e.data)}))}),[f]),(0,a.useEffect)((function(){var e,t;E&&(N(!1),b(null!==(e=null===k||void 0===k||null===(t=k.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"))}),[E,null===k||void 0===k||null===(t=k.state)||void 0===t?void 0:t.from]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.rU,{to:w,className:h.default.link_back,children:"\ud83e\udc14 Go Back"}),x&&(0,u.jsxs)("div",{className:h.default.movieblock,children:[(0,u.jsx)("img",{className:h.default.img,src:x.poster_path?"".concat("https://image.tmdb.org/t/p/w500").concat(x.poster_path):"".concat(d),alt:"",width:300}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:x.title}),(0,u.jsxs)("p",{children:["User Score: ",x.vote_average]}),(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:x.overview}),(0,u.jsx)("h2",{children:"Genres"}),(0,u.jsx)("p",{children:x.genres&&x.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,u.jsxs)("div",{className:h.default.infoblock,children:[(0,u.jsx)("h3",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"/movies/".concat(v,"/cast"),children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"/movies/".concat(v,"/reviews"),children:" Reviews"})})]})]}),(0,u.jsx)("div",{children:(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)(l.Loader,{}),children:(0,u.jsx)(r.j3,{})})})]})}},729:function(e,t,n){e.exports=n.p+"static/media/movie.0c202c8a95fa8f902cd4.jpg"}}]);
//# sourceMappingURL=113.52136fcd.chunk.js.map