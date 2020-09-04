# アプリ名
Pet Supplies Management
〜 ペット用品の在庫管理 〜


# 概要
ペット用品をいつ何個買ったか登録し、次に何をいつ注文すれば良いか、ひと目でわかるようにするアプリです。各商品の１日コストも出るため、次回購入時に、他にお得な商品がないか比較もできます。
具体的には・・
①在庫登録画面から、何個入りのいくらの商品を何個ストックし、１日何個使用するかなどを最初に登録します。
②「在庫がなくなる日」と「1日コスト」が自動計算される。
③登録内容がトップページに一覧表示されるので、いつでもアプリを開くだけで次回注文すべき日が確認できる。


# 制作背景
うさぎを飼育しておりますが、掃除用品、トイレ用品・・・等々、繰り返し使用するペット用品の種類が意外と多いものの、毎日厳密に各在庫状況をチェックし切れず、たまに切らしてしまうこともあるため、簡単に効率良く管理できるアプリを作ってみたいと思いました。


# DEMO

## トップ
https://gyazo.com/34d27107894fd897568fe7bbb72bb044

## 在庫編集
https://gyazo.com/189ef05e7ebbe1c48018abf1aace9555

## アカウント編集
https://gyazo.com/45146a1427f84ad8e467d81db4315aaf


# 実装予定の内容
自動計算機能
画像登録機能と表示箇所の追加
商品詳細と入力フォームのビューを見やすく
その他アップデート箇所の模索


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
|howmany_stock|datetime||
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user