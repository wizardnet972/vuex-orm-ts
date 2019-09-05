import { Model } from '@vuex-orm/core';

export interface CategoryModel {
  _id?: string;
  name: string;
}

export class Category extends Model {
  public static entity = 'categories';

  public static primaryKey = '_id';

  public static fields() {
    return {
      _id: this.attr(null),
      name: this.attr(''),
    };
  }
}
