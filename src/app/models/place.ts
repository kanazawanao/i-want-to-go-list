import { UserGroup } from './user-group';

export class Place {
  id = '';
  uId = '';
  place = '';
  prefecture = '';
  addr = '';
  went = false;
  price = 0;
  userGroup: UserGroup = new UserGroup();
  category: string[] = [];
  open?: Date;
  close?: Date;
}
