"use strict";(self.webpackChunktarea_2=self.webpackChunktarea_2||[]).push([[592],{29:(u,m,r)=>{r.d(m,{A:()=>_});var t=r(1223),p=r(9808),s=r(3215);function g(e,o){1&e&&t._UZ(0,"app-spinner")}function i(e,o){if(1&e&&(t.TgZ(0,"h6",7),t._uU(1),t.qZA()),2&e){const a=t.oxw();t.xp6(1),t.Oqu(a.card.subTitle)}}let _=(()=>{class e{constructor(){this.loading=!0}ngOnChanges(a){var n;const l=null===(n=a.card.previousValue)||void 0===n?void 0:n.image;this.loading=a.card.currentValue.image!==l}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{card:"card"},features:[t.TTD],decls:9,vars:6,consts:[[1,"card","bg-body","shadow","border"],[1,"card-img-top","rouded","mx-auto",3,"hidden","src","load"],[4,"ngIf"],[1,"card-body","p-2"],[1,"card-title","fw-bold"],["class","card-subtitle mb-2 text-muted fs-6 text-end",4,"ngIf"],[1,"card-text","text-center"],[1,"card-subtitle","mb-2","text-muted","fs-6","text-end"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"img",1),t.NdJ("load",function(){return n.loading=!1}),t.qZA(),t.YNc(2,g,1,0,"app-spinner",2),t.TgZ(3,"div",3),t.TgZ(4,"h5",4),t._uU(5),t.qZA(),t.YNc(6,i,2,1,"h6",5),t.TgZ(7,"p",6),t._uU(8),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(1),t.Q6J("hidden",n.loading)("src",n.card.image,t.LSH),t.xp6(1),t.Q6J("ngIf",n.loading),t.xp6(3),t.Oqu(n.card.title),t.xp6(1),t.Q6J("ngIf",n.card.subTitle),t.xp6(2),t.Oqu(n.card.text))},directives:[p.O5,s.O],styles:["img[_ngcontent-%COMP%]{max-width:300px;height:auto}"]}),e})()},9197:(u,m,r)=>{r.d(m,{n:()=>e});var t=r(1223),p=r(9808);const s=["item"];function g(o,a){1&o&&t.GkF(0)}const i=function(o){return{item:o}};function _(o,a){if(1&o&&(t.ynx(0),t.YNc(1,g,1,0,"ng-container",1),t.BQk()),2&o){const n=a.$implicit,c=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",c.itemTemplate)("ngTemplateOutletContext",t.VKq(2,i,n))}}let e=(()=>{class o{constructor(){this.currentPage=0,this.itemsPerPage=10}get start(){return this.currentPage*this.itemsPerPage}get end(){return this.start+this.itemsPerPage}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list"]],contentQueries:function(n,c,l){if(1&n&&t.Suo(l,s,5),2&n){let d;t.iGM(d=t.CRH())&&(c.itemTemplate=d.first)}},inputs:{items:"items",currentPage:"currentPage",itemsPerPage:"itemsPerPage"},decls:2,vars:5,consts:[[4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,c){1&n&&(t.YNc(0,_,2,4,"ng-container",0),t.ALo(1,"slice")),2&n&&t.Q6J("ngForOf",t.Dn7(1,1,c.items,c.start,c.end))},directives:[p.sg,p.tP],pipes:[p.OU],encapsulation:2}),o})()},8449:(u,m,r)=>{r.d(m,{Q:()=>g});var t=r(1223),p=r(9808);function s(i,_){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"li",2),t.TgZ(2,"button",3),t.NdJ("click",function(){const n=t.CHM(e).index;return t.oxw().pageChanged.emit(n)}),t._uU(3),t.qZA(),t.qZA(),t.BQk()}if(2&i){const e=_.index;t.xp6(3),t.Oqu(e+1)}}let g=(()=>{class i{constructor(){this.pageChanged=new t.vpe}get pages(){return new Array(Math.ceil(this.itemsLength/this.itemsPerPage))}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-pagination"]],inputs:{itemsLength:"itemsLength",itemsPerPage:"itemsPerPage",currentPage:"currentPage"},outputs:{pageChanged:"pageChanged"},decls:3,vars:1,consts:[[1,"pagination"],[4,"ngFor","ngForOf"],[1,"page-item"],[1,"page-link",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"nav"),t.TgZ(1,"ul",0),t.YNc(2,s,4,1,"ng-container",1),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngForOf",o.pages))},directives:[p.sg],styles:["nav[_ngcontent-%COMP%]{margin-top:1rem}","ul[_ngcontent-%COMP%]{justify-content:center}"]}),i})()},3215:(u,m,r)=>{r.d(m,{O:()=>p});var t=r(1223);let p=(()=>{class s{constructor(){}}return s.\u0275fac=function(i){return new(i||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-spinner"]],decls:4,vars:0,consts:[[1,"d-flex","justify-content-center","my-3"],["role","status",1,"spinner-border"],[1,"visually-hidden"]],template:function(i,_){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"span",2),t._uU(3,"Loading..."),t.qZA(),t.qZA(),t.qZA())},styles:[".spinner-border[_ngcontent-%COMP%]{width:5rem;height:5rem}"]}),s})()}}]);