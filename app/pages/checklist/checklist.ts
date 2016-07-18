import {Component} from '@angular/core';
import {NavController, NavParams, Alert} from 'ionic-angular';
@Component({
    templateUrl: 'build/pages/checklist/checklist.html'
})
export class ChecklistPage {
    checklist: any;
    constructor(public nav: NavController, public navParams: NavParams) {
        this.checklist = this.navParams.get('checklist');
    }
    addItem(): void {
    }
    toggleItem(item): void {
    }
    removeItem(item): void {
    }
    renameItem(item): void {
    }
    uncheckItems(): void {
    }
}
