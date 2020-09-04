class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.string :name, null: false #商品名
      t.string :url #購入サイト
      t.integer :sets_register #登録在庫数（パッケージ）
      t.integer :sets_current #現在庫数（パッケージ）
      t.integer :pcs #何個入（個数）
      t.integer :pcs_daily #1日の使用個数
      t.integer :pcs_current #現在庫個数
      t.integer :price #価格
      t.integer :price_1day #1日単価
      t.datetime :last_purchase #前回購入日
      t.datetime :out_stock #在庫がなくなる日
      t.datetime :howmany_stock #在庫あと何日
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
