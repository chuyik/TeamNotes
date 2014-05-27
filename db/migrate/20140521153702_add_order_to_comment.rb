class AddOrderToComment < ActiveRecord::Migration
  def change
    add_column :comments, :order, :number
  end
end
