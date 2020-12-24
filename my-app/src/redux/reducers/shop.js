import { SET_SHOP, SET_SHOP_ITEM} from '../actions/shop/action_types';

export default (state = {
    shop:[],
    shopItem: [
        {
          "created_date": 124,
          "updated_date": 12424,
          "id": 1,
          "name": "bánh mỳ",
          "init_price": null,
          "sale_price": null,
          "image": null,
          "title": null,
          "content": null,
          "rate_avg": null,
          "rate_one": null,
          "rate_two": null,
          "rate_three": null,
          "rate_four": null,
          "rate_five": null,
          "total_like": null,
          "store_id": 1,
          "category_id": null
        },
        {
          "created_date": 124,
          "updated_date": 12424,
          "id": 2,
          "name": "bánh mỳ",
          "init_price": null,
          "sale_price": null,
          "image": null,
          "title": null,
          "content": null,
          "rate_avg": null,
          "rate_one": null,
          "rate_two": null,
          "rate_three": null,
          "rate_four": null,
          "rate_five": null,
          "total_like": null,
          "store_id": 2,
          "category_id": null
        },
        {
          "created_date": 124,
          "updated_date": 12424,
          "id": 3,
          "name": "bánh mỳ",
          "init_price": null,
          "sale_price": null,
          "image": null,
          "title": null,
          "content": null,
          "rate_avg": null,
          "rate_one": null,
          "rate_two": null,
          "rate_three": null,
          "rate_four": null,
          "rate_five": null,
          "total_like": null,
          "store_id": 3,
          "category_id": null
        },
        {
          "created_date": 124,
          "updated_date": 12424,
          "id": 4,
          "name": "bánh mỳ",
          "init_price": null,
          "sale_price": null,
          "image": null,
          "title": null,
          "content": null,
          "rate_avg": null,
          "rate_one": null,
          "rate_two": null,
          "rate_three": null,
          "rate_four": null,
          "rate_five": null,
          "total_like": null,
          "store_id": 4,
          "category_id": null
        },
        {
          "created_date": 124,
          "updated_date": 12424,
          "id": 5,
          "name": "bánh mỳ",
          "init_price": null,
          "sale_price": null,
          "image": null,
          "title": null,
          "content": null,
          "rate_avg": null,
          "rate_one": null,
          "rate_two": null,
          "rate_three": null,
          "rate_four": null,
          "rate_five": null,
          "total_like": null,
          "store_id": 5,
          "category_id": null
        },
        {
          "created_date": 4124,
          "updated_date": 21424,
          "id": 6,
          "name": "Bánh bột lọc",
          "init_price": null,
          "sale_price": null,
          "image": null,
          "title": null,
          "content": null,
          "rate_avg": null,
          "rate_one": null,
          "rate_two": null,
          "rate_three": null,
          "rate_four": null,
          "rate_five": null,
          "total_like": null,
          "store_id": 1,
          "category_id": null
        }
      ],
}, action) => {
    switch (action.type) {
        case SET_SHOP:{
            return {
                ...state,
            };
        };
        case SET_SHOP_ITEM:{
            return{
                ...state,
            };
        };
        default:
            return {
                ...state,
            };
    }
};