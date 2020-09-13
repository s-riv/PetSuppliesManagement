# アプリ名
Pet Supplies Management
〜 ペット用品の在庫管理 〜


# 概要
ペット用品をいつ何個買ったか登録し、次に何をいつ注文すれば良いか、ひと目でわかるようにするアプリです。各商品の１日コストも出るため、次回購入時に、他にお得な商品がないか比較もできます。
### 具体的には・・
- 在庫登録画面から、何個入りのいくらの商品を何個ストックし、１日何個使用するかなどを最初に登録します。
- 「在庫がなくなる日」と「1日コスト」を自動計算させます。
- 登録内容がトップページに一覧表示されるので、いつでもアプリを開くだけで次回注文すべき日が確認できます。


# 制作背景
うさぎを飼育しておりますが、掃除用品、トイレ用品・・・等々、繰り返し使用するペット用品の種類が意外と多いものの、毎日厳密に各在庫状況をチェックし切れず、たまに切らしてしまうこともあるため、簡単に効率良く管理できるアプリを作ってみたいと思いました。


# DEMO

### トップ
<img width="1438" alt="トップ画面 スクリーンショット 2020-09-13 21 56 51" src="https://user-images.githubusercontent.com/68064826/93018669-60a9c280-f60c-11ea-964d-c9ba48b211d3.png">

### 在庫登録
![在庫登録画面収録](https://user-images.githubusercontent.com/68064826/92448914-3f07a000-f1f4-11ea-9ab9-26208c9def94.gif)

### アカウント編集
<img width="1440" alt="アカウント編集画面 スクリーンショット 2020-09-08 14 05 43" src="https://user-images.githubusercontent.com/68064826/92439090-204ddd00-f1e5-11ea-9dcd-0e8cf92210e2.png">


# 実装予定の内容
- 画像登録機能と画像表示箇所の追加
- 商品詳細と入力フォームのビューを微調整（調整箇所の模索）
- その他アップデート箇所の模索


# PetSuppliesManagement DB設計

## usersテーブル
|Column|Type|Options|
|:-----|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|

### Association
- has_many :stocks

## stocksテーブル
|Column|Type|Options|
|:-----|----|-------|
|name|string|null: false|
|url|string||
|sets_register|integer||
|sets_current|integer||
|pcs|integer||
|pcs_daily|integer||
|pcs_current|integer||
|price|integer||
|price_1day|integer||
|last_purchase|datetime||
|out_stock|datetime||
|how＿many_stock|datetime||
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
