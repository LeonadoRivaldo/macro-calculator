(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zrcO:function(t,n,e){"use strict";e.r(n);var c=e("ofXK"),r=e("PCNd"),i=e("tyNb"),o=e("fXoL"),a=e("mrSG"),s=e("3Pt+"),l=e("AytR"),u=e("tk/3");let b=(()=>{class t{constructor(t){this.http=t;const{jsonFolder:n}=l.a;this.jsonFolder=n,this.origin=window.location.origin}getJSON(t){return this.http.get(`${this.origin}/${this.jsonFolder}/${t}`).toPromise()}}return t.\u0275fac=function(n){return new(n||t)(o.Zb(u.a))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=e("kmKP");function m(t,n){1&t&&(o.Rb(0,"span"),o.Bc(1,"*"),o.Qb())}function d(t,n){if(1&t&&(o.Rb(0,"label",8),o.Bc(1),o.zc(2,m,2,0,"span",9),o.Qb()),2&t){const t=o.fc();o.Eb("sr-only",t.srOnly)("title",t.title),o.ic("for",t.name),o.zb(1),o.Dc("",t.label||t.title," "),o.zb(1),o.ic("ngIf",t.getInputError("required"))}}function f(t,n){if(1&t){const t=o.Sb();o.Rb(0,"div",10),o.dc("click",(function(n){return o.rc(t),o.fc().emitEvent(n,"input:prepend:click")})),o.Nb(1,"span",11),o.Qb()}if(2&t){const t=o.fc();o.zb(1),o.ic("innerHtml",t.inputGroupPrependContent,o.sc)}}function p(t,n){if(1&t){const t=o.Sb();o.Rb(0,"div",12),o.dc("click",(function(n){return o.rc(t),o.fc().emitEvent(n,"input:append:click")})),o.Nb(1,"span",11),o.Qb()}if(2&t){const t=o.fc();o.zb(1),o.ic("innerHtml",t.inputGroupAppendContent,o.sc)}}function h(t,n){if(1&t){const t=o.Sb();o.Rb(0,"i",13),o.dc("click",(function(){return o.rc(t),o.fc().clearField()})),o.Qb()}if(2&t){const t=o.fc();o.Eb("is-input-group",t.inputGroup)}}function v(t,n){1&t&&(o.Rb(0,"span"),o.Bc(1,"Required field."),o.Qb())}function C(t,n){1&t&&(o.Rb(0,"span"),o.Bc(1,"invalid e-mail."),o.Qb())}function M(t,n){1&t&&(o.Rb(0,"span"),o.Bc(1,"invalid postal code."),o.Qb())}function O(t,n){if(1&t&&(o.Rb(0,"span"),o.Bc(1),o.Qb()),2&t){const t=o.fc(2);o.zb(1),o.Cc(t.errorMessage)}}function P(t,n){if(1&t&&(o.Rb(0,"span"),o.Bc(1),o.Qb()),2&t){const t=o.fc(2);o.zb(1),o.Cc(t.validationErrorMsg)}}function _(t,n){if(1&t&&(o.Rb(0,"span"),o.Bc(1),o.Qb()),2&t){const t=o.fc(2);o.zb(1),o.Cc(t.senhaErrorMsg)}}function z(t,n){if(1&t&&(o.Rb(0,"span"),o.Bc(1),o.Qb()),2&t){const t=o.fc(2);o.zb(1),o.Cc(t.patternError)}}function y(t,n){if(1&t&&(o.Rb(0,"span"),o.Bc(1),o.Qb()),2&t){const t=o.fc(2);o.zb(1),o.Cc(t.maxLengthError)}}function E(t,n){if(1&t&&(o.Rb(0,"span"),o.Bc(1),o.Qb()),2&t){const t=o.fc(2);o.zb(1),o.Cc(t.minLengthError)}}function w(t,n){if(1&t&&(o.Rb(0,"span"),o.Bc(1),o.Qb()),2&t){const t=o.fc(2);o.zb(1),o.Cc(t.uniqueError)}}function R(t,n){if(1&t&&(o.Rb(0,"span"),o.Bc(1),o.Qb()),2&t){const t=o.fc(2);o.zb(1),o.Cc(t.erroCustomizado)}}function Q(t,n){if(1&t&&(o.Rb(0,"p",14),o.zc(1,v,2,0,"span",9),o.zc(2,C,2,0,"span",9),o.zc(3,M,2,0,"span",9),o.zc(4,O,2,1,"span",9),o.zc(5,P,2,1,"span",9),o.zc(6,_,2,1,"span",9),o.zc(7,z,2,1,"span",9),o.zc(8,y,2,1,"span",9),o.zc(9,E,2,1,"span",9),o.zc(10,w,2,1,"span",9),o.zc(11,R,2,1,"span",9),o.Qb()),2&t){const t=o.fc();o.zb(1),o.ic("ngIf",t.required),o.zb(1),o.ic("ngIf",t.invalidEmail),o.zb(1),o.ic("ngIf",t.invalidCEP),o.zb(1),o.ic("ngIf",t.customError),o.zb(1),o.ic("ngIf",t.validationError),o.zb(1),o.ic("ngIf",t.senhaError),o.zb(1),o.ic("ngIf",t.pattern),o.zb(1),o.ic("ngIf",t.maxLength),o.zb(1),o.ic("ngIf",t.minLength),o.zb(1),o.ic("ngIf",t.isNotUnique),o.zb(1),o.ic("ngIf",t.erroCustomizado)}}const I=["*"];let k=(()=>{class t{constructor(){this.srOnly=!1,this.marginBottom="20px",this.inputGroup=!1,this.inputGroupPrepend=!1,this.inputGroupAppend=!1,this.clear=!1,this.inputFieldEvents=new o.n,this.clearEvent=new o.n}getInputError(t){return this.input.errors?this.input.errors[t]:null}get hasError(){return this.input.invalid&&(this.input.dirty||this.input.touched)}get customError(){return this.hasError&&!!this.errorMessage}get senhaError(){return this.hasError&&this.getInputError("senhaError")}get senhaErrorMsg(){return this.getInputError("senhaError")}get validationError(){return this.hasError&&this.getInputError("validationError")}get validationErrorMsg(){return this.getInputError("validationError")}get invalidEmail(){return this.hasError&&this.getInputError("email")}get invalidCEP(){return this.hasError&&this.getInputError("invalidCEP")}get maxLength(){return this.hasError&&void 0!==this.getInputError("maxlength")}get maxLengthError(){const t=this.getInputError("maxlength");return this.maxLength?`N\xfamero de caracteres ultrapassado. Escreva at\xe9 ${t.requiredLength} caracteres.`:""}get minLength(){return this.hasError&&void 0!==this.getInputError("minlength")}get minLengthError(){const t=this.getInputError("minlength");return this.minLength?`Este campo deve conter no m\xednimo ${t.requiredLength} caracteres.`:""}get required(){return this.hasError&&this.getInputError("required")}get erroCustomizado(){return this.hasError&&this.getInputError("erroCustomizado")}get isNotUnique(){const t=this.getInputError("unique");return this.hasError&&t&&t.isNotUnique}get uniqueError(){const t=this.getInputError("unique");return t?t.errorMsg:""}get showClear(){return this.input.value&&this.clear}get pattern(){return this.hasError&&void 0!==this.getInputError("pattern")}get patternError(){return`Este deve conter ${this.getInputError("pattern").requiredPattern.replace(/\//gim,"")} caracteres.`}clearField(){this.clearEvent.emit({name:"clear:field"})}ngOnInit(){}ngAfterContentInit(){if(this.input=this.control||this.model,void 0===this.input)throw new Error("Esse componente precisa de uma diretiva ngModel ou formControlName para funcionar!");this.addClearClass()}ngOnChanges(t){t.clear&&this.addClearClass()}addClearClass(){setTimeout(()=>{const t=document.querySelector(`#${this.name}`);this.clear&&t.classList.add("clear-btn")},500)}emitEvent(t,n){this.inputFieldEvents.emit({name:n,originalEvent:t})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["mc-form-input"]],contentQueries:function(t,n,e){var c;1&t&&(o.Fb(e,s.t,!0),o.Fb(e,s.h,!0)),2&t&&(o.pc(c=o.ec())&&(n.model=c.first),o.pc(c=o.ec())&&(n.control=c.first))},inputs:{name:"name",label:"label",title:"title",srOnly:"srOnly",marginBottom:"marginBottom",errorMessage:"errorMessage",inputGroup:"inputGroup",inputGroupPrepend:"inputGroupPrepend",inputGroupPrependContent:"inputGroupPrependContent",inputGroupAppend:"inputGroupAppend",inputGroupAppendContent:"inputGroupAppendContent",clear:"clear"},outputs:{inputFieldEvents:"inputFieldEvents",clearEvent:"clearEvent"},features:[o.xb],ngContentSelectors:I,decls:9,vars:11,consts:[[1,"form-group"],["class","form-label",3,"for","sr-only","title",4,"ngIf"],[1,"input-holder"],["class","input-group-prepend",3,"click",4,"ngIf"],["class","input-group-append",3,"click",4,"ngIf"],["class","clear-field fas fa-times",3,"is-input-group","click",4,"ngIf"],[1,"form-text-group"],["class","form-text error",4,"ngIf"],[1,"form-label",3,"for"],[4,"ngIf"],[1,"input-group-prepend",3,"click"],[1,"input-group-text",3,"innerHtml"],[1,"input-group-append",3,"click"],[1,"clear-field","fas","fa-times",3,"click"],[1,"form-text","error"]],template:function(t,n){1&t&&(o.hc(),o.Rb(0,"div",0),o.zc(1,d,3,7,"label",1),o.Rb(2,"div",2),o.zc(3,f,2,1,"div",3),o.gc(4),o.zc(5,p,2,1,"div",4),o.zc(6,h,1,2,"i",5),o.Qb(),o.Rb(7,"div",6),o.zc(8,Q,12,11,"p",7),o.Qb(),o.Qb()),2&t&&(o.yc("margin-bottom",n.marginBottom),o.Eb("has-error",n.hasError),o.zb(1),o.ic("ngIf",n.label||n.title),o.zb(1),o.Eb("input-group",n.inputGroup),o.zb(1),o.ic("ngIf",n.inputGroupPrepend),o.zb(2),o.ic("ngIf",n.inputGroupAppend),o.zb(1),o.ic("ngIf",n.showClear),o.zb(2),o.ic("ngIf",n.hasError))},directives:[c.u],styles:["label.form-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:inherit;color:inherit}.input-holder[_ngcontent-%COMP%]{position:relative}.clear-field[_ngcontent-%COMP%]{top:50%;cursor:pointer;transform:translateY(-50%);right:15px;height:14px;font-size:14px;color:#b8b8b8;position:absolute}.clear-field.is-input-group[_ngcontent-%COMP%]{right:50px}"]}),t})();function x(t,n){if(1&t&&o.Nb(0,"option",31),2&t){const t=n.$implicit;o.ic("value",t.value)("innerHTML",t.label,o.sc)}}function N(t,n){if(1&t&&(o.Pb(0),o.zc(1,x,1,2,"option",30),o.Ob()),2&t){const t=o.fc();o.zb(1),o.ic("ngForOf",t.activityList)}}let F=(()=>{class t{constructor(t,n){this.activityListService=t,this.userService=n,this.activityList=[]}get form(){return this.userForm.controls}ngOnInit(){return Object(a.a)(this,void 0,void 0,(function*(){this.userForm=new s.i({name:new s.f(null,[s.E.required,s.E.min(3)]),age:new s.f(null,[s.E.required,s.E.pattern(/[0-9]/)]),gender:new s.f(null,[s.E.required]),weight:new s.f(null,[s.E.required,s.E.pattern(/[0-9]/)]),height:new s.f(null,[s.E.required,s.E.pattern(/[0-9]/)]),activity:new s.f("",[s.E.required]),exObese:new s.f(!1)}),this.formKeys=Object.keys(this.form),this.activityList=yield this.activityListService.getJSON("activity_level_list.json")}))}ngOnDestroy(){this.userForm.reset({})}save(){this.userService.create(this.userForm.value)}cancel(){this.userService.showUserForm(!1)}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(b),o.Mb(g.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["mc-user-form"]],decls:37,vars:3,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],["name","user-form",1,"app-form",3,"formGroup"],["name","user-name","label","Name"],["type","text","id","user-name","formControlName","name","placeholder","Type user name",1,"form-control"],["userName",""],["name","user-age","label","Age"],["type","text","id","user-age","formControlName","age","placeholder","Type user age",1,"form-control"],["userAge",""],["name","user-gender","label","Gender"],[1,"radio-group"],[1,"form-check","form-check-inline"],["type","radio","name","gender","id","male","value","male","formControlName","gender",1,"form-check-input"],["for","male",1,"form-check-label"],["type","radio","name","gender","id","female","value","female","formControlName","gender",1,"form-check-input"],["for","female",1,"form-check-label"],["name","user-weight","label","Weight"],["type","text","id","user-weight","formControlName","weight","placeholder","Type user weight in kilograms",1,"form-control"],["userWeight",""],["name","user-weight","label","height"],["type","text","id","user-height","formControlName","height","placeholder","Type user height in centimeters",1,"form-control"],["userHeight",""],["name","user-activity","label","Activity Level"],["name","user-activity","id","user-activity","formControlName","activity",1,"form-control"],["value",""],[4,"ngIf"],[1,"card-footer","botao-group"],[1,"botao","btn-success",3,"disabled","click"],[1,"botao","btn-cancelar","btn-linha",3,"click"],[3,"value","innerHTML",4,"ngFor","ngForOf"],[3,"value","innerHTML"]],template:function(t,n){1&t&&(o.Rb(0,"div",0),o.Rb(1,"div",1),o.Bc(2," New User "),o.Qb(),o.Rb(3,"div",2),o.Rb(4,"form",3),o.Rb(5,"mc-form-input",4),o.Nb(6,"input",5,6),o.Qb(),o.Rb(8,"mc-form-input",7),o.Nb(9,"input",8,9),o.Qb(),o.Rb(11,"mc-form-input",10),o.Rb(12,"div",11),o.Rb(13,"div",12),o.Nb(14,"input",13),o.Rb(15,"label",14),o.Bc(16,"Male"),o.Qb(),o.Qb(),o.Rb(17,"div",12),o.Nb(18,"input",15),o.Rb(19,"label",16),o.Bc(20,"Female"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Rb(21,"mc-form-input",17),o.Nb(22,"input",18,19),o.Qb(),o.Rb(24,"mc-form-input",20),o.Nb(25,"input",21,22),o.Qb(),o.Rb(27,"mc-form-input",23),o.Rb(28,"select",24),o.Rb(29,"option",25),o.Bc(30,"Select an option..."),o.Qb(),o.zc(31,N,2,1,"ng-container",26),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Rb(32,"div",27),o.Rb(33,"button",28),o.dc("click",(function(){return n.save()})),o.Bc(34,"Save"),o.Qb(),o.Rb(35,"button",29),o.dc("click",(function(){return n.cancel()})),o.Bc(36,"cancel"),o.Qb(),o.Qb(),o.Qb()),2&t&&(o.zb(4),o.ic("formGroup",n.userForm),o.zb(27),o.ic("ngIf",n.activityList.length>0),o.zb(2),o.ic("disabled",n.userForm.invalid))},directives:[s.G,s.r,s.j,k,s.c,s.q,s.h,s.y,s.C,s.v,s.F,c.u,c.t],styles:[""]}),t})();var B=e("1kSV"),S=e("wHSu"),G=function(t){return t[t.very_low=1.2]="very_low",t[t.light=1.375]="light",t[t.moderate=1.55]="moderate",t[t.active=1.725]="active",t[t.very_active=1.9]="very_active",t}({});let q=(()=>{class t{constructor(){}bulk(t){const{exObese:n}=t,e=n?this.cutting(t):this.TMB(t);return e+.2*e}cutting(t){const n=t=>t-.2*t,{exObese:e}=t,c=n(this.TMB(t));return e?n(c):c}maintenance(t){return this.TMB(t)}TMB(t){const{activity:n,age:e,height:c,gender:r,weight:i}=t;let o=10*i+6.25*c-5*e;return o="male"===r?o+5:o-161,Math.ceil(o*G[n])}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var L=function(t){return t[t.very_low=1.5]="very_low",t[t.light=1.8]="light",t[t.moderate=2]="moderate",t[t.active=2.5]="active",t[t.very_active=3]="very_active",t}({}),j=function(t){return t[t.very_low=.4]="very_low",t[t.light=.5]="light",t[t.moderate=.6]="moderate",t[t.active=.8]="active",t[t.very_active=1]="very_active",t}({});let A=(()=>{class t{constructor(t){this.calories=t}calcMacroProt(t){return this.calcMacro(t.weight,L[t.activity])}calcMacroFat(t){return this.calcMacro(t.weight,j[t.activity])}calcMacro(t,n){return Math.ceil(t*n)}calcMacroCarb(t,n){const e=this.calories[n](t),c=4*this.calcMacroProt(t),r=9*this.calcMacroFat(t);return Math.ceil((e-(r+c))/4)}}return t.\u0275fac=function(n){return new(n||t)(o.Zb(q))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function $(t,n){if(1&t&&(o.Rb(0,"div",15),o.Rb(1,"div"),o.Rb(2,"div",16),o.Rb(3,"h5",17),o.Nb(4,"fa-icon",7),o.Bc(5),o.Qb(),o.Rb(6,"p",18),o.Bc(7),o.Qb(),o.Qb(),o.Qb(),o.Qb()),2&t){const t=n.$implicit,e=o.fc(3);o.zb(1),o.Cb("card ",t.calc,""),o.zb(3),o.ic("icon",t.icon||e.icons[t.calc]),o.zb(1),o.Dc(" ",t.title," "),o.zb(2),o.Dc(" ",e.getCalories(t.calc)," Kcal ")}}function T(t,n){if(1&t&&(o.Rb(0,"div",13),o.zc(1,$,8,6,"div",14),o.Qb()),2&t){const t=o.fc(2);o.zb(1),o.ic("ngForOf",t.Macros.calories)}}function D(t,n){if(1&t&&(o.Rb(0,"th",22),o.Nb(1,"fa-icon",25),o.Bc(2),o.Qb()),2&t){const t=n.$implicit,e=o.fc(3);o.Cb("calories-item ",t.calc,""),o.zb(1),o.ic("icon",e.icons[t.calc]),o.zb(1),o.Dc(" ",t.title," ")}}function U(t,n){if(1&t&&(o.Rb(0,"td"),o.Bc(1),o.Qb()),2&t){const t=n.$implicit,e=o.fc().$implicit,c=o.fc(3);o.Cb("macro-item ",e.calc,""),o.zb(1),o.Dc("",c.calcMacros(e.calc,t.calc),"g")}}function H(t,n){if(1&t&&(o.Rb(0,"tr"),o.Rb(1,"th",22),o.Nb(2,"fa-icon",25),o.Bc(3),o.Qb(),o.zc(4,U,2,4,"td",26),o.Qb()),2&t){const t=n.$implicit,e=o.fc(3);o.zb(1),o.Cb("macro-item title ",t.calc,""),o.zb(1),o.ic("icon",e.icons[t.calc]),o.zb(1),o.Dc(" ",t.title," "),o.zb(1),o.ic("ngForOf",e.Macros.calories)}}function V(t,n){if(1&t&&(o.Rb(0,"div",19),o.Rb(1,"div",20),o.Rb(2,"p"),o.Bc(3,"Macro nutrients, Proteins, Carbohydrate and Fats"),o.Qb(),o.Rb(4,"p"),o.Rb(5,"small"),o.Bc(6,"Carbohydrates are calculated based on the remaining calories divide by 4"),o.Qb(),o.Qb(),o.Rb(7,"table",21),o.Rb(8,"thead"),o.Rb(9,"tr"),o.Nb(10,"th",22),o.zc(11,D,3,5,"th",23),o.Qb(),o.Qb(),o.Rb(12,"tbody"),o.zc(13,H,5,6,"tr",24),o.Qb(),o.Qb(),o.Qb(),o.Qb()),2&t){const t=o.fc(2);o.zb(11),o.ic("ngForOf",t.Macros.calories),o.zb(2),o.ic("ngForOf",t.Macros.macros)}}function J(t,n){if(1&t&&o.Nb(0,"mc-user-card",27),2&t){const t=o.fc(2);o.ic("user",t.uInfo)("isView",!0)}}function K(t,n){if(1&t){const t=o.Sb();o.Rb(0,"div",1),o.Rb(1,"div",2),o.Rb(2,"ul",3,4),o.dc("activeIdChange",(function(n){return o.rc(t),o.fc().active=n})),o.Rb(4,"li",5),o.Rb(5,"a",6),o.Nb(6,"fa-icon",7),o.Bc(7," Calories "),o.Qb(),o.zc(8,T,2,1,"ng-template",8),o.Qb(),o.Rb(9,"li",9),o.Rb(10,"a",6),o.Nb(11,"fa-icon",7),o.Bc(12," Macro Nutrients "),o.Qb(),o.zc(13,V,14,2,"ng-template",8),o.Qb(),o.Rb(14,"li",10),o.Rb(15,"a",6),o.Nb(16,"fa-icon",7),o.Bc(17," User Info "),o.Qb(),o.zc(18,J,1,2,"ng-template",8),o.Qb(),o.Qb(),o.Nb(19,"div",11),o.Qb(),o.Nb(20,"a",12),o.Qb()}if(2&t){const t=o.qc(3),n=o.fc();o.zb(2),o.ic("activeId",n.active),o.zb(4),o.ic("icon",n.icons.calories),o.zb(5),o.ic("icon",n.icons.macros),o.zb(5),o.ic("icon",n.icons.user),o.zb(3),o.ic("ngbNavOutlet",t)}}let W=(()=>{class t{constructor(t,n,e,c){this.userservice=t,this.modalservice=n,this.kcalService=e,this.macroservice=c,this.active="macros",this.Macros={calories:[{calc:"cutting",title:"Cutting"},{calc:"maintenance",title:"Maintenance"},{calc:"bulk",title:"Bulking"}],macros:[{calc:"carbo",title:"Carbohydrates"},{calc:"proteins",title:"Proteins"},{calc:"fats",title:"Fats"}]},this.loaded=!1,this.icons={user:S.a,calories:S.b,macros:S.j,proteins:S.e,fats:S.l,carbo:S.d,bulk:S.f,cutting:S.i,maintenance:S.k}}get uInfo(){return this.user}ngOnInit(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.fetchUser(),this.calcCalories()}))}getCalories(t){return this[t]}fetchUser(){return Object(a.a)(this,void 0,void 0,(function*(){this.user=yield this.userservice.get(this.userId),this.loaded=!!this.user}))}calcCalories(){this.bulk=this.kcalService.bulk(this.user),this.cutting=this.kcalService.cutting(this.user),this.maintenance=this.kcalService.maintenance(this.user)}calcMacros(t,n){switch(t){case"fats":return this.macroservice.calcMacroFat(this.user);case"proteins":return this.macroservice.calcMacroProt(this.user);case"carbo":return this.macroservice.calcMacroCarb(this.user,n)}}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(g.a),o.Mb(B.q),o.Mb(q),o.Mb(A))},t.\u0275cmp=o.Gb({type:t,selectors:[["mc-view-macros"]],inputs:{userId:"userId"},decls:1,vars:1,consts:[["class","macro-container container-fluid",4,"ngIf"],[1,"macro-container","container-fluid"],[1,"macro-content","row"],["ngbNav","","orientation","vertical",1,"nav-pills","macro-menu","pl-3","col-12","col-lg-3",3,"activeId","activeIdChange"],["nav","ngbNav"],["ngbNavItem","calories"],["ngbNavLink","",1,"botao","btn-default","btn-linha"],[1,"remove",3,"icon"],["ngbNavContent",""],["ngbNavItem","macros"],["ngbNavItem","info"],[1,"col-12","col-lg-9",3,"ngbNavOutlet"],[1,"close"],[1,"row","macro-items","calories"],["class","col-12 calories-item",4,"ngFor","ngForOf"],[1,"col-12","calories-item"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"row","macro-items","macros"],[1,"col-12"],[1,"table","table-striped"],["scope","col"],["scope","col",3,"class",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"icon"],[3,"class",4,"ngFor","ngForOf"],[3,"user","isView"]],template:function(t,n){1&t&&o.zc(0,K,21,5,"div",0),2&t&&o.ic("ngIf",n.loaded)},styles:[".macro-container[_ngcontent-%COMP%]{padding:15px}@media (min-width:992px){.macro-container[_ngcontent-%COMP%]{height:50vh}}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]{height:100%}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items[_ngcontent-%COMP%]{padding-top:15px}@media (min-width:992px){.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items[_ngcontent-%COMP%]{padding-top:0}}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items.calories[_ngcontent-%COMP%]   .calories-item[_ngcontent-%COMP%]{margin:5px 0}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items.calories[_ngcontent-%COMP%]   .calories-item[_ngcontent-%COMP%]:first-child{margin-top:0}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items.calories[_ngcontent-%COMP%]   .calories-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items.macros[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .macro-item.title[_ngcontent-%COMP%]{text-align:left}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items[_ngcontent-%COMP%]   .card.bulk[_ngcontent-%COMP%]{border-color:#633974}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items[_ngcontent-%COMP%]   .card.bulk[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{color:#633974;font-weight:700}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items[_ngcontent-%COMP%]   .card.bulk[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:inherit}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items[_ngcontent-%COMP%]   .card.maintenance[_ngcontent-%COMP%]{border-color:#48c1c6}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items[_ngcontent-%COMP%]   .card.maintenance[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{color:#48c1c6;font-weight:700}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items[_ngcontent-%COMP%]   .card.maintenance[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:inherit}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items[_ngcontent-%COMP%]   .card.cutting[_ngcontent-%COMP%]{border-color:#f86c6b}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items[_ngcontent-%COMP%]   .card.cutting[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{color:#f86c6b;font-weight:700}.macro-container[_ngcontent-%COMP%]   .macro-content[_ngcontent-%COMP%]   .macro-items[_ngcontent-%COMP%]   .card.cutting[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:inherit}.macro-container[_ngcontent-%COMP%]   .macro-menu[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding-bottom:15px}@media (min-width:992px){.macro-container[_ngcontent-%COMP%]   .macro-menu[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;padding-bottom:0;border-bottom:0;border-right:1px solid #ddd}}.macro-container[_ngcontent-%COMP%]   .macro-menu[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%]{justify-content:start;width:100%;margin:5px 0;transition:all .5s ease;color:#525252}.macro-container[_ngcontent-%COMP%]   .macro-menu[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding-right:5px}.macro-container[_ngcontent-%COMP%]   .macro-menu[_ngcontent-%COMP%]   .botao.active[_ngcontent-%COMP%], .macro-container[_ngcontent-%COMP%]   .macro-menu[_ngcontent-%COMP%]   .botao[_ngcontent-%COMP%]:hover{color:#fff;border-color:#5696d0;background-color:#5696d0}"]}),t})();var X=e("6NWb");function Z(t,n){if(1&t){const t=o.Sb();o.Rb(0,"fa-icon",11),o.dc("click",(function(){return o.rc(t),o.fc(2).view()})),o.Qb()}if(2&t){const t=o.fc(2);o.ic("icon",t.icons.faEye)}}function Y(t,n){if(1&t&&(o.Rb(0,"span",14),o.Rb(1,"b"),o.Bc(2),o.Qb(),o.Bc(3),o.Qb()),2&t){const t=o.fc().$implicit,n=o.fc(2);o.ic("title",n.user[t]),o.zb(2),o.Dc("",t,":"),o.zb(1),o.Dc(" ",n.user[t],"")}}function tt(t,n){if(1&t&&(o.Rb(0,"p",12),o.zc(1,Y,4,3,"span",13),o.Qb()),2&t){const t=n.$implicit;o.zb(1),o.ic("ngIf","_id"!=t)}}function nt(t,n){if(1&t){const t=o.Sb();o.Rb(0,"div",1,2),o.Rb(2,"div",3),o.Rb(3,"h5",4),o.Bc(4),o.Qb(),o.Rb(5,"div",5),o.zc(6,Z,1,1,"fa-icon",6),o.Rb(7,"fa-icon",7),o.dc("click",(function(){return o.rc(t),o.fc().edit()})),o.Qb(),o.Rb(8,"fa-icon",8),o.dc("click",(function(){return o.rc(t),o.fc().remove()})),o.Qb(),o.Qb(),o.Nb(9,"hr",9),o.zc(10,tt,2,1,"p",10),o.Qb(),o.Qb()}if(2&t){const t=o.fc();o.zb(3),o.ic("title",t.name),o.zb(1),o.Cc(t.name),o.zb(2),o.ic("ngIf",!t.isView),o.zb(1),o.ic("icon",t.icons.faEdit),o.zb(1),o.ic("icon",t.icons.faTrashAlt),o.zb(2),o.ic("ngForOf",t.userProps(t.user))}}let et=(()=>{class t{constructor(t,n,e){this.modalService=n,this.userService=e,this.isView=!1,this.icons={faEdit:S.g,faTrashAlt:S.n,faEye:S.h},this.userProps=Object.keys,t.keyboard=!0}get name(){return this.user.name}ngOnInit(){}remove(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.userService.delete(this.user._id)}))}edit(){alert("TODO edit")}view(){this.modal=this.modalService.open(W,{size:"xl"}),this.modal.componentInstance.userId=this.user._id}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(B.r),o.Mb(B.q),o.Mb(g.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["mc-user-card"]],inputs:{user:"user",isView:"isView"},decls:1,vars:1,consts:[["class","card card-shadow",4,"ngIf"],[1,"card","card-shadow"],["card",""],[1,"card-body","p-3"],[1,"card-title","hide-text-overflow",3,"title"],[1,"actions"],["class","view",3,"icon","click",4,"ngIf"],[1,"edit",3,"icon","click"],[1,"remove",3,"icon","click"],[1,"card-line"],["class","card-text text-left hide-text-overflow",4,"ngFor","ngForOf"],[1,"view",3,"icon","click"],[1,"card-text","text-left","hide-text-overflow"],[3,"title",4,"ngIf"],[3,"title"]],template:function(t,n){1&t&&o.zc(0,nt,11,6,"div",0),2&t&&o.ic("ngIf",n.user)},directives:[c.u,X.b,c.t],styles:[".actions[_ngcontent-%COMP%]{position:absolute;bottom:5px;right:5px;display:flex;align-items:center}.actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{cursor:pointer;padding:0 5px;font-size:18px;transition:all .5s ease}.actions[_ngcontent-%COMP%]   fa-icon.view[_ngcontent-%COMP%]{padding-top:3px}.actions[_ngcontent-%COMP%]   fa-icon.view[_ngcontent-%COMP%]:hover{color:#287d80}.actions[_ngcontent-%COMP%]   fa-icon.edit[_ngcontent-%COMP%]:hover{color:#5696d0}.actions[_ngcontent-%COMP%]   fa-icon.remove[_ngcontent-%COMP%]:hover{color:#ea4e3d}"]}),Object(a.b)([(t,n,e)=>{const c=e.value;e.value=function(...t){return confirm("Are you sure that?")?c.apply(this):null}}],t.prototype,"remove",null),t})();function ct(t,n){if(1&t&&(o.Rb(0,"div",6),o.Nb(1,"mc-user-card",7),o.Qb()),2&t){const t=n.$implicit;o.zb(1),o.ic("user",t)}}function rt(t,n){if(1&t&&(o.Rb(0,"div",1),o.zc(1,ct,2,1,"div",5),o.Qb()),2&t){const t=o.fc();o.zb(1),o.ic("ngForOf",t.users)}}function it(t,n){if(1&t){const t=o.Sb();o.Rb(0,"p"),o.Bc(1,"No users found "),o.Rb(2,"a",8),o.dc("click",(function(){return o.rc(t),o.fc().addUser(!0)})),o.Bc(3,"add user"),o.Qb(),o.Qb()}}let ot=(()=>{class t{constructor(t,n){this.userService=t,this.modalService=n,this.showForm=!1,this.users=[]}ngOnInit(){this.userService.userActions$.subscribe(t=>{const{name:n,value:e}=t;try{this[n](e)}catch(c){console.error(c),console.log("unknown")}}),this.getUsers()}addUser(t){this.showForm=t||!this.showForm,this.showForm?this.modalService.open(F):this.modalService.dismissAll()}getUsers(){return Object(a.a)(this,void 0,void 0,(function*(){this.users=yield this.userService.getAll()}))}}return t.\u0275fac=function(n){return new(n||t)(o.Mb(g.a),o.Mb(B.q))},t.\u0275cmp=o.Gb({type:t,selectors:[["mc-user-list"]],decls:5,vars:2,consts:[[1,"container-fluid","p-0"],[1,"row"],[1,"col"],["class","row",4,"ngIf"],[4,"ngIf"],["class","col col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col","col-sm-6","col-md-4","col-lg-3"],[3,"user"],["href","#",1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(o.Rb(0,"main",0),o.Rb(1,"div",1),o.Rb(2,"div",2),o.zc(3,rt,2,1,"div",3),o.zc(4,it,4,0,"p",4),o.Qb(),o.Qb(),o.Qb()),2&t&&(o.zb(3),o.ic("ngIf",n.users.length>0),o.zb(1),o.ic("ngIf",0==n.users.length))},directives:[c.u,c.t,et],styles:[""]}),t})();const at=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["mc-users"]],decls:2,vars:0,consts:[[1,"container","pt-4"]],template:function(t,n){1&t&&(o.Rb(0,"main",0),o.Nb(1,"mc-user-list"),o.Qb())},directives:[ot],styles:[""]}),t})()}];let st=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},imports:[[i.a.forChild(at)],i.a]}),t})();var lt=e("D+D1"),ut=e("V+o+");let bt=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},imports:[[r.a,c.c]]}),t})();o.uc(W,[et,lt.a,k,ut.a,X.b,X.a,X.c,X.e,X.d,X.f,X.g,s.G,s.v,s.F,s.c,s.w,s.z,s.a,s.C,s.D,s.y,s.q,s.r,s.B,s.n,s.m,s.x,s.b,s.d,s.t,s.u,s.s,s.g,s.j,s.h,s.k,s.e,B.a,B.G,B.J,B.H,B.I,B.K,B.b,B.c,B.e,B.O,B.N,B.d,B.Q,B.f,B.g,B.h,B.p,B.i,B.j,B.k,B.n,B.m,B.l,B.y,B.u,B.t,B.v,B.w,B.x,B.z,B.A,B.B,B.C,B.D,B.E,B.F,B.L,B.M,B.P,B.V,B.W,B.X,B.Y,B.Z,B.o,B.U,B.R,B.S,B.T,c.r,c.s,c.t,c.u,c.B,c.x,c.y,c.z,c.A,c.v,c.w,W],[c.b,c.I,c.q,c.l,c.F,c.g,c.D,c.G,c.d,c.f,c.j,c.k,c.m]),e.d(n,"UsersModule",(function(){return gt}));let gt=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(n){return new(n||t)},imports:[[c.c,r.a,st,bt]]}),t})()}}]);