"use strict";(self.webpackChunktarea_2=self.webpackChunktarea_2||[]).push([[592],{29:(u,_,a)=>{a.d(_,{A:()=>m});var t=a(1223),p=a(9808);function s(n,o){if(1&n&&(t.TgZ(0,"h6",6),t._uU(1),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Oqu(i.card.subTitle)}}let m=(()=>{class n{constructor(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],inputs:{card:"card"},decls:8,vars:4,consts:[[1,"card","position-sticky"],[1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],["class","card-subtitle mb-2 text-muted",4,"ngIf"],[1,"card-text","text-end"],[1,"card-subtitle","mb-2","text-muted"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2),t.TgZ(3,"h5",3),t._uU(4),t.qZA(),t.YNc(5,s,2,1,"h6",4),t.TgZ(6,"p",5),t._uU(7),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(1),t.Q6J("src",e.card.image,t.LSH),t.xp6(3),t.Oqu(e.card.title),t.xp6(1),t.Q6J("ngIf",e.card.subTitle),t.xp6(2),t.Oqu(e.card.text))},directives:[p.O5],encapsulation:2}),n})()},9197:(u,_,a)=>{a.d(_,{n:()=>i});var t=a(1223),p=a(9808);const s=["item"];function m(e,c){1&e&&t.GkF(0)}const n=function(e){return{item:e}};function o(e,c){if(1&e&&(t.ynx(0),t.YNc(1,m,1,0,"ng-container",1),t.BQk()),2&e){const r=c.$implicit,l=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",l.itemTemplate)("ngTemplateOutletContext",t.VKq(2,n,r))}}let i=(()=>{class e{constructor(){this.currentPage=0,this.itemsPerPage=10}get start(){return this.currentPage*this.itemsPerPage}get end(){return this.start+this.itemsPerPage}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list"]],contentQueries:function(r,l,d){if(1&r&&t.Suo(d,s,5),2&r){let g;t.iGM(g=t.CRH())&&(l.itemTemplate=g.first)}},inputs:{items:"items",currentPage:"currentPage",itemsPerPage:"itemsPerPage"},decls:2,vars:5,consts:[[4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(r,l){1&r&&(t.YNc(0,o,2,4,"ng-container",0),t.ALo(1,"slice")),2&r&&t.Q6J("ngForOf",t.Dn7(1,1,l.items,l.start,l.end))},directives:[p.sg,p.tP],pipes:[p.OU],encapsulation:2}),e})()},8449:(u,_,a)=>{a.d(_,{Q:()=>m});var t=a(1223),p=a(9808);function s(n,o){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"li",2),t.TgZ(2,"button",3),t.NdJ("click",function(){const r=t.CHM(i).index;return t.oxw().pageChanged.emit(r)}),t._uU(3),t.qZA(),t.qZA(),t.BQk()}if(2&n){const i=o.index;t.xp6(3),t.Oqu(i+1)}}let m=(()=>{class n{constructor(){this.pageChanged=new t.vpe}get pages(){return new Array(Math.ceil(this.itemsLength/this.itemsPerPage))}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-pagination"]],inputs:{itemsLength:"itemsLength",itemsPerPage:"itemsPerPage",currentPage:"currentPage"},outputs:{pageChanged:"pageChanged"},decls:3,vars:1,consts:[[1,"pagination"],[4,"ngFor","ngForOf"],[1,"page-item"],[1,"page-link",3,"click"]],template:function(i,e){1&i&&(t.TgZ(0,"nav"),t.TgZ(1,"ul",0),t.YNc(2,s,4,1,"ng-container",1),t.qZA(),t.qZA()),2&i&&(t.xp6(2),t.Q6J("ngForOf",e.pages))},directives:[p.sg],styles:["nav[_ngcontent-%COMP%]{margin-top:1rem}","ul[_ngcontent-%COMP%]{justify-content:center}"]}),n})()},5184:(u,_,a)=>{a.d(_,{P:()=>n});var t=a(1223),p=a(9808);function s(o,i){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij("",e.item.id+1,".-")}}function m(o,i){if(1&o&&(t.TgZ(0,"span",4),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij("(",e.item.altText,")")}}let n=(()=>{class o{constructor(){this.showId=!0,this.itemClicked=new t.vpe}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-selectable-item"]],inputs:{showId:"showId",item:"item"},outputs:{itemClicked:"itemClicked"},decls:7,vars:4,consts:[[3,"click"],[4,"ngIf"],["class","text-muted",4,"ngIf"],[1,"badge","bg-secondary"],[1,"text-muted"]],template:function(e,c){1&e&&(t.TgZ(0,"li",0),t.NdJ("click",function(){return c.itemClicked.emit(c.item)}),t.YNc(1,s,2,1,"span",1),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.YNc(4,m,2,1,"span",2),t.TgZ(5,"span",3),t._uU(6),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",c.showId),t.xp6(2),t.Oqu(c.item.text),t.xp6(1),t.Q6J("ngIf",c.item.altText),t.xp6(2),t.Oqu(c.item.qty))},directives:[p.O5],styles:["li[_ngcontent-%COMP%]{cursor:pointer;list-style-type:none}","li[_ngcontent-%COMP%]:hover{color:#0d6efd;transform:translate(5px)}","span[_ngcontent-%COMP%]{margin:0 3px}"]}),o})()},3215:(u,_,a)=>{a.d(_,{O:()=>p});var t=a(1223);let p=(()=>{class s{constructor(){}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-spinner"]],decls:4,vars:0,consts:[[1,"d-flex","justify-content-center","my-3"],["role","status",1,"spinner-border"],[1,"visually-hidden"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"span",2),t._uU(3,"Loading..."),t.qZA(),t.qZA(),t.qZA())},styles:[".spinner-border[_ngcontent-%COMP%]{width:5rem;height:5rem}"]}),s})()}}]);