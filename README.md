# pet-supplies-management DB設計

## usersテーブル
|Column|Type|Options|
|:-----|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :pets
- has_many :stocks

## petsテーブル
|Column|Type|Options|
|:-----|----|-------|
|petname|string|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :stocks

## stocksテーブル
|Column|Type|Options|
|:-----|----|-------|
|productname|string|null: false|
|url|string||
|pcs|integer||
|sets_register|integer||
|sets_current|integer||
|pcs_daily|integer||
|last_purchase|datetime||
|out_stock|datetime||
|howmany_stock|datetime||
|price|integer||
|price_1day|integer||
|user_id|integer|null: false, foreign_key: true|
|pet_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :pet