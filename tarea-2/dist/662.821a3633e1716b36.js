"use strict";(self.webpackChunktarea_2=self.webpackChunktarea_2||[]).push([[662],{1662:(A,c,r)=>{r.r(c),r.d(c,{GameOfThronesModule:()=>G});var m=r(9808),l=r(4466),p=r(2783),e=r(1223),g=r(520);let h=(()=>{class n{constructor(t){this.http=t,this.urlApi="https://thronesapi.com/api/v2/Characters"}getCharacters(){return this.http.get(this.urlApi)}getCharacter(t){return this.http.get(`${this.urlApi}/${t}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(g.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"any"}),n})();var f=r(9197),u=r(8449),d=r(29),T=r(3215);function C(n,o){if(1&n&&(e.TgZ(0,"span",13),e._uU(1),e.qZA()),2&n){const t=e.oxw().item;e.xp6(1),e.hij("(",t.altText,")")}}function x(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",10),e.NdJ("click",function(){const i=e.CHM(t).item;return e.oxw(2).showCharacterCard(i)}),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.YNc(5,C,2,1,"span",11),e.TgZ(6,"span",12),e._uU(7),e.qZA(),e.qZA()}if(2&n){const t=o.item;e.xp6(2),e.hij("",t.id+1,".-"),e.xp6(2),e.Oqu(t.text),e.xp6(1),e.Q6J("ngIf",t.altText),e.xp6(2),e.Oqu(t.qty)}}function v(n,o){if(1&n&&(e.TgZ(0,"div",14),e._UZ(1,"app-card",15),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("card",t.card)}}function O(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",3),e.TgZ(1,"div",4),e.TgZ(2,"div",5),e.TgZ(3,"app-list",6),e.YNc(4,x,8,4,"ng-template",null,7,e.W1O),e.qZA(),e.TgZ(6,"app-pagination",8),e.NdJ("pageChanged",function(s){return e.CHM(t),e.oxw().currentPage=s}),e.qZA(),e.qZA(),e.YNc(7,v,2,1,"div",9),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(3),e.Q6J("items",t.items)("currentPage",t.currentPage)("itemsPerPage",t.itemsPerPage),e.xp6(3),e.Q6J("itemsLength",t.items.length)("itemsPerPage",t.itemsPerPage)("currentPage",t.currentPage),e.xp6(1),e.Q6J("ngIf",t.card)}}function Z(n,o){1&n&&e._UZ(0,"app-spinner")}const _=[{path:"",component:(()=>{class n{constructor(t){this.gotSrv=t,this.items=[],this.currentPage=0,this.itemsPerPage=12,this.characters=[]}ngOnInit(){this.gotSrv.getCharacters().subscribe(t=>{this.items=t.map(a=>({id:a.id,text:a.fullName,altText:a.title})),this.characters=t,this.card=this.characterToCard(t[0])})}showCharacterCard(t){this.card=this.characterToCard(this.characters[t.id])}characterToCard(t){return{image:t.imageUrl,title:t.fullName,subTitle:t.family,text:t.title}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-game-of-thrones"]],decls:5,vars:2,consts:[[1,"text-center","mb-3"],["class","container",4,"ngIf","ngIfElse"],["spinner",""],[1,"container"],[1,"row"],[1,"col-8"],[3,"items","currentPage","itemsPerPage"],["item",""],[3,"itemsLength","itemsPerPage","currentPage","pageChanged"],["class","col align-self-center",4,"ngIf"],[3,"click"],["class","text-muted",4,"ngIf"],[1,"badge","bg-secondary"],[1,"text-muted"],[1,"col","align-self-center"],[3,"card"]],template:function(t,a){if(1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Game of Thrones Characters"),e.qZA(),e.YNc(2,O,8,7,"div",1),e.YNc(3,Z,1,0,"ng-template",null,2,e.W1O)),2&t){const s=e.MAs(4);e.xp6(2),e.Q6J("ngIf",a.items.length>0)("ngIfElse",s)}},directives:[m.O5,f.n,u.Q,d.A,T.O],styles:["li[_ngcontent-%COMP%]{cursor:pointer;list-style-type:none}","li[_ngcontent-%COMP%]:hover{color:#0d6efd;transform:translate(5px)}","span[_ngcontent-%COMP%]{margin:0 3px}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.Bz.forChild(_)],p.Bz]}),n})(),G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.ez,P,l.m]]}),n})()}}]);