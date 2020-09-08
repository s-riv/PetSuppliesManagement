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
<img width="1440" alt="トップ画面 スクリーンショット 2020-09-08 14 07 49" src="https://user-images.githubusercontent.com/68064826/92438524-f5af5480-f1e3-11ea-9ba5-b0cbf30fabe4.png">


## 在庫編集
https://gyazo.com/189ef05e7ebbe1c48018abf1aace9555

## アカウント編集
https://gyazo.com/45146a1427f84ad8e467d81db4315aaf


# 実装予定の内容
- 画像登録機能と画像表示箇所の追加
- 非同期の導入
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
