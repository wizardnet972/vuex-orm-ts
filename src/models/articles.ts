import { Model } from '@vuex-orm/core';
import { Category } from './category';

export class Article extends Model {
  public static entity = 'articles';

  public static primaryKey = '_id';

  public static fields() {
    return {
      _id: this.attr(null),
      article_id: this.attr(null),
      name: this.attr(''),
      category: this.belongsTo(Category, 'category_id'),
      category_id: this.attr(''),
      text: this.attr(null),
      metadata: this.attr(null),
    };
  }
}
