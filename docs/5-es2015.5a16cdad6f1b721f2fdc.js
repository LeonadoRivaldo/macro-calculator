(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zrcO:function(r,t,e){"use strict";e.r(t);var n=e("ofXK"),i=e("PCNd"),o=e("tyNb"),c=e("fXoL"),s=e("wHSu"),a=e("6NWb");const u=function(){return{color:"#fff"}};let l=(()=>{class r{constructor(){this.icon=s.b}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=c.Gb({type:r,selectors:[["mc-add-button"]],decls:2,vars:3,consts:[[1,"btn","btn-primary","text-light"],[3,"icon","styles"]],template:function(r,t){1&r&&(c.Rb(0,"button",0),c.Nb(1,"fa-icon",1),c.Qb()),2&r&&(c.zb(1),c.ic("icon",t.icon)("styles",c.lc(2,u)))},directives:[a.a],styles:[""]}),r})();var p=e("3Pt+");function b(r,t){1&r&&(c.Rb(0,"span"),c.Ac(1,"*"),c.Qb())}function f(r,t){if(1&r&&(c.Rb(0,"label",8),c.Ac(1),c.yc(2,b,2,0,"span",9),c.Qb()),2&r){const r=c.fc();c.Eb("sr-only",r.srOnly)("title",r.title),c.ic("for",r.name),c.zb(1),c.Cc("",r.label||r.title," "),c.zb(1),c.ic("ngIf",r.getInputError("required"))}}function m(r,t){if(1&r){const r=c.Sb();c.Rb(0,"div",10),c.dc("click",(function(t){return c.rc(r),c.fc().emitEvent(t,"input:prepend:click")})),c.Nb(1,"span",11),c.Qb()}if(2&r){const r=c.fc();c.zb(1),c.ic("innerHtml",r.inputGroupPrependContent,c.sc)}}function d(r,t){if(1&r){const r=c.Sb();c.Rb(0,"div",12),c.dc("click",(function(t){return c.rc(r),c.fc().emitEvent(t,"input:append:click")})),c.Nb(1,"span",11),c.Qb()}if(2&r){const r=c.fc();c.zb(1),c.ic("innerHtml",r.inputGroupAppendContent,c.sc)}}function g(r,t){if(1&r){const r=c.Sb();c.Rb(0,"i",13),c.dc("click",(function(){return c.rc(r),c.fc().clearField()})),c.Qb()}if(2&r){const r=c.fc();c.Eb("is-input-group",r.inputGroup)}}function h(r,t){1&r&&(c.Rb(0,"span"),c.Ac(1,"Required field."),c.Qb())}function E(r,t){1&r&&(c.Rb(0,"span"),c.Ac(1,"invalid e-mail."),c.Qb())}function v(r,t){1&r&&(c.Rb(0,"span"),c.Ac(1,"invalid postal code."),c.Qb())}function y(r,t){if(1&r&&(c.Rb(0,"span"),c.Ac(1),c.Qb()),2&r){const r=c.fc(2);c.zb(1),c.Bc(r.errorMessage)}}function I(r,t){if(1&r&&(c.Rb(0,"span"),c.Ac(1),c.Qb()),2&r){const r=c.fc(2);c.zb(1),c.Bc(r.validationErrorMsg)}}function Q(r,t){if(1&r&&(c.Rb(0,"span"),c.Ac(1),c.Qb()),2&r){const r=c.fc(2);c.zb(1),c.Bc(r.senhaErrorMsg)}}function R(r,t){if(1&r&&(c.Rb(0,"span"),c.Ac(1),c.Qb()),2&r){const r=c.fc(2);c.zb(1),c.Bc(r.patternError)}}function z(r,t){if(1&r&&(c.Rb(0,"span"),c.Ac(1),c.Qb()),2&r){const r=c.fc(2);c.zb(1),c.Bc(r.maxLengthError)}}function C(r,t){if(1&r&&(c.Rb(0,"span"),c.Ac(1),c.Qb()),2&r){const r=c.fc(2);c.zb(1),c.Bc(r.minLengthError)}}function w(r,t){if(1&r&&(c.Rb(0,"span"),c.Ac(1),c.Qb()),2&r){const r=c.fc(2);c.zb(1),c.Bc(r.uniqueError)}}function A(r,t){if(1&r&&(c.Rb(0,"span"),c.Ac(1),c.Qb()),2&r){const r=c.fc(2);c.zb(1),c.Bc(r.erroCustomizado)}}function G(r,t){if(1&r&&(c.Rb(0,"p",14),c.yc(1,h,2,0,"span",9),c.yc(2,E,2,0,"span",9),c.yc(3,v,2,0,"span",9),c.yc(4,y,2,1,"span",9),c.yc(5,I,2,1,"span",9),c.yc(6,Q,2,1,"span",9),c.yc(7,R,2,1,"span",9),c.yc(8,z,2,1,"span",9),c.yc(9,C,2,1,"span",9),c.yc(10,w,2,1,"span",9),c.yc(11,A,2,1,"span",9),c.Qb()),2&r){const r=c.fc();c.zb(1),c.ic("ngIf",r.required),c.zb(1),c.ic("ngIf",r.invalidEmail),c.zb(1),c.ic("ngIf",r.invalidCEP),c.zb(1),c.ic("ngIf",r.customError),c.zb(1),c.ic("ngIf",r.validationError),c.zb(1),c.ic("ngIf",r.senhaError),c.zb(1),c.ic("ngIf",r.pattern),c.zb(1),c.ic("ngIf",r.maxLength),c.zb(1),c.ic("ngIf",r.minLength),c.zb(1),c.ic("ngIf",r.isNotUnique),c.zb(1),c.ic("ngIf",r.erroCustomizado)}}const N=["*"];let k=(()=>{class r{constructor(){this.srOnly=!1,this.marginBottom="20px",this.inputGroup=!1,this.inputGroupPrepend=!1,this.inputGroupAppend=!1,this.clear=!1,this.inputFieldEvents=new c.n,this.clearEvent=new c.n}getInputError(r){return this.input.errors?this.input.errors[r]:null}get hasError(){return this.input.invalid&&(this.input.dirty||this.input.touched)}get customError(){return this.hasError&&!!this.errorMessage}get senhaError(){return this.hasError&&this.getInputError("senhaError")}get senhaErrorMsg(){return this.getInputError("senhaError")}get validationError(){return this.hasError&&this.getInputError("validationError")}get validationErrorMsg(){return this.getInputError("validationError")}get invalidEmail(){return this.hasError&&this.getInputError("email")}get invalidCEP(){return this.hasError&&this.getInputError("invalidCEP")}get maxLength(){return this.hasError&&void 0!==this.getInputError("maxlength")}get maxLengthError(){const r=this.getInputError("maxlength");return this.maxLength?`N\xfamero de caracteres ultrapassado. Escreva at\xe9 ${r.requiredLength} caracteres.`:""}get minLength(){return this.hasError&&void 0!==this.getInputError("minlength")}get minLengthError(){const r=this.getInputError("minlength");return this.minLength?`Este campo deve conter no m\xednimo ${r.requiredLength} caracteres.`:""}get required(){return this.hasError&&this.getInputError("required")}get erroCustomizado(){return this.hasError&&this.getInputError("erroCustomizado")}get isNotUnique(){const r=this.getInputError("unique");return this.hasError&&r&&r.isNotUnique}get uniqueError(){const r=this.getInputError("unique");return r?r.errorMsg:""}get showClear(){return this.input.value&&this.clear}get pattern(){return this.hasError&&void 0!==this.getInputError("pattern")}get patternError(){return`Este deve conter ${this.getInputError("pattern").requiredPattern.replace(/\//gim,"")} caracteres.`}clearField(){this.clearEvent.emit({name:"clear:field"})}ngOnInit(){}ngAfterContentInit(){if(this.input=this.control||this.model,void 0===this.input)throw new Error("Esse componente precisa de uma diretiva ngModel ou formControlName para funcionar!");this.addClearClass()}ngOnChanges(r){r.clear&&this.addClearClass()}addClearClass(){setTimeout(()=>{const r=document.querySelector(`#${this.name}`);this.clear&&r.classList.add("clear-btn")},500)}emitEvent(r,t){this.inputFieldEvents.emit({name:t,originalEvent:r})}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=c.Gb({type:r,selectors:[["mc-form-input"]],contentQueries:function(r,t,e){var n;1&r&&(c.Fb(e,p.k,!0),c.Fb(e,p.c,!0)),2&r&&(c.pc(n=c.ec())&&(t.model=n.first),c.pc(n=c.ec())&&(t.control=n.first))},inputs:{name:"name",label:"label",title:"title",srOnly:"srOnly",marginBottom:"marginBottom",errorMessage:"errorMessage",inputGroup:"inputGroup",inputGroupPrepend:"inputGroupPrepend",inputGroupPrependContent:"inputGroupPrependContent",inputGroupAppend:"inputGroupAppend",inputGroupAppendContent:"inputGroupAppendContent",clear:"clear"},outputs:{inputFieldEvents:"inputFieldEvents",clearEvent:"clearEvent"},features:[c.xb],ngContentSelectors:N,decls:9,vars:11,consts:[[1,"form-group"],["class","form-label",3,"for","sr-only","title",4,"ngIf"],[1,"input-holder"],["class","input-group-prepend",3,"click",4,"ngIf"],["class","input-group-append",3,"click",4,"ngIf"],["class","clear-field fas fa-times",3,"is-input-group","click",4,"ngIf"],[1,"form-text-group"],["class","form-text error",4,"ngIf"],[1,"form-label",3,"for"],[4,"ngIf"],[1,"input-group-prepend",3,"click"],[1,"input-group-text",3,"innerHtml"],[1,"input-group-append",3,"click"],[1,"clear-field","fas","fa-times",3,"click"],[1,"form-text","error"]],template:function(r,t){1&r&&(c.hc(),c.Rb(0,"div",0),c.yc(1,f,3,7,"label",1),c.Rb(2,"div",2),c.yc(3,m,2,1,"div",3),c.gc(4),c.yc(5,d,2,1,"div",4),c.yc(6,g,1,2,"i",5),c.Qb(),c.Rb(7,"div",6),c.yc(8,G,12,11,"p",7),c.Qb(),c.Qb()),2&r&&(c.xc("margin-bottom",t.marginBottom),c.Eb("has-error",t.hasError),c.zb(1),c.ic("ngIf",t.label||t.title),c.zb(1),c.Eb("input-group",t.inputGroup),c.zb(1),c.ic("ngIf",t.inputGroupPrepend),c.zb(2),c.ic("ngIf",t.inputGroupAppend),c.zb(1),c.ic("ngIf",t.showClear),c.zb(2),c.ic("ngIf",t.hasError))},directives:[n.j],styles:["label.form-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:inherit;color:inherit}.input-holder[_ngcontent-%COMP%]{position:relative}.clear-field[_ngcontent-%COMP%]{top:50%;cursor:pointer;transform:translateY(-50%);right:15px;height:14px;font-size:14px;color:#b8b8b8;position:absolute}.clear-field.is-input-group[_ngcontent-%COMP%]{right:50px}"]}),r})();function x(r,t){if(1&r&&(c.Rb(0,"p"),c.Rb(1,"b"),c.Ac(2),c.Qb(),c.Ac(3),c.Qb()),2&r){const r=t.$implicit,e=c.fc(2);c.zb(2),c.Cc("",r,":"),c.zb(1),c.Cc(" ",e.form[r].value," ")}}function q(r,t){if(1&r&&(c.Rb(0,"div",25),c.Rb(1,"div",26),c.yc(2,x,4,2,"p",27),c.Qb(),c.Qb()),2&r){const r=c.fc();c.zb(2),c.ic("ngForOf",r.formKeys)}}let F=(()=>{class r{constructor(){}get form(){return this.userForm.controls}ngOnInit(){this.userForm=new p.d({name:new p.b(null,[p.o.required,p.o.min(3)]),age:new p.b(null,[p.o.required,p.o.pattern(/[0-9]/)]),gender:new p.b(null,[p.o.required]),weight:new p.b(null,[p.o.required,p.o.pattern(/[0-9]/)]),height:new p.b(null,[p.o.required,p.o.pattern(/[0-9]/)]),activity:new p.b(null,[p.o.required]),exObese:new p.b(!1)}),this.formKeys=Object.keys(this.form)}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=c.Gb({type:r,selectors:[["mc-user-form"]],decls:30,vars:3,consts:[[1,"contaier-fluid"],["name","user-form",1,"app-form",3,"formGroup"],["name","user-name","label","Name"],["type","text","id","user-name","formControlName","name","placeholder","Type user name",1,"form-control"],["userName",""],["name","user-age","label","Age"],["type","text","id","user-age","formControlName","age","placeholder","Type user age",1,"form-control"],["userAge",""],["name","user-gender","label","Gender"],[1,"radio-group"],[1,"form-check","form-check-inline"],["type","radio","name","gender","id","male","value","male","formControlName","gender",1,"form-check-input"],["for","male",1,"form-check-label"],["type","radio","name","gender","id","female","value","female","formControlName","gender",1,"form-check-input"],["for","female",1,"form-check-label"],["name","user-weight","label","Weight"],["type","text","id","user-weight","formControlName","weight","placeholder","Type user weight in kilograms",1,"form-control"],["userWeight",""],["name","user-weight","label","height"],["type","text","id","user-height","formControlName","height","placeholder","Type user height in centimeters",1,"form-control"],["userHeight",""],[1,"form-group","botao-group"],[1,"botao","btn-success",3,"disabled"],[1,"botao","btn-danger"],["class","card",4,"ngIf"],[1,"card"],[1,"card-body"],[4,"ngFor","ngForOf"]],template:function(r,t){1&r&&(c.Rb(0,"div",0),c.Rb(1,"form",1),c.Rb(2,"mc-form-input",2),c.Nb(3,"input",3,4),c.Qb(),c.Rb(5,"mc-form-input",5),c.Nb(6,"input",6,7),c.Qb(),c.Rb(8,"mc-form-input",8),c.Rb(9,"div",9),c.Rb(10,"div",10),c.Nb(11,"input",11),c.Rb(12,"label",12),c.Ac(13,"Male"),c.Qb(),c.Qb(),c.Rb(14,"div",10),c.Nb(15,"input",13),c.Rb(16,"label",14),c.Ac(17,"Female"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(18,"mc-form-input",15),c.Nb(19,"input",16,17),c.Qb(),c.Rb(21,"mc-form-input",18),c.Nb(22,"input",19,20),c.Qb(),c.Rb(24,"div",21),c.Rb(25,"button",22),c.Ac(26,"Save"),c.Qb(),c.Rb(27,"button",23),c.Ac(28,"cancel"),c.Qb(),c.Qb(),c.yc(29,q,3,1,"div",24),c.Qb(),c.Qb()),2&r&&(c.zb(1),c.ic("formGroup",t.userForm),c.zb(24),c.ic("disabled",t.userForm.invalid),c.zb(4),c.ic("ngIf",t.formKeys))},directives:[p.q,p.j,p.e,k,p.a,p.i,p.c,p.m,n.j,n.i],styles:[""]}),r})();function O(r,t){1&r&&(c.Rb(0,"div",5),c.Nb(1,"mc-user-form"),c.Qb())}let P=(()=>{class r{constructor(){this.showForm=!1}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=c.Gb({type:r,selectors:[["mc-user-list"]],decls:5,vars:1,consts:[[1,"container-fluid","p-0"],[1,"row"],[1,"col"],[3,"click"],["class","col-12 col-md-4",4,"ngIf"],[1,"col-12","col-md-4"]],template:function(r,t){1&r&&(c.Rb(0,"main",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Rb(3,"mc-add-button",3),c.dc("click",(function(){return t.showForm=!t.showForm})),c.Qb(),c.Qb(),c.yc(4,O,2,0,"div",4),c.Qb(),c.Qb()),2&r&&(c.zb(4),c.ic("ngIf",t.showForm))},directives:[l,n.j,F],styles:[""]}),r})();const M=[{path:"",component:(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=c.Gb({type:r,selectors:[["mc-users"]],decls:2,vars:0,consts:[[1,"container","pt-4"]],template:function(r,t){1&r&&(c.Rb(0,"main",0),c.Nb(1,"mc-user-list"),c.Qb())},directives:[P],styles:[""]}),r})()}];let L=(()=>{class r{}return r.\u0275mod=c.Kb({type:r}),r.\u0275inj=c.Jb({factory:function(t){return new(t||r)},imports:[[o.a.forChild(M)],o.a]}),r})();e.d(t,"UsersModule",(function(){return B}));let B=(()=>{class r{}return r.\u0275mod=c.Kb({type:r}),r.\u0275inj=c.Jb({factory:function(t){return new(t||r)},imports:[[n.b,i.a,L]]}),r})()}}]);