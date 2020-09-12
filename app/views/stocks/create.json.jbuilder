json.name @stock.name
json.created_at @stock.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.updated_at @stock.updated_at.strftime("%Y年%m月%d日 %H時%M分")
json.url @stock.url
json.sets_register @stock.sets_register
json.sets_current @stock.sets_current
json.pcs @stock.pcs
json.pcs_daily @stock.pcs_daily
json.pcs_current @stock.pcs_current
json.price @stock.price
json.price_1day @stock.price_1day
json.last_purchase @stock.last_purchase
json.out_stock @stock.out_stock
json.howmany_stock @stock.howmany_stock
json.user_id @stock.user_id
