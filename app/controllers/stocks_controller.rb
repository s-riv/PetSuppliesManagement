class StocksController < ApplicationController
  
  def index
    @stocks = Stock.all.order(out_stock: :asc)
  end

  def new
    @stock = Stock.new
  end

  def create
    # binding.pry
    @stock = Stock.new(stock_params)
    if @stock.save
      respond_to do |format|
        format.html { redirect_to root_path, notice: "在庫情報を登録しました" }
        format.json
      end
    else
      @stocks = Stock.includes(:user)
      flash.now[:alert] = '在庫情報を入力してください。'
      render :new
    end
  end
    
  def destroy
    @stock = Stock.find(params[:id])
    @stock.destroy
    redirect_to root_path, notice: "在庫情報を削除しました"
  end

  def edit
    @stock = Stock.find(params[:id])
  end

  def update
    @stock = Stock.find(params[:id])
    if @stock.update(stock_params)
      redirect_to root_path, notice: "在庫情報を編集しました"
    else
      render :edit
    end
  end

  private
  def stock_params
    params.require(:stock).permit(:name, :url, :sets_register, :sets_current, :pcs, :pcs_daily, :pcs_current, :last_purchase, :out_stock, :howmany_stock, :price, :price_1day, user_ids: []).merge(user_id: current_user.id)
  end
  
end