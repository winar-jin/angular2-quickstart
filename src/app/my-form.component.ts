import { Component } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'my-form',
    templateUrl: '../app/my-form.component.html',

})
export class MyFormComponent {
    active: boolean = true;
    favoriteFruitList: string[] = ['apple', 'pear', 'banana', 'orange', 'grey'];
    private user: User = new User('dreamapple', '2451123321@qq.com', 'Nothing is impossible!', this.favoriteFruitList[0]);
    constructor() {

    }
    public get userInfo(): string {
        return JSON.stringify(this.user);
    }
    showUser(username: any) {
        console.log(username);
    }

    addUser() {
        this.active = false;
        this.user = new User('', '', '', '');
        setTimeout(() => {
            this.active = true;
        }, 0);
    }
    submitForm() {
        alert(this.userInfo + '已经被提交!');
    }
}