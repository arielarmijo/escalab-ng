"use strict";(self.webpackChunktarea_2=self.webpackChunktarea_2||[]).push([[662],{1662:(x,a,r)=>{r.r(a),r.d(a,{GameOfThronesModule:()=>O});var i=r(9808),m=r(4466),c=r(2783),t=r(1223),l=r(520);let p=(()=>{class e{constructor(n){this.http=n,this.urlApi="https://thronesapi.com/api/v2/Characters"}getCharacters(){return this.http.get(this.urlApi)}getCharacter(n){return this.http.get(`${this.urlApi}/${n}`)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(l.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"any"}),e})();var h=r(3215),f=r(8516),u=r(29);function d(e,o){1&e&&t._UZ(0,"app-spinner")}function T(e,o){if(1&e&&t._UZ(0,"app-card",9),2&e){const n=t.oxw(2);t.Q6J("card",n.card)}}function g(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"div",5),t.TgZ(3,"app-selectable-list",6),t.NdJ("listItemClickEvent",function(G){return t.CHM(n),t.oxw().onListItemClick(G)}),t.qZA(),t.qZA(),t.TgZ(4,"div",7),t.YNc(5,T,1,1,"app-card",8),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(3),t.Q6J("items",n.items),t.xp6(2),t.Q6J("ngIf",n.card)}}const v=[{path:"",component:(()=>{class e{constructor(n){this.gotSrv=n,this.items=[],this.characters=[]}ngOnInit(){this.gotSrv.getCharacters().subscribe(n=>{this.items=n.map(s=>({name:s.fullName,altName:s.title})),this.card=this.characterToCard(n[0]),this.characters=n})}onListItemClick(n){this.card=this.characterToCard(this.characters[n])}characterToCard(n){return{image:n.imageUrl,title:n.fullName,subTitle:n.family,text:n.title}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(p))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-game-of-thrones"]],decls:4,vars:2,consts:[[1,"text-center","mb-4"],[4,"ngIf"],["class","container",4,"ngIf"],[1,"container"],[1,"row"],[1,"col"],[3,"items","listItemClickEvent"],[1,"col-4"],[3,"card",4,"ngIf"],[3,"card"]],template:function(n,s){1&n&&(t.TgZ(0,"h1",0),t._uU(1,"Game of Thrones Characters"),t.qZA(),t.YNc(2,d,1,0,"app-spinner",1),t.YNc(3,g,6,2,"div",2)),2&n&&(t.xp6(2),t.Q6J("ngIf",0==s.items.length),t.xp6(1),t.Q6J("ngIf",s.items.length>0))},directives:[i.O5,h.O,f.o,u.A],styles:["li[_ngcontent-%COMP%]{cursor:pointer}","li[_ngcontent-%COMP%]:hover{color:#00f;transform:translate(5px)}"]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(v)],c.Bz]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,C,m.m]]}),e})()}}]);