import { Component } from '@angular/core';
import { LABEL } from '../label.constant';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.css'],
})
export class DesktopViewComponent {
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

  feature = false;
  company = false;

  onFeatureCheck = () => {
    this.feature = !this.feature;
  };
  onCompanyCheck = () => {
    this.company = !this.company;
  };
}
