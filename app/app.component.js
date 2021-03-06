"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.submitted = false;
        this.person = {
            firstName: "",
            lastName: "",
            age: 0,
            address: "",
            suburb: "",
            state: "",
            country: ""
        };
        this.personProperties = {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            address: {
                required: true,
                type: "string",
                large: true
            },
            suburb: {
                required: true
            },
            state: {
                required: true
            },
            country: {
                required: true
            }
        };
    }
    AppComponent.prototype.saveDetails = function () {
        this.submitted = true;
        var data = new FormData(this.form.nativeElement);
        console.log({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            address: {
                street: data.get('address'),
                suburb: data.get('suburb'),
                state: data.get('state'),
                country: data.get('country')
            }
        });
    };
    __decorate([
        core_1.ViewChild('form'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "form", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map