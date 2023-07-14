import { Component } from '@angular/core';
import { LABEL } from '../label.constant';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css'],
})
export class MobileViewComponent {
  sideNav = false;
  feature = false;
  company = false;

  Label = {
    SNAP: LABEL.SNAP,
    FEATURE: LABEL.FEATURE,
    COMPANY: LABEL.COMPANY,
    CAREERS: LABEL.CAREERS,
    ABOUT: LABEL.ABOUT,
    LOGIN: LABEL.LOGIN,
    REGISTER: LABEL.REGISTER,
    TODO: LABEL.TODO,
    CALENDAR: LABEL.CALENDAR,
    REMINDERS: LABEL.REMINDERS,
    PLANNING: LABEL.PLANNING,
    HISTORY: LABEL.HISTORY,
    OUR_TEAM: LABEL.OUR_TEAM,
    BLOG: LABEL.BLOG,
    MAKE_REMOTE_WORK: LABEL.MAKE_REMOTE_WORK,
    CONTENT: LABEL.CONTENT,
    LEARN_MORE: LABEL.LEARN_MORE,
  };

  onClickMenu = () => {
    this.sideNav = !this.sideNav;
  };
  onFeatureCheck = () => {
    this.feature = !this.feature;
  };
  onCompanyCheck = () => {
    this.company = !this.company;
  };
}
